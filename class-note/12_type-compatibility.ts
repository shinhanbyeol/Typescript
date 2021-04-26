interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
}

let developer: Developer;
let person: Person;
// developer = person; // ERROR Property 'skill' is missing in type 'Person' but required in type 'Developer'
person = developer;

// 함수
let add = (a: number) => {
  console.log(a);
}

let sum = (a: number, b: number) => {
  console.log(a, b);
}

// add = sum;
sum = add;

// 제네릭
interface Empty<T> {
  // ..
}
let empty1: Empty<string>;
let empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}

let notEmpty1: NotEmpty<string>;
let notEmpty2: NotEmpty<number>;
// 구조적으로 타입이 달라지기때문에 ERROR
// notEmpty1 = notEmpty2;
// notEmpty2 = notEmpty1;