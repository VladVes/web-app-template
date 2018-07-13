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

const logger = new Logger();

class ExampleController extends BaseController {
  public init(): void {
    this.router.get('/', this.get);
    this.router.get('/sum', this.getSum);
    this.router.get('/bitcoin', this.getBitcoinPrice);
    this.router.post('/file', this.uploadFile);
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

  public async uploadFile(req: Request, res: Response, next: NextFunction): Promise<Response|void> {
    const busboy = new Busboy({ headers: req.headers });
    const folder = config.get('staticFolder');
    // eslint-disable-next-line no-consoles
    let counter = 0;// use counter cause finish event fires when all files are catched, NOT stored to disk

    busboy.on('file', (fieldname, file, filename) => {
      counter ++;
      const fstream = fs.createWriteStream(path.resolve(__dirname, `../../${folder}/${filename}`));
      file.pipe(fstream);
      fstream.on('close', () => {
        if (!counter--) res.json({success: 'ok'})
      });
    });
    req.pipe(busboy);
  }
}

export default ExampleController;
