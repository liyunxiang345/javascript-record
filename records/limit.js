/**
 * @param fn {Function} 要限制执行次数的方法
 * @param num {Number} 最大可执行次数 default: 1
 * @description 原理：闭包，验证次数
 */

 const _limitFrequence = (fn,num = 1) => {
    let time = 0;
    let result;
    return function (){
      if(time < num){
        time++;
        result = fn.apply(this,arguments);
      }
      return result;
    }
 }