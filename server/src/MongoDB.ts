import { Application } from 'express';
import * as mongoose from 'mongoose';
import config from './config';

class MongoDB {
  private dbUri: string;

  constructor(uri?: string) {
    this.dbUri = uri || config.get('db.uri');
  }

  public connect(app: Application): void {
    mongoose.connect(this.dbUri);
  }
}

export default MongoDB;
