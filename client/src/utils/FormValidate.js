export function validateRequired(value) {
  if (!value) {
    return 'Required field';
  }
  return null;
}

export function validateEmail(value) {
  if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(value)) {
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
  return validateLength(value, 8, 16);
}
