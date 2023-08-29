// Date, Set, Map, Symbol, TypedArray, Regex, Array, Object, WeakMap, WeakSet

import {
  isObject,
  isArray,
  isTypedArray,
  isTypeInstanceofCheck,
} from "./isTypeCheck.js";
import {
  cloneArray,
  cloneMap,
  cloneSet,
  cloneConstructor,
  cloneObject,
} from "./cloneData.js";

const copyValidations = [
  {
    validation: isArray,
    cloneFunc: cloneArray,
  },
  {
    validation: isTypedArray,
    cloneFunc: cloneArray,
  },
  {
    validation: isTypeInstanceofCheck.bind(null, Set),
    cloneFunc: cloneSet,
  },
  {
    validation: isTypeInstanceofCheck.bind(null, Map),
    cloneFunc: cloneMap,
  },
  {
    validation: isTypeInstanceofCheck.bind(null, Date),
    cloneFunc: cloneConstructor.bind(null, Date),
  },
  {
    validation: isTypeInstanceofCheck.bind(null, RegExp),
    cloneFunc: cloneConstructor.bind(null, RegExp),
  },
  {
    // 가장 밑에있어야함
    // object 말고도 typeOf 로 비교시 object 로 나오는 객체들 때문에
    validation: isObject,
    cloneFunc: cloneObject,
  },
];
export function cloneDeep(obj) {
  // 원시값일시 return
  if (!isObject(obj)) return obj;

  for (const value of copyValidations) {
    if (value.validation(obj)) return value.cloneFunc(obj);
  }
}
