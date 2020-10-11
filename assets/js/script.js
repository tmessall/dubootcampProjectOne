$(document).ready(function () {

    $(".subBtn").on("click", function (e) {
        localStorage.setItem("park", $("#parks option:selected").val());
        e.preventDefault();
        // Takes user to next page
        location.href = "parks.html";
    });

    // All show and hide functions come from jQuery UI
    $("#show-button").hide();

    $("#hide-button").click(function () {
        $(this).hide();
        $("#show-button").show();
        for (var i = 0; i < 4; i++) {
            $(`#${i}`).hide();
        }
    });

    $("#show-button").click(function () {
        $("#hide-button").show();
        for (var i = 0; i < 4; i++) {
            $(`#${i}`).show();
        }
        $(this).hide();
    })

});
