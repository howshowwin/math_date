var month_olympic = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var month_normal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var Today = new Date();
var displayyearnow = Today.getFullYear()
var displaymonthnow = Today.getMonth()
var displaydate = Today.getDate()
var D2_monthappend = ["1~2", "2~3", "3~4", "4~5",
    "5~6", "6~7", "7~8", "8~9", "9~10",
    "10~11", "11~12", "12~1"]
var D3_monthappend = ["1~6", "2~7", "3~8", "4~9", "5~10", "6~11", "7~12", "8~1", "9~2", "10~3", "11~4", "12~5"]

$('.selectedmonth').text(displaymonthnow + 1)
$('.selectedyear').text(displayyearnow - 1911)
$('.showvidsnow').text(displayyearnow)
console.log(displayyearnow, displaymonthnow, displaydate)

function createdateex() {
    $('.displaymonthex').empty()
    function dayStart(month, year) {
        var tmpDate = new Date(year, month, 1);
        return (tmpDate.getDay());
    }
    //獲取某年某月第一天星期幾
    function daysMonth(month, year) {
        var tmp = year % 4;
        if (tmp == 0) {
            return (month_olympic[month]);
        } else {
            return (month_normal[month]);
        }
    }

    let thismonth = dayStart(displaymonthnow, displayyearnow)
    let thismonthdays = daysMonth(displaymonthnow, displayyearnow)
    let lastmonth = dayStart(displaymonthnow - 1, displayyearnow)
    let lastmonthdays = daysMonth(displaymonthnow - 1, displayyearnow)
    let nextmonth = dayStart(displaymonthnow + 1, displayyearnow)
    let nextmonthdays = daysMonth(displaymonthnow + 1, displayyearnow)

    if (displaymonthnow == 0) {
        lastmonth = dayStart(11, displayyearnow - 1)
        lastmonthdays = daysMonth(11, displayyearnow - 1)
    }
    if (displaymonthnow == 11) {
        nextmonth = dayStart(0, displayyearnow + 1)
        nextmonthdays = daysMonth(0, displayyearnow + 1)
    }
    let firstline = ['', '', '', '', '', '', '']


    let j = 0
    let k = 0
    let l = 0
    for (i = lastmonth; i < lastmonthdays + lastmonth; i++) {
        j++
        firstline[i] = j
    }
    for (i = 0; i < firstline.length; i++) {
        $('.displaymonthex').append(`<div class='box1 colordark' data-clicknowday='prebox'><p>${firstline[i]}</p></div>`)

    }
    for (i = thismonth; i < thismonthdays + thismonth; i++) {
        k++
        firstline.push(k)
        $('.displaymonthex').append(`<div class='box1 fresh' data-clicknowday='nowbox'><p>${k}</p></div>`)
    }
    for (i = nextmonth; i < nextmonthdays + nextmonth; i++) {
        l++
        firstline.push(l)
        $('.displaymonthex').append(`<div class='box1 colordark nextbox' data-clicknowday='nextbox'><p>${l}</p></div>`)

    }

    let countnow = lastmonthdays - 28
    console.log(countnow)
    lastmonthdays - 28
    for (i = 0; i < 28; i++) {
        $(`.box1:eq(${i})`).css({ display: "none" })

    }

    for (i = 70; i < firstline.length; i++) {
        $(`.box1:eq(${i})`).css({ display: "none" })

    }





    convertSizeALL()


}
createdateex()
$(`.fresh:eq(${displaydate - 1})`).css({ background: "#cdf7ed" })

function createdate() {

    let dayoftheweek = ['日', '一', '二', '三', '四', '五', '六']
    for (i = 0; i < 7; i++) {
        $('.month_1').append(`<div class='dayoftheweek dayoftheweek${i + 1}'><p>${dayoftheweek[i]}</p></div>`)
    }


    convertSizeALL()
}
createdate()














