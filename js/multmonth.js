var D2_toggleyear = 0
var D2_togglemonth = 0

$('.D2_rocyear').click(function () {
    if (D2_toggleyear == 0) {

        let stagemonth = ((displayyearnow - 1911) - 70) / 96
        $('.D2_insideboxframe').scrollTop(Math.round(6750 * sRSS * stagemonth))


        $('.D2_morerocyear,.D2_scrollbarmyself').css({
            transform: "scale(1)"
        })
        D2_toggleyear = 1
    } else if (D2_toggleyear == 1) {
        $('.D2_morerocyear,.D2_scrollbarmyself').css({
            transform: "scaleY(0)"
        })
        D2_toggleyear = 0
    }


})
$('.D2_month').click(function () {

    if (D2_togglemonth == 0) {
        $('.D2_moremonth,.D2_scrollbarmymonth').css({
            transform: "scale(1)"
        })
        D2_togglemonth = 1
    } else if (D2_togglemonth == 1) {
        $('.D2_moremonth,.D2_scrollbarmymonth').css({
            transform: "scaleY(0)"
        })
        D2_togglemonth = 0
    }

})

//   羽毛
$('.D2_insidebox').mouseenter(function () {
    $(this).css({ background: "#FFA149" })
    $(this).append(`<div class="brid"></div>`)
    $(this).children('p').css({ color: "#fff" })
    convertSizeALL()
});
$('.D2_insidebox').mouseleave(function () {
    $(this).css({ background: "transparent" })
    $(this).children('.brid').remove()
    $(this).children('p').css({ color: "#ec5f07" })

});
$('.D2_monthinsidebox').mouseenter(function () {
    $(this).css({ background: "#FFCD5C" })
    $(this).append(`<div class="brid"></div>`)
    $(this).children('p').css({ color: "#fff" })
    convertSizeALL()
});
$('.D2_monthinsidebox').mouseleave(function () {
    $(this).css({ background: "transparent" })
    $(this).children('.brid').remove()
    $(this).children('p').css({ color: "#f09c06" })

});
//   SCOLLBAR

var D2_clickko = 0
$('.D2_scrollbarmyself').mousedown(function (e) {
    console.log(e)
    var halfheight = $('.D2_bar').height() / 2
    var allheight = $('.D2_scrollbarmyself').height()
    var positionnow = e.originalEvent.offsetY - halfheight
    if (positionnow <= 0) {
        positionnow = 0
    }
    if (positionnow >= allheight - (halfheight * 2)) {
        positionnow = allheight - (halfheight * 2)
    }
    $('.D2_bar').css({ top: `${positionnow}px` })
    D2_clickko = 1
    let heightscroll = $('.D2_scrollbarmyself').height() - $('.D2_bar').height()
    let nowscroll = positionnow / heightscroll
    $('.D2_insideboxframe').scrollTop(`${Math.round(6750 * sRSS) * nowscroll}`)
})

$('.D2_scrollbarmyself').mousemove(function (e) {
    if (D2_clickko == 1) {
        var halfheight = $('.D2_bar').height() / 2
        var allheight = $('.D2_scrollbarmyself').height()
        var positionnow = e.originalEvent.offsetY - halfheight
        if (positionnow <= 0) {
            positionnow = 0
        }
        if (positionnow >= allheight - (halfheight * 2)) {
            positionnow = allheight - (halfheight * 2)
        }
        $('.D2_bar').css({ top: `${positionnow}px` })
        let heightscroll = $('.D2_scrollbarmyself').height() - $('.D2_bar').height()
        let nowscroll = positionnow / heightscroll
        $('.D2_insideboxframe').scrollTop(`${Math.round(6750 * sRSS) * nowscroll}`)
    }

})
$('.D2_scrollbarmymonth').mousedown(function (e) {
    console.log(e)
    var halfheight = $('.D2_monthbar').height() / 2
    var allheight = $('.D2_scrollbarmymonth').height()
    var positionnow = e.originalEvent.offsetY - halfheight
    if (positionnow <= 0) {
        positionnow = 0
    }
    if (positionnow >= allheight - (halfheight * 2)) {
        positionnow = allheight - (halfheight * 2)
    }
    $('.D2_monthbar').css({ top: `${positionnow}px` })
    D2_clickko = 1
    let heightscroll = $('.D2_scrollbarmymonth').height() - $('.D2_monthbar').height()
    let nowscroll = positionnow / heightscroll
    $('.D2_monthboxframe').scrollTop(`${Math.round(560 * sRSS) * nowscroll}`)
})

