var month_olympic = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var month_normal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var Today = new Date();
var displayyearnow = Today.getFullYear()
var displaymonthnow = Today.getMonth()
var displaydate = Today.getDate()
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
        nextmonth = dayStart(0, displayyearnow+1)
        nextmonthdays = daysMonth(0, displayyearnow+1)
    }
    let firstline = ['','','','','','','']
    

    let j =0
    let k = 0
    let l = 0
    for(i=lastmonth;i<lastmonthdays+lastmonth;i++){
        j++
        firstline[i]= j
    } 
    for(i=0;i<firstline.length;i++){
        $('.displaymonthex').append(`<div class='box1 colordark'><p>${firstline[i]}</p></div>`)

    }       
    for(i=thismonth;i<thismonthdays+thismonth;i++){
        k++
        firstline.push(k)
        $('.displaymonthex').append(`<div class='box1 fresh'><p>${k}</p></div>`)
    }     
    for(i=nextmonth;i<nextmonthdays+nextmonth;i++){
        l++
        firstline.push(l)
        $('.displaymonthex').append(`<div class='box1 colordark'><p>${l}</p></div>`)

    }                
   
    let countnow = lastmonthdays-28
    console.log(countnow)
    lastmonthdays-28
    for(i=0;i<28;i++){
        $(`.box1:eq(${i})`).css({display:"none"})

    }

    for(i=70;i<firstline.length;i++){
        $(`.box1:eq(${i})`).css({display:"none"})

    }





    convertSizeALL()


}
createdateex()
$(`.fresh:eq(${displaydate -1})`).css({background:"#cdf7ed"})

function createdate() {


    //     function dayStart(month, year) {
    //         var tmpDate = new Date(year, month, 1);
    //         return (tmpDate.getDay());
    //     }
    //     //獲取某年某月第一天星期幾
    //     function daysMonth(month, year) {
    //         var tmp = year % 4;
    //         if (tmp == 0) {
    //             return (month_olympic[month]);
    //         } else {
    //             return (month_normal[month]);
    //         }
    //     }
    //     let thismonth = dayStart(displaymonthnow,displayyearnow)
    //     let thismonthdays = daysMonth(displaymonthnow,displayyearnow)
    let dayoftheweek = ['日', '一', '二', '三', '四', '五', '六']
    //     let firstline = ['', '', '', '', '', '', '']
    //     let secondline = ['', '', '', '', '', '', '']
    //     let thirdline = ['', '', '', '', '', '', '']
    //     let forthline = ['', '', '', '', '', '', '']
    //     let fifthline = ['', '', '', '', '', '', '']
    //     let sixthline = ['', '', '', '', '', '', '']
    //     let j = 0
    //     for(i=thismonth;i<7;i++){
    //         j++
    //         firstline[i] = j
    //     }
    //     for(i=0;i<7;i++){
    //         j++
    //         secondline[i] = j
    //     }
    //     for(i=0;i<7;i++){
    //         j++
    //         thirdline[i] = j
    //     }
    //     for(i=0;i<7;i++){
    //         j++
    //         if(j>thismonthdays){
    //             break
    //         }
    //         forthline[i] = j
    //     }
    //     for(i=0;i<7;i++){
    //         j++
    //         if(j>thismonthdays){
    //             break
    //         }
    //         fifthline[i] = j
    //     }
    //     for(i=0;i<7;i++){
    //         j++
    //         if(j>thismonthdays){
    //             break
    //         }
    //         sixthline[i] = j
    //     }
    for (i = 0; i < 7; i++) {
        $('.month_1').append(`<div class='dayoftheweek dayoftheweek${i + 1}'><p>${dayoftheweek[i]}</p></div>`)
        //         $('.month_2').append(`<div class='daysnow daysnow${i+1}'><p>${firstline[i]}</p></div>`)
        //         $('.month_3').append(`<div class='daysnow daysnow${i+1}'><p>${secondline[i]}</p></div>`)
        //         $('.month_4').append(`<div class='daysnow daysnow${i+1}'><p>${thirdline[i]}</p></div>`)
        //         $('.month_5').append(`<div class='daysnow daysnow${i+1}'><p>${forthline[i]}</p></div>`)
        //         $('.month_6').append(`<div class='daysnow daysnow${i+1}'><p>${fifthline[i]}</p></div>`)
        //         $('.month_7').append(`<div class='daysnow daysnow${i+1} '><p>${sixthline[i]}</p></div>`)

    }

    //     console.log( firstline,secondline,thirdline,forthline,fifthline,sixthline)
    //     console.log(j)

    convertSizeALL()
}
createdate()