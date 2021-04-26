// type guard

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return {name:"name", age: 100, skill:'skill'};
}
let temp = introduce();
// console.log(temp.skill); // ERROR Developer 와 Person 공통된 속성만 접근이 가능하다.
// 타입 단언을 이용
if((temp as Developer).skill) {
  console.log((temp as Developer).skill);
}else if ((temp as Person).age){
  console.log((temp as Person).age);
}

// 타입가드 함수 정의
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if(isDeveloper(temp)) {
  console.log(temp.skill);
}else {
  console.log(temp.age);
}
