// get all tiles and declare variables.
let selectedTiles = [];
let indexes = [];
let tiles = document.querySelectorAll("#tile");
let score = 0;
let para = document.querySelector(".backImg");
let check = window.getComputedStyle(para);
check = check.getPropertyValue("background-image");
let victoryMessage = document.querySelector("victory");
//

// Create array of pictures then sort them randomly


let pictures = [["url(Images/Sad.png)", "Sad1"], ["url(Images/Club.png)", "Club1"], ["url(Images/Ps.png)", "Ps1"], ["url(Images/Thai.png)", "Thai1"], ["url(Images/Thai.png)", "Thai2"], ["url(Images/Heart.png)", "Heart1"], ["url(Images/Heart.png)", "Heart2"], ["url(Images/Cow.png)", "Cow1"], ["url(Images/Cow.png)", "Cow2"], ["url(Images/Cyrus.png)", "Cyrus1"], ["url(Images/Cyrus.png)", "Cyrus2"], ["url(Images/Dog.png)", "Dog1"], ["url(Images/Dog.png)", "Dog2"], ["url(Images/SPD.png)", "SPD1"], ["url(Images/SPD.png)", "SPD2"], ["url(Images/Spain.png)", "Spain1"], ["url(Images/Spain.png)", "Spain2"], ["url(Images/Ps.png)", "Ps2"], ["url(Images/Club.png)", "Club2"], ["url(Images/Sad.png)", "Sad2"]];

  pictures = pictures.sort(function() {return 0.5 - Math.random()});


  //


  function flip_Tile() {
    for (let i = 0; i < tiles.length; i++) {
      tiles[i].addEventListener("click", function () {
          
        (document.querySelectorAll("#tile")[i].style.backgroundImage == check == false) ? document.querySelectorAll("#tile")[i].style.backgroundImage = pictures[i][0]:document.querySelectorAll("#tile")[i].style.backgroundImage = check;
         (indexes.includes(i) === false && indexes.length < 2) ? indexes.push(i):indexes = indexes;
         (selectedTiles.includes(pictures[i][1]) === false && selectedTiles.length < 2) ? selectedTiles.push(pictures[i][1]):pictures[i][1] = pictures[i][1];
         
         // Do the tiles match(while excluding check mark obviously)
         
         if (selectedTiles.length == 2 && selectedTiles[0].split("").slice(0, -1).join("") == selectedTiles[1].split("").slice(0, -1).join("")) {
          (document.querySelectorAll("#tile")[indexes[0]].style.backgroundImage == check || document.querySelectorAll("#tile")[indexes[1]].style.backgroundImage == check) ? score+=0:score+=1;
          document.querySelectorAll("#tile")[indexes[0]].style.backgroundImage = check;
          document.querySelectorAll("#tile")[indexes[1]].style.backgroundImage = check;
          
          document.querySelector(".points").innerHTML = "Points: " + score;

          indexes = [];
          selectedTiles = [];
         } else if (selectedTiles.length == 2 && selectedTiles[0].split("").slice(0, -1).join("") != selectedTiles[1].split("").slice(0, -1).join("")) {
          
          (document.querySelectorAll("#tile")[indexes[0]].style.backgroundImage == check == false) ? document.querySelectorAll("#tile")[indexes[0]].style.backgroundImage = "none": document.querySelectorAll("#tile")[indexes[0]].style.backgroundImage = check;
          (document.querySelectorAll("#tile")[indexes[1]].style.backgroundImage == check == false) ? document.querySelectorAll("#tile")[indexes[1]].style.backgroundImage = "none": document.querySelectorAll("#tile")[indexes[1]].style.backgroundImage = check;
             
          
          indexes = [];
          selectedTiles = [];
         }
      })
    }


   }

flip_Tile()
