var console = require("console");

module.exports.function = function showVerse (name) {
  const bibleData = require("Bible.js");
  var verse;
  var jang = ['일', '이', '삼', '사', '오', '육', '칠', '팔', '구', '십'];
  var jul = ['일', '이', '삼', '사', '오', '육', '칠', '팔', '구', '십'];

  for(var i=0; i < jang.length; ++i) {
    name = name.replace(jang[i]+"장", String(i+1)+"장");
  }
  for(var i=0; i < jul.length; ++i) {
    name = name.replace(jul[i]+"절", String(i+1)+"절");
  }
  if (name[name.indexOf("장") + 1] != " ") {
    name = name.replace("장", "장 ");
  }
  if (name[name.indexOf("절") - 1] == " ") {
    name = name.replace(" 절", "절");
  }

  name = name.replace("열왕 기상", "열왕기상");
  name = name.replace("열왕 기하", "열왕기하");
  name = name.replace("역대 지하", "역대지하");
  name = name.replace("역대 지상", "역대지상");
  name = name.replace("열왕기 상", "열왕기상");
  name = name.replace("열왕기 하", "열왕기하");
  name = name.replace("역대지 하", "역대지하");
  name = name.replace("역대지 상", "역대지상");
  name = name.replace("사무엘 기상", "사무엘기상");
  name = name.replace("사무엘 기하", "사무엘기하");
  name = name.replace("사무엘기 상", "사무엘기상");
  name = name.replace("사무엘기 하", "사무엘기하");
  name = name.replace("일정", "1장");
  name = name.replace("오전", "5절");

  var searchedBible = bibleData.filter (function(aBible) {
      return aBible.name == name;
    });

  if (searchedBible.length == 0) {
    verse = "검색 결과가 없습니다.";
  }
  else {
    verse = searchedBible[0].verse;
  }
  console.log("title: ", name);
  console.log("verse: ", verse);

  return verse;
}