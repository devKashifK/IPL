var playerData = JSON.parse(localStorage.getItem("single"))
var playerInfo = ""
var from = ""

var container =  document.querySelector(".Player_main")


console.log(playerData)

playerData.map((item) => {
    if(item.isPlaying == true){
        playerInfo = "isPlaying"
    }else{
        playerInfo= "Not Playing"
    }
    
    if(item.overSeasPlayer == false){
        from = "Indian"
    }else{
        from = "OverSeas"
    }

    container.innerHTML = `
    <div class="player_box">
    <img class="player_imge" src="${item.playerImage}" alt="">
    <div class="player_data">
        <p>${item.playerName}</p>
        <p>${item.from}</p>
         <p>${item.description}</p>
         <p>${item.price}</p>
         <p>${playerInfo}</p>
         <p>${from}</p>
        
    </div>
    </div>
    `
})

 
 