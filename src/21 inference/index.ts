class ObjectWrapper<T> {
  constructor(public obj: T) { }
  getObj() {
    return { ...this.obj };
  }
  getProperty(key: keyof T) {
    return this.obj[key];
  }
}

class ArrayWrapper<T>{
  constructor(public arr: T[]) { }
  getArray() {
    return this.arr.concat();
  }
  getIndex(index: number) {
    return this.arr[index];
  }
}

export function wrap<T>(obj: T) {
  const result = Object.create(null);
  for (const key in obj) {
    const element = obj[key];
    if (Array.isArray(element)) {
      result[key] = new ArrayWrapper(element);
    } else {
      result[key] = new ObjectWrapper(element);
    }
  }
  return result;
}

const wrapped = wrap({
  value: 0,
  items: [1, 2, 3],
});