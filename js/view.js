
// 產出一百年份
for (i = 0; i < 100; i++) {
  $('.insideboxframe').append(`<div class="insidebox"><p class='one${70 + i}'>${70 + i}</p></div>`)
  $('.D2_insideboxframe').append(`<div class="D2_insidebox"><p>${70 + i}</p></div>`)
  $('.D3_insideboxframe').append(`<div class="D3_insidebox"><p>${70 + i}</p></div>`)
  $('.D4_insideboxframe').append(`<div class="D4_insidebox"><p>${70 + i}</p></div>`)

}
// 產出12月份
var monthappend = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
for (i = 0; i < 12; i++) {
  $('.monthboxframe').append(`<div class="monthinsidebox"><p>${monthappend[i]}</p></div>`)
  $('.D2_monthboxframe').append(`<div class="D2_monthinsidebox" data-choosemonth="${i + 1}"><p>${D2_monthappend[i]}</p></div>`)
  $('.D3_monthboxframe').append(`<div class="D3_monthinsidebox" data-choosemonth="${i + 1}"><p>${D3_monthappend[i]}</p></div>`)
}
var lunarmonth = ['端月', "花月", "桐月", "梅月", "蒲月", "荔月", "瓜月", "桂月", "菊月", "陽月", "葭月", "臘月"]
var lunarday = ["初一", "初二", "初三", "初四", "初五", "初六", "初七", "初八", "初九", "初十", "十一日", "十二日", "十三日", "十四日", "十五日", "十六日", "十七日", "十八日", "十九日", "廿日", "廿一日", "廿二日", "廿三日", "廿四日", "廿五日", "廿六日", "廿七日", "廿八日", "廿九日", "三十日", "三十一日"]
function addlistenmonth() {
  $('.D1_day').text(displaydate)
  $('.D1_rocyear').text(displayyearnow - 1911)
  $('.D1_ac_year').text(displayyearnow)
  $('.D1_month').text(displaymonthnow + 1)
  let converter = new LunarSolarConverter();
  let solar = new Solar();
  solar.solarYear = displayyearnow;
  solar.solarMonth = displaymonthnow + 1;
  solar.solarDay = displaydate;
  var lunar = converter.SolarToLunar(solar);

  $('.D1_lunar_month').text(lunarmonth[lunar.lunarMonth-1])
  $('.D1_lunar_day').text(lunarday[lunar.lunarDay-1])
}
function setweeknow() {
  let weeknow = findaynow(displaymonthnow, displayyearnow, displaydate)
  $('.D1_week').text(`${weekwords[weeknow]}`)
}


addlistenmonth()