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
  return obj !== null && typeof obj === 'object';
}

// atest
function isArray(obj) {
  return Array.isArray(obj);
}

function isTypeInstanceofCheck(type, obj) {
  return obj instanceof type;
}
//asdv
function isTypedArray(obj) {
  return typedArrayValidations.some((type) => isTypeInstanceofCheck(type, obj));
}

export { isObject, isArray, isTypedArray, isTypeInstanceofCheck };
