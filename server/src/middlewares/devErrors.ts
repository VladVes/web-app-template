export default (error, req, res, next) => next(process.env.NODE_ENV === 'dev' ? error : error.message);
