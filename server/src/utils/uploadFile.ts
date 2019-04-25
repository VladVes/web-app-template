import * as path from 'path';
import * as fs from 'fs-promise';
import * as Stream from 'stream';
import FileModel from '../models/FileModel';
import config from '../config';

interface UploadFileOptions {
  subDir?: string;
  ext?: string;
  createSubDir?: boolean;
}

export default function uploadFile(fileStream: Stream, fileName, options?: UploadFileOptions) {
  const subDir = options && options.subDir ? options.subDir : '';
  const ext = options && options.ext ? options.ext : '';
  const createSubDir = options ? options.createSubDir : false;

  const folder = config.get('staticFolder');
  return new Promise(async (resolve, reject) => {

    const dbFile = await FileModel.create({ name: fileName });
    const fileId = dbFile._id;
    const dir = path.resolve(__dirname + `/../${folder}${subDir}`);
    if (subDir && createSubDir && !fs.existsSync(dir)) {
      await fs.mkdir(dir);
    }

    const savePath = path.resolve(`${dir}/${fileId}${ext}`);
    const fstream = fs.createWriteStream(savePath);
    fstream.on('error', err => reject(err));
    fileStream.pipe(fstream);
    fstream.on('close', () => resolve(fileId));
  });
}
