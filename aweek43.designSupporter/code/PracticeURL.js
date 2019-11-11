var console = require("console");

module.exports.function = function practiceURL (practiceType) {
  var url = "https://www.google.com/search?q=";
  url += String(practiceType) + " 연습";

  url += encodeURI("&tbm=isch&sa");
  console.log("url : ", url);
  return url
}
