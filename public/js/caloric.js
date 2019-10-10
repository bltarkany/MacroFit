/* eslint-disable prettier/prettier */
// on load up of page

$(document).ready(function () {
  console.log("loaded");
  // Caloric and Macro info - bt
  $("#sub-btn").on("click", function (e) {
    e.preventDefault();
    // new client object 
    var newClient = {
      first: $("#first").val().trim(),
      email: $("#email").val().trim(),
      dob: $("#dob").val().trim(),
      gender: $("#gender").val(),
      feet: $("#feet").val(),
      inches: $("#inches").val(),
      weight: $("#weight").val().trim(),
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
    // ----------------------------------------------------------------------
    // saf configurations--
    var age = newClient.dob;
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
    // Womens RMR
    function womensRMR(weight, height, age) {
      // eslint-disable-next-line prettier/prettier
      rmr = Math.abs((9.99 * weight) + (6.25 * height) - (4.92 * age) - 161);
      console.log(rmr);
      return parseFloat(rmr.toFixed(2));
    }

    // function to convert Date of Birth to age
    // eslint-disable-next-line no-unused-vars
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

    // coverting pounds into kg
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
    // configure macro breakdown
    // cb
    macConfig(deficit);
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
    var protein = function(deficit, newdef) {
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
    var carbs = function(deficit, newdef) {
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
    var macro = {
      crmr: rmr,
      ctdee: tdee,
      cdef: deficit,
      ckcal: newdef,
      cmac: mac,
      cpro: protein,
      ccarb: carbs,
      cfat: fats
    };

    console.log(macro);

    $.post("/api/addTrainee", newClient, function () {
      $("#first").val("");
      $("#email").val("");
      $("#dob").val("");
      $("#gender").val("");
      $("#feet").val("");
      $("#inches").val("");
      $("#weight").val("");
      $("#saf").val("");
      $("#deficit").val("");
    });
  });
});
