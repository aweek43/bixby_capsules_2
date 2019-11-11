var console = require("console");

module.exports.function = function searchCode (name) {
  const colorData = require("colors.js");
  var code = "default";
  var searchedCode = colorData.filter (function(aColor) {
      return aColor.name == name;
    });

  if(searchedCode.length == 0) {
    code = 0;
  }
  else {
    code = searchedCode[0].code;
  }

  console.log("code: ", code);

  return code;
}
