var end = new Date('01/15/2018 10:1 AM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById('countdown').innerHTML = days + 'dagar ';
        document.getElementById('countdown').innerHTML += hours + 'timmar ';
        document.getElementById('countdown').innerHTML += minutes + 'minuter ';
        document.getElementById('countdown').innerHTML += seconds + 'sekunder';
    }

    timer = setInterval(showRemaining, 1000);
