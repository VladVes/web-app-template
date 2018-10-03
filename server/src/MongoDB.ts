import * as mongoose from 'mongoose';
import {Mongoose} from "mongoose";
import config from './config';

class MongoDB {
  private dbUri: string;

  constructor(uri?: string) {
    this.dbUri = uri || config.get('db.uri');
  }

  public connect(): Promise<mongoose.Mongoose> {
    return mongoose.connect(this.dbUri, {
      server: {
        auto_reconnect: true,
        reconnectTries: 5 * 60, // it will reconnect for 5 minutes
        reconnectInterval: 1000,
      },
    });
  }

  public disconnect(): Promise<void> {
    return mongoose.disconnect();
  }

  public migrate(): void {
    return; // todo: migration example
  }
}

export default MongoDB;
