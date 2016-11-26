// console.log(xxx) //undefined 已经声明了但是没有值
// var xxx=2；

// console.log(xxx);
// let xxx = 2;

// function f1() {
//   let n = 5;
//   if (true) {
//     let n = 10;
//   }
//   console.log(n); // 5
// }
// f1()

// const PI = 3.1415;
// console.log(PI); // 3.1415

// PI = 3;
// console.log(PI); // TypeError: "PI" is read-only只读

// // 嵌套循环不会相互影响
// for (let i = 0; i < 3; i++) {
//   console.log("out", i);
//   for (let i = 0; i < 2; i++) {
//     console.log("in", i);
//   }
// }
// //结果 out 0 in 0 in 1 out 1 in 0 in 1 out 2 in 0 in 1

// for (var i = 0; i < 3; i++) {
//   console.log("out", i);
//   for (var i = 0; i < 2; i++) {
//     console.log("in", i);
//   }
// }
//结果 out 0 in 0 in 1

// let [foo,[bar,baj]] = [0,[1,2]]
// console.log(foo);  //0
// console.log(bar);  //1
// console.log(baj);  //2

// // 对象的解构赋值
// var { foo, bar } = { foo: "aaa", bar: "bbb" };
// console.log(foo);   // "aaa"
// console.log(bar );  // "bbb"

//forEach
// var numbers = [1, 2, 3, 4];
// numbers.forEach(function(item, index, array) {
//   console.log(item + "\t" + index + "\t" + array);
// });
// var array = [1, 2, 3];
// //传统写法
// array.forEach(function(v, i, a) {
//     console.log(v);
// });
// //ES6
// array.forEach(v => console.log(v));

// function add(x,y){
//   return y = y||10 //y传了就是y没传就是10
// }
// console.log(add(1));
// function add(x=10,y=20){
//   return x+y
// }
// console.log(add(5))

// function restFunc(a, ...rest) {
//   console.log(a)
//   console.log(rest)
// }
// restFunc(1);
// restFunc(1, 2, 3, 4);

// function(){
//   console.log(x);
//   var x=3
// }

// for (var i=0;i<3;i++){
//   console.log(i)//0,1,2
// }
// console.log(i)//3


// function Point(x,y){
//   this.x = x;
//   this.y = y;
// }
//
// Point.prototype.toString = function () {
//   return '(' + this.x + ', ' + this.y + ')';
// }
// var point = new Point(6,3);
// console.log(point.toString());//(6,3)
//

//类的定义
// class Animal {
//     //ES6中新型构造器
//     constructor(name) {
//         this.name = name;
//     }
//     //实例方法
//     sayName() {
//         console.log('My name is '+this.name);
//     }
// }
