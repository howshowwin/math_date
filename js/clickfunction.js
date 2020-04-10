

// 右邊按鈕選擇
$('.rightbtn').click(function () {
  $(this).children("p").css({ color: "#f04770" })
  $(".rightbtn").not(this).children("p").css({ color: "#1E99A9" })
  $(this).children(".circle").removeClass('display_none')
  $(".rightbtn").not(this).children(".circle").addClass('display_none')
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
      console.log(i)
      $(`.box1:eq(${i})`).css({ display: "block" })
    }
    for (i = next; i < next + 7; i++) {
      console.log(i)
      $(`.box1:eq(${i})`).css({ display: "none" })
    }
  }
})

$('.nextweek_btn').click(function () {
  if (next <= 91) {
    pre += 7
    next += 7
    for (i = pre - 7; i < pre; i++) {
      console.log(i)
      $(`.box1:eq(${i})`).css({ display: "none" })
    }
    for (i = next - 7; i < next; i++) {
      console.log(i)
      $(`.box1:eq(${i})`).css({ display: "block" })
    }
  }


})

function resetweekupdown() {
  pre = 28
  next = 70
}
$('.today_btn').click(function () {
  var NOW = new Date();
  displayyearnow = NOW.getFullYear()
  displaymonthnow = NOW.getMonth()
  displaydate = NOW.getDate()
  setmonthyears()
  resetweekupdown()
  createdateex()
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
    $('.box1').not(this).css({ background: "none" })
    $('.colordark').not(this).css({ opacity: "0.3" })
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
        $(`.countimg:eq(${i})`).children('p').text(useom.indexOf(num[i])+1)

      }


    } else {
      findball++
      countarray.push(findball)
      $(this).append(`<div class="countimg" data-ball="${findball}"><p>${countarray.indexOf(findball) + 1}</p></div>`)

    }

    // }


  }
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

})
$('.preyear_btn').click(function () {
  displayyearnow = displayyearnow - 1
  setmonthyears()
  resetweekupdown()
  createdateex()

})
$('.nextyear_btn').click(function () {
  displayyearnow = displayyearnow + 1
  setmonthyears()
  resetweekupdown()
  createdateex()

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
    countstart = 0




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
  }
})