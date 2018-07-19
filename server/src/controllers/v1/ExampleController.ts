import { Router, Request, Response, NextFunction } from 'express';
import * as VError from 'verror';
import * as fs from 'fs';
import * as path from 'path';
import axios from 'axios';
import * as Busboy from 'busboy';
import { ExampleService } from '../../services';
import Logger from '../../Logger';
import BaseController from '../BaseController';
import config from '../../config';
import FileModel from '../../models/FileModel';

const logger = new Logger();

class ExampleController extends BaseController {
  public init(): void {
    this.router.get('/', this.get);
    this.router.get('/sum', this.getSum);
    this.router.get('/bitcoin', this.getBitcoinPrice);
    this.router.post('/files', this.setFiles.bind(this));
    this.router.get('/files', this.getFiles);
  }

  public get(req: Request, res: Response, next: NextFunction): Response {
    logger.info('exampleController index route entered');

    return res.json({ result: 'exampleController' });
  }

  public getSum(req: Request, res: Response, next: NextFunction): Response {
    logger.info('exampleController /sum route entered');

    const first = 3;
    const second = 5;

    const sum = ExampleService.add(first, second);
    return res.json({ sum });
  }

  public async getBitcoinPrice(req: Request, res: Response, next: NextFunction): Promise<Response|void> {
    const bitcoinUrl = config.get('bitcoinUrl');

    try {
      const response = await axios.get(bitcoinUrl);

      return res.json({ price: response.data[0].price_usd });
    } catch (err) {
      return next(err instanceof Error ? err : new VError(err));
    }
  }

  public async getFiles(req: Request, res: Response, next: NextFunction): Promise<Response|void> {
    const files = await FileModel.find();
    res.send(files.map(({ _id: id, name }) => ({ id, name })));
  }

  public async setFiles(req: Request, res: Response, next: NextFunction): Promise<Response|void> {
    const busboy = new Busboy({ headers: req.headers });

    let counter = 0;// use counter cause finish event fires when all files are catched, NOT stored to disk

    const keep = [];

    busboy.on('file', async(fieldname, file, filename) => {
      counter ++;

      const fileId = await this.uploadFile(file, filename);
      keep.push(fileId);

      counter--;
      if (!counter) {
        this.filterFiles(keep);
        this.getFiles(req, res, next);
      }
    });

    busboy.on('field', (fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) =>
      keep.push(val)
    );

    busboy.on('finish', () => {
      // when no files are send
      if (!counter) {
        this.filterFiles(keep);
        this.getFiles(req, res, next);
      }
    });

    req.pipe(busboy);
  }

  async filterFiles(keep) {
    //remove from db
    const removeResult = await FileModel.remove({ _id: {$nin: keep}});
    //TODO: remove from uploads
  }

  private uploadFile(file, filename) {
    const folder = config.get('staticFolder');
    return new Promise(async resolve => {

      const dbFile = await FileModel.create({ name: filename });
      const fileId = dbFile._id;

      const savePath = path.resolve(__dirname + `/../../${folder}/${fileId}`);
      const fstream = fs.createWriteStream(savePath);
      file.pipe(fstream);
      fstream.on('close', () => resolve(fileId));
    })
  }
}

export default ExampleController;
