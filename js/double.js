var D3_toggleyear = 0
var D3_togglemonth = 0

$('.D3_rocyear').click(function () {
    if (D3_toggleyear == 0) {
        let stagemonth = ((displayyearnow - 1911) - 70) / 96
        $('.D3_insideboxframe').scrollTop(Math.round(6750 * sRSS * stagemonth))

        $('.D3_morerocyear,.D3_scrollbarmyself').css({
            transform: "scale(1)"
        })
        D3_toggleyear = 1
    } else if (D3_toggleyear == 1) {
        $('.D3_morerocyear,.D3_scrollbarmyself').css({
            transform: "scaleY(0)"
        })
        D3_toggleyear = 0
    }


})
$('.D3_month').click(function () {

    if (D3_togglemonth == 0) {
        $('.D3_moremonth,.D3_scrollbarmymonth').css({
            transform: "scale(1)"
        })
        D3_togglemonth = 1
    } else if (D3_togglemonth == 1) {
        $('.D3_moremonth,.D3_scrollbarmymonth').css({
            transform: "scaleY(0)"
        })
        D3_togglemonth = 0
    }

})

//   羽毛
$('.D3_insidebox').mouseenter(function () {
    $(this).css({ background: "#FFA149" })
    $(this).append(`<div class="brid"></div>`)
    $(this).children('p').css({ color: "#fff" })
    convertSizeALL()
});
$('.D3_insidebox').mouseleave(function () {
    $(this).css({ background: "transparent" })
    $(this).children('.brid').remove()
    $(this).children('p').css({ color: "#ec5f07" })

});
$('.D3_monthinsidebox').mouseenter(function () {
    $(this).css({ background: "#FFCD5C" })
    $(this).append(`<div class="brid"></div>`)
    $(this).children('p').css({ color: "#fff" })
    convertSizeALL()
});
$('.D3_monthinsidebox').mouseleave(function () {
    $(this).css({ background: "transparent" })
    $(this).children('.brid').remove()
    $(this).children('p').css({ color: "#f09c06" })

});


//scroll

var D3_clickko = 0
$('.D3_scrollbarmyself').mousedown(function (e) {
    console.log(e)
    var halfheight = $('.D3_bar').height() / 2
    var allheight = $('.D3_scrollbarmyself').height()
    var positionnow = e.originalEvent.offsetY - halfheight
    if (positionnow <= 0) {
        positionnow = 0
    }
    if (positionnow >= allheight - (halfheight * 2)) {
        positionnow = allheight - (halfheight * 2)
    }
    $('.D3_bar').css({ top: `${positionnow}px` })
    D3_clickko = 1
    let heightscroll = $('.D3_scrollbarmyself').height() - $('.D3_bar').height()
    let nowscroll = positionnow / heightscroll
    $('.D3_insideboxframe').scrollTop(`${Math.round(6750 * sRSS) * nowscroll}`)
})

$('.D3_scrollbarmyself').mousemove(function (e) {
    if (D3_clickko == 1) {
        var halfheight = $('.D3_bar').height() / 2
        var allheight = $('.D3_scrollbarmyself').height()
        var positionnow = e.originalEvent.offsetY - halfheight
        if (positionnow <= 0) {
            positionnow = 0
        }
        if (positionnow >= allheight - (halfheight * 2)) {
            positionnow = allheight - (halfheight * 2)
        }
        $('.D3_bar').css({ top: `${positionnow}px` })
        let heightscroll = $('.D3_scrollbarmyself').height() - $('.D3_bar').height()
        let nowscroll = positionnow / heightscroll
        $('.D3_insideboxframe').scrollTop(`${Math.round(6750 * sRSS) * nowscroll}`)
    }

})
$('.D3_scrollbarmymonth').mousedown(function (e) {
    console.log(e)
    var halfheight = $('.D3_monthbar').height() / 2
    var allheight = $('.D3_scrollbarmymonth').height()
    var positionnow = e.originalEvent.offsetY - halfheight
    if (positionnow <= 0) {
        positionnow = 0
    }
    if (positionnow >= allheight - (halfheight * 2)) {
        positionnow = allheight - (halfheight * 2)
    }
    $('.D3_monthbar').css({ top: `${positionnow}px` })
    D3_clickko = 1
    let heightscroll = $('.D3_scrollbarmymonth').height() - $('.D3_monthbar').height()
    let nowscroll = positionnow / heightscroll
    $('.D3_monthboxframe').scrollTop(`${Math.round(560 * sRSS) * nowscroll}`)
})

