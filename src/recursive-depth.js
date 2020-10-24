const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  
  calculateDepth(arr) {
    let k = 1;
    let n = 1;
    for (let i in arr){
      if (Array.isArray(i)){
        n+= calculateDepth(i);
        if (n>k){
          k = n;
        }
      }
    };
  };


};