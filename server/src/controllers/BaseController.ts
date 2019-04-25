import { Router } from 'express';
import logger from '../Logger';
import  VError from 'verror';

abstract class BaseController {
  protected router: Router;

  constructor() {
    this.router = Router();
    const that = this;
    // bind all methods to class (to avoid problems with "this")
    const self = (this as any).__proto__;
    Object.getOwnPropertyNames(self).forEach(p => {
      if (p === 'constructor') return;
      const property = self[p];
      if (typeof property === 'function')  { return that[p] = that[p].bind(that); }
      return;
    });
  }

  public abstract init(): void;

  public getRouter(): Router {
    return this.router;
  }

  protected error(err, msg = 'Internal server error'): VError {
    logger.error(err, err.stack);
    return err instanceof VError ? err : new VError(err, msg);
  }
}

export default BaseController;
