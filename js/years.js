var D4_toggleyear = 0
var D4_togglemonth = 0

$('.D4_rocyear').click(function () {
    if (D4_toggleyear == 0) {
        let stagemonth = ((displayyearnow - 1911) - 70) / 96
        $('.D4_insideboxframe').scrollTop(Math.round(6750 * sRSS * stagemonth))

        $('.D4_morerocyear,.D4_scrollbarmyself').css({
            transform: "scale(1)"
        })
        D4_toggleyear = 1
    } else if (D4_toggleyear == 1) {
        $('.D4_morerocyear,.D4_scrollbarmyself').css({
            transform: "scaleY(0)"
        })
        D4_toggleyear = 0
    }


})


//   羽毛
$('.D4_insidebox').mouseenter(function () {
    $(this).css({ background: "#FFA149" })
    $(this).append(`<div class="brid"></div>`)
    $(this).children('p').css({ color: "#fff" })
    convertSizeALL()
});
$('.D4_insidebox').mouseleave(function () {
    $(this).css({ background: "transparent" })
    $(this).children('.brid').remove()
    $(this).children('p').css({ color: "#ec5f07" })

});






var D4_clickko = 0
$('.D4_scrollbarmyself').mousedown(function (e) {
    console.log(e)
    var halfheight = $('.D4_bar').height() / 2
    var allheight = $('.D4_scrollbarmyself').height()
    var positionnow = e.originalEvent.offsetY - halfheight
    if (positionnow <= 0) {
        positionnow = 0
    }
    if (positionnow >= allheight - (halfheight * 2)) {
        positionnow = allheight - (halfheight * 2)
    }
    $('.D4_bar').css({ top: `${positionnow}px` })
    D4_clickko = 1
    let heightscroll = $('.D4_scrollbarmyself').height() - $('.D4_bar').height()
    let nowscroll = positionnow / heightscroll
    $('.D4_insideboxframe').scrollTop(`${Math.round(6750 * sRSS) * nowscroll}`)
})

$('.D4_scrollbarmyself').mousemove(function (e) {
    if (D4_clickko == 1) {
        var halfheight = $('.D4_bar').height() / 2
        var allheight = $('.D4_scrollbarmyself').height()
        var positionnow = e.originalEvent.offsetY - halfheight
        if (positionnow <= 0) {
            positionnow = 0
        }
        if (positionnow >= allheight - (halfheight * 2)) {
            positionnow = allheight - (halfheight * 2)
        }
        $('.D4_bar').css({ top: `${positionnow}px` })
        let heightscroll = $('.D4_scrollbarmyself').height() - $('.D4_bar').height()
        let nowscroll = positionnow / heightscroll
        $('.D4_insideboxframe').scrollTop(`${Math.round(6750 * sRSS) * nowscroll}`)
    }

})

// 點即消失區域
$('.D4_insidebox').click(function () {
    let D4_nowclick = $(this).children('p').text()
    $('.D4_selectedyear').text(D4_nowclick)
    $('.D4_morerocyear,.D4_scrollbarmyself').css({
        transform: "scaleY(0)"
    })
    displayyearnow = parseInt(D4_nowclick) + 1911
    createdatyears()
})




function D4_createdate() {

    let dayoftheweek = ['日', '一', '二', '三', '四', '五', '六']
    for (i = 0; i < 7; i++) {
        $('.D4_weekend').append(`<div class='D4_dayoftheweek D4_dayoftheweek${i + 1}'><p>${dayoftheweek[i]}</p></div>`)
    }


    convertSizeALL()
}
D4_createdate()


$('.D4_box').click(function () {
    if (D4_biggernow == 0) {

        $(this).css({
            background: " url(img/o3.svg)",
            backgroundSize: "cover",
            zIndex: 8
        })
        $('.D4_box').not(this).css({
            background: " #fff",
            backgroundSize: "cover",
            zIndex: 5

        })
        displaymonthnow = $(this).data('monthclick')
    }
})
$('.D4_today_btn').click(function () {
    var NOW = new Date();
    displayyearnow = NOW.getFullYear()
    displaymonthnow = NOW.getMonth()

    createdatyears()
})
$('.D4_preyear_btn').click(function () {

    displayyearnow = displayyearnow - 1

    createdatyears()

})
$('.D4_nextyear_btn ').click(function () {

    displayyearnow = displayyearnow + 1

    createdatyears()

})

