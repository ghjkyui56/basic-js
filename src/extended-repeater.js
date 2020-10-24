const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (str !== String){
    str = String(str);
  }

  s = str;
  str = "";
  k = "";

  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }

  if (options.separator === undefined) {
    options.separator = "+";
  }

  if (options.additionSeparator === undefined) {
    options.additionSeparator = "";
  }

  if (options.additionRepeatTimes !== undefined){
    for (let l = 0; l<options.additionRepeatTimes-1; l++){
      k = k + options.addition + options.additionSeparator;
    }
    k = k + options.addition;
  } else {
    k = options.addition;
  }

  for (let i = 0; i<options.repeatTimes;i++){
    if (options.addition !== undefined){
        str = str + s + k + options.separator;
    } else {
      str = s + options.separator + str;
    }
  }


  str = str.substring(0, str.length - options.separator.length);
  return str;
};
  
