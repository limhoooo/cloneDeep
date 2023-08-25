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

function isTypeInstanceofCheck(obj, type) {
  return obj instanceof type;
}

function isTypedArray(obj) {
  return typedArrayValidations.some((type) => obj instanceof type);
}

export {
  isObject,
  isArray,
  isTypedArray,
  isTypeInstanceofCheck,
  typedArrayValidations,
};