$('.D3_scrollbarmymonth').mousemove(function (e) {
    if (D3_clickko == 1) {
        var halfheight = $('.D3_monthbar').height() / 2
        var allheight = $('.D3_scrollbarmymonth').height()
        var positionnow = e.originalEvent.offsetY - halfheight
        if (positionnow <= 0) {
            positionnow = 0
        }
        if (positionnow >= allheight - (halfheight * 2)) {
            positionnow = allheight - (halfheight * 2)
        }
        $('.D3_monthbar').css({ top: `${positionnow}px` })
        let heightscroll = $('.D3_scrollbarmymonth').height() - $('.D3_monthbar').height()
        let nowscroll = positionnow / heightscroll
        $('.D3_monthboxframe').scrollTop(`${Math.round(560 * sRSS) * nowscroll}`)
    }

})
// 點即消失區域
$('.D3_insidebox').click(function () {
    let D3_nowclick = $(this).children('p').text()
    $('.D3_selectedyear').text(D3_nowclick)
    $('.D3_morerocyear,.D3_scrollbarmyself').css({
        transform: "scaleY(0)"
    })
    displayyearnow = parseInt(D3_nowclick) + 1911
    createdatemultmonth()
})

$('.D3_monthinsidebox').click(function () {
    let D3_nowclick = $(this).children('p').text()
    $('.D3_selectedmonth').text(D3_nowclick)
    $('.D3_moremonth,.D3_scrollbarmymonth').css({
        transform: "scaleY(0)"
    })
    let stage = $(this).data("choosemonth")
    console.log(stage)
    displaymonthnow = parseInt(stage) - 1
    createdatemultmonth()
})


function D3_createdate() {

    let dayoftheweek = ['日', '一', '二', '三', '四', '五', '六']
    for (i = 0; i < 7; i++) {
        $('.D3_weekend').append(`<div class='D3_dayoftheweek D3_dayoftheweek${i + 1}'><p>${dayoftheweek[i]}</p></div>`)
    }


    convertSizeALL()
}
D3_createdate()


$('.D3_today_btn').click(function () {
    var NOW = new Date();
    displayyearnow = NOW.getFullYear()
    displaymonthnow = NOW.getMonth()
    createdatemultmonth()


})

$('.D3_premonth_btn').click(function () {
    if (displaymonthnow == 0) {
        displaymonthnow = 11
        displayyearnow = displayyearnow - 1

    } else {
        displaymonthnow = displaymonthnow - 1
    }
    createdatemultmonth()


})
$('.D3_nextmonth_btn ').click(function () {
    if (displaymonthnow == 11) {
        displaymonthnow = 0
        displayyearnow = displayyearnow + 1

    } else {
        displaymonthnow = displaymonthnow + 1
    }
    createdatemultmonth()


})
$('.D3_preyear_btn').click(function () {

    displayyearnow = displayyearnow - 1

    createdatemultmonth()

})
$('.D3_nextyear_btn ').click(function () {

    displayyearnow = displayyearnow + 1

    createdatemultmonth()


})



var biggernow = 0
$('.D3_bigger_watch').click(function () {
    if (biggernow == 0) {
        $('.D3_month_box').css({
            transition: ' cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.7s'
        })
        biggernow = 1

        $('.D3_insideframe').css({
            cursor: 'zoom-in'
        })
        $('.D3_month_box').css({
            cursor: "zoom-in"

        })
        D3_move = 1
    } else if (biggernow == 1) {
        $('.D3_month_box').css({
            transition: ''
        })
        $('.D3_insideframe').css({
            cursor: "default"
        })
        $('.D3_month_box ').css({
            cursor: "default"

        })
        biggernow = 0

    }
})




