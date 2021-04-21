// 연산자를 이용한 타입정의

// function logMessage(value: any) {
//   console.log(value);
// }
//
// logMessage("hello");
// logMessage(1000);

// 유니온 타입
let user: string | number | boolean;

function logMessage(value: string | number) {
  if(typeof value === 'number') {
    value.toLocaleString();
  }
  if(typeof value === 'string') {
    value.toString();
  }
  throw new TypeError('value must be string or number');
}
logMessage("hello");
logMessage(1000);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person) {
  console.log(someone.name); // 공통된 속성만 접근이 가능함.
}

askSomeone({name: 'dev', skill: 'web'});
askSomeone({name: 'person', age: 80});

// 인터섹션 타입
// let man: string | number | boolean;
// let man2: string & number & boolean;
function askSomeone2(someone: Developer & Person) {
  console.log(someone.name);
  console.log(someone.skill);
  console.log(someone.age);
}
askSomeone2({name: 'dev', skill: 'web', age: 10});