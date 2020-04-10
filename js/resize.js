$(function () {
    $(window).resize(objSizeReset);
    objSizeReset();
    function objSizeReset() {
        convertSizeALL('.outside-frame');

    }



    $(window).on('load', function () {
        objSizeReset();
    });


});
var sRSS



function convertSizeALL(className) {


    var w = 1920, h = 900;
    var iw = $(window).innerWidth(), ih = $(window).innerHeight();
    var pRatio = window.devicePixelRatio || 0, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
    sRatio = Math.min(xRatio, yRatio);
    sRSS = sRatio
    $('.background-img').css({ width: Math.round(w * sRatio), height: Math.round(h * sRatio) });
    $(".background1").css({ width: Math.round(w * sRatio), height: Math.round(h * sRatio) });
    $(".background").css({ width: Math.round(w * sRatio), height: Math.round(h * sRatio) });

    $(".leftbtn").css({ width: Math.round(270 * sRatio), height: Math.round(84 * sRatio) });
    $('.leftbtn p').css({ fontSize: Math.round(45 * sRatio), letterSpacing: Math.round(5 * sRatio) });
    $(".leftbtn .arrow").css({ width: Math.round(34 * sRatio), height: Math.round(19 * sRatio) });
    $('.rightbtn').css({ width: Math.round(270 * sRatio), height: Math.round(84 * sRatio) });
    $('.rightbtn p').css({ fontSize: Math.round(45 * sRatio), letterSpacing: Math.round(8 * sRatio) });
    $('.howtouse_btn').css({ width: Math.round(270 * sRatio), height: Math.round(84 * sRatio) });
    $('.howtouse_btn p').css({ fontSize: Math.round(45 * sRatio), letterSpacing: Math.round(5 * sRatio) });
    $('.circle').css({ width: Math.round(187 * sRatio), height: Math.round(83 * sRatio) });
    $('.display_date').css({ width: Math.round(253 * sRatio), height: Math.round(219 * sRatio) })
    $('.countday_btn').css({ width: Math.round(261 * sRatio), height: Math.round(87 * sRatio) })
    $('.return_btn').css({ width: Math.round(54 * sRatio), height: Math.round(53 * sRatio) })
    $('.countnum').css({ fontSize: Math.round(110 * sRatio), lineHeight: Math.round(2 * sRatio) });
    $('.close_btn').css({ width: Math.round(65 * sRatio), height: Math.round(64 * sRatio) })
    $('.main').css({ width: Math.round(1114 * sRatio), height: Math.round(712 * sRatio) })
    $('.rocyear').css({ width: Math.round(384 * sRatio), height: Math.round(91 * sRatio) })
    $('.morerocyear').css({ width: Math.round(385 * sRatio), height: Math.round(356 * sRatio) })

    $('.month').css({ width: Math.round(225 * sRatio), height: Math.round(92 * sRatio) })
    $('.moremonth').css({ width: Math.round(227 * sRatio), height: Math.round(356 * sRatio) })
    $('.vids').css({ width: Math.round(371 * sRatio), height: Math.round(90 * sRatio) })
    $('.rocyear p').css({ fontSize: Math.round(45 * sRatio) });
    $('.selectedyear').css({ width: Math.round(120 * sRatio), fontSize: Math.round(45 * sRatio) })
    $('.arrowdown').css({ width: Math.round(24 * sRatio), height: Math.round(13 * sRatio) });

    $('.month p').css({ fontSize: Math.round(45 * sRatio) });
    $('.selectedmonth').css({ width: Math.round(80 * sRatio), fontSize: Math.round(45 * sRatio) })
    $('.arrowdown').css({ width: Math.round(24 * sRatio), height: Math.round(13 * sRatio) });

    $('.showvidsnow').css({ width: Math.round(150 * sRatio), fontSize: Math.round(45 * sRatio) })
    $('.vids p ').css({ fontSize: Math.round(45 * sRatio) });



    $('.insideboxframe,.insideboxframeoverhide').css({ width: Math.round(360 * sRatio), height: Math.round(291 * sRatio) })
    $('.insidebox').css({ width: Math.round(400 * sRatio), height: Math.round(59 * sRatio), margin: `${ Math.round(11 * sRatio)}px 0` })
    $('.insidebox p').css({ width: Math.round(120 * sRatio), fontSize: Math.round(45 * sRatio) })

    $('.brid').css({ width: Math.round(27 * sRatio),  height: Math.round(30 * sRatio) })
    $('.scrollbarmyself').css({ width: Math.round(30 * sRatio),  height: Math.round(300 * sRatio) })
    $('.bar').css({ width: Math.round(10 * sRatio),  height: Math.round(100 * sRatio) })
    $('.monthboxframe p').css({ width: Math.round(60 * sRatio), fontSize: Math.round(45 * sRatio) })
    $('.monthinsidebox').css({ width: Math.round(200 * sRatio), height: Math.round(59 * sRatio), margin: `${ Math.round(11 * sRatio)}px 0` })
    $('.monthboxframe,.monthboxframeoverhide').css({ width: Math.round(200 * sRatio), height: Math.round(291 * sRatio) })
    $('.scrollbarmymonth').css({ width: Math.round(30 * sRatio),  height: Math.round(300 * sRatio) })
    $('.monthbar').css({ width: Math.round(10 * sRatio),  height: Math.round(100 * sRatio) })
    $('.gird').css({ width: Math.round(1035 * sRatio),  height: Math.round(602 * sRatio) })
    $('.displaymonth').css({ width: Math.round(1035 * sRatio),  height: Math.round(630 * sRatio) })
    $('.setmonthheight').css({ width: "100%",  height: Math.round(90 * sRatio) })
    $('.setmonthheight p').css({ fontSize: Math.round(60 * sRatio) });
    $('.daysnow').css({ width: "100%",  height: Math.round(90 * sRatio) })
    $('.daysnow p').css({ fontSize: Math.round(40 * sRatio) });
    $('.box1 p').css({ fontSize: Math.round(40 * sRatio),  lineHeight: `${Math.round(90 * sRatio)}px` });
    $('.box1').css({ width: 147.5 * sRatio,  height: Math.round(89.5 * sRatio) })
    $('.displaymonthex').css({ width: Math.round(1035 * sRatio)})
    $('.countnumber').css({ width:Math.round(200* sRatio),  height: Math.round(150 * sRatio),fontSize: Math.round(120 * sRatio) })
}

