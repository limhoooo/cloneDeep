import {
  isObject,
  isArray,
  isDate,
  isMap,
  isRegExp,
  isSet,
  isTypedArray,
} from "../isTypeCheck.js";

describe("isObject() Test", () => {
  it("object Test", () => {
    const obj = { a: 1, b: 2 };
    expect(isObject(obj)).toBeTruthy();
  });
  it("Array Test", () => {
    const arr = [];
    expect(isObject(arr)).toBeTruthy();
  });
  it("Map Test", () => {
    const map = new Map();
    expect(isObject(map)).toBeTruthy();
  });
  it("Set Test", () => {
    const set = new Set();
    expect(isObject(set)).toBeTruthy();
  });
  it("Date Test", () => {
    const date = new Date();
    expect(isObject(date)).toBeTruthy();
  });
  it("RegExp Test", () => {
    const regexp = new RegExp();
    expect(isObject(regexp)).toBeTruthy();
  });
  describe("non object Test", () => {
    it("Function Test", () => {
      const func = new Function();
      expect(isObject(func)).toBeFalsy();
    });
    it("primitive Type Test", () => {
      expect(isObject("test")).toBeFalsy();
      expect(isObject(1)).toBeFalsy();
      expect(isObject(true)).toBeFalsy();
      expect(isObject(null)).toBeFalsy();
      expect(isObject(undefined)).toBeFalsy();
    });
  });
});

describe("isArray() Test", () => {
  it("Array Test", () => {
    const arr1 = [];
    const arr2 = new Array();

    expect(isArray(arr1)).toBeTruthy();
    expect(isArray(arr2)).toBeTruthy();
  });
  describe("non Array Test", () => {
    it("object Test", () => {
      const obj = { a: 1, b: 2 };
      expect(isArray(obj)).toBeFalsy();
    });
    it("Function Test", () => {
      const func = new Function();
      expect(isArray(func)).toBeFalsy();
    });
    it("Map Test", () => {
      const map = new Map();
      expect(isArray(map)).toBeFalsy();
    });
    it("Set Test", () => {
      const set = new Set();
      expect(isArray(set)).toBeFalsy();
    });
    it("Date Test", () => {
      const date = new Date();
      expect(isArray(date)).toBeFalsy();
    });
    it("RegExp Test", () => {
      const regexp = new RegExp();
      expect(isArray(regexp)).toBeFalsy();
    });
    it("TypedArray Test", () => {
      const arr1 = new Int8Array();
      const arr2 = new Uint8Array();
      expect(isArray(arr1)).toBeFalsy();
      expect(isArray(arr2)).toBeFalsy();
    });
  });
});

