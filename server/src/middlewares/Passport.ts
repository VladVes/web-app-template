import { Request } from 'express';
import * as mongoose from 'mongoose';
import { Passport } from 'passport';
import * as passportLocal from 'passport-local';
import * as passportJWT from 'passport-jwt';
import * as bcrypt from 'bcryptjs-then';
import config from '../config';
import UserModel, { User } from '../models/UserModel';

class JWTAuth extends Passport {
  constructor() {
    super();
    this.initPassport();
  }

  private initPassport(): void {
    this.serializeUser((user: User, done: (err: any, id: mongoose.Types.ObjectId) => void): void => {
      return done(null, user._id);
    });

    this.deserializeUser(async (id: mongoose.Types.ObjectId, done: (err: any, user?: User) => void): Promise<void> => {
      const user = await UserModel.findOne({ _id: id }, { password: false });
      if (!user || !user._id) {
        return done('not found');
      }
      return done(null, user);
    });

    this.use(new passportLocal.Strategy({
        usernameField: 'email',
        passwordField: 'password',
      },
      async (
        email: string,
        password: string,
        done: (err: any, user?: User, options?: { message: string }) => void,
      ): Promise<void> => {
        const user = await UserModel.findOne({ email }).lean();

        if (!user) {
          return done(null, null);
        }

        const passwordCompareResult = await bcrypt.compare(password, user.password);

        if (!passwordCompareResult) {
          return done(null, null);
        }

        delete user.password;

        return done(null, user);
      },
    ));

    const jwtStrategyOpts: passportJWT.StrategyOptions = {
      jwtFromRequest: null,
      secretOrKey: null,
    };

    jwtStrategyOpts.jwtFromRequest = (req: Request): string => {
      let token = null;

      if (req && req.cookies && req.cookies.jwt) {
        token = req.cookies.jwt;
      }

      if ((typeof token === 'undefined' || token === null) && req && req.headers && req.headers.authorization) {
        token = req.headers.authorization;
      }

      return token;
    };
    jwtStrategyOpts.secretOrKey = config.get('jwt.secret');

    this.use(new passportJWT.Strategy(
      jwtStrategyOpts,
      async (
        jwtPayload: any,
        done: (err: any, user?: User, options?: { message: string }) => void,
      ) => {
        const user = await UserModel.findOne({ _id: jwtPayload.userId }).lean();

        if (!user) {
          return done(null, null);
        }

        return done(null, user);
      },
    ));
  }
}

export default JWTAuth;