var D4_biggernow = 0
$('.D4_bigger_watch').click(function () {
    if (D4_biggernow == 0) {
        $('.D4_box').css({
            transition: ' cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.7s'
        })
        D4_biggernow = 1
        $('.D4_insideframe').css({
            cursor: 'zoom-in'
        })
        $('.D4_box ').css({
            cursor: "zoom-in"

        })
        D4_move = 1

    } else if (D4_biggernow == 1) {
        $('.D4_box').css({
            transition: ''
        })
        $('.D4_insideframe').css({
            cursor: "default"
        })
        $('.D4_box ').css({
            cursor: "default"

        })
        D4_biggernow = 0

    }
})


$('.D4_box').mouseenter(function () {
    if (D4_biggernow == 1 && stopBigger == 0) {
        $(this).css({
            transform: "scale(2.5)",
            zIndex: '88'
        })

    }



})
var stopBigger = 0
var D4_move = 0
$('.D4_box').mouseleave(function () {
    if (D4_biggernow == 1 && stopBigger == 0) {

        $(this).css({
            transform: "scale(1)",
            zIndex: '5'

        })
        $(`.D4_box${displaymonthnow + 1}`).css({
            zIndex: 7
        })
    }



})


$('.drag').dragscroll();




$('.D4_box').mouseup(function (e) {
    // $(this).css({transform:'scale(2)'})

    if (D4_biggernow == 1 && D4_move == 1) {
        D4_move = 0
        stopBigger = 1
        $('.D4_box').css({
            transform: "scale(1)",
            zIndex: '5'
        })
        $('.D4_insideframe').css({
            transformOrigin: "0% 0",
            transform: 'scale(2)'
        })
        $(`.D4_box${displaymonthnow + 1}`).css({
            zIndex: 7
        })

        $('.D4_bigger_watch').css({
            left: "4%"
        })
        $('.D4_bigger_watch_reback').css({
            opacity: 1,
            pointerEvents: "all"
        })

        let a = $(this).data('monthclick')
        console.log($('.D4_insideframe').width())
        console.log($('.D4_insideframe').height())

        let inswidth = Math.round(1097 * sRSS) * 2
        let insheight = Math.round(687 * sRSS) * 2

        if (a == 0) {
            $('.D4_insideframe_hidden').scrollLeft(0)
        }
        if (a == 1) {
            $('.D4_insideframe_hidden').scrollLeft(inswidth / 4)
        }
        if (a == 2) {
            $('.D4_insideframe_hidden').scrollLeft(inswidth / 2)
        }
        if (a == 3) {
            $('.D4_insideframe_hidden').scrollLeft(inswidth / 2)
        }
        if (a == 4) {
            $('.D4_insideframe_hidden').scrollLeft(0)
            $('.D4_insideframe_hidden').scrollTop(insheight / 4)
        }
        if (a == 5) {
            $('.D4_insideframe_hidden').scrollLeft(inswidth / 4)
            $('.D4_insideframe_hidden').scrollTop(insheight / 4)

        }
        if (a == 6) {
            $('.D4_insideframe_hidden').scrollLeft(inswidth / 2)
            $('.D4_insideframe_hidden').scrollTop(insheight / 4)

        }
        if (a == 7) {
            $('.D4_insideframe_hidden').scrollLeft(inswidth / 2)
            $('.D4_insideframe_hidden').scrollTop(insheight / 4)

        }
        if (a == 8) {
            $('.D4_insideframe_hidden').scrollLeft(0)
            $('.D4_insideframe_hidden').scrollTop(insheight / 2)
        }
        if (a == 9) {
            $('.D4_insideframe_hidden').scrollLeft(inswidth / 4)
            $('.D4_insideframe_hidden').scrollTop(insheight / 2)

        }
        if (a == 10) {
            $('.D4_insideframe_hidden').scrollLeft(inswidth / 2)
            $('.D4_insideframe_hidden').scrollTop(insheight / 2)

        }
        if (a == 11) {
            $('.D4_insideframe_hidden').scrollLeft(inswidth / 2)
            $('.D4_insideframe_hidden').scrollTop(insheight / 2)

        }
    }

})
$('.D4_bigger_watch_reback').click(function () {
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
})
$('.year_btn').click(function () {
    resetbigger()
    if (choose == 2) {
        setmonthchangeDou()
        doublemonthchangetoanother()
    }
    if (choose == 3) {
        setmonthchangeHalf()
        halfmonthchangetoanother()
    }
    createdatyears()
    choose = 4
})