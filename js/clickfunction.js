
setInterval(() => {
  if(countarray.length==0){
    $('.return_btn').addClass('display_none')
  }else{
    $('.return_btn').removeClass('display_none')
    
  }
  
}, 200);


$('.info-page').css({
  background: `url(setpic/${set_pic_info[0]})`,
  backgroundSize: "cover"
})
if (set_pic_info.length > 1) {
  $('.info-btn-right').removeClass('display_none')
}
var picnowdisplay = 0
var picenddisplay = set_pic_info.length - 1
$('.info-btn-right').click(function () {
  picnowdisplay++
  $('.info-page').css({
    background: `url(setpic/${set_pic_info[picnowdisplay]})`,
    backgroundSize: "cover"
  })
  if (picnowdisplay == picenddisplay) {
    $('.info-btn-right').addClass('display_none')
  }
  if (picnowdisplay != 0) {
    $('.info-btn-left').removeClass('display_none')
  }
})
$('.info-btn-left').click(function () {
  picnowdisplay--
  $('.info-page').css({
    background: `url(setpic/${set_pic_info[picnowdisplay]})`,
    backgroundSize: "cover"
  })
  if (picnowdisplay == 0) {
    $('.info-btn-left').addClass('display_none')
  }
  if (picnowdisplay != picenddisplay) {
    $('.info-btn-right').removeClass('display_none')
  }

})



// 右邊按鈕選擇
$('.rightbtn').click(function () {
  $(this).children("p").css({ color: "#f04770" })
  $(".rightbtn").not(this).children("p").css({ color: "#1E99A9" })
  $(this).children(".circle").removeClass('display_none')
  $(".rightbtn").not(this).children(".circle").addClass('display_none')
  $('.ooo').addClass('display_none')
  console.log(`.background-${$(this).data = "linkto"}`)
  $(`.background-${$(this).data("linkto")}`).removeClass('display_none')
  biggernow = 0
  D4_biggernow = 0
  $('.D4_insideframe').css({

    transform: "scale(1)"
  })
  $('.D3_insideframe').css({

    transform: "scale(1)"
  })

  $('.D3_insideframe').css({
    cursor: "default"
  })
  $('.D4_insideframe').css({
    cursor: "default"
  })
})
// 羽毛
$('.insidebox').mouseenter(function () {
  $(this).css({ background: "#FFA149" })
  $(this).append(`<div class="brid"></div>`)
  $(this).children('p').css({ color: "#fff" })
  convertSizeALL()
});
$('.insidebox').mouseleave(function () {
  $(this).css({ background: "transparent" })
  $(this).children('.brid').remove()
  $(this).children('p').css({ color: "#ec5f07" })

});
$('.monthinsidebox').mouseenter(function () {
  $(this).css({ background: "#FFCD5C" })
  $(this).append(`<div class="brid"></div>`)
  $(this).children('p').css({ color: "#fff" })
  convertSizeALL()
});
$('.monthinsidebox').mouseleave(function () {
  $(this).css({ background: "transparent" })
  $(this).children('.brid').remove()
  $(this).children('p').css({ color: "#f09c06" })

});



$('.close_btn').click(function () {
  window.location.href = 'about:blank ';
  window.opener = null;
  window.open('', '_self');
  window.close();
})








// 選擇年分加SCROLLBAR

var clickko = 0
$('.scrollbarmyself').mousedown(function (e) {
  console.log(e)
  var halfheight = $('.bar').height() / 2
  var allheight = $('.scrollbarmyself').height()
  var positionnow = e.originalEvent.offsetY - halfheight
  if (positionnow <= 0) {
    positionnow = 0
  }
  if (positionnow >= allheight - (halfheight * 2)) {
    positionnow = allheight - (halfheight * 2)
  }
  $('.bar').css({ top: `${positionnow}px` })
  clickko = 1
  let heightscroll = $('.scrollbarmyself').height() - $('.bar').height()
  let nowscroll = positionnow / heightscroll
  $('.insideboxframe').scrollTop(`${Math.round(6750 * sRSS) * nowscroll}`)
})

