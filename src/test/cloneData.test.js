import {
  cloneArray,
  cloneMap,
  cloneConstructor,
  cloneObject,
  cloneSet,
} from "../cloneData.js";
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
describe("cloneArray() Test", () => {
  it("Array copy Test", () => {
    const obj = [1, "hi", true];
    const cloneData = cloneArray(obj);
    expect(obj).toEqual(cloneData);
    expect(obj).not.toBe(cloneData);
  });
  it("Array deep copy test ", () => {
    const obj = [{ a: 1 }, { b: 2 }];
    const cloneData = cloneArray(obj);
    obj[0].a = 100;
    expect(obj).not.toEqual(cloneData);
    expect(obj[0].a).not.toBe(cloneData[0].a);
  });
  describe("typedArray copy test ", () => {
    for (const test of typedArrayTestCases) {
      it(test.description, () => {
        const obj = test.value;
        const cloneData = cloneArray(obj);
        expect(obj).toEqual(cloneData);
        expect(obj).not.toBe(cloneData);
      });
    }
  });
});

describe("cloneMap() Test", () => {
  it("Map copy Test", () => {
    const map = new Map();
    map.set("a", 1);
    map.set({ a: 1, b: 2 }, 2);
    const cloneData = cloneMap(map);
    expect(map).toEqual(cloneData);
    expect(map).not.toBe(cloneData);
  });
  it("Map deep copy test", () => {
    const map = new Map();
    map.set("obj", { a: 1, b: 2 });
    const cloneData = cloneMap(map);
    expect(map).toEqual(cloneData);
    expect(map).not.toBe(cloneData);
  });
});

describe("cloneMap() Test", () => {
  it("Map copy Test", () => {
    const map = new Map();
    map.set("a", 1);
    map.set("b", 2);
    const cloneData = cloneMap(map);
    expect(map).toEqual(cloneData);
    expect(map).not.toBe(cloneData);
  });
  it("Map deep copy test", () => {
    const map = new Map();
    map.set("obj", { a: 1, b: 2 });
    const cloneData = cloneMap(map);
    expect(map).toEqual(cloneData);
    expect(map).not.toBe(cloneData);
  });
});

describe("cloneSet() Test", () => {
  it("Set copy Test", () => {
    const set = new Set();
    set.add(1);
    set.add(2);
    const cloneData = cloneSet(set);
    expect(set).toEqual(cloneData);
    expect(set).not.toBe(cloneData);
  });
  it("Set deep copy test", () => {
    const set = new Set();
    set.add({ a: 1, b: 2 });
    const cloneData = cloneSet(set);
    expect(set).toEqual(cloneData);
    expect(set).not.toBe(cloneData);
  });
});
describe("cloneDate() Test", () => {
  it("Date copy Test", () => {
    const date = new Date("2023-08-25T12:00:00");
    const cloneData = cloneConstructor(Date, date);
    expect(date).toEqual(cloneData);
    expect(date).not.toBe(cloneData);
  });
});
describe("cloneRegExp() Test", () => {
  it("RegExp copy Test", () => {
    const regExp = /^abc\d+/gi;
    const cloneData = cloneConstructor(RegExp, regExp);
    expect(regExp.source).toBe(cloneData.source);
    expect(regExp.flags).toBe(cloneData.flags);
    expect(regExp).not.toBe(cloneData);
  });
});
describe("cloneObject() Test", () => {
  it("Object copy Test", () => {
    const obj = { a: 1, b: 2 };
    const cloneData = cloneObject(obj);
    expect(obj).toEqual(cloneData);
    expect(obj).not.toBe(cloneData);
  });
  it("Object deep copy Test", () => {
    const obj = { a: 1, b: { c: 1, d: 1 } };
    const cloneData = cloneObject(obj);
    expect(obj).toEqual(cloneData);
    expect(obj).not.toBe(cloneData);
  });
});