function createdatemonth() {
    $('.D2_daybox').empty()
    function dayStart(month, year) {
        var tmpDate = new Date(year, month, 1);
        return (tmpDate.getDay());
    }
    //獲取某年某月第一天星期幾
    function daysMonth(month, year) {
        var tmp = year % 4;
        if (tmp == 0) {
            return (month_olympic[month]);
        } else {
            return (month_normal[month]);
        }
    }

    let thismonth = dayStart(displaymonthnow, displayyearnow)
    let thismonthdays = daysMonth(displaymonthnow, displayyearnow)

    let nextmonth = dayStart(displaymonthnow + 1, displayyearnow)
    let nextmonthdays = daysMonth(displaymonthnow + 1, displayyearnow)


    if (displaymonthnow == 11) {
        nextmonth = dayStart(0, displayyearnow + 1)
        nextmonthdays = daysMonth(0, displayyearnow + 1)
    }

    let firstline = ['', '', '', '', '', '', '']
    let secondline = ['', '', '', '', '', '', '']


    let j = 0
    let l = 0
    for (i = thismonth; i < thismonthdays + thismonth; i++) {
        j++
        firstline[i] = j
    }
    for (i = 0; i < firstline.length; i++) {
        $('.D2_monthbox1 .D2_daybox').append(`<div class='D2_box1' data-clicknowday='prebox'><p>${firstline[i]}</p></div>`)

    }
    for (i = nextmonth; i < nextmonthdays + nextmonth; i++) {
        l++
        secondline[i] = l
    }
    for (i = 0; i < secondline.length; i++) {
        $('.D2_monthbox2 .D2_daybox').append(`<div class='D2_box1' data-clicknowday='prebox'><p>${secondline[i]}</p></div>`)

    }

    $('.D2_monthbox1 .D2_month_display').text(displaymonthnow + 1)
    $('.D2_monthbox2 .D2_month_display').text(displaymonthnow == 11 ? 1 : displaymonthnow + 2)

    convertSizeALL()
    $('.D2_monthbox').css({
        background: "none",
        backgroundSize: "cover"
    })
    $('.D2_monthbox1').css({
        background: " url(img/o1.svg)",
        backgroundSize: "cover"
    })
    $('.D2_selectedyear').text(displayyearnow - 1911)
    $('.D2_selectedmonth').text(D2_monthappend[displaymonthnow])

}


createdatemonth()












