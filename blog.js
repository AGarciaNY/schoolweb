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
        $("#body_content").append("<div class='card_align "+ count +"card-align'></div>");
        
    <div class="card col-xs-3 zoom " style="width: 22rem; height:490px;">
      <div class="pos">
        <img class="card_image" src="https://image.slidesharecdn.com/dissertationngaskins-140820202813-phpapp01/95/technovernacular-creativity-innovation-learning-in-underrepresented-ethnic-communities-of-practice-23-638.jpg?cb=1408595361" class="card-img-top" alt="...">
      </div>
      <div class="card-body">
          <hr style="border-top: 1px solid black;">
          <h5 class="card-title">Conrow Curves</h5>
          <div class="postwo">
            <p class="card-text">Fill this in </p>
          </div>
          <a href="https://csdt.rpi.edu/culture/legacy/african/CORNROW_CURVES/cornrow_software/cornrow_software.html" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>");
        $("#body_content").append("");
        count++;
        //$("#info").append(databaseValues["Facts"][i]["Fact"]);
        
    }
    
    

});