$('.scrollbarmyself').mousemove(function (e) {
  if (clickko == 1) {
    var halfheight = $('.bar').height() / 2
    var allheight = $('.scrollbarmyself').height()
    var positionnow = e.originalEvent.offsetY - halfheight
    if (positionnow <= 0) {
      positionnow = 0
    }
    if (positionnow >= allheight - (halfheight * 2)) {
      positionnow = allheight - (halfheight * 2)
    }
    $('.bar').css({ top: `${positionnow}px` })
    let heightscroll = $('.scrollbarmyself').height() - $('.bar').height()
    let nowscroll = positionnow / heightscroll
    $('.insideboxframe').scrollTop(`${Math.round(6750 * sRSS) * nowscroll}`)
  }

})
$('body').mouseup(function (e) {
  clickko = 0
  D2_clickko = 0
  D4_clickko = 0
})

// month scrollbar

var clickko = 0
$('.scrollbarmymonth').mousedown(function (e) {
  console.log(e)
  var halfheight = $('.monthbar').height() / 2
  var allheight = $('.scrollbarmymonth').height()
  var positionnow = e.originalEvent.offsetY - halfheight
  if (positionnow <= 0) {
    positionnow = 0
  }
  if (positionnow >= allheight - (halfheight * 2)) {
    positionnow = allheight - (halfheight * 2)
  }
  $('.monthbar').css({ top: `${positionnow}px` })
  clickko = 1
  let heightscroll = $('.scrollbarmymonth').height() - $('.monthbar').height()
  let nowscroll = positionnow / heightscroll
  $('.monthboxframe').scrollTop(`${Math.round(560 * sRSS) * nowscroll}`)
})

$('.scrollbarmymonth').mousemove(function (e) {
  if (clickko == 1) {
    var halfheight = $('.monthbar').height() / 2
    var allheight = $('.scrollbarmymonth').height()
    var positionnow = e.originalEvent.offsetY - halfheight
    if (positionnow <= 0) {
      positionnow = 0
    }
    if (positionnow >= allheight - (halfheight * 2)) {
      positionnow = allheight - (halfheight * 2)
    }
    $('.monthbar').css({ top: `${positionnow}px` })
    let heightscroll = $('.scrollbarmymonth').height() - $('.monthbar').height()
    let nowscroll = positionnow / heightscroll
    $('.monthboxframe').scrollTop(`${Math.round(560 * sRSS) * nowscroll}`)
  }

})
$('body').mouseup(function (e) {
  clickko = 0
  D3_clickko = 0
})

// 監測SCROLLBAR
setInterval(() => {
  let nowscroll = $('.insideboxframe').scrollTop() / Math.round(6750 * sRSS)
  nowscroll = nowscroll.toFixed(2)
  let heightscroll = $('.scrollbarmyself').height() - $('.bar').height()
  let setnowheight = heightscroll * nowscroll

  $('.bar').css({
    top: `${setnowheight}px`
  })











  let monthnowscroll = $('.monthboxframe').scrollTop() / Math.round(560 * sRSS)
  monthnowscroll = monthnowscroll.toFixed(2)
  let monthheightscroll = $('.scrollbarmymonth').height() - $('.monthbar').height()
  let monthsetnowheight = monthheightscroll * monthnowscroll
  $('.monthbar').css({
    top: `${monthsetnowheight}px`
  })

  let D2_nowscroll = $('.D2_insideboxframe').scrollTop() / Math.round(6750 * sRSS)
  D2_nowscroll = D2_nowscroll.toFixed(2)
  let D2_heightscroll = $('.D2_scrollbarmyself').height() - $('.D2_bar').height()
  let D2_setnowheight = D2_heightscroll * D2_nowscroll
  $('.D2_bar').css({
    top: `${D2_setnowheight}px`
  })


  let D2_monthnowscroll = $('.D2_monthboxframe').scrollTop() / Math.round(560 * sRSS)
  D2_monthnowscroll = D2_monthnowscroll.toFixed(2)
  let D2_monthheightscroll = $('.D2_scrollbarmymonth').height() - $('.D2_monthbar').height()
  let D2_monthsetnowheight = D2_monthheightscroll * D2_monthnowscroll
  $('.D2_monthbar').css({
    top: `${D2_monthsetnowheight}px`
  })



  let D3_nowscroll = $('.D3_insideboxframe').scrollTop() / Math.round(6750 * sRSS)
  D3_nowscroll = D3_nowscroll.toFixed(2)
  let D3_heightscroll = $('.D3_scrollbarmyself').height() - $('.D3_bar').height()
  let D3_setnowheight = D3_heightscroll * D3_nowscroll
  $('.D3_bar').css({
    top: `${D3_setnowheight}px`
  })


  let D3_monthnowscroll = $('.D3_monthboxframe').scrollTop() / Math.round(560 * sRSS)
  D3_monthnowscroll = D3_monthnowscroll.toFixed(2)
  let D3_monthheightscroll = $('.D3_scrollbarmymonth').height() - $('.D3_monthbar').height()
  let D3_monthsetnowheight = D3_monthheightscroll * D3_monthnowscroll
  $('.D3_monthbar').css({
    top: `${D3_monthsetnowheight}px`
  })


  let D4_nowscroll = $('.D4_insideboxframe').scrollTop() / Math.round(6750 * sRSS)
  D4_nowscroll = D4_nowscroll.toFixed(2)
  let D4_heightscroll = $('.D4_scrollbarmyself').height() - $('.D4_bar').height()
  let D4_setnowheight = D4_heightscroll * D4_nowscroll
  $('.D4_bar').css({
    top: `${D4_setnowheight}px`
  })


  let D4_monthnowscroll = $('.D4_monthboxframe').scrollTop() / Math.round(560 * sRSS)
  D4_monthnowscroll = D4_monthnowscroll.toFixed(2)
  let D4_monthheightscroll = $('.D4_scrollbarmymonth').height() - $('.D4_monthbar').height()
  let D4_monthsetnowheight = D4_monthheightscroll * D4_monthnowscroll
  $('.D4_monthbar').css({
    top: `${D4_monthsetnowheight}px`
  })


}, 50);

