Function.prototype._call = function(target,...arg){
  if(typeof this !== "function"){
    throw TypeError("Error 缺少函数")
  }
  let result = null;
  // 判断是否存在第一个参数_arguments,没有则指向window
  target = target || window;
  // 将函数所有者当作目标的属性
  target.fn = this;
  // 调用函数
  result = target.fn(...arg);
  // 删除属性
  delete target.fn;
  return result;
}