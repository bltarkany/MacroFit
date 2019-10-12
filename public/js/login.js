$(document).ready(function () {
    console.log("login loaded");

    //------HARDCODE ACCOUNT-----//
    $(".fake").click(function(){
        console.log("hardcode click");
        window.location.href = "/dashboard/2/cd0981c33b36f71";
        return false;
    });
    
    // login in to existing account listener
    $("#sub-btn-login").on("click", function () {
        //window.history.replaceState({}, document.title, "/" + "api/traineeSignUp/validate");
        console.log("Submitted");
        var login = $("#loginUniqueId").val().trim();
        var password = $("#loginPassword").val().trim();
        var newtraineelogin = {
            login: login,
            password: password
        };
        var apiString = newtraineelogin.login + "/" + newtraineelogin.password;
        console.log("this is destination string: " + apiString);
        console.log(newtraineelogin);

        window.setTimeout(
            $.get("/api/traineeSignUp/validate/" + apiString, function (data) {
                alert("inside get");
                console.log(data);
            }), 1000);





        //     // function to retrieve the client info for verification
        //     var test = $.ajax("/api/traineeSignUp/validate", {
        //         type: "POST",
        //         data: newtraineelogin
        //     }).then(function (data) {
        //         console.log("redirect to client dashboard");
        //         console.log(data);
        //     });

        //     console.log(test);
        // });


    });
});