// 點擊改變日期消除方塊產生區域
var toggleyear = 0
var togglemonth = 0
$('.insidebox').click(function () {

  let selectedmonth = $('.selectedmonth').text()
  selectedmonth = parseInt(selectedmonth)
  let showvidsnow = $('.showvidsnow').text()
  showvidsnow = parseInt( showvidsnow)
  displaymonthnow = selectedmonth-1
  displayyearnow = showvidsnow
  


  let nowclick = $(this).children('p').text()
  console.log(nowclick)
  $('.selectedyear').text(nowclick)
  $('.morerocyear,.scrollbarmyself').css({
    transform: "scaleY(0)"
  })
  displayyearnow = parseInt(nowclick) + 1911
  resetweekupdown()
  createdateex()
  countopenorclose()

  $('.showvidsnow').text(parseInt(nowclick) + 1911)
})
$('.rocyear').click(function () {
  if (toggleyear == 0) {
    let stagemonth = ((displayyearnow - 1911) - 70) / 96
    $('.insideboxframe').scrollTop(Math.round(6750 * sRSS * stagemonth))

    $('.morerocyear,.scrollbarmyself').css({
      transform: "scale(1)"
    })



    toggleyear = 1
  } else if (toggleyear == 1) {
    $('.morerocyear,.scrollbarmyself').css({
      transform: "scaleY(0)"
    })
    toggleyear = 0
  }


})


$('.monthinsidebox').click(function () {
  let selectedmonth = $('.selectedmonth').text()
  selectedmonth = parseInt(selectedmonth)
  let showvidsnow = $('.showvidsnow').text()
  showvidsnow = parseInt( showvidsnow)
  displaymonthnow = selectedmonth-1
  displayyearnow = showvidsnow
  



  let nowclick = $(this).children('p').text()
  console.log(nowclick)
  $('.selectedmonth').text(nowclick)
  $('.moremonth,.scrollbarmymonth').css({
    transform: "scaleY(0)"
  })
  displaymonthnow = parseInt(nowclick) - 1
  resetweekupdown()
  createdateex()
  countopenorclose()
})

$('.month').click(function () {

  if (togglemonth == 0) {
    $('.moremonth,.scrollbarmymonth').css({
      transform: "scale(1)"
    })
    togglemonth = 1
  } else if (togglemonth == 1) {
    $('.moremonth,.scrollbarmymonth').css({
      transform: "scaleY(0)"
    })
    togglemonth = 0
  }

})


