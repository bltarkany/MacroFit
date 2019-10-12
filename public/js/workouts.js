$(".out").click(function () {
  var index = $(this).attr("data-index");
  renderComplete(index);
});

function renderComplete(index) {
  $(".largeContainer").empty();
  for (var i = 0; i < workouts[index].length; i++) {

    var newWorkout = $("<div>").addClass("workoutContainer");
    var newName = $("<p>").text(workouts[index][i].name);
    var newUl = $("<ul>");
    var newDiv = $("<div>").addClass("workout");
    var newStart = $("<img>").addClass("workoutPic").css("order", "1").attr("src", workouts[index][i].start);
    var newEnd = $("<img>").addClass("workoutPic").css("order", "2").attr("src", workouts[index][i].start);
    var newDesc = $("<div>").addClass("workoutDesc");
    var newEquip = $("<p>").text("EQUIPMENT: " + workouts[index][i].equipment);
    var newHr = $("<hr>");
    var newType = $("<p>").text("TYPE: " + workouts[index][i].type);
    newDesc.append(newEquip);
    newDesc.append(newHr);
    newDesc.append(newType);
    var newSets = $("<div>").addClass("workoutSet");
    var newSet = $("<p>").text("SETS: " + workouts[index][i].set);
    var newRep = $("<p>").text("REPS: " + workouts[index][i].rep);

    newSets.append(newSet);
    newSets.append(newHr);
    newSets.append(newRep);

    newDiv.append(newStart);
    newDiv.append(newEnd);
    newDiv.append(newDesc);
    newDiv.append(newSets);

    newUl.append(newName);
    newUl.append(newDiv);

    newWorkout.append(newUl);


    $(".largeContainer").append(newWorkout);
    
  }


}