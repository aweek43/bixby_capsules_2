var console = require("console");

module.exports.function = function searchInfo (name) {
  const colorData = require("colors.js");
  var RGB = "default";
  var CMYK = "default";
  var searchedCode = colorData.filter (function(aColor) {
      return aColor.name == name;
    });

  if(searchedCode.length == 0) {
    var colorInfo = {
      "rgb": 0,
      "cmyk": 0
    };
  }
  else {
    var colorInfo = {
      "rgb": searchedCode[0].rgb,
      "cmyk": searchedCode[0].cmyk
    };
  }

  console.log("colorInfo: ", colorInfo);

  return colorInfo;
}
