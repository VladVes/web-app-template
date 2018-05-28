import { Request } from 'express';
import { ValidationSchema } from 'express-validator';

export const signUpSchema = (req: Request): ValidationSchema => ({
  email: {
    isCustomEmail: { errorMessage: 'Invalid email format' },
    isUserNotExistsByEmail: { errorMessage: 'User with this email is already exists' },
    notEmpty: { errorMessage: 'Email is required' },
  },
  password: {
    isPassword: { errorMessage: 'Invalid password format' },
    isLength: { options: [{ min: 6 }], errorMessage: 'Min length is 6 symbols' },
    notEmpty: { errorMessage: 'Password is required' },
  },
});

export const signInSchema = (req: Request): ValidationSchema => ({
  email: {
    notEmpty: { errorMessage: 'Email is required' },
  },
  password: {
    notEmpty: { errorMessage: 'Password is required' },
  },
});
