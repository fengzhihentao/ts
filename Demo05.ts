// 函数参数和返回类型
function getTotal(one:number,two:number):number{
  return one+two
}
let total0 = getTotal(1,2)
// 没有返回值
function sayHello() :void {
  console.log("hello world");
}
// 永远执行不完
function errorFunction () :never {
  throw new Error()
  console.log('123');
}
function forNever():never {
  while(true){}
  console.log("123");
}

function add ({one,two}:{one:number,two:number}){
  return one+two
}
const total1 = add({one:1,two:2})
console.log(total1);
