import * as convict from 'convict';
import * as path from 'path';

function resolveDbUrl(config) {
  // dont build uri if env variable or env config presented
  if (process.env.MONGO_URI || config.get('db.uri')) return;

  const base = config.get('db.base');
  const user = config.get('db.user');
  const password = config.get('db.password');
  const url = config.get('db.url');
  const port = config.get('db.port');
  const name = config.get('db.name');
  const authSource = config.get('db.authSource');

  // mongodb://admin:p1230h6t34qd4i7ex@aspiritywebtemplate_mongodb:27017/aspiritytemplate?authSource=admin
  const newUri = `${base}${user}:${password}@${url}:${port}/${name}?authSource=${authSource}`;
  console.log('newUri', newUri);
  config.set('db.uri', newUri);
}

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
    port: {
      doc: 'Base server port',
      format: 'port',
      default: 8080,
      env: 'APP_PORT',
    },
  },
  version: {
    doc: 'Current version',
    format: String,
    default: 'v1',
    env: 'APP_VERSION',
  },
  db: {
    base: {
      default: 'mongodb://'
    },
    user: {
      default: 'admin'
    },
    password: {
      default: 'p1230h6t34qd4i7ex'
    },
    url: {
      default: 'aspiritywebtemplate_mongodb'
    },
    port: {
      default: '27017'
    },
    name: {
      default: 'aspiritytemplate'
    },
    authSource: {
      default: 'admin'
    },
    uri: {
      doc: 'Mongodb connection URI generated from other params if env not presented',
      format: String,
      default: '', // mongodb://admin:p1230h6t34qd4i7ex@aspiritywebtemplate_mongodb:27017/aspiritytemplate?authSource=admin
      env: 'MONGO_URI',
    },
  },
  jwt: {
    secret: {
      doc: 'JWT secret',
      format: String,
      default: '255G7pgj9eAAjiK',
    },
    expiresIn: {
      doc: 'Expressed in seconds or a string describing a time span zeit/ms',
      format: String || Number,
      default: '7 days',
    },
  },
  bitcoinUrl: {
    doc: 'External api url for fetching bitcoin price',
    format: String,
    default: 'https://api.coinmarketcap.com/v1/ticker/bitcoin/',
  },
  captcha: {
    url: {
      doc: 'Google url for captcha verification',
      format: String,
      default: 'https://www.google.com/recaptcha/api/siteverify',
    },
    secret: {
      doc: 'Google recaptcha secret key',
      format: String,
      default: '6LcJAXEUAAAAANCIZ2q6VfqgnDLu0NHE5IgCV7W5',
    }
  },
  staticFolder: {
    doc: 'static folder exposed to everyone',
    format: String,
    default: 'uploads',
  },
  development: {
    doc: 'Is used internally or production',
    format: Boolean,
    default: true
  }
});

const env = config.get('env');
const envFile = path.resolve(__dirname, 'env', `${env}.json`);

config.loadFile(envFile);
config.validate();

// update db.uri if necessary
resolveDbUrl(config);

export default config;