var pre = 28
var next = 70
$('.preweek_btn').click(function () {
  if (pre >= 7) {
    pre -= 7
    next -= 7
    for (i = pre; i < pre + 7; i++) {
      $(`.box1:eq(${i})`).css({ display: "block" })
    }
    for (i = next; i < next + 7; i++) {
      $(`.box1:eq(${i})`).css({ display: "none" })
    }
    console.log(pre + "前", next + "後")
  }
  let nowmonthnext = displaymonthnow
  let nowyearnext = displayyearnow
  if (pre <= 7) {
    $('.colordark p').css({ color: "#000" })
    $('.box1:nth-child(7n+1).colordark p').css({ color: "rgba(238, 72, 111, 1)" })
    $('.box1:nth-child(7n).colordark p').css({ color: "rgba(238, 72, 111, 1)" })
    $('.fresh p').css({ color: "rgba(0, 0, 0, 0.35)" })
    $('.box1:nth-child(7n+1).fresh p').css({ color: "rgba(238, 72, 111, 0.4)" })
    $('.box1:nth-child(7n).fresh p').css({ color: "rgba(238, 72, 111, 0.4)" })

    if (nowmonthnext == 0) {
      nowmonthnext = 12
      nowyearnext = nowyearnext - 1
      $('.rocyear').children('.selectedyear').text(nowyearnext-1911)
      $('.vids').children(".showvidsnow").text(nowyearnext)
      $('.month').children('.selectedmonth').text(nowmonthnext)

    } else {

      $('.month').children('.selectedmonth').text(nowmonthnext)

    }
  }
  if (next < 84 && next >= 70) {
    $('.month').children('.selectedmonth').text(nowmonthnext + 1)
    $('.colordark p').css({ color: "rgba(0, 0, 0, 0.35)" })
    $('.box1:nth-child(7n+1).colordark p').css({ color: "rgba(238, 72, 111, 0.4)" })
    $('.box1:nth-child(7n).colordark p').css({ color: "rgba(238, 72, 111, 0.4)" })
    $('.fresh p').css({ color: "#000" })
    $('.box1:nth-child(7n+1).fresh p').css({ color: "rgba(238, 72, 111, 1)" })
    $('.box1:nth-child(7n).fresh p').css({ color: "rgba(238, 72, 111, 1)" })
  }

  displaymonthnow =  nowmonthnext
  displayyearnow = nowyearnext

})




$('.nextweek_btn').click(function () {
  if (next <= 91) {
    pre += 7
    next += 7
    for (i = pre - 7; i < pre; i++) {
      $(`.box1:eq(${i})`).css({ display: "none" })
    }
    for (i = next - 7; i < next; i++) {
      $(`.box1:eq(${i})`).css({ display: "block" })
    }
    console.log(next)
  }
  let nowmonthnext = displaymonthnow
  let nowyearnext = displayyearnow
  if (next >= 84) {
    $('.colordark p').css({ color: "#000" })
    $('.box1:nth-child(7n+1).colordark p').css({ color: "rgba(238, 72, 111, 1)" })
    $('.box1:nth-child(7n).colordark p').css({ color: "rgba(238, 72, 111, 1)" })
    $('.fresh p').css({ color: "rgba(0, 0, 0, 0.35)" })
    $('.box1:nth-child(7n+1).fresh p').css({ color: "rgba(238, 72, 111, 0.4)" })
    $('.box1:nth-child(7n).fresh p').css({ color: "rgba(238, 72, 111, 0.4)" })

    if (nowmonthnext == 11) {
      nowmonthnext = 1
      nowyearnext = nowyearnext + 1
      $('.rocyear').children('.selectedyear').text(nowyearnext-1911)
      $('.vids').children(".showvidsnow").text(nowyearnext )

    } else {
      nowmonthnext = nowmonthnext + 2
    }
  } else {
    nowmonthnext = nowmonthnext + 1

  }
  $('.month').children('.selectedmonth').text(nowmonthnext)

  if (pre >= 7 && pre < 28) {
    $('.month').children('.selectedmonth').text(nowmonthnext - 1)
    $('.colordark p').css({ color: "rgba(0, 0, 0, 0.35)" })
    $('.box1:nth-child(7n+1).colordark p').css({ color: "rgba(238, 72, 111, 0.4)" })
    $('.box1:nth-child(7n).colordark p').css({ color: "rgba(238, 72, 111, 0.4)" })
    $('.fresh p').css({ color: "#000" })
    $('.box1:nth-child(7n+1).fresh p').css({ color: "rgba(238, 72, 111, 1)" })
    $('.box1:nth-child(7n).fresh p').css({ color: "rgba(238, 72, 111, 1)" })
  }

})

