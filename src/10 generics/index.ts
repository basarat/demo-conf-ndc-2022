/** A FIFO (First In First Out) collection */
class Queue {
  data: any[] = [];
  push(item: any) { this.data.push(item); }
  pop() { return this.data.shift(); }
}

