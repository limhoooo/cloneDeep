import { cloneDeep } from "../cloneDeep.js";

const primitiveTypeTestCases = [
  { description: "String Test", value: "test" },
  { description: "Number Test", value: 100 },
  { description: "Boolean Test", value: true },
  { description: "Symbol Test", value: Symbol() },
  { description: "null Test", value: null },
  { description: "undefined Test", value: undefined },
];
const referenceTypeTestCases = [
  { description: "Object Test", value: { a: 1, b: 2 } },
  { description: "Object Deep Test", value: { a: 1, b: { c: 1, d: 3 } } },
  { description: "Array Test", value: [1, 2, 3] },
  { description: "Array Deep Test", value: [1, 2, { a: 2, b: 3 }] },
  { description: "Date Test", value: new Date() },
  { description: "RegExp Test", value: new RegExp() },
  { description: "Int8Array Test", value: new Int8Array() },
  { description: "Uint8Array Test", value: new Uint8Array() },
  { description: "Int16Array Test", value: new Int16Array() },
  { description: "Uint16Array Test", value: new Uint16Array() },
  { description: "Int32Array Test", value: new Int32Array() },
  { description: "Uint32Array Test", value: new Uint32Array() },
  { description: "Float32Array Test", value: new Float32Array() },
  { description: "Float64Array Test", value: new Float64Array() },
  { description: "BigInt64Array Test", value: new BigInt64Array() },
  { description: "BigUint64Array Test", value: new BigUint64Array() },
  {
    description: "Map Test",
    value: new Map([
      ["a", 1],
      ["b", 2],
    ]),
  },
  {
    description: "Map Deep Test",
    value: new Map([
      ["a", 1],
      ["b", { a: 1, b: 3 }],
    ]),
  },
  {
    description: "Set Test",
    value: new Set(["a", "b"]),
  },
  {
    description: "Set Deep Test",
    value: new Set(["a", { a: 1, b: 3 }]),
  },
];

describe("cloneDeep()", () => {
  describe("primitiveType Test", () => {
    for (const test of primitiveTypeTestCases) {
      it(test.description, () => {
        expect(cloneDeep(test.data)).toBe(test.data);
      });
    }
  });
  describe("referenceType Test", () => {
    for (const test of referenceTypeTestCases) {
      it(test.description, () => {
        const cloneData = cloneDeep(test.value);
        expect(test.value).toEqual(cloneData);
        expect(test.value).not.toBe(cloneData);
        expect(test.value).not.toBe(cloneData);
      });
    }
  });
});
