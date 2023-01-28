

var addPlayer = document.querySelector(".addPlayer");

addPlayer.addEventListener("click" , function(e)
{
    e.preventDefault();
var name = document.querySelector(".name").value;
var role = document.querySelector("#player_role").value;
var overseas = document.querySelector("#overseas").value;
var team = document.querySelector("#team").value;
var price = document.querySelector(".price").value;
var preview = document.querySelector('#image_pre').value;
var playing = document.querySelector("#playing").value



    var obj = {

     playerName: name,
     from: team,
     price: price,
     isPlaying: playing,
     overSeasPlayer: overseas,
     playerImage:  preview,
     description: role,
    }
    console.log(obj)
    
    addNewItem (obj)
    saveTeamName(team)
    
    location.href = "./team.html"
})
function addNewItem (item) {
    if ("playerDetails" in localStorage) {
      let myList = JSON.parse(localStorage.getItem("playerDetails" ));
      myList.push(item);

      localStorage.setItem("playerDetails", JSON.stringify(myList));
  } 
  
  }

  function saveTeamName(value){
    localStorage.setItem("card_id" ,  JSON.stringify(value))
  }




 

