var D4_toggleyear = 0
var D4_togglemonth = 0

$('.D4_rocyear').click(function () {
    if (D4_toggleyear == 0) {
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
    $('.D4_insideboxframe').scrollTop(`${Math.round(6720 * sRSS) * nowscroll}`)
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
        $('.D4_insideboxframe').scrollTop(`${Math.round(6720 * sRSS) * nowscroll}`)
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
})




function D4_createdate() {

    let dayoftheweek = ['日', '一', '二', '三', '四', '五', '六']
    for (i = 0; i < 7; i++) {
        $('.D4_weekend').append(`<div class='D4_dayoftheweek D4_dayoftheweek${i + 1}'><p>${dayoftheweek[i]}</p></div>`)
    }


    convertSizeALL()
}
D4_createdate()