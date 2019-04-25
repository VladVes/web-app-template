import * as VError from 'verror';
import config from '../config';
import { Response } from '../types/ExpressExtended'

let showErrors = config.get('development');
if (process.env.NODE_ENV === 'production') {
  showErrors = false;
}

export default (error, req, res: Response, next) => {
  const message = error.jse_shortmsg;
  if (showErrors) {
    try {
      return res.responses.serverError(
        message,
        {
          error,
          msg: error.message,
          stack: error.stack,
          fullStack: VError.fullStack(error),
        });
    } catch (err) {
      return res.responses.serverError(
        message,
        {
          msg: error.message,
          stack: error.stack,
        });
    }
  }
  return res.responses.serverError(message);
};

