// 設定起始網頁

var features = ['day', 'month', 'doublemonth', 'halfyear', 'year']
var choose = 1

$(`.${features[choose]}_btn p`).css({ color: "#f04770" })
$(`.${features[choose]}_btn .circle`).removeClass('display_none')
// 產出一百年份
for (i = 0; i < 100; i++) {
  $('.insideboxframe').append(`<div class="insidebox"><p>${70 + i}</p></div>`)
  $('.D2_insideboxframe').append(`<div class="D2_insidebox"><p>${70 + i}</p></div>`)
  $('.D3_insideboxframe').append(`<div class="D3_insidebox"><p>${70 + i}</p></div>`)
  $('.D4_insideboxframe').append(`<div class="D4_insidebox"><p>${70 + i}</p></div>`)

}
// 產出12月份
var monthappend = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
for (i = 0; i < 12; i++) {
  $('.monthboxframe').append(`<div class="monthinsidebox"><p>${monthappend[i]}</p></div>`)
  $('.D2_monthboxframe').append(`<div class="D2_monthinsidebox" data-choosemonth="${i+1}"><p>${D2_monthappend[i]}</p></div>`)
  $('.D3_monthboxframe').append(`<div class="D3_monthinsidebox" data-choosemonth="${i+1}"><p>${D3_monthappend[i]}</p></div>`)
}
function addlistenmonth() {
  $('.D1_day').text(displaydate)
  $('.D1_rocyear').text(displayyearnow - 1911)
  $('.D1_ac_year').text(displayyearnow)
  $('.D1_month').text(displaymonthnow + 1)
}
function setweeknow() {
  let weeknow = findaynow(displaymonthnow, displayyearnow, displaydate)
  $('.D1_week').text(`${weekwords[weeknow]}`)
}


addlistenmonth()