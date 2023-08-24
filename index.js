// Date, Set, Map, Symbol, TypedArray, Regex, Array, Object,

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
    validation: isSet,
    cloneFunc: cloneSet,
  },
  {
    validation: isMap,
    cloneFunc: cloneMap,
  },
  {
    validation: isDate,
    cloneFunc: cloneDate,
  },
  {
    validation: isRegExp,
    cloneFunc: cloneRegExp,
  },
  {
    validation: isTypedArray,
    cloneFunc: cloneArray,
  },
  {
    // 가장 밑에있어야함
    // object 말고도 typeOf 로 비교시 object 로 나오는 객체들 때문에 (Array)
    validation: isObject,
    cloneFunc: cloneObject,
  },
];
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

function cloneDeep(obj) {
  // 원시값일시 return
  if (!isObject(obj)) return obj;

  for (const value of copyValidations) {
    if (value.validation(obj)) return value.cloneFunc(obj);
  }
}

// typeCheck
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

function isObject(obj) {
  return obj !== null && typeof obj === "object";
}
function isTypedArray(obj) {
  return typedArrayValidations.some((type) => obj instanceof type);
}

// typeClone
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
function cloneDate(obj) {
  return new Date(obj);
}
function cloneRegExp(obj) {
  return new RegExp(obj);
}
function cloneObject(obj) {
  const copyObj = {};
  for (const key in obj) {
    copyObj[key] = isObject(obj[key]) ? cloneDeep(obj[key]) : obj[key];
  }
  return copyObj;
}

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
