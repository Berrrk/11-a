document.addEventListener("DOMContentLoaded", function () {
    var targetDate = new Date("2023-11-30T00:00:00").getTime();

    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = targetDate - now;



        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if(days < 10) {
            days = "0" + days;
        }
        if(hours < 10) {
            hours = "0" + hours;
        }
        if(minutes < 10 ) {
            minutes = "0" + minutes;
        }
        if(seconds < 10) {
            seconds = "0" + seconds;
        }
        document.getElementById("countdown").innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "Tik-ta...";
        }
    }, 1);
});