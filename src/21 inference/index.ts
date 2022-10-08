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