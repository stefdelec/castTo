import { CastInteger } from './castToInteger';

describe('INTEGER', () => {
  test('number should return number', () => {
    class MyClassInteger {
            @CastInteger
            shouldBeANInteger: any;
    }

    const d = new MyClassInteger();
    d.shouldBeANInteger = 11;

    expect(typeof d.shouldBeANInteger).toBe('number');
  });
  test('string should return number', () => {
    class MyClassInteger {
            @CastInteger
            shouldBeANInteger: any;
    }

    const d = new MyClassInteger();
    d.shouldBeANInteger = '11';

    expect(typeof d.shouldBeANInteger).toBe('number');
  });
  test('unknow type should throw error', () => {
    class MyClassInteger {
            @CastInteger
            shouldBeANInteger: any;
    }

    const d = new MyClassInteger();
    let isError = false;
    try {
      d.shouldBeANInteger = {};
    } catch (e) {
      isError = true;
    }

    expect(isError).toBeTruthy();
  });
});
