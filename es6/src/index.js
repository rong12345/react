var people=['zf','John','Sherlock'];

function sayHello(people1,people2,people3){
    console.log(`Hello ${people1},${people2},${people3}`);
}
//但是我们将一个数组以拓展参数的形式传递，它能很好地映射到每个单独的参数
sayHello(...people);//输出：Hello zf,John,Sherlock

//而在以前，如果需要传递数组当参数，我们需要使用函数的apply方法
// sayHello.apply(null,people);//输出：Hello zf,John,Sherlock



// class Block{
//   constructor(width,height) {
//     this.width = width;
//     this.height = height;
//   }
//   area(){
//     var num =this.width*this.height;
//     console.log(num);
//   }
//   add(){
//     console.log(this.width+this.height);
//   }
// }
// let block1 = new Block(3,4);
// let block3 = new Block(2,4);
// let block2 = new Block(2,3);
// block1.area();
// block3.area();
// block2.add();
class Father{
  sayHello1(){
    console.log('hello1')
  }
}
class Son extends Father{
  sayHello2(){
    console.log('hello2')
  }
}
let peter = new Son;
peter.sayHello2();
peter.sayHello1();
