// -----Search Bar---
var searchBar  = document.querySelector(".searchInput")
var searchBtn = document.querySelector(".icon")
var details = JSON.parse(localStorage.getItem("playerDetails", ));

searchBar.addEventListener("keyup", function (e){
  var upper = e.target.value.toUpperCase();
  var filterData = details.filter((item) => item.from === upper)

  showSearchedItem(filterData)
  showResult()
  autoClose(filterData)
})


  function showSearchedItem(value){
   var searchContainer = document.querySelector(".team_container_search")
   searchContainer.innerHTML = "";
    value.map((item) => {
      
        searchContainer.innerHTML +=
        `
        <div class="team_player_search " id=${item.id} >
        <div class="player_img">
          <img src="${item.playerImage}" alt="">
        </div>
        <div class="player_description">
        <h3 class="player_name">${item.playerName}</h3>
        <p class="role">${item.description}</p>
      </div>
      </div>
        `
        var teamBox = document.querySelectorAll(".team_player_search")
        var playerDescription = document.querySelectorAll(".player_description")
        
        if(item.from === "CSK"){
            teamBox.forEach((item) => {
                item.classList.add("csk_color")
            })
            playerDescription.forEach((item) => {
                item.classList.add("mi_color")
            })
        }
            else if(item.from === "GT"){
                teamBox.forEach((item) => {
                    item.classList.add("gt_color")
                })
            }
            else if(item.from === "KKR"){
                teamBox.forEach((item) => {
                    item.classList.add("kkr_color")
                })
            }
            else if(item.from === "MI"){
                teamBox.forEach((item) => {
                    item.classList.add("mi_color")
                })
            }
            else if(item.from === "DC"){
                teamBox.forEach((item) => {
                    item.classList.add("dc_color")
                })
            }
            else if(item.from === "RCB"){
                teamBox.forEach((item) => {
                    item.classList.add("rcb_color")
                })
            }
            else if(item.from === "RR"){
                teamBox.forEach((item) => {
                    item.classList.add("rr_color")
                })
            }
            else if(item.from === "SR"){
                teamBox.forEach((item) => {
                    item.classList.add("sr_color")
                })
            }
            else if(item.from === "PBKS"){
                teamBox.forEach((item) => {
                    item.classList.add("pk_color")
                })
            }
            else if(item.from === "LCG"){
                teamBox.forEach((item) => {
                    item.classList.add("lcg_color")
                })
            }
    })

  }

  function showResult (){
    var result = document.querySelector(".search_box");
    result.style.display = "flex"
  }


  var closeBtn = document.querySelector(".close")
  closeBtn.addEventListener("click" , close)
  function close(){
    var result = document.querySelector(".search_box");
    result.style.display = "none"
  }

  function autoClose(value){
    var result = document.querySelector(".search_box");
  if(value.length == 0 ){
    result.style.display = "none"
  }
    
}
  // localStorage.clear()
