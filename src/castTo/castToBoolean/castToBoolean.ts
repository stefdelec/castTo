export function CastBoolean (target, property, descriptor?):any {
  return {
    set: function (value) {
      const isTrue = value.toString() === 'true';
      const isFalse = value.toString() === 'false';

      if (isTrue) {
        this['__' + property] = true;
      } else if (isFalse) {
        this['__' + property] = false;
      } else {
        throw new Error('cannot not set value as boolean');
      }
    },
    get: function () {
      return this['__' + property];
    },
    enumerable: true,
    configurable: true
  };
}
