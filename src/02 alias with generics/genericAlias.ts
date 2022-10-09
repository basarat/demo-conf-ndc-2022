export type QueueType<T> = {
  push(item: T): void;
  pop(): T | undefined;
};
