import { Request, Response, NextFunction } from 'types/ExpressExtended';
import * as VError from 'verror';
import * as fs from 'fs';
import * as mongoose from "mongoose";
import * as path from 'path';
import axios from 'axios';
import * as Busboy from 'busboy';
import { ExampleService } from '../../services';
import Logger from '../../Logger';
import BaseController from '../BaseController';
import config from '../../config';
import FileModel from '../../models/FileModel';
import validate from '../../middlewares/validate';
import { postPersonDataSchema } from '../../validationSchemas/example';

const logger = new Logger();

class ExampleController extends BaseController {
  public init(): void {
    this.router.get('/', this.get);
    this.router.get('/sum', this.getSum);
    this.router.get('/bitcoin', this.getBitcoinPrice);
    this.router.post('/files', this.setFiles);
    this.router.get('/files', this.getFileList);
    this.router.post('/personData', validate(postPersonDataSchema), this.postPersonData);
    this.router.get('/error', this.genError)
  }

  public get(req: Request, res: Response, next: NextFunction): Response {
    logger.info('exampleController index route entered');

    return res.responses.json({ result: 'exampleController' });
  }

  public getSum(req: Request, res: Response, next: NextFunction): Response {
    logger.info('exampleController /sum route entered');

    const first = 3;
    const second = 5;

    const sum = ExampleService.add(first, second);
    return res.responses.json({ sum });
  }

  public async getBitcoinPrice(req: Request, res: Response, next: NextFunction): Promise<Response|void> {
    const bitcoinUrl = config.get('bitcoinUrl');

    try {
      const response = await axios.get(bitcoinUrl);

      return res.responses.json({ price: response.data[0].price_usd });
    } catch (err) {
      return next(err instanceof Error ? err : new VError(err));
    }
  }

  public async setFiles(req: Request, res: Response, next: NextFunction): Promise<Response|void> {
    const busboy = new Busboy({ headers: req.headers });

    let counter = 0;// use counter cause finish event fires when all files are catched, NOT stored to disk

    const keep = [];

    busboy.on('file', async(fieldname, file, filename, encoding, mimetype) => {
      const allowedMimetypes = ['image/gif', 'image/jpeg', 'image/png'];

      if (!allowedMimetypes.includes(mimetype)) {
        return res.status(422).send('Invalid image format');
      }

      counter ++;

      const fileId = await this.uploadFile(file, filename);
      console.log('fieldId', fileId);
      keep.push(fileId);

      counter--;
      if (!counter) {
        console.log('keep', keep);
        const files = await this.getFiles(keep);
        return res.responses.json(files);
      }
    });

    busboy.on('field', (fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) =>
      keep.push(val),
    );

    busboy.on('finish', async () => {
      // when no files are send
      if (!counter) {
        const files = await this.getFiles(keep);
        return res.responses.json(files);
      }
    });

    req.pipe(busboy);
  }

  private async getFiles(ids: string[] = null): Promise<Response|void> {
    if (ids && ids.length > 0) {
      return await FileModel.find({_id: {$in: ids.map(id => mongoose.Types.ObjectId(id))}}).lean();
  } else {
      return await FileModel.find().lean();
    }

  }

  public async getFileList(req, res, next) : Promise<Response> {
    const files = await this.getFiles();

    return res.responses.json(files);
  }

  public async postPersonData(req, res, next) : Promise<Response> {
    return res.responses.json(req.body);
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

  public genError(req: Request, res: Response, next: NextFunction): Response | void {
    const emptyObject = null;
    try {
      emptyObject.unexistingFunction(emptyObject.unexistingField);
      return res.responses.serverError('Error not thrown');
    } catch (err) {
      return next(err instanceof Error ? err : new VError(err));
    }
  }
}

export default ExampleController;
