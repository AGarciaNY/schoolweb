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
        
        //split up the tags later
        $("#body_content").append("<div class='card_align'id='"+ count +"card-align'></div>");
        $("#"+ count +"card-align").append("<div class='card col-xs-3 zoom' id='"+ count +"card' style='width: 22rem; height:490px;'></div>");
        $("#"+count+"card").append("<div class='pos'id='"+ count +"pos'></div>");
        $("#"+count+"card").append("<div class='card-body' id='"+count+"card-body'></div>");
        $("#"+count+"pos").append("<img class='card_image' id='"+ count +"card_image' src='"+ databaseValues[key]["image_link"] +"' class='card-img-top' alt='...'>");
        $("#"+count+"card-body").append("<hr style='border-top: 1px solid black;'>");
        $("#"+count+"card-body").append("<h5 class='card-title "+ count +"'>"+ databaseValues[key]["name"] +"</h5>");
        $("#"+count+"card-body").append("<div class='postwo' id='"+ count +"postwo'></div>");
        $("#"+count+"postwo").append("<i>"+ databaseValues[key]["date"] +"</i><p class='card-text' id='"+ count +"card-text' > " + databaseValues[key]["content"] + " </p>");
        $("#"+count+"card-body").append("<a href='"+ databaseValues[key]["link"] +"' class='btn btn-primary card-button'>Go somewhere</a>");
        console.log(count);
        count++;
        //$("#info").append(databaseValues["Facts"][i]["Fact"]);
        
    }
    
    

});
