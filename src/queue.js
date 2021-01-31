function push(target) {
  return this.dataStore[this.pos++] = target;
}

function shift() {
  if (this.pos > 0) {
    this.pos--;
    return this.dataStore.splice(0, 1);
  }
}

function front() {
  return this.dataStore[this.top];
}

function end() {
  return this.dataStore[--this.pos];
}

function toString() {
  return this.dataStore;
}

function empty() {
  return this.pos == 0;
}

function Queue() {
  this.dataStore = [];
  this.pos = 0;
  this.top = 0;
  this.push = push;
  this.shift = shift;
  this.front = front;
  this.end = end;
  this.toString = toString;
  this.empty = empty;
}

const queue = new Queue();

queue.push(1)
queue.push(2)
queue.push(3)
queue.push(4)
queue.shift();
queue.shift();

console.log(queue.empty())

console.log(queue.dataStore);