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

describe("isArray() Test", () => {
  it("Array Test", () => {
    const arr1 = new Array();
    const arr2 = [1, 2, 3];
    expect(isArray(arr1)).toBeTruthy();
    expect(isArray(arr2)).toBeTruthy();
  });

  describe("non-array Test", () => {
    it("referenceType Test", () => {
      for (const reference of referenceType) {
        if (reference.type !== "Array")
          expect(isArray(reference.value)).toBeFalsy();
      }
    });
    it("primitive Test", () => {
      for (const primitive of primitiveType) {
        expect(isArray(primitive)).toBeFalsy();
      }
    });
    it("typedArray Test", () => {
      const arr1 = new Int8Array();
      const arr2 = new Uint8Array();
      expect(isArray(arr1)).toBeFalsy();
      expect(isArray(arr2)).toBeFalsy();
    });
  });
});
