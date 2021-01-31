function LinkedNode(value) {
  this.value = value;
  this.next = null;
}

function find(nodeVal) {
  let currNode = this.head;
  while(currNode.next != null && currNode.value != nodeVal) {
    currNode = currNode.next;
  }
  return currNode;
}

function insert(nodeVal, preNode) {
  if (preNode == undefined) {
    preNode = 'head';
  }

  const currNode = this.find(preNode);
  const newNode = new LinkedNode(nodeVal);
  newNode.next = currNode.next;
  currNode.next = newNode;
}

function remove(value) {
  const preNode = this.preFind(value);
  const currNode = this.find(value);
  preNode.next = currNode.next;
  currNode.next = null;
}

function preFind(value) {
  let currNode = this.head;
  while(currNode.next != null && currNode.next.value != value) {
    currNode = currNode.next;
  }

  return currNode;
}

function display() {
  let currNode = this.head;
  while(currNode.next != null) {
    console.log(currNode.next.value);
    currNode = currNode.next;
  }
}

function SinglyLinkedList() {
  this.head = new LinkedNode('head');
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.remove = remove;
  this.preFind = preFind;
}

const single = new SinglyLinkedList();
single.insert('first');
single.insert('second', 'first');
single.insert('thrid', 'second');
single.display()

console.log('=================')

single.remove('second');
single.display()



