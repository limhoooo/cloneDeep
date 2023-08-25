// Date, Set, Map, Symbol, TypedArray, Regex, Array, Object, WeakMap, WeakSet

import {
  isObject,
  isArray,
  isTypedArray,
  isTypeInstanceofCheck,
} from "./isTypeCheck.js";
import {
  cloneArray,
  cloneDate,
  cloneMap,
  cloneObject,
  cloneRegExp,
  cloneSet,
} from "./cloneData.js";

const obj = {
  name: "ben",
  age: 20,
  array: [1, 2, 3, { a: 1, b: 2 }],
  address: {
    city: "seoul",
    country: "korea",
  },
  unique: Symbol("aa"),
  getAge: function () {
    return this.age;
  },
  birth: new Date(),
  null: null,
  unde: undefined,
  life: Infinity,
  regT: /^[a-z0-9](\.|\+|\-?[a-z0-9]){1,39}@test\.com$/gm,
  mapData: new Map([
    ["email", "john@example.com"],
    [
      "phone",
      new Map([
        ["name", "asdvasd@example.com"],
        ["age", { a: 2, b: 2 }],
      ]),
    ],
  ]),
  setData: new Set(["a", "b", { c: 1, d: 1 }]),
};

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
    validation: isTypeInstanceofCheck,
    cloneFunc: cloneSet,
    type: Set,
  },
  {
    validation: isTypeInstanceofCheck,
    cloneFunc: cloneMap,
    type: Map,
  },
  {
    validation: isTypeInstanceofCheck,
    cloneFunc: cloneDate,
    type: Date,
  },
  {
    validation: isTypeInstanceofCheck,
    cloneFunc: cloneRegExp,
    type: RegExp,
  },

  {
    // 가장 밑에있어야함
    // object 말고도 typeOf 로 비교시 object 로 나오는 객체들 때문에
    validation: isObject,
    cloneFunc: cloneObject,
  },
];
function cloneDeep(obj) {
  // 원시값일시 return
  if (!isObject(obj)) return obj;

  for (const value of copyValidations) {
    if (value.validation(obj, value.type ?? null)) return value.cloneFunc(obj);
  }
}

export default cloneDeep;

const copyValue = cloneDeep(obj);

// 객체안의객체 깊은복사 확인
obj.address.city = 10;
// Array 깊은복사 확인
obj.array[0] = 100;
obj.array[3].a = 100;
// RegExp 복사 확인
obj.regT = "hi";
// Date 복사 확인
obj.birth = "a";
// Map 복사 확인
obj.mapData.set("email", "hihi");
// Map 안에 객체 복사 확인
obj.mapData.get("phone").get("age").a = 100;
// Set 복사 확인
obj.setData.delete("a");

console.log(obj);
console.log(copyValue);
