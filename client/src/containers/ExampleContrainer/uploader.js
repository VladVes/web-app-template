import FineUploaderTraditional from 'fine-uploader-wrappers';

const uploader = new FineUploaderTraditional({
  options: {
    request: {
      endpoint: '/api/v1/example/file',
    },
    autoUpload: false,
    multiple: false,
    chunking: {
      enabled: true,
      partSize: 1024 * 10,
    },
    validation: {
      allowedExtensions: ['jpeg', 'jpg', 'gif', 'png', 'tif', 'bmp'],
    },
  },
});

export default uploader;
