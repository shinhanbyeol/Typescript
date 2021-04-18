// JS 문자열 선언
// let str = "hello";

// TS 문자열 선언
let str: string = "hello";
// TS 숫자 선언
let num:number = 10;

// TS 배열
let arr: Array<number> = [1,2,3];
let items: number[] = [1,2,3];

let arr2: Array<string> = ["str", "str2"];
let items2: string[] = ["str", "str2"];

let arr3: Array<any> = [1, {key:"value"},"123"];
let items3: any[] = [1, {key:"value"},"123"];

// TS 튜플 - 배열의 인덱스별 타입지정.
let address: [string, number] = ["str", 100];

// TS 객체
let obj: object = {};

// let person: object = {
//     name: 'name',
//     age: 30
// };

let person: {name:string, age:number} = {
    name: 'name',
    age: 30
};

// TS 진위값
let show: boolean = true;
