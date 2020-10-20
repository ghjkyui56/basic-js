const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine(type) {

  encrypt(message, key) {
    if(message === undefined || key === undefined || key === null || message === null){
      throw Error;
    }


  }    
  decrypt(message, key) {
    if(message === undefined || key === undefined || key === null || message === null){
      throw Error;
    }


  }
}

module.exports = VigenereCipheringMachine;
