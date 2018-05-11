import * as express from 'express';
import * as bodyParser from 'body-parser';
import versionController from './controllers/versionController';
import * as v1Controllers from './controllers/v1';

class Express {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.initMiddlewares();
    this.initControllers();
  }

  private initMiddlewares(): void {
    this.app.use(bodyParser.json());
  }

  private initControllers(): void {
    this.app.use('/api/version', versionController);
    this.app.use('/api/v1/example', v1Controllers.exampleController);
  }
}

export default Express;
