import {
  isObject,
  isArray,
  isDate,
  isMap,
  isRegExp,
  isSet,
  isTypedArray,
} from "../isTypeCheck.js";

const primitiveType = [String, Number, Boolean, Symbol(), null, undefined];
const referenceType = [
  { type: "Array", value: new Array() },
  { type: "Function", value: new Function() },
  { type: "Map", value: new Map() },
  { type: "Set", value: new Set() },
  { type: "Date", value: new Date() },
  { type: "RegExp", value: new RegExp() },
  { type: "Int8Array", name: "TypedArray", value: new Int8Array() },
  { type: "Uint8Array", name: "TypedArray", value: new Uint8Array() },
  { type: "Int16Array", name: "TypedArray", value: new Int16Array() },
  { type: "Uint16Array", name: "TypedArray", value: new Uint16Array() },
  { type: "Int32Array", name: "TypedArray", value: new Int32Array() },
  { type: "Uint32Array", name: "TypedArray", value: new Uint32Array() },
  { type: "Float32Array", name: "TypedArray", value: new Float32Array() },
  { type: "Float64Array", name: "TypedArray", value: new Float64Array() },
  { type: "BigInt64Array", name: "TypedArray", value: new BigInt64Array() },
  { type: "BigUint64Array", name: "TypedArray", value: new BigUint64Array() },
];

describe("isObject() Test", () => {
  it("object Test", () => {
    const obj = { a: 1, b: 2 };
    expect(isObject(obj)).toBeTruthy();
  });
  it("referenceType Test", () => {
    for (const reference of referenceType) {
      if (reference.type !== "Function")
        expect(isObject(reference.value)).toBeTruthy();
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

describe("isTypedArray() Test", () => {
  it("TypedArray Test", () => {
    for (const reference of referenceType) {
      if (reference.name === "TypedArray")
        expect(isTypedArray(reference.value)).toBeTruthy();
    }
  });
  describe("non Date Test", () => {
    it("primitive Test", () => {
      for (const primitive of primitiveType) {
        expect(isTypedArray(primitive)).toBeFalsy();
      }
    });
    it("referenceType Test", () => {
      for (const reference of referenceType) {
        if (reference.name !== "TypedArray")
          expect(isTypedArray(reference.value)).toBeFalsy();
      }
    });
  });
});
