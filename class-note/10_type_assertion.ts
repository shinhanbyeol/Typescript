// 타입 단언(type assertion)
// 개발자가 우선적으로 타입을 잡아주는것
let a;
a = 'str';
//let b = a;
let b = a as string;

// DOM API 조작
let div = document.querySelector('div') as HTMLDivElement;
div.innerText

