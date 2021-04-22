// ES2015 (ES6)
class Person {
  constructor(name, age) {
    console.log("생성 되었습니다.");
    this.name = name;
    this.age = age;
  }
}

let person = new Person("test", 10);
console.log(person);

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// let person = new Person("test", 1000);