/* eslint-disable indent */
/* eslint-disable prettier/prettier */

$(document).ready(function () {

    // Today's Date
    today = new Date();
    y = today.getFullYear();
    m = today.getMonth() + 1;
    d = today.getDate();
    $("#date").text(m + "/" + d + "/" + y);

    ///////////// Calorie Counter /////////////
    var current = $("#current").text();
    var max = $("#max").text();
    var canvas = document.getElementById("counter");
    var ctx = canvas.getContext("2d");

    var posX = canvas.width / 2;
    var posY = canvas.height / 2;
    var onePercent = 360 / 100;
    var percentage = (parseInt(current)/parseInt(max))*100;
    var result = onePercent * percentage;

    ctx.lineCap = "round";
    renderCircle();

    function renderCircle() {
        var degrees = 0;
        var arcInterval = setInterval(function () {
            degrees += 1;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            percent = degrees / onePercent;

            // blank
            ctx.beginPath();
            ctx.arc(posX, posY, 60, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + 360));
            ctx.strokeStyle = "#e7e9eb";
            ctx.lineWidth = "20";
            ctx.stroke();

            // filled
            ctx.beginPath();
            ctx.strokeStyle = "	#eeee00";
            ctx.lineWidth = "20";
            ctx.arc(posX, posY, 60, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + degrees));
            ctx.stroke();
            if (degrees >= result) {
                clearInterval(arcInterval);
            }
        });

    }
    ///////////// Calorie Counter /////////////


    ///////////// LOGIN PAGE /////////////
    $("#openOld").click( function(){
        $("#newBox").removeClass("hidden");
        $("#oldBox").addClass("hidden");
        console.log("Box toggled");
    });

    ///////////// LOGIN PAGE /////////////  

});