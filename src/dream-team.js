const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members instanceof Array === false){
    return false;
  }
  let t = 0;
  for (let i = 0; i<members.length;i++) {
    if (typeof members[i] !== "string") {
      t+=1;
      members[i] = "";
    } else {
      members[i] = members[i].trim();
      members[i] = members[i].substring(0,1);
      members[i] = members[i].toUpperCase();
    }
  }

  if (t === members.length){
    return false;
  }

  members = members.sort();
  return members.join("");
};
