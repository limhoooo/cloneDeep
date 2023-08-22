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

function cloneDeep(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Array 체크
  if (Array.isArray(obj)) {
    return obj.map((item) =>
      typeof item === "object" ? cloneDeep(item) : item
    );
  }

  // Map 체크
  if (obj instanceof Map) {
    const copyMap = new Map();
    obj.forEach((value, key) => {
      copyMap.set(key, typeof value === "object" ? cloneDeep(value) : value);
    });
    return copyMap;
  }

  // Set 체크
  if (obj instanceof Set) {
    const copySet = new Set();
    obj.forEach((value) => {
      copySet.add(typeof value === "object" ? cloneDeep(value) : value);
    });
    return copySet;
  }

  // Object 체크 (Date, RegExp)
  const copyObj = {};
  for (const key in obj) {
    copyObj[key] =
      obj[key] instanceof Date
        ? new Date(obj[key])
        : obj[key] instanceof RegExp
        ? new RegExp(obj[key])
        : typeof obj[key] === "object"
        ? cloneDeep(obj[key])
        : obj[key];
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
