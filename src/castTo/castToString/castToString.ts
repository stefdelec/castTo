function transformToString (value) {
  if (typeof value === 'object') {
    return JSON.stringify(value);
  } else {
    return value.toString();
  }
}

export function CastString (target, property, descriptor?):any {
  return {
    set: function (value) {
      this['__' + property] = transformToString(value);
    },
    get: function () {
      return this['__' + property];
    },
    enumerable: true,
    configurable: true
  };
}
