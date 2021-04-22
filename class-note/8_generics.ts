// function logText(text) {
//   console.log(text);
//   return text;
// }
//
// logText("string");
// logText(10);
// logText(true);

// function logText<T>(text: T):T {
//   console.log(text);
//   return text;
// }
// logText<string>("string");
// logText<number>(10);
// logText<boolean>(true);

// function logText(text: string) {
//   console.log(text);
//   // text.split("").reverse().join("");
//   return text;
// }
//
// function logNumber(text: number) {
//   console.log(text);
//   return text;
// }

/*
function logText(text: string | number) {
  console.log(text);
  return text;
}
// 유니온으로 선언시 파라미터에 대해서는 해결이 되어도
// 반환값에 대한 타입추론이 string, number 두가지로 이루어지기 때문에 문제 가됨.
const a = logText("string");
logText(10);
*/


/**
 * 타입정의에 대해서 함수의 호출시점에 정의됨
 */
function logText<T>(text: T): T {
  console.log(text);
  return text;
}

const str = logText<string>("string");
str.split("");

const num = logText<number>(10);
num.toLocaleString();

// 인터페이스에 제네릭을 선언하는 방법
interface Dropdown<T> {
  value: T;
  selected: boolean
}

const obj: Dropdown<string> = {value: 'abc', selected: false};
const obj2: Dropdown<number> = {value: 10, selected: false};

// 제네릭의 타입 제한
// function logTextLength<T>(text: T[]):T[] {
//   console.log(text.length);
//   return text;
// }
// logTextLength<string>(['hi', 'bye']);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}

function logTextLength<T extends LengthType>(text: T): T {
  console.log(text.length);
  return text;
}

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption:T):T {
  return itemOption;
}
getShoppingItemOption(10);
getShoppingItemOption<string>('text');
getShoppingItemOption("name");