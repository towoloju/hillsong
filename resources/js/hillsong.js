var endDate = new Date ("June 24, 2019 20:00:00").getTime();
var timer = setInterval(function() {
    let time_now = new Date().getTime();
    let time_remaining = endDate - time_now;
        if(time_remaining>=0) {
            let days = Math.floor(time_remaining / (1000*60*60*24));
            let hours = Math.floor((time_remaining % (1000*60*60*24)) / (1000*60*60));
            let minutes = Math.floor ((time_remaining % (1000*60*60)) / (1000*60));
            let seconds = Math.floor((time_remaining % (1000*60)) / (1000));

            document.getElementById('days').innerHTML = days + "<span class='label'>DAY(S)</span>";
            document.getElementById('hours').innerHTML= ("0"+ hours).slice(-2) + "<span class='label'>HR(S)</span>";
            document.getElementById('minutes').innerHTML = ("0"+minutes).slice(-2) + "<span class='label'>MIN(S)</span>";
            document.getElementById('seconds').innerHTML = ("0"+seconds).slice(-2) + "<span class='label'>SEC(S)</span>";
        }else{
            document.getElementById('timer').innerHTML = "HILLSONG IS HERE"
        }

}, 1000)