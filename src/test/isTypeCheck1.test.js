import {
  isObject,
  isArray,
  isDate,
  isMap,
  isRegExp,
  isSet,
  isTypedArray,
  isTypeInstanceofCheck,
} from "../isTypeCheck.js";

const primitiveType = [String, Number, Boolean, Symbol(), null, undefined];
const referenceType = [
  { type: "Array", type: Array, value: new Array() },
  { type: "Function", type: Function, value: new Function() },
  { type: "Map", type: Map, value: new Map() },
  { type: "Set", type: Set, value: new Set() },
  { type: "Date", type: Date, value: new Date() },
  { type: "RegExp", type: RegExp, value: new RegExp() },
];
const typedArray = [
  { type: "Int8Array", type: Int8Array, value: new Int8Array() },
  { type: "Uint8Array", type: Uint8Array, value: new Uint8Array() },
  { type: "Int16Array", type: Int16Array, value: new Int16Array() },
  { type: "Uint16Array", type: Uint16Array, value: new Uint16Array() },
  { type: "Int32Array", type: Int32Array, value: new Int32Array() },
  { type: "Uint32Array", type: Uint32Array, value: new Uint32Array() },
  { type: "Float32Array", type: Float32Array, value: new Float32Array() },
  { type: "Float64Array", type: Float64Array, value: new Float64Array() },
  { type: "BigInt64Array", type: BigInt64Array, value: new BigInt64Array() },
  { type: "BigUint64Array", type: BigUint64Array, value: new BigUint64Array() },
];
describe("isObject() Test", () => {
  it("object Test", () => {
    const obj = { a: 1, b: 2 };
    expect(isObject(obj)).toBeTruthy();
  });
  it("referenceType Test", () => {
    for (const reference of referenceType) {
      if (reference.type !== Function)
        expect(isObject(reference.value)).toBeTruthy();
    }
  });
  it("TypedArray Test", () => {
    for (const array of typedArray) {
      expect(isObject(array.value)).toBeTruthy();
    }
  });
  describe("non object Test", () => {
    it("primitive Test", () => {
      for (const primitive of primitiveType) {
        expect(isObject(primitive)).toBeFalsy();
      }
    });
    it("Function Test", () => {
      const func = new Function();
      expect(isObject(func)).toBeFalsy();
    });
  });
});

describe("isArray() Test", () => {
  it("Array Test", () => {
    const arr1 = new Array();
    const arr2 = [1, 2, 3];
    expect(isArray(arr1)).toBeTruthy();
    expect(isArray(arr2)).toBeTruthy();
  });

  describe("non array Test", () => {
    it("primitive Test", () => {
      for (const primitive of primitiveType) {
        expect(isArray(primitive)).toBeFalsy();
      }
    });
    it("referenceType Test", () => {
      for (const reference of referenceType) {
        if (reference.type !== Array)
          expect(isArray(reference.value)).toBeFalsy();
      }
    });
    it("TypedArray Test", () => {
      for (const array of typedArray) {
        expect(isArray(array.value)).toBeFalsy();
      }
    });
  });
});
describe("isTypeInstanceofCheck() Test", () => {
  it("referenceType Test", () => {
    for (const reference of referenceType) {
      expect(
        isTypeInstanceofCheck(reference.value, reference.type)
      ).toBeTruthy();
    }
  });
  it("TypedArray Test", () => {
    for (const array of typedArray) {
      expect(isTypeInstanceofCheck(array.value, array.type)).toBeTruthy();
    }
  });
  describe("non isTypeInstanceofCheck Test", () => {});
});

describe("isTypedArray() Test", () => {
  it("TypedArray Test", () => {
    for (const array of typedArray) {
      expect(isTypedArray(array.value)).toBeTruthy();
    }
  });
  describe("non TypedArray Test", () => {
    it("primitive Test", () => {
      for (const primitive of primitiveType) {
        expect(isTypedArray(primitive)).toBeFalsy();
      }
    });
    it("referenceType Test", () => {
      for (const reference of referenceType) {
        expect(isTypedArray(reference.value)).toBeFalsy();
      }
    });
  });
});
