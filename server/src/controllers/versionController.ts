import { Router, Request, Response, NextFunction } from 'express';
import config from '../config';

class VersionController {
  public router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  public init(): void {
    this.router.get('/', this.get);
  }

  private get(req: Request, res: Response, next: NextFunction): Response {
    return res.json({ version: config.get('version') });
  }
}

export default new VersionController().router;