$('.D2_scrollbarmymonth').mousemove(function (e) {
    if (D2_clickko == 1) {
        var halfheight = $('.D2_monthbar').height() / 2
        var allheight = $('.D2_scrollbarmymonth').height()
        var positionnow = e.originalEvent.offsetY - halfheight
        if (positionnow <= 0) {
            positionnow = 0
        }
        if (positionnow >= allheight - (halfheight * 2)) {
            positionnow = allheight - (halfheight * 2)
        }
        $('.D2_monthbar').css({ top: `${positionnow}px` })
        let heightscroll = $('.D2_scrollbarmymonth').height() - $('.D2_monthbar').height()
        let nowscroll = positionnow / heightscroll
        $('.D2_monthboxframe').scrollTop(`${Math.round(560 * sRSS) * nowscroll}`)
    }

})
// 點即消失區域
$('.D2_insidebox').click(function () {
    let D2_nowclick = $(this).children('p').text()
    $('.D2_selectedyear').text(D2_nowclick)
    $('.D2_morerocyear,.D2_scrollbarmyself').css({
        transform: "scaleY(0)"
    })
    displayyearnow = parseInt(D2_nowclick) + 1911
    createdatemonth()
})

$('.D2_monthinsidebox').click(function () {
    let D2_nowclick = $(this).children('p').text()
    $('.D2_selectedmonth').text(D2_nowclick)
    $('.D2_moremonth,.D2_scrollbarmymonth').css({
        transform: "scaleY(0)"
    })
    let stage = $(this).data("choosemonth")
    console.log(stage)
    displaymonthnow = parseInt(stage) - 1
    createdatemonth()
})

// 產出日期
function createdate() {

    let dayoftheweek = ['日', '一', '二', '三', '四', '五', '六']
    for (i = 0; i < 7; i++) {
        $('.D2_weekday').append(`<div class='D2_dayoftheweek D2_dayoftheweek${i + 1}'><p>${dayoftheweek[i]}</p></div>`)
    }


    convertSizeALL()
}
createdate()
var D2_month_seletednow_btn = 0
var D2_month_seletednow



$('.D2_monthbox').click(function () {


    $(this).css({
        background: " url(img/o1.svg)",
        backgroundSize: "cover"
    })
    $('.D2_monthbox').not(this).css({
        background: " none",
        backgroundSize: "cover"
    })
})

$('.D2_premonth_btn').click(function () {
    if (displaymonthnow == 0) {
        displaymonthnow = 11
        displayyearnow = displayyearnow - 1

    } else {
        displaymonthnow = displaymonthnow - 1
    }
    createdatemonth()
})
$('.D2_nextmonth_btn ').click(function () {
    if (displaymonthnow == 11) {
        displaymonthnow = 0
        displayyearnow = displayyearnow + 1

    } else {
        displaymonthnow = displaymonthnow + 1
    }
    createdatemonth()
})
$('.D2_preyear_btn').click(function () {

    displayyearnow = displayyearnow - 1

    createdatemonth()
})
$('.D2_nextyear_btn').click(function () {

    displayyearnow = displayyearnow + 1

    createdatemonth()
})
$('.D2_today_btn').click(function () {

    var NOW = new Date();
    displayyearnow = NOW.getFullYear()
    displaymonthnow = NOW.getMonth()


    createdatemonth()
})

$('.doublemonth_btn').click(function () {
    if (choose == 2) {

        setmonthchangeDou()
        doublemonthchangetoanother()
    }
    if (choose == 3) {
        setmonthchangeHalf()
        halfmonthchangetoanother()
    }
    _this = [displaymonthnow, displayyearnow]
    createdatemonth()


    choose = 2
})

