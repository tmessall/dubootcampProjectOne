$(document).ready(function() {
    //global var
    //parkCode=park code for URL query 
    var parkCode = localStorage.getItem("park");
    var carousel = $(".carousel-inner");
    
    //guery URL and response 
    //// Here we construct our URL
    var queryURL = "https://developer.nps.gov/api/v1/parks?parkCode=" + parkCode 
    + "&api_key=AFoUZdt3nEoCawGmRJB9OY3AojoJTqxFYJyzbAXk";
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        $(".park-title").text(response.data[0].fullName);
        $(".info").text(response.data[0].description);
        // Creates the pictures for the slideshow
        for (var i = 0; i < response.data[0].images.length; i++) {
            var divTag = $("<div>").addClass("carousel-item mx-auto");
            var imgTag = $("<img>").attr("src", response.data[0].images[i].url).addClass("d-block w-100");
            divTag.append(imgTag);
            var pTag = $("<p>").addClass("caption").text(response.data[0].images[i].altText)
            divTag.append(pTag);
            if (i == 0) {
                divTag.addClass("active");
            }
            carousel.append(divTag);
        }
        $('.carousel').carousel();
        
        
    });
    
    // Buttons that link to other pages
    var weatherPage = $("#weather-page");    
    var parkPage = $("#park-page");
    
    weatherPage.click(function(e){
        location.href="weather.html";
    });

    parkPage.click(function(e){
        location.href="index.html";
    });
})