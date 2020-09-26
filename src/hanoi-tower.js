const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  n = {};
  n.turns = (2**disksNumber)-1;

  n.seconds = n.turns / (turnsSpeed/3600);

  n.seconds = Math.floor(n.seconds);

  return n;
};
