function clear() {
  this.listSize = this.pos = 0;
  this.dataStore.length = 0;
}

function find(target) {
  for (let i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] === target) {
      return i;
    }
  }

  return -1;
}

function toString(separator = ',') {
  return this.dataStore.join(separator);
}

function insert(target) {
  // console.log(this.pos, this.listSize)
  if (this.pos == this.listSize - 1) {
    this.dataStore.splice(this.pos + 1, 0, target);
  } else {
    this.dataStore.splice(this.pos, 0, target);
  }
  
  return this.dataStore;
}

function append(target) {
  this.dataStore[this.listSize++] = target;
}

function remove(target) {
  let targetAt = this.find(target);
  if (targetAt > -1) {
    this.dataStore.splice(targetAt, 1);
    --this.listSize;
    return;
  }

  return false;
}

function front() {
  this.pos = 0;
}

function end() {
  this.pos = this.listSize - 1;
}

function prev() {
  if (this.pos > 0) {
    --this.pos;
  }
}

function next() {
  if (this.pos < this.listSize) {
    ++this.pos;
    return;
  }
}

function length() {
  return this.listSize;
}

function currPos() {
  return this.pos;
}

function moveTo(pos) {
  this.pos = pos;
}

function getElement() {
  return this.dataStore[this.pos];
}

function contain(target) {
  return this.find(target) > -1;
}

function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];

  this.clear = clear;
  this.find = find;
  this.toString = toString;
  this.insert = insert; //在当前元素后插入新元素
  this.append = append; //在列表元素末尾增加新元素
  this.remove = remove;
  this.front = front; // 从列表的当前位置移动到第一个元素
  this.end = end; // 从列表的当前位置移动到最后一个元素
  this.prev = prev; // 将当前位置前移一位
  this.next = next; // 将当前位置后移一位
  this.length = length;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.contain = contain;
}

const list = new List()
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.append(6)
list.append(7)

// list.end()
list.next();


list.insert(8);

console.log(list.dataStore);




