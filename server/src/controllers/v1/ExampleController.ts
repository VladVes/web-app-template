import { Router, Request, Response, NextFunction } from 'express';
import { ExampleService } from '../../services';
import Logger from '../../Logger';
import passport from '../../middlewares/Passport';
import BaseController from '../BaseController';

const logger = new Logger();

class ExampleController extends BaseController {
  public init(): void {
    this.router.get('/', this.get);
    this.router.get('/sum', passport.authenticate('jwt', { session: false }), this.getSum);
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
}

export default ExampleController;
