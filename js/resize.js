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
    
    $('.mask-info').css({ width: Math.round(w * sRatio), height: Math.round(h * sRatio) });
    $('.infoframe').css({width: Math.round(700* sRatio), height: Math.round(470 * sRatio)})
    $('.info-close-btn').css({width: Math.round(53* sRatio), height: Math.round(53 * sRatio)})

    $('.background-img').css({ width: Math.round(w * sRatio), height: Math.round(h * sRatio) });
    $(".background1").css({ width: Math.round(w * sRatio), height: Math.round(h * sRatio) });
    $(".background,.background-day,.background-month,.background-doublemonth,.background-halfyear,.background-year").css({ width: Math.round(w * sRatio), height: Math.round(h * sRatio) });
    $('.bigwrapper').css({ width: Math.round(w * sRatio), height: Math.round(h * sRatio) });
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
    $('.insidebox').css({ width: Math.round(400 * sRatio), height: Math.round(59 * sRatio), margin: `${Math.round(11 * sRatio)}px 0` })
    $('.insidebox p').css({ width: Math.round(120 * sRatio), fontSize: Math.round(45 * sRatio) })
    $('.scrollbarmyself').css({ width: Math.round(30 * sRatio), height: Math.round(300 * sRatio) })
    $('.bar').css({ width: Math.round(10 * sRatio), height: Math.round(100 * sRatio) })
    $('.brid').css({ width: Math.round(27 * sRatio), height: Math.round(30 * sRatio) })

    $('.monthboxframe p').css({ width: Math.round(60 * sRatio), fontSize: Math.round(45 * sRatio) })
    $('.monthinsidebox').css({ width: Math.round(200 * sRatio), height: Math.round(59 * sRatio), margin: `${Math.round(11 * sRatio)}px 0` })
    $('.monthboxframe,.monthboxframeoverhide').css({ width: Math.round(200 * sRatio), height: Math.round(291 * sRatio) })
    $('.scrollbarmymonth').css({ width: Math.round(30 * sRatio), height: Math.round(300 * sRatio) })
    $('.monthbar').css({ width: Math.round(10 * sRatio), height: Math.round(100 * sRatio) })
    $('.gird').css({ width: Math.round(1035 * sRatio), height: Math.round(602 * sRatio) })
    $('.displaymonth').css({ width: Math.round(1035 * sRatio), height: Math.round(630 * sRatio) })
    $('.setmonthheight').css({ width: "100%", height: Math.round(90 * sRatio) })
    $('.setmonthheight p').css({ fontSize: Math.round(60 * sRatio) });
    $('.daysnow').css({ width: "100%", height: Math.round(90 * sRatio) })
    $('.daysnow p').css({ fontSize: Math.round(40 * sRatio) });
    $('.box1 p').css({ fontSize: Math.round(40 * sRatio), lineHeight: `${Math.round(90 * sRatio)}px` });
    $('.box1').css({ width: 147.2 * sRatio, height: 89.8 * sRatio})
    $('.displaymonthex').css({ width: Math.round(1035 * sRatio) })
    $('.countnumber').css({ width: Math.round(200 * sRatio), height: Math.round(150 * sRatio), fontSize: Math.round(120 * sRatio) })
    $('.rightline').css({ width: Math.round(268 * sRatio), height: Math.round(5 * sRatio) })


    $('.D1_main').css({ width: Math.round(1141 * sRatio), height: Math.round(854 * sRatio) })
    $(".D1_today_btn").css({ width: Math.round(270 * sRatio), height: Math.round(84 * sRatio) });
    $('.D1_today_btn p').css({ fontSize: Math.round(45 * sRatio), letterSpacing: Math.round(5 * sRatio) });
    $('.D1_week').css({ fontSize: Math.round(102 * sRatio), letterSpacing: Math.round(10 * sRatio) });
    $('.D1_roc').css({ fontSize: Math.round(60 * sRatio) });
    $('.D1_day').css({ fontSize: Math.round(320 * sRatio), width: Math.round(320 * sRatio), height: Math.round(320 * sRatio) });
    $('.D1_roc_word,.D1_rocyear').css({ fontSize: Math.round(60 * sRatio) });
    $('.D1_rocyear').css({ width: Math.round(100 * sRatio) })
    $('.D1_ac_year').css({ fontSize: Math.round(46 * sRatio) });
    $('.D1_month').css({ width: Math.round(150 * sRatio), height: Math.round(150 * sRatio), fontSize: Math.round(110 * sRatio) })
    $('.D1_mobth_word').css({ fontSize: Math.round(110 * sRatio) });
    $('.D1_lunar').css({ width: Math.round(83 * sRatio), height: Math.round(83 * sRatio), fontSize: Math.round(55 * sRatio), lineHeight: `${Math.round(80 * sRatio)}px` })

    $('.D1_pre,.D1_next').css({ width: Math.round(61 * sRatio), height: Math.round(60 * sRatio) })


    $(".D2_leftbtn").css({ width: Math.round(270 * sRatio), height: Math.round(84 * sRatio) });
    $('.D2_leftbtn p').css({ fontSize: Math.round(45 * sRatio), letterSpacing: Math.round(5 * sRatio) });
    $(".D2_leftbtn .D2_arrow").css({ width: Math.round(34 * sRatio), height: Math.round(19 * sRatio) });
    $('.D2_month').css({ width: Math.round(276 * sRatio), height: Math.round(90 * sRatio) })
    $('.D2_moremonth').css({ width: Math.round(276 * sRatio), height: Math.round(356 * sRatio) })
    $('.D2_monthboxframe p').css({ width: Math.round(60 * sRatio), fontSize: Math.round(45 * sRatio) })
    $('.D2_monthinsidebox').css({ width: Math.round(242 * sRatio), height: Math.round(59 * sRatio), margin: `${Math.round(11 * sRatio)}px 0` })
    $('.D2_monthboxframe,.D2_monthboxframeoverhide').css({ width: Math.round(242 * sRatio), height: Math.round(291 * sRatio) })
    $('.D2_scrollbarmymonth').css({ width: Math.round(30 * sRatio), height: Math.round(300 * sRatio) })
    $('.D2_monthbar').css({ width: Math.round(10 * sRatio), height: Math.round(100 * sRatio) })
    $('.D2_month p').css({ fontSize: Math.round(45 * sRatio) });
    $('.D2_selectedmonth').css({ width: Math.round(120 * sRatio), fontSize: Math.round(45 * sRatio) })
    $('.D2_arrowdown').css({ width: Math.round(24 * sRatio), height: Math.round(13 * sRatio) });
    $('.D2_rocyear').css({ width: Math.round(384 * sRatio), height: Math.round(91 * sRatio) })
    $('.D2_morerocyear').css({ width: Math.round(385 * sRatio), height: Math.round(356 * sRatio) })
    $('.D2_insideboxframe,.D2_insideboxframeoverhide').css({ width: Math.round(360 * sRatio), height: Math.round(291 * sRatio) })
    $('.D2_insidebox').css({ width: Math.round(400 * sRatio), height: Math.round(59 * sRatio), margin: `${Math.round(11 * sRatio)}px 0` })
    $('.D2_insidebox p').css({ width: Math.round(120 * sRatio), fontSize: Math.round(45 * sRatio) })
    $('.D2_scrollbarmyself').css({ width: Math.round(30 * sRatio), height: Math.round(300 * sRatio) })
    $('.D2_bar').css({ width: Math.round(10 * sRatio), height: Math.round(100 * sRatio) })
    $('.D2_rocyear p').css({ fontSize: Math.round(45 * sRatio) });
    $('.D2_selectedyear').css({ width: Math.round(120 * sRatio), fontSize: Math.round(45 * sRatio) })
    $('.D2_arrowdown').css({ width: Math.round(24 * sRatio), height: Math.round(13 * sRatio) });
    $('.D2_monthbox').css({ width: Math.round(516 * sRatio), height: Math.round(590 * sRatio) })
    $('.D2_month_display').css({ width: Math.round(200 * sRatio), height: Math.round(200 * sRatio), fontSize: Math.round(160 * sRatio) })
    $('.D2_dayoftheweek').css({ fontSize: Math.round(28 * sRatio) });
    $('.D2_box1').css({ width: Math.round(71 * sRatio), height: Math.round(44 * sRatio), fontSize: Math.round(26 * sRatio) })
    $('.D2_text').css({ fontSize: Math.round(50 * sRatio) });


    $(".D3_leftbtn").css({ width: Math.round(270 * sRatio), height: Math.round(84 * sRatio) });
    $('.D3_leftbtn p').css({ fontSize: Math.round(45 * sRatio), letterSpacing: Math.round(5 * sRatio) });
    $(".D3_leftbtn .D3_arrow").css({ width: Math.round(34 * sRatio), height: Math.round(19 * sRatio) });
    $('.D3_month').css({ width: Math.round(276 * sRatio), height: Math.round(90 * sRatio) })
    $('.D3_moremonth').css({ width: Math.round(276 * sRatio), height: Math.round(356 * sRatio) })
    $('.D3_monthboxframe p').css({ width: Math.round(60 * sRatio), fontSize: Math.round(45 * sRatio) })
    $('.D3_monthinsidebox').css({ width: Math.round(242 * sRatio), height: Math.round(59 * sRatio), margin: `${Math.round(11 * sRatio)}px 0` })
    $('.D3_monthboxframe,.D3_monthboxframeoverhide').css({ width: Math.round(242 * sRatio), height: Math.round(291 * sRatio) })
    $('.D3_scrollbarmymonth').css({ width: Math.round(30 * sRatio), height: Math.round(300 * sRatio) })
    $('.D3_monthbar').css({ width: Math.round(10 * sRatio), height: Math.round(100 * sRatio) })
    $('.D3_month p').css({ fontSize: Math.round(45 * sRatio) });
    $('.D3_selectedmonth').css({ width: Math.round(120 * sRatio), fontSize: Math.round(45 * sRatio) })
    $('.D3_arrowdown').css({ width: Math.round(24 * sRatio), height: Math.round(13 * sRatio) });
    $('.D3_rocyear').css({ width: Math.round(384 * sRatio), height: Math.round(91 * sRatio) })
    $('.D3_morerocyear').css({ width: Math.round(385 * sRatio), height: Math.round(356 * sRatio) })
    $('.D3_insideboxframe,.D3_insideboxframeoverhide').css({ width: Math.round(360 * sRatio), height: Math.round(291 * sRatio) })
    $('.D3_insidebox').css({ width: Math.round(400 * sRatio), height: Math.round(59 * sRatio), margin: `${Math.round(11 * sRatio)}px 0` })
    $('.D3_insidebox p').css({ width: Math.round(120 * sRatio), fontSize: Math.round(45 * sRatio) })
    $('.D3_scrollbarmyself').css({ width: Math.round(30 * sRatio), height: Math.round(300 * sRatio) })
    $('.D3_bar').css({ width: Math.round(10 * sRatio), height: Math.round(100 * sRatio) })
    $('.D3_rocyear p').css({ fontSize: Math.round(45 * sRatio) });
    $('.D3_selectedyear').css({ width: Math.round(120 * sRatio), fontSize: Math.round(45 * sRatio) })
    $('.D3_arrowdown').css({ width: Math.round(24 * sRatio), height: Math.round(13 * sRatio) });
    $('.D3_bigger_watch').css({ width: Math.round(98 * sRatio), height: Math.round(99 * sRatio) })
    $('.D3_rocyear').css({ width: Math.round(384 * sRatio), height: Math.round(91 * sRatio) })
    $('.D3_morerocyear').css({ width: Math.round(385 * sRatio), height: Math.round(356 * sRatio) })
    $('.D3_insideboxframe,.D3_insideboxframeoverhide').css({ width: Math.round(360 * sRatio), height: Math.round(291 * sRatio) })
    $('.D3_insidebox').css({ width: Math.round(400 * sRatio), height: Math.round(59 * sRatio), margin: `${Math.round(11 * sRatio)}px 0` })
    $('.D3_insidebox p').css({ width: Math.round(120 * sRatio), fontSize: Math.round(45 * sRatio) })
    $('.D3_scrollbarmyself').css({ width: Math.round(30 * sRatio), height: Math.round(300 * sRatio) })
    $('.D3_bar').css({ width: Math.round(10 * sRatio), height: Math.round(100 * sRatio) })
    $('.D3_rocyear p').css({ fontSize: Math.round(45 * sRatio) });
    $('.D3_selectedyear').css({ width: Math.round(120 * sRatio), fontSize: Math.round(45 * sRatio) })
    $('.D3_arrowdown').css({ width: Math.round(24 * sRatio), height: Math.round(13 * sRatio) });
    $('.D3_insideframe,.D3_hidden_insideframe').css({ width: Math.round(1097 * sRatio), height: Math.round(687 * sRatio), borderRadius: `${Math.round(30 * sRatio)}px` });
    $('.D3_month_box').css({ width: Math.round(336 * sRatio), height: Math.round(321 * sRatio) });
    $('.D3_displaymonth').css({ width: Math.round(150 * sRatio), height: Math.round(100 * sRatio), fontSize: Math.round(110 * sRatio), lineHeight: `${Math.round(113 * sRatio)}px` })
    $('.D3_dayoftheweek').css({ fontSize: Math.round(18 * sRatio) });
    $('.D3_box1').css({ fontSize: Math.round(18 * sRatio), height: Math.round(28 * sRatio) });
    $('.D3_text').css({ fontSize: Math.round(35 * sRatio) });
    $('.D3_bigger_watch_reback').css({ width: Math.round(98 * sRatio), height: Math.round(99 * sRatio) })



    $(".D4_leftbtn").css({ width: Math.round(270 * sRatio), height: Math.round(84 * sRatio) });
    $('.D4_leftbtn p').css({ fontSize: Math.round(45 * sRatio), letterSpacing: Math.round(5 * sRatio) });
    $(".D4_leftbtn .D4_arrow").css({ width: Math.round(34 * sRatio), height: Math.round(19 * sRatio) });
    $('.D4_month').css({ width: Math.round(276 * sRatio), height: Math.round(90 * sRatio) })
    $('.D4_moremonth').css({ width: Math.round(276 * sRatio), height: Math.round(356 * sRatio) })
    $('.D4_monthboxframe p').css({ width: Math.round(60 * sRatio), fontSize: Math.round(45 * sRatio) })
    $('.D4_monthinsidebox').css({ width: Math.round(242 * sRatio), height: Math.round(59 * sRatio), margin: `${Math.round(11 * sRatio)}px 0` })
    $('.D4_monthboxframe,.D4_monthboxframeoverhide').css({ width: Math.round(242 * sRatio), height: Math.round(291 * sRatio) })
    $('.D4_scrollbarmymonth').css({ width: Math.round(30 * sRatio), height: Math.round(300 * sRatio) })
    $('.D4_monthbar').css({ width: Math.round(10 * sRatio), height: Math.round(100 * sRatio) })
    $('.D4_month p').css({ fontSize: Math.round(45 * sRatio) });
    $('.D4_selectedmonth').css({ width: Math.round(120 * sRatio), fontSize: Math.round(45 * sRatio) })
    $('.D4_arrowdown').css({ width: Math.round(24 * sRatio), height: Math.round(13 * sRatio) });
    $('.D4_rocyear').css({ width: Math.round(384 * sRatio), height: Math.round(91 * sRatio) })
    $('.D4_morerocyear').css({ width: Math.round(385 * sRatio), height: Math.round(356 * sRatio) })
    $('.D4_insideboxframe,.D4_insideboxframeoverhide').css({ width: Math.round(360 * sRatio), height: Math.round(291 * sRatio) })
    $('.D4_insidebox').css({ width: Math.round(400 * sRatio), height: Math.round(59 * sRatio), margin: `${Math.round(11 * sRatio)}px 0` })
    $('.D4_insidebox p').css({ width: Math.round(120 * sRatio), fontSize: Math.round(45 * sRatio) })
    $('.D4_scrollbarmyself').css({ width: Math.round(30 * sRatio), height: Math.round(300 * sRatio) })
    $('.D4_bar').css({ width: Math.round(10 * sRatio), height: Math.round(100 * sRatio) })
    $('.D4_rocyear p').css({ fontSize: Math.round(45 * sRatio) });
    $('.D4_selectedyear').css({ width: Math.round(120 * sRatio), fontSize: Math.round(45 * sRatio) })
    $('.D4_arrowdown').css({ width: Math.round(24 * sRatio), height: Math.round(13 * sRatio) });
    $('.D4_bigger_watch').css({ width: Math.round(98 * sRatio), height: Math.round(99 * sRatio) })
    $('.D4_bigger_watch_reback').css({ width: Math.round(98 * sRatio), height: Math.round(99 * sRatio) })
   
   
    $('.D4_rocyear').css({ width: Math.round(384 * sRatio), height: Math.round(91 * sRatio) })
    $('.D4_morerocyear').css({ width: Math.round(385 * sRatio), height: Math.round(356 * sRatio) })
    $('.D4_insideframe,.D4_insideframe_hidden').css({ width: Math.round(1097 * sRatio), height: Math.round(687 * sRatio), borderRadius: `${Math.round(30 * sRatio)}px` });
    $('.D4_insidebox').css({ width: Math.round(400 * sRatio), height: Math.round(59 * sRatio), margin: `${Math.round(11 * sRatio)}px 0` })
    $('.D4_insidebox p').css({ width: Math.round(120 * sRatio), fontSize: Math.round(45 * sRatio) })
    $('.D4_scrollbarmyself').css({ width: Math.round(30 * sRatio), height: Math.round(300 * sRatio) })
    $('.D4_bar').css({ width: Math.round(10 * sRatio), height: Math.round(100 * sRatio) })
    $('.D4_rocyear p').css({ fontSize: Math.round(45 * sRatio) });
    $('.D4_selectedyear').css({ width: Math.round(120 * sRatio), fontSize: Math.round(45 * sRatio) })
    $('.D4_arrowdown').css({ width: Math.round(24 * sRatio), height: Math.round(13 * sRatio) });
    $('.D4_box').css({ width: Math.round(237 * sRatio), height: Math.round(226 * sRatio) })
    $('.D4_displaymonth').css({ width: Math.round(100 * sRatio), height: Math.round(100 * sRatio),fontSize: Math.round(75 * sRatio),lineHeight:`${Math.round(75 * sRatio)}px` })
    $('.D4_dayoftheweek').css({ fontSize: Math.round(16 * sRatio),height: Math.round(18 * sRatio) });
    $('.D4_inbox1').css({ fontSize: Math.round(14 * sRatio),height: Math.round(22 * sRatio)});
    $('.D4_text').css({ fontSize: Math.round(25 * sRatio) });
    $('.D1_lunar_month').css({ fontSize: Math.round(45 * sRatio) });

    $('.D1_lunar_day').css({ fontSize: Math.round(45 * sRatio) });
    $('.countimg p').css({fontSize:Math.round(20 * sRatio),lineHeight: `${Math.round(32 * sRatio)}px`})
    $('.countimg').css({width: Math.round(35 * sRatio), height: Math.round(37 * sRatio)})




    $('.mask').css({ width: Math.round(w * sRatio), height: Math.round(h * sRatio) });
    $('.info').css({ width: Math.round(673*1.6  * sRatio), height: Math.round(456 *1.6* sRatio) });
    $('.info-page').css({ width: Math.round(1039  * sRatio), height: Math.round(687.6* sRatio),borderRadius: Math.round(15 * sRatio) });
    $('.info-btn-left,.info-btn-right').css({ width: Math.round(35 * sRatio), height: Math.round(35 * sRatio) });
    $('.btn_close_inset').css({ width: Math.round(53 * sRatio), height: Math.round(53 * sRatio) });










}

