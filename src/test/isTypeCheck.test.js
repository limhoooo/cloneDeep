import {
  isObject,
  isArray,
  isTypedArray,
  isTypeInstanceofCheck,
} from "../isTypeCheck.js";

const primitiveTypeTestCases = [
  { description: "String Test", value: "test" },
  { description: "Number Test", value: 100 },
  { description: "Boolean Test", value: true },
  { description: "Symbol Test", value: Symbol() },
  { description: "null Test", value: null },
  { description: "undefined Test", value: undefined },
];

const referenceTypeTestCases = [
  { description: "Array Test", type: Array, value: new Array() },
  { description: "Function Test", type: Function, value: new Function() },
  { description: "Map Test", type: Map, value: new Map() },
  { description: "Set Test", type: Set, value: new Set() },
  { description: "Date Test", type: Date, value: new Date() },
  { description: "RegExp Test", type: RegExp, value: new RegExp() },
];
const typedArrayTestCases = [
  { description: "Int8Array Test", type: Int8Array, value: new Int8Array() },
  { description: "Uint8Array Test", type: Uint8Array, value: new Uint8Array() },
  { description: "Int16Array Test", type: Int16Array, value: new Int16Array() },
  {
    description: "Uint16Array Test",
    type: Uint16Array,
    value: new Uint16Array(),
  },
  { description: "Int32Array Test", type: Int32Array, value: new Int32Array() },
  {
    description: "Uint32Array Test",
    type: Uint32Array,
    value: new Uint32Array(),
  },
  {
    description: "Float32Array Test",
    type: Float32Array,
    value: new Float32Array(),
  },
  {
    description: "Float64Array Test",
    type: Float64Array,
    value: new Float64Array(),
  },
  {
    description: "BigInt64Array Test",
    type: BigInt64Array,
    value: new BigInt64Array(),
  },
  {
    description: "BigUint64Array Test",
    type: BigUint64Array,
    value: new BigUint64Array(),
  },
];

describe("isObject() Test", () => {
  describe("true Test", () => {
    it("object Test", () => {
      const obj = { a: 1, b: 2 };
      expect(isObject(obj)).toBeTruthy();
    });
    describe("referenceType Test", () => {
      for (const test of referenceTypeTestCases) {
        if (test.type !== Function)
          it(test.description, () => {
            expect(isObject(test.value)).toBeTruthy();
          });
      }
    });
    describe("TypedArray Test", () => {
      for (const test of typedArrayTestCases) {
        it(test.description, () => {
          expect(isObject(test.value)).toBeTruthy();
        });
      }
    });
  });
  describe("false Test", () => {
    describe("primitive Test", () => {
      for (const test of primitiveTypeTestCases) {
        it(test.description, () => {
          expect(isObject(test.value)).toBeFalsy();
        });
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
    describe("primitive Test", () => {
      for (const test of primitiveTypeTestCases) {
        it(test.description, () => {
          expect(isArray(test.value)).toBeFalsy();
        });
      }
    });
    describe("referenceType Test", () => {
      for (const test of referenceTypeTestCases) {
        if (test.type !== Array)
          it(test.description, () => {
            expect(isArray(test.value)).toBeFalsy();
          });
      }
    });
    describe("TypedArray Test", () => {
      for (const test of typedArrayTestCases) {
        it(test.description, () => {
          expect(isArray(test.value)).toBeFalsy();
        });
      }
    });
  });
});

describe("isTypeInstanceofCheck() Test", () => {
  describe("referenceType Test", () => {
    for (const test of referenceTypeTestCases) {
      it(test.description, () => {
        expect(isTypeInstanceofCheck(test.type, test.value)).toBeTruthy();
      });
    }
  });
  describe("TypedArray Test", () => {
    for (const test of typedArrayTestCases) {
      it(test.description, () => {
        expect(isTypeInstanceofCheck(test.type, test.value)).toBeTruthy();
      });
    }
  });
});

describe("isTypedArray() Test", () => {
  describe("true Test", () => {
    describe("TypedArray Test", () => {
      for (const test of typedArrayTestCases) {
        it(test.description, () => {
          expect(isTypedArray(test.value)).toBeTruthy();
        });
      }
    });
  });

  describe("false Test", () => {
    describe("primitive Test", () => {
      for (const test of primitiveTypeTestCases) {
        it(test.description, () => {
          expect(isTypedArray(test.value)).toBeFalsy();
        });
      }
    });
    describe("referenceType Test", () => {
      for (const test of referenceTypeTestCases) {
        it(test.description, () => {
          expect(isTypedArray(test.value)).toBeFalsy();
        });
      }
    });
  });
});
