$(document).ready(function() {
    console.log("login loaded");
    // login in to existing account listener
    $("#sub-btn-login").on("click", function() {
        console.log("Submitted");
        var clientLogin = {
            login: $("#loginUniqueId").val().trim(),
            password: $("#loginPassword").val().trim()
        };
        console.log(clientLogin);
        // function to retrieve the client info for verification
        $.ajax("api/traineeSignUp/validate", {
            type: "GET",
            data: clientLogin
        }).then(function() {
            console.log("redirect to client dashboard");
        });
    });
});