describe("isMap() Test", () => {
  it("Map Test", () => {
    const map = new Map();
    expect(isMap(map)).toBeTruthy();
  });
  describe("non Map Test", () => {
    it("object Test", () => {
      const obj = { a: 1, b: 2 };
      expect(isMap(obj)).toBeFalsy();
    });
    it("Function Test", () => {
      const func = new Function();
      expect(isMap(func)).toBeFalsy();
    });
    it("Array Test", () => {
      const arr = [];
      expect(isMap(arr)).toBeFalsy();
    });
    it("Set Test", () => {
      const set = new Set();
      expect(isMap(set)).toBeFalsy();
    });
    it("Date Test", () => {
      const date = new Date();
      expect(isMap(date)).toBeFalsy();
    });
    it("RegExp Test", () => {
      const regexp = new RegExp();
      expect(isMap(regexp)).toBeFalsy();
    });
    it("TypedArray Test", () => {
      const arr1 = new Int8Array();
      const arr2 = new Uint8Array();
      expect(isMap(arr1)).toBeFalsy();
      expect(isMap(arr2)).toBeFalsy();
    });
  });
});
describe("isSet() Test", () => {
  it("Set Test", () => {
    const set = new Set();
    expect(isSet(set)).toBeTruthy();
  });
  describe("non Set Test", () => {
    it("object Test", () => {
      const obj = { a: 1, b: 2 };
      expect(isSet(obj)).toBeFalsy();
    });
    it("Function Test", () => {
      const func = new Function();
      expect(isSet(func)).toBeFalsy();
    });
    it("Array Test", () => {
      const arr = [];
      expect(isSet(arr)).toBeFalsy();
    });
    it("Map Test", () => {
      const map = new Map();
      expect(isSet(map)).toBeFalsy();
    });
    it("Date Test", () => {
      const date = new Date();
      expect(isSet(date)).toBeFalsy();
    });
    it("RegExp Test", () => {
      const regexp = new RegExp();
      expect(isSet(regexp)).toBeFalsy();
    });
    it("TypedArray Test", () => {
      const arr1 = new Int8Array();
      const arr2 = new Uint8Array();
      expect(isSet(arr1)).toBeFalsy();
      expect(isSet(arr2)).toBeFalsy();
    });
  });
});
describe("isDate() Test", () => {
  it("Date Test", () => {
    const date = new Date();
    expect(isDate(date)).toBeTruthy();
  });
  describe("non Date Test", () => {
    it("object Test", () => {
      const obj = { a: 1, b: 2 };
      expect(isDate(obj)).toBeFalsy();
    });
    it("Function Test", () => {
      const func = new Function();
      expect(isDate(func)).toBeFalsy();
    });
    it("Array Test", () => {
      const arr = [];
      expect(isDate(arr)).toBeFalsy();
    });
    it("Map Test", () => {
      const map = new Map();
      expect(isDate(map)).toBeFalsy();
    });
    it("Set Test", () => {
      const set = new Set();
      expect(isDate(set)).toBeFalsy();
    });
    it("RegExp Test", () => {
      const regexp = new RegExp();
      expect(isDate(regexp)).toBeFalsy();
    });
    it("TypedArray Test", () => {
      const arr1 = new Int8Array();
      const arr2 = new Uint8Array();
      expect(isDate(arr1)).toBeFalsy();
      expect(isDate(arr2)).toBeFalsy();
    });
  });
});
describe("isRegExp() Test", () => {
  it("RegExp Test", () => {
    const regExp = new RegExp();
    expect(isRegExp(regExp)).toBeTruthy();
  });
  describe("non Date Test", () => {
    it("object Test", () => {
      const obj = { a: 1, b: 2 };
      expect(isRegExp(obj)).toBeFalsy();
    });
    it("Function Test", () => {
      const func = new Function();
      expect(isRegExp(func)).toBeFalsy();
    });
    it("Array Test", () => {
      const arr = [];
      expect(isRegExp(arr)).toBeFalsy();
    });
    it("Map Test", () => {
      const map = new Map();
      expect(isRegExp(map)).toBeFalsy();
    });
    it("Set Test", () => {
      const set = new Set();
      expect(isRegExp(set)).toBeFalsy();
    });
    it("Date Test", () => {
      const date = new Date();
      expect(isRegExp(date)).toBeFalsy();
    });
    it("TypedArray Test", () => {
      const arr1 = new Int8Array();
      const arr2 = new Uint8Array();
      expect(isRegExp(arr1)).toBeFalsy();
      expect(isRegExp(arr2)).toBeFalsy();
    });
  });
});

describe("isTypedArray() Test", () => {
  it("int8Array Test", () => {
    const int8Array = new Int8Array();
    expect(isTypedArray(int8Array)).toBeTruthy();
  });
  it("int16Array Test", () => {
    const int16Array = new Int16Array();
    expect(isTypedArray(int16Array)).toBeTruthy();
  });
  it("int32Array Test", () => {
    const int32Array = new Int32Array();
    expect(isTypedArray(int32Array)).toBeTruthy();
  });
  it("uint8Array Test", () => {
    const uint8Array = new Uint8Array();
    expect(isTypedArray(uint8Array)).toBeTruthy();
  });
  it("uint16Array Test", () => {
    const uint16Array = new Uint16Array();
    expect(isTypedArray(uint16Array)).toBeTruthy();
  });
  it("uint32Array Test", () => {
    const uint32Array = new Uint32Array();
    expect(isTypedArray(uint32Array)).toBeTruthy();
  });
  it("float32Array Test", () => {
    const float32Array = new Float32Array();
    expect(isTypedArray(float32Array)).toBeTruthy();
  });
  it("float64Array Test", () => {
    const float64Array = new Float64Array();
    expect(isTypedArray(float64Array)).toBeTruthy();
  });
  it("bigInt64Array Test", () => {
    const bigInt64Array = new BigInt64Array();
    expect(isTypedArray(bigInt64Array)).toBeTruthy();
  });
  it("bigUint64Array Test", () => {
    const bigUint64Array = new BigUint64Array();
    expect(isTypedArray(bigUint64Array)).toBeTruthy();
  });
  describe("non TypedArray Test", () => {
    it("object Test", () => {
      const obj = { a: 1, b: 2 };
      expect(isTypedArray(obj)).toBeFalsy();
    });
    it("Function Test", () => {
      const func = new Function();
      expect(isTypedArray(func)).toBeFalsy();
    });
    it("Array Test", () => {
      const arr = [];
      expect(isTypedArray(arr)).toBeFalsy();
    });
    it("Map Test", () => {
      const map = new Map();
      expect(isTypedArray(map)).toBeFalsy();
    });
    it("Set Test", () => {
      const set = new Set();
      expect(isTypedArray(set)).toBeFalsy();
    });
    it("Date Test", () => {
      const date = new Date();
      expect(isTypedArray(date)).toBeFalsy();
    });
    it("RegExp Test", () => {
      const regexp = new RegExp();
      expect(isTypedArray(regexp)).toBeFalsy();
    });
  });
});
