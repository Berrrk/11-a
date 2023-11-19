document.addEventListener("DOMContentLoaded", function () {
    var targetDate = new Date("2023-11-30T00:00:00").getTime();

    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = targetDate - now;



        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if(length(String(days)) === 1) {
            days = "0" + days;
        }
        if(length(String(hours)) === 1) {
            days = "0" + days;
        }
        if(length(String(minutes)) === 1) {
            days = "0" + days;
        }
        if(length(String(seconds)) === 1) {
            days = "0" + days;
        }
        document.getElementById("countdown").innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "Tik-ta...";
        }
    }, 1);
});