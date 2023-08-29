import { isObject } from "./isTypeCheck.js";
import { cloneDeep } from "./cloneDeep.js";

function cloneArray(obj) {
  return obj.map((item) => (isObject(item) ? cloneDeep(item) : item));
}

function cloneMap(obj) {
  const copyMap = new Map();
  for (const [key, value] of obj) {
    // Map 은 key 가 object 일수도있다.
    copyMap.set(
      isObject(key) ? cloneDeep(key) : key,
      isObject(value) ? cloneDeep(value) : value
    );
  }
  return copyMap;
}

function cloneSet(obj) {
  const copySet = new Set();
  for (const value of obj) {
    copySet.add(isObject(value) ? cloneDeep(value) : value);
  }
  return copySet;
}

function cloneConstructor(type, obj) {
  return new type(obj);
}
function cloneObject(obj) {
  const copyObj = {};
  for (const key in obj) {
    copyObj[key] = isObject(obj[key]) ? cloneDeep(obj[key]) : obj[key];
  }
  return copyObj;
}

export { cloneArray, cloneMap, cloneSet, cloneConstructor, cloneObject };
