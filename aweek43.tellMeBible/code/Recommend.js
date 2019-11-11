var console = require("console");

module.exports.function = function recommend () {
  const bibleData = require("Bible.js");

  var namelist = ["시편 9장 10절",
                  "역대지하 20장 20절",
                  "시편 46장 10절",
                  "여호수아기 1장 9절",
                  "시편 13장 5절",
                  "시편 56장 3절",
                  "잠언 15장 13절",
                  "잠언 24장 1절",
                  "이사야서 41장 10절",
                  "이사야서 40장 29절"];
  var name = namelist[Math.floor(Math.random() * 10)];
  console.log("name: ", name);

  var searchedBible = bibleData.filter (function(aBible) {
      return aBible.name == name;
    });

  var verse = searchedBible[0].verse;
  console.log("verse: ", verse);

  return verse;
}