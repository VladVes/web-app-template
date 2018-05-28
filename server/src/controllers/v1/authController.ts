import { Router, Request, Response, NextFunction } from 'express';
import * as bcrypt from 'bcryptjs-then';
import * as VError from 'verror';
import passport from '../../middlewares/passport';
import UserModel, { User } from '../../models/UserModel';
import { authService } from '../../services';
import validate from '../../middlewares/validate';
import { signUpSchema, signInSchema } from '../../validationSchemas/auth';

class AuthController {
  public router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  private init(): void {
    this.router.post('/signin', validate(signInSchema), this.signIn);
    this.router.post('/signup', validate(signUpSchema), this.signUp);
  }

  private async signIn(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      return passport.authenticate('local', {}, (err: Error, user: User, info: any): Response | void => {
        if (err) {
          return next(new VError(err, 'Auth error'));
        }

        if (!user) {
          return res.status(401).send(info.message);
        }

        const token = authService.generateToken(user);

        req.logIn(user, (loginErr: Error) => {
          if (loginErr) {
            return next(new VError(err, 'Auth error'));
          }

          res.cookie('jwt', token, { httpOnly: true });

          return res.json({ message: 'Success', id: user._id, token });
        });
      })(req, res, next);
    } catch (err) {
      return next(err instanceof Error ? err : new VError(err));
    }
  }

  private async signUp(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const user = req.body;
      const userDoc = {
        email: user.email,
        password: await bcrypt.hash(user.password),
      };

      await UserModel.create(userDoc);

      return res.status(201).send('Registration completed');
    } catch (err) {
      return next(err instanceof Error ? err : new VError(err));
    }
  }
}

export default new AuthController().router;
