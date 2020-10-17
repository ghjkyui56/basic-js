const CustomError = require("../extensions/custom-error");

arr = [];
str = '';

const chainMaker = {
  getLength() {
    return arr.length;
  },
  addLink(value) {
    if (value === null){
      value = 'null';
    } else if(value === Number){
      value = value.toString();
    };
    str = "( " + value + " )";

    arr.push(str);

    str = '';
    return this;
  },
  removeLink(position) {

    if(typeof(position) !== "number"){
      arr = [];
      str = '';
      throw Error;
    } else if(position > arr.length - 1 || position <= 0){
      arr = [];
      str = '';
      throw Error;
    } 

    arr.splice(position-1, 1);
  
    return this;
    
  },
  reverseChain() {

  arr.reverse();
  return this;
    
  },

  finishChain() {
    str = arr.join('~~');
    arr = [];
    return str;
  }
};

module.exports = chainMaker;
