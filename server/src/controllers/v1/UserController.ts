import { Request, Response, NextFunction } from 'express';
import Passport from '../../middlewares/Passport';
import BaseController from '../BaseController';

const passport = new Passport();

class UserController extends BaseController {
  public init(): void {
    this.router.get('/current', passport.authenticate('jwt', { session: false }), this.getCurrent);
  }

  public getCurrent(req: Request, res: Response, next: NextFunction): Response {
    const { user } = req;

    return res.json(user);
  }
}

export default UserController;
