export function AutoConvertToInteger (target, property, descriptor?:TypedPropertyDescriptor<any>):any {
  return {
    set: function (value) {
      if (isNaN(value)) {
        throw new Error('cannot set value as integer');
      } else {
        this['__' + property] = parseInt(value, 10);
      }
    },
    get: function () {
      return this['__' + property];
    },
    enumerable: true,
    configurable: true
  };
}
