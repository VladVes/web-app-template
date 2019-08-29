/* eslint-disable */
export const getElementByName = (o, s) => {
  s = s.replace(/\[(\w+)\]/g, '.$1');
  s = s.replace(/^\./, '');
  const a = s.split('.');
  for (let i = 0, n = a.length; i < n; ++i) {
    const k = a[i];
    if (k in o) {
      o = o[k];
    } else {
      return;
    }
  }
  return o;
};

export const setValueByPath = (obj, path, value) => {
  // protect against being something unexpected
  obj = typeof obj === 'object' ? obj : {};
  // split the path into and array if its not one already
  const keys = Array.isArray(path) ? path : path.split('.');
  // keep up with our current place in the object
  // starting at the root object and drilling down
  let curStep = obj;
  // loop over the path parts one at a time
  // but, dont iterate the last part,
  for (let i = 0; i < keys.length - 1; i++) {
    // get the current path part
    const key = keys[i];

    // if nothing exists for this key, make it an empty object or array
    if (!curStep[key] && !Object.prototype.hasOwnProperty.call(curStep, key)){
      // get the next key in the path, if its numeric, make this property an empty array
      // otherwise, make it an empty object
      const nextKey = keys[i+1];
      const useArray = /^\+?(0|[1-9]\d*)$/.test(nextKey);
      curStep[key] = useArray ? [] : {};
    }
    // update curStep to point to the new level
    curStep = curStep[key];
  }
  // set the final key to our value
  const finalStep = keys[keys.length - 1];
  curStep[finalStep] = value;
};

/* eslint-enable */

export const deepClone = obj => JSON.parse(JSON.stringify(obj));
