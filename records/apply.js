/**
 * 模拟apply的实现
 */ 
Function.prototype._apply = function(target,...arg){
  if(typeof this !== "function"){
    throw TypeError("Error 缺少函数");
  }
  let result = null;
  // 判断是否存在第一个参数targets,没有则指向window
  target = target || window;
  // 将函数所有者当作目标的属性
  target.fn = this;
  if(arg.length > 0){
    result = target.fn(...arg);
  }else{
    result = target.fn()
  }
  // 删除属性
  delete target.fn;
  return result;
}