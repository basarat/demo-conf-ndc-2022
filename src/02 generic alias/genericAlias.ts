export type Queue<T> = {
  push(item: T): void;
  pop(): T;
};