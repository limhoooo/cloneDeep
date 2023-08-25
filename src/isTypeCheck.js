const typedArrayValidations = [
  Int8Array,
  Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  BigInt64Array,
  BigUint64Array,
];

function isObject(obj) {
  return obj !== null && typeof obj === "object";
}
function isArray(obj) {
  return Array.isArray(obj);
}
function isMap(obj) {
  return obj instanceof Map;
}
function isSet(obj) {
  return obj instanceof Set;
}
function isDate(obj) {
  return obj instanceof Date;
}
function isRegExp(obj) {
  return obj instanceof RegExp;
}
function isTypedArray(obj) {
  return typedArrayValidations.some((type) => obj instanceof type);
}

export { isObject, isArray, isMap, isSet, isDate, isRegExp, isTypedArray };
