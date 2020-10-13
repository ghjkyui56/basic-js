const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (arr === []){
    return [];
  }

  if(!arr instanceof Array){
    throw Error;  
  }

  t = [];



  for (let i = 0; i<arr.length;i++){

    if (arr[i]=== '--discard-next'){
      
      if(i !== arr.length - 1) i = i + 1;
    
    } else if (arr[i] ==='--discard-prev' && arr[i-2] !== '--discard-next'){
      if (i>0) t.pop();
      
    } else if (arr[i] ==='--double-next'){
      if(i !== arr.length - 1) t.push(arr[i+1]);
      
    } else if (arr[i] ==='--double-prev' && arr[i-2] !== '--discard-next'){
      if (i>0) t.push(arr[i-1]);

    } else if(arr[i]!=='--discard-prev' && arr[i] !== '--double-prev'){
      t.push(arr[i]);
    }

  }

  return t;
};

