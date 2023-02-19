$(document).ready(function () {
    var countS = 25;
    $("#session").html(countS);
    var countB = 5;
    $("#break").html(countB);
    var pos = "pomodoro";
    var countLama;
    var posLama;
    var count;
    /* Creating a clock object that is a countdown clock that starts at 0 and has a callback function
    that checks if the clock is at 0. If it is, it checks if the position is session or break. If it
    is session, it sets the clock to the break time and starts the clock. If it is break, it sets
    the clock to the session time and starts the clock. */
    var clock = $(".timer").FlipClock(0, {
        countdown: true,
        clockFace: 'MinuteCounter',
        autoStart: false,
        callbacks: {
            interval: function () {
                if (clock.getTime() == 0) {
                    if (pos == "session") {
                        clock.setTime(countB * 60);
                        clock.start();
                        pos = "break";
                    } else if (pos == "break") {
                        clock.setTime(countS * 60);
                        clock.start();
                        pos = "session";
                    }
                }
            }
        }
    })
    //SESSION
    /* This is the code for the session increment button. It checks if the session time is greater than
    0. If it is, it sets the countS variable to the session time, increments it by 1, and sets the
    session time to the new countS variable. */
    $("#sessInc").on("click", function () {
        if ($("#session").html() > 0) {
            countS = parseInt($("#session").html());
            countS += 1;
            $("#session").html(countS);
            //clock.setTime(countS*60);
        }
    });
   /* This is the code for the session decrement button. It checks if the session time is greater than
   1. If it is, it sets the countS variable to the session time, decrements it by 1, and sets the
   session time to the new countS variable. */
    $("#sessDec").on("click", function () {
        if ($("#session").html() > 1) {
            countS = parseInt($("#session").html());
            countS -= 1;
            $("#session").html(countS);
            //clock.setTime(countS*60);
        }
    });
    //BREAK
    /* This is the code for the break increment and decrement buttons. It checks if the break time is
    greater than
    0 or 1, respectively. If it is, it sets the countB variable to the break time, increments or
    decrements it by 1, and sets the
    break time to the new countB variable. */
    $("#breakInc").on("click", function () {
        if ($("#break").html() > 0) {
            countB = parseInt($("#break").html());
            countB += 1;
            $("#break").html(countB);
        }
    });
    $("#breakDec").on("click", function () {
        if ($("#break").html() > 1) {
            countB = parseInt($("#break").html());
            countB -= 1;
            $("#break").html(countB);
        }
    });
    /* This is the code for the start button. It checks if the count variable is not equal to the
    countS variable or if the clock is at 0. If it is, it sets the clock to the session time and
    sets the
    position to session. If it is not, it sets the position to the positionLama variable. It then
    sets
    the count variable to the countS variable and starts the clock. */
    $("#start").on("click", function () {
        if (count != countS || clock.getTime() == 0) {
            clock.setTime(countS * 60);
            pos = "session";
        } else {
            pos = posLama;
        }
        count = countS;
        clock.start();
    });
    /* This is the code for the stop and clear buttons. The stop button stops the clock and sets the
    countLama variable to the time on the clock. The clear button stops the clock, sets the position
    to pomodoro, and sets the clock to 0. */
    $("#stop").on("click", function () {
        clock.stop();
        countLama = clock.getTime();
    });
    $("#clear").on("click", function () {
        clock.stop();
        pos = "pomodoro";
        clock.setTime(0);
    });
});