import {
  isObject,
  isArray,
  isTypedArray,
  isTypeInstanceofCheck,
} from "../isTypeCheck.js";

const primitiveType = [String, Number, Boolean, Symbol(), null, undefined];
const referenceType = [
  { type: Array, value: new Array() },
  { type: Function, value: new Function() },
  { type: Map, value: new Map() },
  { type: Set, value: new Set() },
  { type: Date, value: new Date() },
  { type: RegExp, value: new RegExp() },
];
const typedArray = [
  { type: Int8Array, value: new Int8Array() },
  { type: Uint8Array, value: new Uint8Array() },
  { type: Int16Array, value: new Int16Array() },
  { type: Uint16Array, value: new Uint16Array() },
  { type: Int32Array, value: new Int32Array() },
  { type: Uint32Array, value: new Uint32Array() },
  { type: Float32Array, value: new Float32Array() },
  { type: Float64Array, value: new Float64Array() },
  { type: BigInt64Array, value: new BigInt64Array() },
  { type: BigUint64Array, value: new BigUint64Array() },
];
describe("isObject() Test", () => {
  describe("true Test", () => {
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
  });
  describe("false Test", () => {
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
  describe("true Test", () => {
    it("Array Test", () => {
      const arr = [1, 2, 3];
      expect(isArray(arr)).toBeTruthy();
    });
  });

  describe("false Test", () => {
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
        isTypeInstanceofCheck(reference.type, reference.value)
      ).toBeTruthy();
    }
  });

  it("TypedArray Test", () => {
    for (const array of typedArray) {
      expect(isTypeInstanceofCheck(array.type, array.value)).toBeTruthy();
    }
  });
});

describe("isTypedArray() Test", () => {
  describe("true Test", () => {
    it("TypedArray Test", () => {
      for (const array of typedArray) {
        expect(isTypedArray(array.value)).toBeTruthy();
      }
    });
  });

  describe("false Test", () => {
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
