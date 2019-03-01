/*global $*/
/*global $*/
/*global firebase*/

var database = firebase.database();
var databaseRef = database.ref("/");

// Read the data from the database and take a snapshot of that data.

databaseRef.once("value").then(function(snapshot) {
 // Use .val() to get the data from the snapshot.
 const directory = snapshot.val();
 var UName;
 var UPass;
 
    for(var key in directory){
        UName = directory[key].username;
        UPass = directory[key].password;
        
        
    }
    $("#login").click(function(){
        if(UName === $("#username").val() && UPass === $("#password").val()){
            window.location.replace("input.html");
            
        } else {
            $("#incorrect").html("That was incorrect");
        }
        
        });
        
    $("body").keydown(function(event) {
    
    if (event.which === 13) {
        console.log("hi");
            if(UName === $("#username").val() && UPass === $("#password").val()){
            window.location.replace("input.html");
            
        } else {
            $("#incorrect").html("That was incorrect");
        }
      }
    });
});
