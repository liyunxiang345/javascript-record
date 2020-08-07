/**
 * 模拟apply的实现
 */ 
Function.prototype._apply = function(_argument){
  if(typeof this !== "function"){
    throw TypeError("Error 缺少函数");
  }
  let result = null;
  // 判断是否存在第一个参数_arguments,没有则指向window
  _argument = _argument || window;
  // 将函数所有者当作目标的属性
  _argument.fn = this;
  if(arguments[1]){
    result = _argument.fn(...arguments[1]);
  }else{
    result = _argument.fn()
  }
  // 删除属性
  delete _argument.fn;
  return result;
}