/**
 * @author leeyunxiang
 * @param fn 回调函数
 * @param delay 延时时间
 * @param moment 是否立即触发
 * */ 

const debounce = (fn,delay = 400,moment = false) => {
  let timer = null;
  let now = true; //是否是第一次
  let result;
  return function (){
    clearTimeout(timer);
    if(moment){
      // 如果是立即触发，立即执行
      if(now){
        // 第一次直接触发
        result = fn.apply(this,arguments);
        now = false;
      }else{
        timer = setTimeout(() => {
          // 绑定this指向
          fn.apply(this,arguments);
        },delay)
      }
    }else{
      // 没有设置立即触发则延时触发
      timer = setTimeout(() => {
        fn.apply(this,arguments);
      },delay)
    }
    return result;
  }
} 