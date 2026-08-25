export class LinkedList {
  #head = null; // head is NOT a separate node, but a REFERENCE to the first element
  #size = 0;
  constructor() {}

  append(value) {
    // if our head is not referencing any node, we prepend it
    if (this.#head === null) {
      this.prepend(value);
    } else {
      let cur = this.#head;
      while (cur.next !== null) cur = cur.next; // traverse all nodes and STOP at the tail
      cur.next = new Node(value, null);
    }
  }
  prepend(value) {
    this.#head = new Node(value, this.#head);
  }
  size() {
    if (this.#head === null) return 0;
    let cur = this.#head;
    let count = 0;

    // traverse all nodes
    while (cur !== null) {
      count++;
      cur = cur.next;
    }

    return count;
  }
  head() {
    if (this.#head === null) return undefined;
    return this.#head;
  }
  tail() {
    if (this.#head === null) return undefined;

    let cur = this.#head;
    while (cur.next !== null) cur = cur.next; // traverse all nodes and STOP at the tail
    return cur;
  }
  at(index) {
    // return the value of the node at the given index, if non existent return undefined
    let cur = this.#head;

    let i = 0;
    while (cur !== null && i !== index) {
      i++;
      cur = cur.next;
    }

    if (cur !== null && i === index) return cur;
    return undefined;
  }
  pop() {
    if (this.#head === null) return undefined;

    const temp = this.#head;
    this.#head = this.#head.next;

    // remove link from the list
    temp.next = null;
    return temp;
  }
  contains(value) {
    let found = false;

    let cur = this.#head;
    while (cur !== null) {
      if (cur.data === value) found = true;
      cur = cur.next;
    }

    return found;
  }
  findIndex(value) {
    let cur = this.#head;
    let index = 0;

    // traverse all nodes while we dont find the data
    while (cur !== null && cur.data !== value) {
      index++;
      cur = cur.next;
    }

    if (cur !== null && cur.data === value) return index;
    return -1;
  }
  toString() {
    let str = "";
    if (this.#head === null) return str;

    // traverse all nodes
    let cur = this.#head;
    while (cur !== null) {
      str += `( ${cur.data.toString()} ) -> `;
      cur = cur.next;
    }
    str += "( null )";

    return str;
  }
  insertAt(index, ...values) {
    // insert new nodes with the given values at the given index
  }
  removeAt(index) {
    // removes the node at the given index, if the index is out of bounds ( 0 > index => list.length) throw RangeError
  }
}

class Node {
  data = null;
  next = null;

  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}