function doublemonthchangetoanother() {
  displaymonthnow = _this[0]
  displayyearnow = _this[1]
}

function halfmonthchangetoanother() {
  displaymonthnow = half_this[0]
  displayyearnow = half_this[1]
}
function resetbigger() {
  stopBigger = 0
  D4_biggernow = 0

  $('.D4_box ').css({
    cursor: "default",
    transition: ''

  })
  $('.D4_bigger_watch').css({
    left: "7.4%"
  })
  $('.D4_bigger_watch_reback').css({
    opacity: 0,
    pointerEvents: "none"
  })
  $('.D4_insideframe').css({
    transformOrigin: "0 0",
    transform: 'scale(1)',
    cursor: "default"

  })

  D3_stopBigger = 0
  biggernow = 0

  $('.D3_month_box ').css({
    cursor: "default",
    transition: ''

  })
  $('.D3_bigger_watch').css({
    left: "7.4%"
  })
  $('.D3_bigger_watch_reback').css({
    opacity: 0,
    pointerEvents: "none"
  })
  $('.D3_insideframe').css({
    transformOrigin: "0 0",
    transform: 'scale(1)',
    cursor: "default"

  })


}

function resetweekupdown() {
  pre = 28
  next = 70
}
$('.month_btn').click(function () {
  if (choose == 2) {
    setmonthchangeDou()
    doublemonthchangetoanother()
  }
  if (choose == 3) {
    setmonthchangeHalf()
    halfmonthchangetoanother()
  }
  setmonthyears()
  resetweekupdown()
  createdateex()
  countopenorclose()
  addlistenmonth()
  $(`.fresh:eq(${displaydate - 1})`).css({ background: "#cdf7ed" })
  choose = 1
})
$('.day_btn').click(function () {
  if (choose == 2) {
    setmonthchangeDou()
    doublemonthchangetoanother()
  }
  if (choose == 3) {
    setmonthchangeHalf()
    halfmonthchangetoanother()
  }
  addlistenmonth()
  setweeknow()
  choose = 0
})
$('.today_btn').click(function () {
  var NOW = new Date();
  displayyearnow = NOW.getFullYear()
  displaymonthnow = NOW.getMonth()
  displaydate = NOW.getDate()
  countarray = []
  clearcountarray()
  $('.countimg').remove()
  setmonthyears()
  resetweekupdown()
  createdateex()
  countopenorclose()
  addlistenmonth()

  $(`.fresh:eq(${displaydate - 1})`).css({ background: "#cdf7ed" })
})
var findball = 0
var countarray = new Array()
var idont = new Array()
var num = new Array()
var useom = new Array()
$('.displaymonthex').on("click", ".box1", function () {
  if (countstart == 0) {
    $(this).css({
      background: "#cdf7ed",
      opacity: "1"
    })
    let thisnum = parseInt($(this).children('p').text())

    if ($(this).data("clicknowday") == "prebox") {
      if (displaymonthnow == 0) {
        displaymonthnow = 11
        displayyearnow = displayyearnow - 1
      } else {
        displaymonthnow = displaymonthnow - 1
      }

    } else if ($(this).data("clicknowday") == "nowbox") {
      displaymonthnow = displaymonthnow
    } else if ($(this).data("clicknowday") == "nextbox") {
      if (displaymonthnow == 11) {
        displaymonthnow = 0
        displayyearnow = displayyearnow + 1
      } else {
        displaymonthnow = displaymonthnow + 1
      }

    }

    displaydate = thisnum
    addlistenmonth()
    $('.box1').not(this).css({ background: "none" })
    // $('.colordark p').not(this).css({ color: "rgba(0, 0, 0, 0.349)" })
    // $('.box1:nth-child(7n+1).colordark p').not(this).css({ color: "#ee486f6e" })
    // $('.box1:nth-child(7n).colordark p').not(this).css({ color: "#ee486f6e" })

  }

  if (countstart == 1) {
    // if(countarray.indexOf(findball)>-1){

    // }else{

    if ($(this).children(".countimg").data()) {
      var removeobj = countarray.indexOf($(this).children(".countimg").data('ball'))
      var findout = $(this).children(".countimg").data('ball')
      countarray.splice(removeobj, 1)
      $(this).children(".countimg").remove()
      idont = []
      num = []
      useom = []
      for (i = 0; i < $('.countimg').length; i++) {
        idont.push($(`.countimg:eq(${i})`))
        num.push(idont[i].data('ball'))
      }


      useom = num.concat(useom)
      useom.sort(function (a, b) {
        return a - b
      });

      console.log(useom)

      for (i = 0; i < $('.countimg').length; i++) {
        $(`.countimg:eq(${i})`).children('p').text(useom.indexOf(num[i]) + 1)

      }


    } else {
      findball++
      countarray.push(findball)
      $(this).append(`<div class="countimg" data-ball="${findball}"><p>${countarray.indexOf(findball) + 1}</p></div>`)

    }

    // }


  }
  clearcountarray()
  convertSizeALL()

})
function setmonthyears() {
  $('.selectedmonth').text(displaymonthnow + 1)
  $('.selectedyear').text(displayyearnow - 1911)
  $('.showvidsnow').text(displayyearnow)
}

