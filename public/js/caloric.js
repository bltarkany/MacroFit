/* eslint-disable camelcase */
// on load up of page

$(document).ready(function () {
  console.log("caloric loaded");

  ///////////// LOGIN PAGE /////////////
  $(".openOld").click(function () {
    $("#oldBox").removeClass("hidden");
    $("#newBox").addClass("hidden");
    console.log("Box toggled");
  });

  $("#openNew").click(function () {
    $("#newBox").removeClass("hidden");
    $("#oldBox").addClass("hidden");
    console.log("Box toggled");
  });

  ///////////// LOGIN PAGE /////////////  


  // Caloric and Macro info - bt
  $("#sub-btn").on("click", function (e) {
    e.preventDefault();
    // new client object 
    var newClient = {
      first: $("#first").val(),
      last: $("#last").val(),
      uniqueId: $("#uniqueId").val(),
      password: $("#password").val(),
      dob: $("#dob").val(),
      gender: $("#gender").val(),
      feet: $("#feet").val(),
      inches: $("#inches").val(),
      weight: $("#weight").val(),
      saf: $("#saf").val(),
      deficit: $("#deficit").val()
    };

    // info grab check
    console.log(
      newClient.first,
      newClient.last,
      newClient.email
    );
    console.log(
      newClient.dob,
      newClient.gender,
      newClient.feet,
      newClient.inches,
      newClient.weight,
      newClient.saf,
      newClient.deficit
    );
    // saf configurations
    var age = getAge(newClient.dob);
    var weight = convertKg(newClient.weight);
    var height = convertHeight(newClient.feet, newClient.inches);
    // rmr calculations
    var rmr = function (weight, height, age) {
      if (newClient.gender === "male") {
        rmr = mensRMR(weight, height, age);
      } else {
        rmr = womensRMR(weight, height, age);
      }
    };
    // cb
    rmr(weight, height, age);
    console.log(age, weight, height, rmr);

    // Mens RMR
    function mensRMR(weight, height, age) {
      // eslint-disable-next-line prettier/prettier
      rmr = Math.abs((9.99 * weight) + (6.25 * height) - (4.92 * age) + 5);
      console.log(rmr);
      return parseFloat(rmr.toFixed(2));
    }
    // women's RMR
    function womensRMR(weight, height, age) {
      // eslint-disable-next-line prettier/prettier
      rmr = Math.abs((9.99 * weight) + (6.25 * height) - (4.92 * age) - 161);
      console.log(rmr);
      return parseFloat(rmr.toFixed(2));
    }

    // function to convert Date of Birth to age
    function getAge(dob) {
      var today = new Date();
      var birth = new Date(dob);
      var age = today.getFullYear() - birth.getFullYear();
      var m = today.getMonth() - birth.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        age = age - 1;
      }
      return age;
    }

    // converting height from feet and inches into cm
    function convertHeight(feet, inch) {
      // eslint-disable-next-line prettier/prettier
      var height = (parseFloat(feet) * 12) + parseFloat(inch);
      console.log(height);
      var cm = Math.abs(height * 2.54);
      // return new height
      return cm;
    }

    // converting pounds into kg
    function convertKg(lbs) {
      var kg = Math.abs(parseFloat(lbs) / 2.205);
      // return result
      return parseFloat(kg.toFixed(2));
    }
    // -----------------------------------------------------------------
    // tdee configurations
    var tdee = newTdee(rmr, newClient.saf);
    console.log(tdee);
    // TDEE calculation
    function newTdee(rmr, saf) {
      var cal = Math.abs(rmr * saf);
      console.log(cal);
      return parseFloat(cal.toFixed());
    }
    // --------------------------------------------------------------------
    // deficit configurations
    var deficit = parseFloat(newClient.deficit);
    console.log(deficit);
    var newdef = function (tdee, deficit) {
      if (newClient.deficit === "250") {
        newdef = calDef(tdee, deficit);
      } else if (newClient.deficit === "500") {
        newdef = calDef(tdee, deficit);
      } else if (newClient.deficit === "700") {
        newdef = calDef(tdee, deficit);
      } else {
        newdef = calDef(tdee, deficit);
      }
    };
    // deficit calculations cb
    newdef(tdee, deficit);
    console.log(newdef);
    // caloric deficit
    function calDef(tdee, deficit) {
      var def = tdee - deficit;
      console.log(def);
      return parseFloat(def.toFixed(2));
    }
    // macro breakdown
    var mac;
    // cb
    macConfig(deficit);
    // configure macro breakdown
    function macConfig(deficit) {
      if (deficit === 250) {
        mac = "35/35/30";
      } else if (deficit === 500) {
        mac = "40/35/25";
      } else if (deficit === 700) {
        mac = "40/40/20";
      } else {
        mac = "33/33/33";
      }
    }
    // proteins calories broken down into grams
    var protein = function (deficit, newdef) {
      if (deficit === 250) {
        protein = Math.abs((newdef * .35) / 4);
      } else if (deficit === 500) {
        protein = Math.abs((newdef * .40) / 4);
      } else if (deficit === 700) {
        protein = Math.abs((newdef * .40) / 4);
      } else {
        protein = Math.abs((newdef * .33) / 4);
      }
    };
    // cb
    protein(deficit, newdef);
    // carbs calories broken down into grams
    var carbs = function (deficit, newdef) {
      if (deficit === 250) {
        carbs = Math.abs((newdef * .35) / 4);
      } else if (deficit === 500) {
        carbs = Math.abs((newdef * .35) / 4);
      } else if (deficit === 700) {
        carbs = Math.abs((newdef * .40) / 4);
      } else {
        carbs = Math.abs((newdef * .33) / 4);
      }
    };
    // cb
    carbs(deficit, newdef);
    // fats calories broken down into grams
    var fats = function (deficit, newdef) {
      console.log(deficit, newdef);
      if (deficit === 250) {
        fats = Math.abs((newdef * .30) / 9);
      } else if (deficit === 500) {
        fats = Math.abs((newdef * .25) / 9);
      } else if (deficit === 700) {
        fats = Math.abs((newdef * .20) / 9);
      } else {
        fats = Math.abs((newdef * .33) / 9);
      }
    };

    // cb
    fats(deficit, newdef);
    console.log(mac, protein, carbs, fats);

    // ---------------------------------------------------------------
    // **caloric and macro object
    var newMacro = {
      calories: newdef,
      proteins: protein,
      carbs: carbs,
      fats: fats
    };
    // ----------------------------------------------------------------
    // client object for database trainee_info and post api
    var newtraineeinfo = {
      firstName: newClient.first,
      lastName: newClient.last,
      age: age,
      gender: newClient.gender,
      weight: parseFloat(newClient.weight),
      height_FT: parseFloat(newClient.feet),
      height_IN: parseFloat(newClient.inches),
      activity_Level: newClient.saf,
      deficit: parseFloat(newClient.deficit),
      login: newClient.uniqueId,
      password: newClient.password,
      calories: newMacro.calories,
      proteins: newMacro.proteins,
      carbs: newMacro.carbs,
      fats: newMacro.fats
    };
    // info tests
    console.log(newMacro);
    console.log(newtraineeinfo);

    // post call for trainee sign up
    $.ajax("/api/traineeSignUp", {
      type: "POST",
      data: newtraineeinfo
    }).then(function (data) {
      console.log("created new trainee");
      console.log(data);
      console.log(data.id);
      window.location.replace("/dashboard/" + data.id);

      // clear values from form
      $("#first").val("");
      $("#last").val(""),
      $("#uniqueId").val(""),
      $("#password").val(""),
      $("#dob").val(""),
      $("#gender").val("");
      $("#feet").val("");
      $("#inches").val("");
      $("#weight").val("");
      $("#saf").val("");
      $("#deficit").val("");
    });


    $("#oldBox").removeClass("hidden");
    $("#newBox").addClass("hidden");
    console.log("Box toggled");
    
    // window.location.replace("/dashboard");
    return false;
  });

  

});