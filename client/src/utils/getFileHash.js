import MD5 from 'md5.js';

const getFileHash = (file) => {
  let salt = file;
  if (file instanceof File) {
    salt = file.name + file.size + file.lastModified;
  }
  return new MD5().update(salt).digest('hex');
};

export default getFileHash;
