const Node = (value = null, next = null) => {
  return { value, next };
};

const LinkedList = (head = null) => {
  const append = (value) => {
    let lastNode = head;
    if (lastNode) {
      while (lastNode.next !== null) {
        lastNode = lastNode.next;
      }
      lastNode.next = Node(value);
      return head;
    }
    return Node(value);
  };
  const prepend = (value) => {
    return Node(value, head);
  };

  const size = () => {
    let count = 0;
    let node = head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  };

  const headValue = () => {
    // returns the first node in the list
    return head;
  };

  const tail = () => {
    let lastNode = head;
    if (lastNode) {
      while (lastNode.next !== null) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  };

  const at = (index) => {
    let node = head;
    let count = 1;
    while (node) {
      if (count === index) {
        return node;
      }
      node = node.next;
      count++;
    }
    return null;
  };

  const pop = () => {
    let lastNode = head;
    if (lastNode) {
      while (lastNode.next.next !== null) {
        lastNode = lastNode.next;
      }
      lastNode.next = null;
    }
    return head;
  };

  const contains = (value) => {
    let node = head;
    if (head) {
      while (node) {
        if (node.value === value) {
          return true;
        }
        node = node.next;
      }
    }
    return false;
  };

  const find = (value) => {
    let node = head;
    let count = 1;
    while (node) {
      if (node.value === value) {
        return count;
      }
      node = node.next;
      count++;
    }
    return null;
  };

  const toString = () => {
    let linkedListString = "";
    let node = head;
    while (node) {
      let value = `(${node.value}) -> `;
      linkedListString += value;
      node = node.next;
    }
    return linkedListString + null;
  };

  const insertAt = (value, index) => {
    let node = head;
    let count = 1;

    while (node) {
      let newNode = Node(value, node.next);
      if (count === index - 1) {
        node.next = newNode;
      }
      count++;
      node = node.next;
    }
    if (index > count) {
      return "Index does not exist";
    }
    return head;
  };

  const removeAt = (index) => {
    let node = head;
    let count = 1;
    while (node) {
      if (count === index - 1) {
        node.next = node.next.next;
      }
      count++;
      node = node.next;
    }
    if (index > count) {
      return "Index does not exist";
    }
    return head;
  };

  return {
    head,
    append,
    prepend,
    size,
    headValue,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
};

// TESTING

let node1 = Node(2);
let node2 = Node(5);
node1.next = node2;

let list = LinkedList(node1);

console.log(list.insertAt(9, 3));
console.log(list.insertAt(8, 4));
console.log(list.removeAt(3));