function createdatemultmonth() {
    $('.D3_month_day_display').empty()
    function dayStart(month, year) {
        var tmpDate = new Date(year, month, 1);
        return (tmpDate.getDay());
    }
    //獲取某年某月第一天星期幾
    function daysMonth(month, year) {
        var tmp = year % 4;
        if (tmp == 0) {
            return (month_olympic[month]);
        } else {
            return (month_normal[month]);
        }
    }
    function textmonth(month) {
        if (month > 11) {
            return month - 12
        }
        return month
    }

    function textyear(month, year) {
        if (month > 11) {
            return year + 1
        }
        return year
    }
    let thismonth = dayStart(displaymonthnow, displayyearnow)
    let thismonthdays = daysMonth(displaymonthnow, displayyearnow)

    let nextmonth = dayStart(textmonth(displaymonthnow + 1), textyear(displaymonthnow + 1, displayyearnow))
    let nextmonthdays = daysMonth(textmonth(displaymonthnow + 1), textyear(displaymonthnow + 1, displayyearnow))

    let nextmonth_3 = dayStart(textmonth(displaymonthnow + 2), textyear(displaymonthnow + 2, displayyearnow))
    let nextmonthdays_3 = daysMonth(textmonth(displaymonthnow + 2), textyear(displaymonthnow + 2, displayyearnow))

    let nextmonth_4 = dayStart(textmonth(displaymonthnow + 3), textyear(displaymonthnow + 3, displayyearnow))
    let nextmonthdays_4 = daysMonth(textmonth(displaymonthnow + 3), textyear(displaymonthnow + 3, displayyearnow))

    let nextmonth_5 = dayStart(textmonth(displaymonthnow + 4), textyear(displaymonthnow + 4, displayyearnow))
    let nextmonthdays_5 = daysMonth(textmonth(displaymonthnow + 4), textyear(displaymonthnow + 4, displayyearnow))

    let nextmonth_6 = dayStart(textmonth(displaymonthnow + 5), textyear(displaymonthnow + 5, displayyearnow))
    let nextmonthdays_6 = daysMonth(textmonth(displaymonthnow + 5), textyear(displaymonthnow + 5, displayyearnow))


    let firstline = ['', '', '', '', '', '', '']
    let secondline = ['', '', '', '', '', '', '']
    let threeline = ['', '', '', '', '', '', '']
    let fourline = ['', '', '', '', '', '', '']
    let fiveline = ['', '', '', '', '', '', '']
    let sixline = ['', '', '', '', '', '', '']


    let j = 0
    let l = 0
    let q = 0
    let w = 0
    let e = 0
    let r = 0
    for (i = thismonth; i < thismonthdays + thismonth; i++) {
        j++
        firstline[i] = j
    }
    for (i = 0; i < firstline.length; i++) {
        $('.D3_month_box1 .D3_month_day_display').append(`<div class='D3_box1' data-clicknowday='prebox'><p>${firstline[i]}</p></div>`)

    }
    for (i = nextmonth; i < nextmonthdays + nextmonth; i++) {
        l++
        secondline[i] = l
    }
    for (i = 0; i < secondline.length; i++) {
        $('.D3_month_box2 .D3_month_day_display').append(`<div class='D3_box1' data-clicknowday='prebox'><p>${secondline[i]}</p></div>`)

    }



    for (i = nextmonth_3; i < nextmonthdays_3 + nextmonth_3; i++) {
        q++
        threeline[i] = q
    }
    for (i = 0; i < threeline.length; i++) {
        $('.D3_month_box3 .D3_month_day_display').append(`<div class='D3_box1' data-clicknowday='prebox'><p>${threeline[i]}</p></div>`)

    }
    for (i = nextmonth_4; i < nextmonthdays_4 + nextmonth_4; i++) {
        w++
        fourline[i] = w
    }
    for (i = 0; i < fourline.length; i++) {
        $('.D3_month_box4 .D3_month_day_display').append(`<div class='D3_box1' data-clicknowday='prebox'><p>${fourline[i]}</p></div>`)

    }

    for (i = nextmonth_5; i < nextmonthdays_5 + nextmonth_5; i++) {
        e++
        fiveline[i] = e
    }
    for (i = 0; i < fiveline.length; i++) {
        $('.D3_month_box5 .D3_month_day_display').append(`<div class='D3_box1' data-clicknowday='prebox'><p>${fiveline[i]}</p></div>`)

    }
    for (i = nextmonth_6; i < nextmonthdays_6 + nextmonth_6; i++) {
        r++
        sixline[i] = r
    }
    for (i = 0; i < sixline.length; i++) {
        $('.D3_month_box6 .D3_month_day_display').append(`<div class='D3_box1' data-clicknowday='prebox'><p>${sixline[i]}</p></div>`)

    }





    $('.D3_month_box1 .D3_displaymonth').text(displaymonthnow + 1)
    $('.D3_month_box2 .D3_displaymonth').text(textmonth(displaymonthnow + 1) + 1)
    $('.D3_month_box3 .D3_displaymonth').text(textmonth(displaymonthnow + 2) + 1)
    $('.D3_month_box4 .D3_displaymonth').text(textmonth(displaymonthnow + 3) + 1)
    $('.D3_month_box5 .D3_displaymonth').text(textmonth(displaymonthnow + 4) + 1)
    $('.D3_month_box6 .D3_displaymonth').text(textmonth(displaymonthnow + 5) + 1)


    convertSizeALL()
    $('.D3_month_box').css({
        background: "#fff",
        backgroundSize:"cover"
    })
    $(`.D3_month_box1`).css({
        background: "url(img/o3.svg)",
        backgroundSize:"cover"
    })

    $('.D3_selectedyear').text(displayyearnow - 1911)
    $('.D3_selectedmonth').text(D3_monthappend[displaymonthnow])

}

