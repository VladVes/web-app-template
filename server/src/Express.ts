import * as express from 'express';
import * as bodyParser from 'body-parser';
import requestsLogger from './requestsLogger';
import * as v1Controllers from './controllers/v1';
import versionController from './controllers/versionController';
import passport from './middlewares/passport';

class Express {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.initPreRoutesMiddlewares();
    this.initRoutes();
    this.initPostRoutesMiddlewares();
  }

  private initPreRoutesMiddlewares(): void {
    this.app.use(bodyParser.json());
    this.app.use(requestsLogger.all());
    this.app.use(passport.initialize());
    this.app.use(passport.session());
  }

  private initRoutes(): void {
    this.app.use('/api/version', versionController);
    this.app.use('/api/v1/auth', v1Controllers.authController);
    this.app.use('/api/v1/example', v1Controllers.exampleController);
  }

  private initPostRoutesMiddlewares() {
    this.app.use(requestsLogger.errors());
  }
}

export default Express;
