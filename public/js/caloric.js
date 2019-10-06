// on load up of page

$(document).ready(function() {
  console.log("loaded");
  // Caloric and Macro info - bt
  $("#sub-btn").on("click", function(e) {
    e.preventDefault();
    // new client object 
    var newClient = {
      first: $("#first")
        .val()
        .trim(),
      last: $("#last").val().trim(),
      email: $("#email").val().trim(),
      phone: $("#phone").val().trim(),
      street: $("#street").val().trim(),
      city: $("#city").val().trim(),
      state: $("#state").val().trim(),
      zip: $("#zip").val().trim(),
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
      newClient.email,
      newClient.phone,
      newClient.street,
      newClient.city,
      newClient.state,
      newClient.zip
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

    // saf configurations--
    var age = getAge(newClient.dob);
    var weight = convertKg(newClient.weight);
    var height = convertHeight(newClient.feet, newClient.inches);
    // rmr calculations
    var rmr = function(weight, height, age) {
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

    // ========================================
    // tdee configurations
    var tdee = newTdee(rmr, newClient.saf);
    console.log(tdee);
    // TDEE calculation
    function newTdee(rmr, saf) {
      var cal = Math.abs(rmr * saf);
      console.log(cal);
      return parseFloat(cal.toFixed());
    }

    // ========================================
    // deficit configurations
    var deficit = parseFloat(newClient.deficit);
    console.log(deficit);
    var newdef = function(tdee, deficit) {
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
    // deficit calculations
    newdef(tdee, deficit);
    console.log(newdef);
    // caloric deficit
    function calDef(tdee, deficit) {
      var def = tdee - deficit;
      console.log(def);
      return parseFloat(def.toFixed(2));
    }

    $.post("/api/addTrainee", newClient, function() {
      $("#first").val("");
      $("#last").val("");
      $("#email").val("");
      $("#phone").val("");
      $("#street").val("");
      $("#city").val("");
      $("#state").val("");
      $("#zip").val("");
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
