$(document).ready(function() {

    //global var
    //parkCode=park code for URL query 
    var parkCode=localStorage.getItem("park");
    
    
    
    
    //guery URL and response 
    //// Here we construct our URL
    var queryURL = "https://developer.nps.gov/api/v1/parks?parkCode=" + parkCode 
    + "&api_key=AFoUZdt3nEoCawGmRJB9OY3AojoJTqxFYJyzbAXk";
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
        console.log(response.data[0].fullName);
        console.log(response.data[0].description);
        console.log(response.data[0].images[0].url);
        console.log(response.data[0].images[0].altText);
        
        $(".park-title").text(response.data[0].fullName);
        $(".info").text(response.data[0].description);
        var imgTag = $("<img>").attr("src", response.data[0].images[0].url).attr("style", "width: 100%").addClass("mx-auto");
        $(".park-img").append(imgTag);
        $(".caption").text(response.data[0].images[0].altText);
        
        
    });
    
    var weatherPage = $("#weather-page");    
    var parkPage = $("#park-page");
    
    weatherPage.click(function(e){
        location.href="weather.html";
    });

    parkPage.click(function(e){
        location.href="index.html";
    });
})