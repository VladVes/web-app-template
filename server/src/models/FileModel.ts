import { Typegoose, prop } from 'typegoose';
import * as mongoose from 'mongoose';

export class File extends Typegoose {
  public _id: mongoose.Types.ObjectId;

  @prop({ required: true })
  public name: string;
}

const FileModel = new File().getModelForClass(File);

export default FileModel;
