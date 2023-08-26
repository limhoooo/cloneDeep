import {
  cloneArray,
  cloneDate,
  cloneMap,
  cloneObject,
  cloneRegExp,
  cloneSet,
} from "../cloneData.js";

describe("cloneArray() Test", () => {
  it("array Test", () => {
    const obj = [1, 2, 3];
    const cloneObj = cloneArray(obj);
    expect(obj).toEqual(cloneObj);
  });
});
