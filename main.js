import { LinkedList } from "./linkedList.js";

const linkedList = new LinkedList();
linkedList.append("Abraham");
linkedList.append("Abraham");
linkedList.append("Naruto");
linkedList.append("Abraham");
linkedList.append("Abraham");
linkedList.append("Abraham");
console.log(linkedList.size());
console.log(linkedList.toString());
console.log(linkedList.findIndex("Naruto"));
console.log(linkedList.at(3));
