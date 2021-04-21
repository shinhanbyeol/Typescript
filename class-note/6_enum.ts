// 숫자형 enum
enum Shoes {
  Nike,
  Adidas
}
let myShoes = Shoes.Nike;
console.log(myShoes); // 0

enum ShoesStr {
  Nike = '나이키',
  Adidas = '아디다스'
}
let myShoesStr = Shoes.Nike;
console.log(myShoes); // 나이키

// ex
enum Answer {
  Yes = 'Y',
  No = 'N'
}

function askQuestion(answer: Answer) {
  if(answer === Answer.Yes) {
    console.log('O');
  }
  if(answer === Answer.No) {
    console.log('X');
  }
}

askQuestion(Answer.Yes);