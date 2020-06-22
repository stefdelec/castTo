import { AutoConvertoString } from './autoConvertToString';

describe('string', () => {
  class MyClassString {
        @AutoConvertoString
        shouldBeAString: any;
  }
  let theClass;
  beforeEach(() => {
    theClass = new MyClassString();
  });

  test('object should be in string', () => {
    theClass.shouldBeAString = { a: 'an object' };

    expect(typeof theClass.shouldBeAString).toBe('string');
  });
  test('string should be in string', () => {
    theClass.shouldBeAString = 'astring';

    expect(typeof theClass.shouldBeAString).toBe('string');
  });
  test('object with method should be in string', () => {
    theClass.shouldBeAString = {
      a: 'a string',
      b: () => {}
    };

    expect(typeof theClass.shouldBeAString).toBe('string');
  });
  test('number should be in string', () => {
    theClass.shouldBeAString = 22;

    expect(typeof theClass.shouldBeAString).toBe('string');
  });
});
