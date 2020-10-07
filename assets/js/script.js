$(document).ready(function () {
    // Allows dropdown to use jquery dropdown functions
    $("#speed").selectmenu();

    // Grabbing elements from html
    var subBtn = $(".subBtn");
    
    subBtn.click(function(e) {
        console.log($("#speed option:selected").val());
        localStorage.setItem("park", $("#speed option:selected").val());
        e.preventDefault();
        // Takes user to next page
        location.href="parks.html";
    });
});
