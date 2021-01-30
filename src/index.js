function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push; // 入栈操作
  this.pop = pop; // 出栈操作
  this.peek = peek; // 返回栈顶元素
  this.clear = clear;
  this.length = length;

}