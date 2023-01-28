

var addPlayer = document.querySelector(".addPlayer");




addPlayer.addEventListener("click" , function(e)
{
    e.preventDefault();
var name = document.querySelector(".name").value;
var shortName = document.querySelector("#team").value;
var Trophies = document.querySelector(".overseas").value;
var fullImg = document.querySelector(".full_img").value;
var logo = document.querySelector(".price").value;
var batsman = document.querySelector(".batsman").value;
var bowler = document.querySelector(".bowler").value;



    var obj = {
 

    teamFullName: name,
    sName: shortName,
    fullSname: name,
    teamIcon : logo,
    teamImage: fullImg,
    WonCount: Trophies,
    TopBatsman:  batsman,
    TopBowler: bowler,
    }
    console.log(obj)
    addNewItem (obj)
    location.href = "./index.html"
})

function addNewItem (item) {
    if ("TeamDetails" in localStorage) {
      let teamList = JSON.parse(localStorage.getItem("TeamDetails" ));
      teamList.push(item);

      localStorage.setItem("TeamDetails", JSON.stringify(teamList));
  } 
  
  }



var searchBtn = document.querySelector(".icon")


  