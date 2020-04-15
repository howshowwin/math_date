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
        biggernow = 1
        $('.D3_insideframe').css({
            cursor: 'zoom-in'
        })
        $('.D3_month_box').css({
            cursor: "zoom-in"

        })
    } else if (biggernow == 1) {
        $('.D3_insideframe').css({
            cursor: "default"
        })
        biggernow = 0

    }
})
$('.D3_insideframe').click(function (e) {
    if (biggernow == 1) {

        $('.D3_insideframe').css({
            cursor: "zoom-out"
        })
        $('.D3_month_box').css({
            cursor: "zoom-out"

        })
        let clicknowX = e.originalEvent.clientX - $('.D3_insideframe').offset().left
        let clicknowY = e.originalEvent.clientY - $('.D3_insideframe').offset().top

        function testX(mainX){
            if(mainX<=$('.D3_insideframe').width()/3){
                return 0
            }else if(mainX>$('.D3_insideframe').width()/3 && mainX<=$('.D3_insideframe').width()/3*2  ){
                return 50
            }else if(mainX>$('.D3_insideframe').width()/3*2 && mainX<$('.D3_insideframe').width()  ){
                return 100
            }
        }

        function testY(mainY){
            if(mainY<=$('.D3_insideframe').height()/2){
                return 0
            }else if(mainY>$('.D3_insideframe').height()/2 && mainY<=$('.D3_insideframe').height()  ){
                return 100
            }
        }



        clicknowX = Math.floor(clicknowX)
        clicknowY = Math.floor(clicknowY)


        $('.D3_insideframe').css({
            transition: "0.2s",
            transformOrigin: `${testX(clicknowX)}% ${testY(clicknowY)}%`,

        })
        setTimeout(function () {
            $('.D3_insideframe').css({
                transform: `scale(1.5) `

            })
        }, 200)



        biggernow = 0
    } else if (biggernow == 0) {
        let clicknowX = e.originalEvent.clientX - $('.D3_insideframe').offset().left
        let clicknowY = e.originalEvent.clientY - $('.D3_insideframe').offset().top
        clicknowX = Math.floor(clicknowX)
        clicknowY = Math.floor(clicknowY)
        $('.D3_insideframe').css({
            // transformOrigin: `${clicknowX}px ${clicknowY}px`,
            transition: "0.3s",

        })
        setTimeout(function () {
            $('.D3_insideframe').css({

                transform: `scale(1) translate(0px,0px)`
            })
        }, 0)

        $('.D3_insideframe').css({
            cursor: "default"
        })
        $('.D3_month_box').css({
            cursor: "pointer"

        })
    }

})


$('.D3_month_box').click(function () {
    if (biggernow == 0) {
        $(this).css({
            background: " url(img/o2.svg)",
            backgroundSize: "cover"
        })
        $('.D3_month_box').not(this).css({
            background: " none",
            backgroundSize: "cover"
        })
    }
})
$('.halfyear_btn').click(function () {
    createdatemultmonth()
})