const weak = new WeakMap();
weak.set({ a: 1 }, "hi");
const aa = _.cloneDeep(weak);

console.log(weak);
console.log(aa);