$('.premonth_btn').click(function () {
  let selectedmonth = $('.selectedmonth').text()
  selectedmonth = parseInt(selectedmonth)
  let showvidsnow = $('.showvidsnow').text()
  showvidsnow = parseInt( showvidsnow)
  displaymonthnow = selectedmonth-1
  displayyearnow = showvidsnow

  if (displaymonthnow == 0) {
    displaymonthnow = 11
    displayyearnow = displayyearnow - 1
  } else {
    displaymonthnow = displaymonthnow - 1
  }
 

  countarray = []
  clearcountarray()
  $('.countimg').remove()
  setmonthyears()
  resetweekupdown()
  createdateex()
  countopenorclose()
})
$('.nextmonth_btn').click(function () {
  let selectedmonth = $('.selectedmonth').text()
  selectedmonth = parseInt(selectedmonth)
  let showvidsnow = $('.showvidsnow').text()
  showvidsnow = parseInt( showvidsnow)
  displaymonthnow = selectedmonth-1
  displayyearnow = showvidsnow


  if (displaymonthnow == 11) {
    displaymonthnow = 0
    displayyearnow = displayyearnow + 1
  } else {
    displaymonthnow = displaymonthnow + 1
  }
  countarray = []
  clearcountarray()
  $('.countimg').remove()

  setmonthyears()
  resetweekupdown()
  createdateex()
  countopenorclose()
})
$('.preyear_btn').click(function () {
  let selectedmonth = $('.selectedmonth').text()
  selectedmonth = parseInt(selectedmonth)
  let showvidsnow = $('.showvidsnow').text()
  showvidsnow = parseInt( showvidsnow)
  displaymonthnow = selectedmonth-1
  displayyearnow = showvidsnow

  displayyearnow = displayyearnow - 1
  countarray = []
  clearcountarray()
  $('.countimg').remove()

  setmonthyears()
  resetweekupdown()
  createdateex()
  countopenorclose()
})
$('.nextyear_btn').click(function () {
  let selectedmonth = $('.selectedmonth').text()
  selectedmonth = parseInt(selectedmonth)
  let showvidsnow = $('.showvidsnow').text()
  showvidsnow = parseInt( showvidsnow)
  displaymonthnow = selectedmonth-1
  displayyearnow = showvidsnow


  displayyearnow = displayyearnow + 1
  countarray = []
  clearcountarray()
  $('.countimg').remove()

  setmonthyears()
  resetweekupdown()
  createdateex()
  countopenorclose()
})
var countstart = 0
function countopenorclose() {
  if (countstart == 1) {
    $('.countday_btn').css({
      background: "url(img/tb2.svg)",
      backgroundSize: "cover"
    })
    // $('.return_btn').css({
    //   background: "url(img/tb5.svg)",
    //   backgroundSize: "cover"
    // })
    countarray = []
    $('.countimg').remove()
    clearcountarray()
    countstart = 0
    $('.countnumber').addClass('display_none')

  }
}

