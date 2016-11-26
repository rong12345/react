[ruanyifeng](http://es6.ruanyifeng.com/)
[newming](http://newming.coding.me/myidoc/html/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/ES6%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8.html)
## let:声明变量
let的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。
#### let命令所在的代码块内有效
```js
{
  let x = 2;
  var y = 3;
}
console.log(x); //ReferenceError: a is not defined.
console.log(y); //3
```
```js
let上一级的花括号内都可以访问
{
  let x =3;
  {
    console.log(x) //3
  }
}
```
#### let 不存在变量提升
var 和 let 的变量提升行为也不同，首先了解什么叫变量提升，即
```js
var k = 'test'  
function func(){  
  console.log(k)  // undefined
    var k = 'in'
}
func()
```
即函数中的所有 var 的函数声明都会被提前到函数的头部，对于 var 来说，上面的代码相当于
```js
var k = 'test'  
function func(){  
  var k
  console.log(k)  // undefined
    k = 'in'
}
func()
```
而 let 的表现更为严格，同样的，let 的声明也会被提前，但是如果在这种情况下试图访问尚未初始化的 k ，会抛出一个 ReferenceError 。我们称这种特性为\”暂时性死区\”，这样能够避免一些奇奇怪怪的失误。
另外，由于作用域的原因， let 的声明提前在代码块中就能生效。


```js
console.log(xxx) //undefined 已经声明了但是没有值
var xxx=123
```
```js
console.log(xxx) //报错
let xxx = 123   
```
## const
声明一个只读的常量。一旦声明，常量的值就不能改变
```js
const PI = 3.1415;
PI // 3.1415

PI = 3;
// TypeError: Assignment to constant variable.
```

## 解构
解构意思就是分解一个东西的结构,可以用一种类似数组的方式定义N个变量，可以将一个数组中的值按照规则赋值过去。
```js
var [name,age] = ['zfpx',8];
console.log(name,age); // zfpx 8
```
```js
var [x,y]=getVal(),//函数返回值的解构
[name,,age]=['zf','male','secrect'];//数组解构
```
```js
function getVal() {
    return [ 1, 2 ];
}

console.log('x:'+x+', y:'+y);//输出：x:1, y:2
console.log('name:'+name+', age:'+age);//输出： name:zf, age:secrect
```
```js
// 数组的解构赋值
let [foo,[bar,baj]] = [0,[1,2]]
console.log(foo);  //0
console.log(bar);  //1
console.log(baj);  //2
```

```js
// 对象的解构赋值
var { foo, bar } = { foo: "aaa", bar: "bbb" };
console.log(foo);   // "aaa"
console.log(bar );  // "bbb"
```
```js
// 字符串的解构赋值
const [a, b, c, d, e] = 'hello';
console.log(a + b + c + e); // 'hello'
```
### Arrows 箭头函数
- 箭头函数简化了函数的的定义方式，一般以 "=>" 操作符左边为输入的参数，而右边则是进行的操作以及返回的值Inputs=>outputs
- 箭头函数根本没有自己的this，导致内部的this就是外层代码块的this

```js
//以前
let [a,b]=[1,2];
function add(a,b) {
  console.log(a+b);
}
add(a,b);
//现在
let [a,b]=[1,2];
let add = (a,b) => console.log(a+b);
//let add = a => console.log(a)  一个参数括号可省略
add(a,b);
```
```js
//forEach
var numbers = [1, 2, 3, 4];
numbers.forEach(function(item, index, array) {
  console.log(item + "\t" + index + "\t" + array);
});
```
```js
var array = [1, 2, 3];
//传统写法
array.forEach(function(v, i, a) {
    console.log(v);
});
//ES6
array.forEach(v => console.log(v));
```
```js
function add(x,y){
  return y = y||10 //y传了就是y没传就是10
}
add(1)
```
```js
function add(x=10,y=20){
  return x+y
}
console.log(add(5))
```
```js
// rest
function restFunc(a, ...rest) {
  console.log(a)
  console.log(rest)
}
restFunc(1);
restFunc(1, 2, 3, 4);
```
```js
//将所有参数相加的函数
function add(...x){
    return x.reduce((m,n)=>m+n);
}
//传递任意个数的参数
console.log(add(1,2,3));//输出：6
console.log(add(1,2,3,4,5));//输出：15
```
### 乘法加法
```js
class Block{
  constructor(width,height) {
    this.width = width;
    this.height = height;
  }
  area(){
    var num =this.width*this.height;
    console.log(num);
  }
  add(){
    console.log(this.width+this.height);
  }
}
let block1 = new Block(3,4);
let block3 = new Block(2,4);
let block2 = new Block(2,3);
block1.area();
block3.area();
block2.add();
```
