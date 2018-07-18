export function validateRequired(value) {
  if (!value) {
    return 'Required field';
  }
  return null;
}

export function validateEmail(value) {
  if (!(/^[-a-zA-Z0-9!#$%&'*+\/=?^_`{|}~\-\.]+@[a-z0-9.\-]+$/).test(value)) {
    return 'Wrong email format';
  }
  return null;
}

export function validateLength(value = '', min, max) {
  if (min !== null && value.length < min) {
    return `Min ${min} symbols`;
  }
  if (min !== null && value.length > max) {
    return `Max ${max} symbols`;
  }
  return null;
}


export function validatePassword(value) {
  const lengthError = validateLength(value, 6);
  if (lengthError) return lengthError;

  if (!(/(?=.*[0-9])(?=.*[а-яёa-z])(?=.*[A-ZА-ЯЁ])[0-9a-zA-Z.,';\]\[{}:"<>?!@#$%^&*()_\-+=|\/№А-Яа-яЁё]{6,}/).test(value)) {
    return 'Password should include at least one upper/lowercase letter and at least one number';
  }
  return null;
}