$('.countday_btn').click(function () {
  if (countstart == 0) {
    $('.countday_btn').css({
      background: "url(img/tb1.svg)",
      backgroundSize: "cover"
    })
    // $('.return_btn').css({
    //   background: "url(img/tb4.svg)",
    //   backgroundSize: "cover"
    // })
    countstart = 1
    $('.countnumber').removeClass('display_none')


  } else if (countstart == 1) {
    $('.countday_btn').css({
      background: "url(img/tb2.svg)",
      backgroundSize: "cover"
    })
    // $('.return_btn').css({
    //   background: "url(img/tb5.svg)",
    //   backgroundSize: "cover"
    // })
    countstart = 0
    $('.countnumber').addClass('display_none')
  }
})
function clearcountarray() {
  $('.countnumber').text(`${countarray.length}`)
}

$('.return_btn').click(function () {
    countarray = []
    $('.countimg').remove()
    clearcountarray()

})

// day--------------------------------------------------------
$('.D1_year_pre').click(function () {
  if (displayyearnow == 1981) {
    displayyearnow = displayyearnow
  } else {
    displayyearnow = displayyearnow - 1
  }
  addlistenmonth()
  setweeknow()
})
$('.D1_year_next').click(function () {
  if (displayyearnow == 2080) {
    displayyearnow = displayyearnow
  } else {
    displayyearnow = displayyearnow + 1
  }
  addlistenmonth()
  setweeknow()
})
$('.D1_month_pre').click(function () {
  if (displaymonthnow == 0) {
    displaymonthnow = 11
    if (displayyearnow == 1981) {
      displayyearnow = displayyearnow
      displaymonthnow = 0
    } else {
      displayyearnow = displayyearnow - 1
    }
  } else {
    displaymonthnow = displaymonthnow - 1
  }
  addlistenmonth()
  setweeknow()
})

$('.D1_month_next').click(function () {
  if (displaymonthnow == 11) {
    displaymonthnow = 0
    if (displayyearnow == 2080) {
      displayyearnow = displayyearnow
      displaymonthnow = 11
    } else {
      displayyearnow = displayyearnow + 1
    }
  } else {
    displaymonthnow = displaymonthnow + 1
  }
  addlistenmonth()
  setweeknow()
})

var weekwords = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']



function daysMonth(month, year) {
  var tmp = year % 4;
  if (tmp == 0) {
    return (month_olympic[month]);
  } else {
    return (month_normal[month]);
  }
}
function findaynow(month, year, day) {
  var tmpDate = new Date(year, month, day);
  return (tmpDate.getDay());
}



$('.D1_day_pre').click(function () {
  if (displaydate == 1) {
    if (displaymonthnow == 0) {
      displaymonthnow = 11
      displayyearnow = displayyearnow - 1
    } else {
      displaymonthnow = displaymonthnow - 1
    }
    displaydate = daysMonth(displaymonthnow, displayyearnow)
  } else {
    displaydate = displaydate - 1
  }
  addlistenmonth()
  setweeknow()
})

$('.D1_day_next').click(function () {
  let qq = daysMonth(displaymonthnow, displayyearnow)
  if (displaydate == qq) {
    if (displaymonthnow == 11) {
      displaymonthnow = 0
      displayyearnow = displayyearnow + 1
    } else {
      displaymonthnow = displaymonthnow + 1
    }
    displaydate = 1
  } else {
    displaydate = displaydate + 1
  }
  addlistenmonth()
  setweeknow()
})
$('.D1_today_btn').click(function () {
  var NOW = new Date();
  displayyearnow = NOW.getFullYear()
  displaymonthnow = NOW.getMonth()
  displaydate = NOW.getDate()

  addlistenmonth()
  setweeknow()
})


$('.howtouse_btn').click(function () {
  $('.mask').removeClass('display_none')
})
$('.btn_close_inset ').click(function () {
  $('.mask').addClass('display_none')
})


$('.info-close-btn').click(function () {

  $('.mask-info').css({
    transform: "translateY(-1000px)",
    opacity: 0
  })

})

setInterval(function () {
  let D1_weeknow = $('.D1_week').text()
  if (D1_weeknow == "星期六" || D1_weeknow == "星期日") {
    $('.D1_week').css({
      color: "#ee486e"
    })
    $('.D1_day').css({
      color: "#ee486e"
    })
  } else {
    $('.D1_week').css({
      color: "#1E99A9"
    })
    $('.D1_day').css({
      color: "#000"
    })
  }
}, 100)