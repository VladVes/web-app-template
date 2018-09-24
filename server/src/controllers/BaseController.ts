import { Router } from 'express';

abstract class BaseController {
  protected router: Router;

  protected constructor() {
    this.router = Router();
    const that = this;
    // bind all methods to class (to avoid problems with "this")
    const self = (this as any).__proto__;
    Object.getOwnPropertyNames(self).forEach(p => {
      if (p === 'constructor') return;
      const property = self[p];
      if (typeof property === 'function')  { return that[p] = that[p].bind(that) }
      return;
    })
  }

  public abstract init(): void;

  public getRouter(): Router {
    return this.router;
  }
}

export default BaseController;
