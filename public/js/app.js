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
    if (current == max) {
        $("#ccMotive").text("You've met your goal for today!");
    } else {
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
    var percentage = (parseInt(current) / parseInt(max)) * 100;
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

    ///////////// Add Meal /////////////
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];

    // Open/close modal
    btn.onclick = function () {
        modal.style.display = "block";
    };
    span.onclick = function () {
        modal.style.display = "none";
        clearMeal();
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        // eslint-disable-next-line eqeqeq
        if (event.target == modal) {
            modal.style.display = "none";
            clearMeal();
        }
    };

    //--------------------------ADD MACRO POST METHOD--------------------------
    $("#addMacro").on("click", function(){
        $.ajax("ROUTE",{
            type:"POST",
            data: currentMacros
        }).then(function(data){
            console.log("macros added");
            console.log(data);
            clearMeal();
        });
    });
    //--------------------------ADD MACRO POST METHOD--------------------------

    function clearMeal() {
        $("#cal").val("");
        $("#fat").val("");
        $("#prot").val("");
        $("#carb").val("");
    }


    ///////////// Add Meal /////////////


    ///////////// Workout Box /////////////
    $(".wrk").click(function () {
        var index = $(this).attr("data-index");
        renderWorkout(index);
    });

    function renderWorkout(index) {
        $(".workoutDashContainer").empty();
        for (var i = 0; i < workouts[index].length; i++) {
            var newWorkoutExample = $("<div>");
            newWorkoutExample.addClass("workoutExample");
            var newName = $("<p>").addClass("workoutDesc").text(workouts[index][i].name);
            var newPic = $("<img>").addClass("workoutPicSmall").attr("src", workouts[index][i].start);
            newWorkoutExample.append(newName);
            newWorkoutExample.append(newPic);
            newWorkoutExample.append($("<br>"));
            $(".workoutDashContainer").append(newWorkoutExample);
            console.log("workout added");
            
        }
    }
    ///////////// Workout Box /////////////  


    ///////////// Today's workout /////////////





    ///////////////////////////////////////////
    ///////////// Achievement Box /////////////  
    createAchievement("Hit Macro Goal", "10/10/2019");
    createAchievement("Hit Calorie Goal", "10/10/2019");
    createAchievement("New PR &lt;Bench Press&gt;", "10/8/2019");
    createAchievement("Finished Workout", "10/8/2019");
    createAchievement("Created Account", "10/7/2019");

    function createAchievement(name, date) {
        var newLabel = $("<div>");
        newLabel.addClass("ccLabel");
        newLabel.html("<span>&#10003;</span> " + name + " <span class='ccLabel2'>" + date + "</span><hr>");
        $("#achContainer").append(newLabel);
    }
    ///////////// Achievement Box /////////////  

});