// 設定起始網頁

var features = ['day', 'month', 'doublemonth', 'halfyear', 'year']
var choose = 1

$(`.${features[choose]}_btn p`).css({ color: "#f04770" })
$(`.${features[choose]}_btn .circle`).removeClass('display_none')
// 產出一百年份
for (i = 0; i < 100; i++) {
    $('.insideboxframe').append(`<div class="insidebox"><p>${70 + i}</p></div>`)
  }
  // 產出12月份
var monthappend= [1,2,3,4,5,6,7,8,9,10,11,12]

for (i = 0; i < 12; i++) {
  $('.monthboxframe').append(`<div class="monthinsidebox"><p>${monthappend[i]}</p></div>`)
}

