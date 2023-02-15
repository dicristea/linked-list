console.log("Begin");

const Node = (value = null, next = null) => {
  return { value, next };
};

const LinkedList = (head = null) => {
  // Bring last node out to LinkedList outer function scope

  const append = (value) => {
    // adds a new node containing value to the end of the list
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
    // adds a new node containing value to the start of the list
    return Node(value, head);
  };

  const size = () => {
    // returns total number of nodes in the list
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
    // returns the last node in the list
    let lastNode = head;
    if (lastNode) {
      while (lastNode.next !== null) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  };

  const at = (index) => {
    // returns node at given index
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
    // removes the last element from the list
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
    // returns true if the passed in value is in the list and otherwise returns false
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
    // returns the index of the node containing value, or null if not found.
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
    // parse through nodes, JSON.stringify(node), add to previous returns
    let linkedListString = "";
    let node = head;
    while (node) {
      let value = `(${node.value}) -> `;
      linkedListString += value;
      node = node.next;
    }
    return linkedListString + null;

    // represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be:
    // ( value ) -> ( value ) -> ( value ) -> null
  };

  // Extra Credit Tip: When you insert or remove a node, consider how it will affect the existing nodes. Some of the nodes will need their nextNode link updated.

  const insertAt = (value, index) => {
    // inserts a new node with the provided value at the given index
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
    // removes the node at the given index
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

let node1 = Node(2);
let node2 = Node(5);
node1.next = node2;

let list = LinkedList(node1);

console.log(list.insertAt(9, 3));
console.log(list.insertAt(8, 4));
console.log(list.removeAt(3));
