// 타입추론 1
let a = 'string';

function getA(b = 10) {
  let c = 'string';
  return b + c;
}


// 타입추론 2
// interface Dropdown<T> {
//   value: T;
//   title: string;
// }
//
// let shoppingItem: Dropdown<string> = {
//   value: "value",
//   title: "title"
// }

// 타입추론 3
interface Dropdown<T> {
  value: T;
  title: string;
}

interface DetailedDropdown<T> extends Dropdown<T>{
  description: string;
  tag: T;
}

let detailedItem: DetailedDropdown<string> = {
  title : "title",
  description: "description",
  value: "value",
  tag: "tag",
}

// Best Common Type
let arr = [1,2,3];
let arr2 = [1,2,true];

