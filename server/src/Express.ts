import * as express from 'express';
import * as bodyParser from 'body-parser';

class Express {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.initMiddlewares();
  }

  private initMiddlewares = (): void => {
    this.app.use(bodyParser.json());
  }
}

export default Express;