$('.D3_month_box ').click(function () {
    if (biggernow == 0) {

        $(this).css({
            background: " url(img/o3.svg)",
            backgroundSize: "cover",
            zIndex: 8
        })
        $('.D3_month_box ').not(this).css({
            background: " #fff",
            backgroundSize: "cover",
            zIndex: 5

        })


    }
})
$('.D3_month_box ').mouseenter(function () {
    console.log(biggernow)
    if (biggernow == 1 && D3_stopBigger == 0) {
        $(this).css({
            transform: "scale(2)",
            zIndex: '88'
        })

    }



})
var D3_stopBigger = 0
var D3_move = 0

$('.D3_month_box ').mouseleave(function () {
    if (biggernow == 1 && D3_stopBigger == 0) {

        $(this).css({
            transform: "scale(1)",
            zIndex: '5'

        })
        $(`.D3_month_box${displaymonthnow + 1}`).css({
            zIndex: 7
        })
    }



})






$('.D3_month_box').mouseup(function (e) {

    if (biggernow == 1 && D3_move == 1) {
        D3_move = 0
        D3_stopBigger = 1
        $('.D3_month_box').css({
            transform: "scale(1)",
            zIndex: '5'
        })
        $('.D3_insideframe').css({
            transformOrigin: "0% 0",
            transform: 'scale(1.5)'
        })
        $(`.D3_month_box${displaymonthnow + 1}`).css({
            zIndex: 7
        })

        $('.D3_bigger_watch').css({
            left: "4%"
        })
        $('.D3_bigger_watch_reback').css({
            opacity: 1,
            pointerEvents: "all"
        })

        let a = $(this)[0].classList[1]

        let inswidth = Math.round(1097 * sRSS) * 2
        let insheight = Math.round(687 * sRSS) * 2

        if (a == 'D3_month_box1') {
            $('.D3_hidden_insideframe').scrollLeft(0)
        }
        if (a == 'D3_month_box2') {

            $('.D3_hidden_insideframe').scrollLeft(inswidth / 4)
        }
        if (a == 'D3_month_box3') {

            $('.D3_hidden_insideframe').scrollLeft(inswidth / 2)
        }
        if (a == 'D3_month_box4') {
            $('.D3_hidden_insideframe').scrollLeft(0)
            $('.D3_hidden_insideframe').scrollTop(insheight / 2)
        }
        if (a == 'D3_month_box5') {
            $('.D3_hidden_insideframe').scrollLeft(inswidth / 4)
            $('.D3_hidden_insideframe').scrollTop(insheight / 2)
        }
        if (a == 'D3_month_box6') {
            $('.D3_hidden_insideframe').scrollLeft(inswidth / 2)
            $('.D3_hidden_insideframe').scrollTop(insheight / 2)

        }

    }

})
$('.D3_bigger_watch_reback').click(function () {
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
})


var _this = []

function setmonthchangeDou() {

    let a = $('.D2_monthbox')
    let c
    let d
    for (i = 0; i < 2; i++) {
        let b = $(a[i]).css('background')
        console.log(b)

        b = b.slice(0, 20)
        console.log(b)

        if (b == 'rgba(0, 0, 0, 0) url') {
            c = a[i]
        }
    }
    d = $(c).children('.D2_month_display').text()
    d = parseInt(d)
    if (displaymonthnow + 1 > d) {
        _this = [d-1, displayyearnow + 1]
    } else {
        _this = [d-1, displayyearnow]
    }
}

var half_this = []


function setmonthchangeHalf() {
    let a = $('.D3_month_box')
    let c
    let d
    for (i = 0; i < 6; i++) {
        let b = $(a[i]).css('background')
        console.log(b)

        b = b.slice(0, 15)

        if (b == 'rgba(0, 0, 0, 0') {
            c = a[i]
        }
    }
    d = $(c).children('.D3_displaymonth').text()
    d = parseInt(d)
    if (displaymonthnow + 1 > d) {
        half_this = [d-1, displayyearnow + 1]
    } else {
        half_this = [d-1, displayyearnow]
    }
}


$('.halfyear_btn').click(function () {
    resetbigger()
    if (choose == 2) {
        setmonthchangeDou()
        doublemonthchangetoanother()
    }
    if (choose == 3) {
        // halfmonthchangetoanother()
        setmonthchangeHalf()
        halfmonthchangetoanother()

    }
    half_this = [displaymonthnow , displayyearnow]
    createdatemultmonth()
    choose = 3
})