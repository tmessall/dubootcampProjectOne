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

    $(".parkTitle").text(response.data[0].fullName);
    $(".info").text(response.data[0].description);
    var imgTag = $("<img>").attr("src", response.data[0].images[0].url);
    imgTag.attr("style", "width: 300px");
    imgTag.attr("style", "height: 200px");
    $(".parkImg").append(imgTag);
    $(".caption").text(response.data[0].images[0].altText);

    
   });

   var weatherPage = $("#weather-page")

weatherPage.click(function(e){
location.href="weather.html";
})

//local storage function 


//replace h1 with data from object/array 

//use local storage to replace placeholder text for park information.

//use local storage to replace placeholder text with an image tag.
    //create and image tag 

//link weather button that will take user to the weather page. 

//call local storage 

