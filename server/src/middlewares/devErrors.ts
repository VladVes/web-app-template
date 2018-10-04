import * as VError from 'verror';
import config from '../config';

let showErrors = config.get('development');
if (process.env.NODE_ENV === 'production') {
  showErrors = false;
}

export default (error, req, res, next) => {
  if (showErrors) {
    return res.json({ error: error, stack: error.stack, msg: error.message, fullStack: VError.fullStack(error) });
  } else {
    return next(error.message);
  }
}
