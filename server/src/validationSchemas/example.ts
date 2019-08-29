import { Request } from 'express';
import { ValidationSchema } from 'express-validator';

export const postPersonDataSchema = (req: Request): ValidationSchema => ({
  name: {
    isNotEmpty: { errorMessage: 'Required field' },
    isLength: {
      options: [{min: 3, max: 20}],
      errorMessage: 'Length should be between 3 and 20',
    },
  },
  surname: {
    isNotEmpty: { errorMessage: 'Required field' },
    isLength: {
      errorMessage: 'Length should be between 3 and 20',
      options: [{min: 3, max: 20}],
    },
  }
});
