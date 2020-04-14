

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
  $('.insideboxframe').scrollTop(`${Math.round(6720 * sRSS) * nowscroll}`)
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
    $('.insideboxframe').scrollTop(`${Math.round(6720 * sRSS) * nowscroll}`)
  }

})
$('body').mouseup(function (e) {
  clickko = 0
  D2_clickko = 0
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
  let nowscroll = $('.insideboxframe').scrollTop() / Math.round(6720 * sRSS)
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

  let D2_nowscroll = $('.D2_insideboxframe').scrollTop() / Math.round(6720 * sRSS)
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



  let D3_nowscroll = $('.D3_insideboxframe').scrollTop() / Math.round(6720 * sRSS)
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



}, 50);

// 點擊改變日期消除方塊產生區域
var toggleyear = 0
var togglemonth = 0
$('.insidebox').click(function () {
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
  }
  if (pre == 7) {
    let nowmonthnext = $('.month').children('.selectedmonth').text()
    nowmonthnext = parseInt(nowmonthnext)
    let nowyearnext = $('.rocyear').children('.selectedyear').text()
    nowyearnext = parseInt(nowyearnext)

    if (nowmonthnext == 1) {
      nowmonthnext = 12
      nowyearnext = nowyearnext - 1
      $('.rocyear').children('.selectedyear').text(nowyearnext)
      $('.vids').children(".showvidsnow").text(nowyearnext + 1911)

    } else {
      nowmonthnext = nowmonthnext - 1
    }
    $('.month').children('.selectedmonth').text(nowmonthnext)
  }

  if (next == 84) {
    $('.rocyear').children('.selectedyear').text(displayyearnow - 1911)
    $('.month').children('.selectedmonth').text(displaymonthnow + 1)
  }

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
  if (next == 84) {
    let nowmonthnext = $('.month').children('.selectedmonth').text()
    nowmonthnext = parseInt(nowmonthnext)
    let nowyearnext = $('.rocyear').children('.selectedyear').text()
    nowyearnext = parseInt(nowyearnext)

    if (nowmonthnext == 12) {
      nowmonthnext = 1
      nowyearnext = nowyearnext + 1
      $('.rocyear').children('.selectedyear').text(nowyearnext)
      $('.vids').children(".showvidsnow").text(nowyearnext + 1911)

    } else {
      nowmonthnext = nowmonthnext + 1
    }
    $('.month').children('.selectedmonth').text(nowmonthnext)
  }
  if (pre == 14) {
    $('.rocyear').children('.selectedyear').text(displayyearnow - 1911)
    $('.month').children('.selectedmonth').text(displaymonthnow + 1)
  }

})
function resetweekupdown() {
  pre = 28
  next = 70
}
$('.month_btn').click(function () {
  setmonthyears()
  resetweekupdown()
  createdateex()
  countopenorclose()
  addlistenmonth()
  $(`.fresh:eq(${displaydate - 1})`).css({ background: "#cdf7ed" })
})
$('.day_btn').click(function () {
  addlistenmonth()
  setweeknow()
})
$('.today_btn').click(function () {
  var NOW = new Date();
  displayyearnow = NOW.getFullYear()
  displaymonthnow = NOW.getMonth()
  displaydate = NOW.getDate()
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
    $('.colordark p').not(this).css({ color: "rgba(0, 0, 0, 0.349)" })
    $('.box1:nth-child(7n+1).colordark p').not(this).css({ color: "#ee486f6e" })
    $('.box1:nth-child(7n).colordark p').not(this).css({ color: "#ee486f6e" })

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
})
function setmonthyears() {
  $('.selectedmonth').text(displaymonthnow + 1)
  $('.selectedyear').text(displayyearnow - 1911)
  $('.showvidsnow').text(displayyearnow)
}

$('.premonth_btn').click(function () {
  if (displaymonthnow == 0) {
    displaymonthnow = 11
    displayyearnow = displayyearnow - 1
  } else {
    displaymonthnow = displaymonthnow - 1
  }
  setmonthyears()
  resetweekupdown()
  createdateex()
  countopenorclose()
})
$('.nextmonth_btn').click(function () {
  if (displaymonthnow == 11) {
    displaymonthnow = 0
    displayyearnow = displayyearnow + 1
  } else {
    displaymonthnow = displaymonthnow + 1
  }
  setmonthyears()
  resetweekupdown()
  createdateex()
  countopenorclose()
})
$('.preyear_btn').click(function () {
  displayyearnow = displayyearnow - 1
  setmonthyears()
  resetweekupdown()
  createdateex()
  countopenorclose()
})
$('.nextyear_btn').click(function () {
  displayyearnow = displayyearnow + 1
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
    $('.return_btn').css({
      background: "url(img/tb5.svg)",
      backgroundSize: "cover"
    })
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
    $('.return_btn').css({
      background: "url(img/tb4.svg)",
      backgroundSize: "cover"
    })
    countstart = 1
    $('.countnumber').removeClass('display_none')


  } else if (countstart == 1) {
    $('.countday_btn').css({
      background: "url(img/tb2.svg)",
      backgroundSize: "cover"
    })
    $('.return_btn').css({
      background: "url(img/tb5.svg)",
      backgroundSize: "cover"
    })
    countstart = 0
    $('.countnumber').addClass('display_none')
  }
})
function clearcountarray() {
  $('.countnumber').text(`${countarray.length}`)
}

$('.return_btn').click(function () {
  if (countstart == 1) {
    countarray = []
    $('.countimg').remove()
    clearcountarray()
  }

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

  $('.mask-info').css({
    transform: "translateY(0px)",
    opacity: 1
  })

})
$('.info-close-btn').click(function () {

  $('.mask-info').css({
    transform: "translateY(-1000px)",
    opacity: 0
  })

})