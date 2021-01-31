function push(target) {
  this.dataStore[this.top++] = target;
  return this.dataStore;
}

function pop() {
  return this.dataStore.splice(--this.top, 1);
}

function peek() {
  return this.dataStore[this.top - 1];
}

function clear() {
  this.dataStore.length = 0;
  this.top = 0;
  return this.dataStore;
}

function length() {
  return this.top;
}


function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push; // 入栈操作
  this.pop = pop; // 出栈操作
  this.peek = peek; // 返回栈顶元素
  this.clear = clear;
  this.length = length;
}


const stack = new Stack();


stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

stack.pop();
stack.pop();

console.log(stack.dataStore, stack.top, stack.peek())
// let a = stack.peek();

