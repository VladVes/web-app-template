/* eslint-disable no-param-reassign */
import { SubmissionError } from 'redux-form';

const updateObjectByPath = (updatedObj, path, value) => {
  const dottedPath = path.replace(/\[/g, '.').replace(/]\./g, '.').replace(/]/g, '');
  const splittedPath = dottedPath.split('.');

  if (splittedPath[0] === 'purchaseDetails') {
    splittedPath.shift();
  }

  splittedPath.forEach((pathPart, index) => {
    if (index < splittedPath.length - 1) {
      if (pathPart in updatedObj) {
        updatedObj = updatedObj[pathPart];
      } else {
        updatedObj[pathPart] = {};
        updatedObj = updatedObj[pathPart];
      }
    }
  });

  updatedObj[splittedPath[splittedPath.length - 1]] = value;
};

export default (errors) => {
  const submissionError = {};

  Object.entries(errors).forEach(([field, { msg }]) => {
    updateObjectByPath(submissionError, field, msg);
  });

  if (Object.keys(submissionError).length > 0) {
    throw new SubmissionError(submissionError);
  }
};
