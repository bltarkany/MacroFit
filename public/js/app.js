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
    var current = $("#current").attr("data-current");
    var max = $("#max").attr("data-max");
    var canvas = document.getElementById("counter");
    var ctx = canvas.getContext("2d");


    // eslint-disable-next-line eqeqeq
    if(current==max){
        $("#ccMotive").text("You've hit your goal for today!");
    }
    else{
        $("#ccMotive").text("Keep Up Your Healthy Diet!");
    }

    // Nutrition breakdown write-up
    $("#fatNow").text($("#fatNow").attr("data-fatnow"));
    $("#fatFinal").text($("#fatFinal").attr("data-fatfinal"));

    $("#proteinNow").text($("#proteinNow").attr("data-proteinnow"));
    $("#proteinFinal").text($("#proteinFinal").attr("data-proteinfinal"));

    $("#carbNow").text($("#carbNow").attr("data-carbnow"));
    $("#carbFinal").text($("#carbFinal").attr("data-carbfinal"));

    var posX = canvas.width / 2;
    var posY = canvas.height / 2;
    var onePercent = 360 / 100;
    var percentage = (parseInt(current)/parseInt(max))*100;
    var result = onePercent * percentage;

    ctx.lineCap = "round";
    renderCircle();
    $("#caloriesNow").text(current);
    $("#caloriesFinal").text(max);
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

    ///////////// Workout Box /////////////  
    $("#fb").click(function(){
        $(".workoutDashContainer").empty();
    });

    ///////////// Workout Box /////////////  

});