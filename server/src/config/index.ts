import * as convict from 'convict';
import * as path from 'path';

const config = convict({
  env: {
    doc: 'Application environment',
    format: ['production', 'dev', 'qa', 'demo'],
    default: 'dev',
    env: 'NODE_ENV',
  },
  http: {
    url: {
      doc: 'Base server url',
      format: String,
      default: 'http://localhost:8080',
      env: 'APP_URL',
    },
  },
});

const env = config.get('env');
const envFile = path.resolve(__dirname, 'env', `${env}.json`);

config.loadFile(envFile);
config.validate();

export default config;
