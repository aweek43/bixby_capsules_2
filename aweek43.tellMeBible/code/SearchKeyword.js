var console = require("console");

module.exports.function = function showVerse (keyword) {
  const bibleData = require("Bible.js");

  var verselist = [];

  var searchedBible = bibleData.filter (function(aBible) {
      return aBible.verse.indexOf(keyword) != -1;
    });

  if(searchedBible.length == 0) {
    var nothing = {"name": "검색 결과가 없습니다.",
                  "verse": " "};
    verselist.push(nothing);
  }
  else if(searchedBible.length == 1) {
    verselist.push(searchedBible[0]);
  }
  else if(searchedBible.length == 2) {
    verselist.push(searchedBible[0]);
    verselist.push(searchedBible[1]);
  }
  else if(searchedBible.length >= 3) {
    verselist.push(searchedBible[0]);
    verselist.push(searchedBible[1]);
    verselist.push(searchedBible[2]);
  }

  console.log("verselist: ", verselist);

  return verselist;
}
