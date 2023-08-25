import { cloneArray } from "../cloneData.js";

describe("cloneArray() Test", () => {
  it("array Test", () => {
    const arr = [1, 2, 3];
    const copyData = cloneArray(arr);
    expect(arr).toEqual(copyData);
  });
});
