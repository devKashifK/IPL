window.addEventListener("load", () => {
    infiniteSlider();
    loadCards()
  });
  
  function infiniteSlider() {
    var Container = document.querySelector(".container");
    var slide = document.querySelector(".slides");
    var slides = document.querySelectorAll(".slide");
    var dots = document.querySelector(".dots");
    var dot = document.querySelectorAll(".dot")
    var index = 1;
    var time = 3000;
    let automaticSlide;
  
    var firstClone = slides[0].cloneNode(true);
    var lastClone = slides[slides.length - 1].cloneNode(true);
  
    firstClone.id = "firstClone";
    lastClone.id = "lastClone";
  
    slide.append(firstClone);
    slide.prepend(lastClone);
  
    var slideWidth = slides[index].clientWidth;
  
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  
  
  
    function Controls() {
     
      
      dot.forEach((item) =>
      
        item.addEventListener("click", function () {
          index = item.id;
          slide.style.transition = "none";
        })
      );
    }
    Controls();
  
  
    function changeSlide() {
      slides = document.querySelectorAll(".slide");
      automaticSlide = setInterval(() => {
        nextSlide();
      }, time);
    }
  
    function nextSlide() {
      slides = document.querySelectorAll(".slide");
      if (index >= slides.length - 1) return;
      index++;
      slide.style.transition = ".7s ease-out";
      slide.style.transform = `translateX(${-slideWidth * index}px)`;
  
 
    }
  
    slide.addEventListener("transitionend", () => {
      slides = document.querySelectorAll(".slide");
      if (slides[index].id === firstClone.id) {
        slide.style.transition = "none";
        index = 1;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
      }
    });
  
    changeSlide();
  }
    
var cardBox = document.querySelector(".cards_container");
var teamDataa = JSON.parse(localStorage.getItem("TeamDetails"))

  function loadCards(){
teamDataa.map((item) => {
  cardBox.innerHTML += `
  <a href="./team.html" class="card_box" id="${item.sName}">
          <div class="card_img">
            <div class="overlay"></div>
            <div class="team_logo"><img src="${item.teamIcon}" alt=""></div>
            <img src="${item.teamImage}" alt=""></div>
          <div class="card_description mi_color">
            <h3 class="team_name">${item.teamFullName}</h3>
            <p class="stadium_name"><strong>Homeground :</strong> ${item.Homeground}</p>
            <div class="team_description"><strong>Captain :</strong> ${item.Captain}</div>
            <p class="team_description"><strong>Trophy Won :</strong> ${item.WonCount}</p>
            <p class="team_description"><strong>Winning Year :</strong> ${item.WinningYear}</p>
          </div>
        </a>  
  `
  var cardItem = document.querySelectorAll(".card_box");
  cardItem.forEach((item) => item.addEventListener("click", function(e){
    // e.preventDefault()
    var id = e.currentTarget.id;
    localStorage.setItem('card_id', JSON.stringify(id))
  }))
})
  }


  





  