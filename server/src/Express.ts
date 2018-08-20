import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from "path";
import RequestsLogger from './RequestsLogger';
import passport from './middlewares/Passport';
import customValidators from './middlewares/customValidators';
import devErrors from './middlewares/devErrors';
import MainController from './controllers/MainController';
import config from './config';

const requestsLogger = new RequestsLogger();

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
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(requestsLogger.all());
    this.app.use(customValidators());
    this.app.use(passport.initialize());
    this.app.use(passport.session());
  }

  private initRoutes(): void {
    const mainController = new MainController();
    mainController.init();
    this.app.use('/api', mainController.getRouter());
    const folder = config.get('staticFolder');
    this.app.use(`/${folder}`, express.static(path.resolve(__dirname, folder)));
  }

  private initPostRoutesMiddlewares() {
    this.app.use(requestsLogger.errors());
    this.app.use(devErrors);
  }
}

export default Express;
