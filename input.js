/*global firebase*/
/*global $*/

console.log((new Date()).getFullYear());
console.log(new Date());

var database = firebase.database();
var databaseRef = database.ref('/');
databaseRef.once('value').then(function(snapshot){

    const databaseValues = snapshot.val();
    console.log(databaseValues);
    //console.log(databaseValues["post"]["content"]);
    //for(var i=0; i<databaseValues["Facts"].length;i++){
    for(var key in databaseValues){
        
        console.log(databaseValues[key]);
        console.log(databaseValues[key]["content"]);
        console.log(databaseValues[key]["date"]);
        console.log(databaseValues[key]["name"]);
        
        $("#input-submit").click(function(){
            
            var title = $("#title").val();
            var content = $("#content_input").val();
            var img = $("#img_url").val();
            var taskLink = $("#task_url").val();
            
            console.log(title, content, img, taskLink);
            if(title === "" || content === "" || img === "" || taskLink === ""){
                console.log("missing stuff");
                $("#error-box").html("<p style='color:red; padding-top: 30px;' >Please fill in all the inputs</p>");
            } else {
                console.log("wrote everthing");
                databaseValues.push({
                    "content": content,
                    "date" : new Date(),
                    "image_link" : img,
                    "link" : taskLink,
                    "name" : title,
                });
                $("#error-box").clear;
            }
        });
        console.dir($("#error-box"));
        
    
    }
    
    

});
