// 静态类型
const num :number = 1;
interface XiaoJieJie {
  uname:string,
  age:number
}
// 自定义静态类型
const xiaoHong :XiaoJieJie = {
  uname:'小红',
  age:15
}
console.log(xiaoHong.age);
