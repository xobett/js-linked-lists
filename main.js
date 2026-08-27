import { LinkedList } from "./linkedList.js";

const linkedList = new LinkedList();
linkedList.append("Cesar");
linkedList.append("Abraham");
linkedList.append("Betancourt");
linkedList.append("Chavez");
console.log(linkedList.size());
console.log(linkedList.toString());
linkedList.removeAt(1);
console.log(linkedList.toString());
