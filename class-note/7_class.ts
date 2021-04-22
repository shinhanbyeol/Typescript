class Person {
  private name: string;
  private age: number;
  readonly log: string;

  constructor(name:string, age:number) {
    this.name = name;
    this.age = age;
  }
}

// 리액트 클래스 기반 코드
// class App extends React.Component {
//
// }

// 리액트 훅 기반의 함수형 코드
// function App() {
//   return <div> Hello World </div>
// }