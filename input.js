/*global firebase*/
/*global $*/

console.log((new Date()).getFullYear());
console.log(new Date());

var database = firebase.database();
var databaseRef = database.ref('/');
databaseRef.once('value').then(function(snapshot){

    const databaseValues = snapshot.val();
    console.log(databaseValues);
    var count = 0;
    //console.log(databaseValues["post"]["content"]);
    //for(var i=0; i<databaseValues["Facts"].length;i++){
    for(var key in databaseValues){
        
        console.log(databaseValues[key]);
        console.log(databaseValues[key]["content"]);
        console.log(databaseValues[key]["date"]);
        console.log(databaseValues[key]["name"]);
        
        $("#input-submit").click(function(){
            console.log("hi");
            $(".input").each(function(index, element){
                console.log(element);
            });
        });
        
        
        //split up the tags later
        console.log(count);
        count++;
        //$("#info").append(databaseValues["Facts"][i]["Fact"]);
        
    }
    
    

});
