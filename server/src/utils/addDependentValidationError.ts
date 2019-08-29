export default function (errors) {
  const newErrors = {} as any;

  Object.keys(errors).forEach((errorProp) => {
    const errorMessage = errors[errorProp].msg;

    if (typeof errorMessage === 'object') {
      Object.keys(errorMessage).forEach((msgProp) => {
        const path = errorProp + '.' + msgProp;
        newErrors[path] = { msg: errorMessage[msgProp], param: path };
      });
    } else {
      newErrors[errorProp] = errors[errorProp];
    }
  });

  return newErrors;
}
