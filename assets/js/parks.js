//global var
//parkCode=park code for URL query 
var parkCode=localStorage.getItem("park");
//



//guery URL and response 
    //// Here we construct our URL
    var queryURL = "https://developer.nps.gov/api/v1/parks?park" + parkCode 
    + "&api_key=AFoUZdt3nEoCawGmRJB9OY3AojoJTqxFYJyzbAXk";

     $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response){
    console.log(response);
    
   });


//local storage function 


//replace h1 with data from object/array 

//use local storage to replace placeholder text for park information.

//use local storage to replace placeholder text with an image tag.
    //create and image tag 

//link weather button that will take user to the weather page. 

//call local storage 

