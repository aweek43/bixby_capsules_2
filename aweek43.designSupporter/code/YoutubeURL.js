var console = require("console");

module.exports.function = function youtubeURL (youtubeName) {
  const urlData = require("youtubeLink.js");
  console.log("name: ", youtubeName);
  
  var searchedURL = urlData.filter (function(aURL) {
      return aURL.name == youtubeName;
    });

  if(searchedURL.length == 0) {
    var url = 0;
  }
  else {
    var url = searchedURL[0].link;
  }

  console.log("url: ", url);
  return url
}
