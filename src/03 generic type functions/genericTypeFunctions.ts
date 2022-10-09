export type QueueType<T> = {
  push(item: T): void;
  pop(): T | undefined;
};

type QueueNumber = QueueType<number>;

// Identity Type Function
