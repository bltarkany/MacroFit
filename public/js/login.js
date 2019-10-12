$(document).ready(function() {
    console.log("login loaded");
    // login in to existing account listener
    $("#sub-btn-login").on("click", function() {
        // window.history.replaceState({}, document.title, "/" + "api/traineeSignUp/validate");
        console.log("Submitted");
        var login = $("#loginUniqueId").val().trim();
        var password = $("#loginPassword").val().trim();
        var newtraineelogin = {
            login: login,
            password: password
        };
        console.log(newtraineelogin);
        
        // function to retrieve the client info for verification
        $.ajax("/api/traineeSignUp/validate", {
            type: "POST",
            data: newtraineelogin
        }).then(function() {
            console.log("redirect to client dashboard");
        });
    });
});