import { Router, Request, Response, NextFunction } from 'express';
import { exampleService } from '../../services';
import logger from '../../logger';
import passport from '../../middlewares/passport';

class ExampleController {
  public router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  private init(): void {
    this.router.get('/', this.get);
    this.router.get('/sum', passport.authenticate('jwt', { session: false }), this.getSum);
  }

  private get(req: Request, res: Response, next: NextFunction): Response {
    logger.info('exampleController index route entered');

    return res.json({ result: 'exampleController' });
  }

  private getSum(req: Request, res: Response, next: NextFunction): Response {
    logger.info('exampleController /sum route entered');

    const first = 3;
    const second = 5;

    const sum = exampleService.add(3, 5);
    return res.json({ sum });
  }
}

export default new ExampleController().router;
