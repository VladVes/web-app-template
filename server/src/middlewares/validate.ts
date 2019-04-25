import { Handler } from 'express';
import { ValidationSchema } from 'express-validator';
import { Request, Response, NextFunction } from '../types/ExpressExtended';
import addDependentValidationError from '../utils/addDependentValidationError';
import  VError from 'verror';

export default (
  schemaFactory: (req: Request) => ValidationSchema,
): Handler => async (req: Request, res: Response, next: NextFunction) => {
  let schemaOriginal;
  try {
    schemaOriginal = schemaFactory(req);
  } catch (e) {
    next(new VError(e, 'Can not validate'));
  }
  const schema = {} as any;
  for(let prop in schemaOriginal) {
    const value = schemaOriginal[prop] as any;
    // skip validation rules where "validate" is false
    if (typeof value.validate === 'undefined' || value.validate) {
      schema[prop] = value;
    }
  }
  const paramsBackup = { ...req.params };

  req.params = { ...req.body, ...req.query, ...req.params };
  req.checkParams(schema);

  try {
    await req.asyncValidationErrors(true);

    req.params = paramsBackup;

    return next();
  } catch (err) {
    if (err instanceof Error) return next(err);
    delete err.isOperational;
    const updatedErr = addDependentValidationError(err);
    return res.responses.validationError('Validation error', { errors: updatedErr });
  }
};
