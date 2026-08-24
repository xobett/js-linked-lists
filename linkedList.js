export class LinkedList {
  head = null; // head is NOT a separate node, but a REFERENCE to the first element
  constructor() {}

  append(value) {
    // if our head is not referencing any node, we prepend it
    if (this.head === null) {
      this.prepend(value);
    } else {
      let cur = this.head;
      while (cur.next !== null) cur = cur.next; // traverse to the next node until it reaches the tail
      cur.next = new Node(value, null);
    }
  }
  prepend(value) {
    // add a new node to the start of the list
    this.head = new Node(value, this.head);
  }
  size() {
    // return the total number of nodes in the list
  }
  head() {
    // return the value of the first node in the list, if non existent return undefined
    if (this.head === null) return undefined;
  }
  tail() {
    // return the value of the last node in the list, if non existent return undefined
    if (this.head === null) return undefined;
  }
  at(index) {
    // return the value of the node at the given index, if non existent return undefined
  }
  pop() {
    // remove and return the head node, if non existent return undefined
    if (this.head === null) return undefined;
  }
  contains(value) {
    // return true if value exists on the list, if non existent return undefined
  }
  findIndex(value) {
    // return index of the node containing the given value, if non existent return -1, if more than one value contains it return the first one
  }
  toString() {
    // represent the list objects as strings, if empty return an empty string. i.e. ( value ) -> ( value ) -> null
    let str = "";
    if (this.head === null) return str;

    // traverse to the next node until it reaches the tail
    let cur = this.head;
    while (cur.next !== null) {
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
