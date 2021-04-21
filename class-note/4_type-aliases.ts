// 타입별칭
// interface Person {
//   name: string;
//   age: number;
// }

type Person = {
  name: string;
  age: number;
}

let user: Person = {
  name: 'user',
  age: 100
}

type MyString = string;
let str: MyString = 'myString';

type Todo = {
  id: string;
  title: string;
  done: boolean;
}

function getTodo(todo: Todo) {
  //
}