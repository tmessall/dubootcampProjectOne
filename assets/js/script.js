$(document).ready(function () {
    // Grabbing elements from html
    var subBtn = $(".subBtn");
    
    subBtn.on("click", function(e) {
        localStorage.setItem("park", $("#parks option:selected").val());
        e.preventDefault();
        // Takes user to next page
        location.href="parks.html";
    });

    $(".img").click(function() {
        $(this).hide();
        // $(this).effect("fade", {}, 2000);
    });
     
});