createdatemultmonth()











function createdatyears() {
    $('.D4_month_day_display').empty()
    function dayStart(month, year) {
        var tmpDate = new Date(year, month, 1);
        return (tmpDate.getDay());
    }
    //獲取某年某月第一天星期幾
    function daysMonth(month, year) {
        var tmp = year % 4;
        if (tmp == 0) {
            return (month_olympic[month]);
        } else {
            return (month_normal[month]);
        }
    }
    function textmonth(month) {
        if (month > 11) {
            return month - 12
        }
        return month
    }

    function textyear(month, year) {
        if (month > 11) {
            return year + 1
        }
        return year
    }
    let thismonth = dayStart(0, displayyearnow)
    let thismonthdays = daysMonth(0, displayyearnow)

    let nextmonth = dayStart(1, displayyearnow)
    let nextmonthdays = daysMonth(1, displayyearnow)

    let nextmonth_3 = dayStart(2, displayyearnow)
    let nextmonthdays_3 = daysMonth(2, displayyearnow)

    let nextmonth_4 = dayStart(3, displayyearnow)
    let nextmonthdays_4 = daysMonth(3, displayyearnow)

    let nextmonth_5 = dayStart(4, displayyearnow)
    let nextmonthdays_5 =daysMonth(4, displayyearnow)

    let nextmonth_6 =dayStart(5, displayyearnow)
    let nextmonthdays_6 =daysMonth(5, displayyearnow)

    let nextmonth_7 = dayStart(6, displayyearnow)
    let nextmonthdays_7 = daysMonth(6, displayyearnow)

    let nextmonth_8 = dayStart(7, displayyearnow)
    let nextmonthdays_8 = daysMonth(7, displayyearnow)

    let nextmonth_9 = dayStart(8, displayyearnow)
    let nextmonthdays_9 = daysMonth(8, displayyearnow)

    let nextmonth_10 = dayStart(9, displayyearnow)
    let nextmonthdays_10 = daysMonth(9, displayyearnow)

    let nextmonth_11 = dayStart(10, displayyearnow)
    let nextmonthdays_11 =daysMonth(10, displayyearnow)

    let nextmonth_12 =dayStart(11, displayyearnow)
    let nextmonthdays_12 =daysMonth(11, displayyearnow)

    let firstline = ['', '', '', '', '', '', '']
    let secondline = ['', '', '', '', '', '', '']
    let threeline = ['', '', '', '', '', '', '']
    let fourline = ['', '', '', '', '', '', '']
    let fiveline = ['', '', '', '', '', '', '']
    let sixline = ['', '', '', '', '', '', '']


    let j = 0
    let l = 0
    let q = 0
    let w = 0
    let e = 0
    let r = 0
    for (i = thismonth; i < thismonthdays + thismonth; i++) {
        j++
        firstline[i] = j
    }
    for (i = 0; i < firstline.length; i++) {
        $('.D4_box1 .D4_month_day_display').append(`<div class='D4_inbox1' data-clicknowday='prebox'><p>${firstline[i]}</p></div>`)

    }

    for (i = nextmonth; i < nextmonthdays + nextmonth; i++) {
        l++
        secondline[i] = l
    }
    for (i = 0; i < secondline.length; i++) {
        $('.D4_box2 .D4_month_day_display').append(`<div class='D4_inbox1' data-clicknowday='prebox'><p>${secondline[i]}</p></div>`)

    }



    for (i = nextmonth_3; i < nextmonthdays_3 + nextmonth_3; i++) {
        q++
        threeline[i] = q
    }
    for (i = 0; i < threeline.length; i++) {
        $('.D4_box3 .D4_month_day_display').append(`<div class='D4_inbox1' data-clicknowday='prebox'><p>${threeline[i]}</p></div>`)

    }
    for (i = nextmonth_4; i < nextmonthdays_4 + nextmonth_4; i++) {
        w++
        fourline[i] = w
    }
    for (i = 0; i < fourline.length; i++) {
        $('.D4_box4 .D4_month_day_display').append(`<div class='D4_inbox1' data-clicknowday='prebox'><p>${fourline[i]}</p></div>`)

    }

    for (i = nextmonth_5; i < nextmonthdays_5 + nextmonth_5; i++) {
        e++
        fiveline[i] = e
    }
    for (i = 0; i < fiveline.length; i++) {
        $('.D4_box5 .D4_month_day_display').append(`<div class='D4_inbox1' data-clicknowday='prebox'><p>${fiveline[i]}</p></div>`)

    }
    for (i = nextmonth_6; i < nextmonthdays_6 + nextmonth_6; i++) {
        r++
        sixline[i] = r
    }
    for (i = 0; i < sixline.length; i++) {
        $('.D4_box6 .D4_month_day_display').append(`<div class='D4_inbox1' data-clicknowday='prebox'><p>${sixline[i]}</p></div>`)

    }
    sixline = ['', '', '', '', '', '', '']
    r = 0
    for (i = nextmonth_7; i < nextmonthdays_7 + nextmonth_7; i++) {
        r++
        sixline[i] = r
    }
    for (i = 0; i < sixline.length; i++) {
        $('.D4_box7 .D4_month_day_display').append(`<div class='D4_inbox1' data-clicknowday='prebox'><p>${sixline[i]}</p></div>`)

    }
    sixline = ['', '', '', '', '', '', '']
    r = 0

    for (i = nextmonth_8; i < nextmonthdays_8 + nextmonth_8; i++) {
        r++
        sixline[i] = r
    }
    for (i = 0; i < sixline.length; i++) {
        $('.D4_box8 .D4_month_day_display').append(`<div class='D4_inbox1' data-clicknowday='prebox'><p>${sixline[i]}</p></div>`)

    }

    sixline = ['', '', '', '', '', '', '']
    r = 0
    for (i = nextmonth_9; i < nextmonthdays_9 + nextmonth_9; i++) {
        r++
        sixline[i] = r
    }
    for (i = 0; i < sixline.length; i++) {
        $('.D4_box9 .D4_month_day_display').append(`<div class='D4_inbox1' data-clicknowday='prebox'><p>${sixline[i]}</p></div>`)

    }
    sixline = ['', '', '', '', '', '', '']
    r = 0
    for (i = nextmonth_10; i < nextmonthdays_10 + nextmonth_10; i++) {
        r++
        sixline[i] = r
    }
    for (i = 0; i < sixline.length; i++) {
        $('.D4_box10 .D4_month_day_display').append(`<div class='D4_inbox1' data-clicknowday='prebox'><p>${sixline[i]}</p></div>`)

    }
    sixline = ['', '', '', '', '', '', '']
    r = 0
    for (i = nextmonth_11; i < nextmonthdays_11 + nextmonth_11; i++) {
        r++
        sixline[i] = r
    }
    for (i = 0; i < sixline.length; i++) {
        $('.D4_box11 .D4_month_day_display').append(`<div class='D4_inbox1' data-clicknowday='prebox'><p>${sixline[i]}</p></div>`)

    }
    sixline = ['', '', '', '', '', '', '']
    r = 0
    for (i = nextmonth_12; i < nextmonthdays_12 + nextmonth_12; i++) {
        r++
        sixline[i] = r
    }
    for (i = 0; i < sixline.length; i++) {
        $('.D4_box12 .D4_month_day_display').append(`<div class='D4_inbox1' data-clicknowday='prebox'><p>${sixline[i]}</p></div>`)

    }
    sixline = ['', '', '', '', '', '', '']
    r = 0



 

    convertSizeALL()
    $('.D4_box').css({
        background: "#fff",
        backgroundSize: "cover"

    })
    $(`.D4_box${displaymonthnow+1}`).css({
        background: " url(img/o3.svg)",
        backgroundSize: "cover",
        zIndex:7
    })

    $('.D4_selectedyear').text(displayyearnow - 1911)

}
createdatyears()