var side;

var rows = 10;
var cols = 10;
var squareSize = 10;

var gameBoardContainer;
var gameBoardContainer2;


var hitCount;
var hitCount2;
var count;
var placingBoats;
var k;

var positions = [];
var boat2;
var boat3a;
var boat3b;
var boat4;
var boat5;

var gameBoard2 = [];


var gameBoard = [];
var gameBoard3 = [];
var gameBoard4 = [];
var counthit = [];
var counthit2= []
var win = 0;
var loss = 0;
var counter = document.createElement("div");
var n;



resetgame();




function resetgame(){ // Dit is de functie die elk potje het bord inlaadt

hitCount = 0;
hitCount2 = 0;
count = 0;
placingBoats = 1;
k = 0;

positions = [];
counthit= [0,0,0,0,0];
counthit2 = [0,0,0,0,0];
gameBoardContainer = document.getElementById("gameboard");
gameBoardContainer2 = document.getElementById("gameboard2");
boat2 = 0;
boat3a = 0;
boat3b = 0;
boat4 = 0;
boat5 = 0;


  for (var i=0; i < rows; i++) {  // bouwt de borden
    gameBoard[i] = [];
    gameBoard2[i] = [];
    gameBoard3[i] = [];
    gameBoard4[i] = [];
      for (var j=0; j < cols; j++) {
        gameBoard[i][j] = 0;
        gameBoard2[i][j] = 0;
        gameBoard3[i][j] = 0;
        gameBoard4[i][j] = 0;
      }
    }
var a = gameBoardContainer.children.length/10;
for (i = 0; i <a; i++) {
 for (j = 0; j <a; j++) {
  var element = document.getElementById("a"+ i+ j);
  var element2 = document.getElementById("s"+ i+ j);
element.remove();
element2.remove();
}
}
 for (i = 0; i < cols; i++) {
  for (j = 0; j < rows; j++) {
    for(k = 0; k < 2; k++){
      var square = document.createElement("div");
      if(k == 0){
        gameBoardContainer.appendChild(square);
          square.id = 's' + j + i;
      }
      if(k ==1){
          gameBoardContainer2.appendChild(square);
          square.id = 'a' + j + i;
      }

      var topPosition = j * squareSize;
      var leftPosition = i * squareSize;

      square.style.top = topPosition+ 10 + '%';
      square.style.left = leftPosition + '%';

    }



  }
}
gameBoardContainer.addEventListener("click", fireTorpedo, false);
gameBoardContainer2.addEventListener("click", placeBoat, false);

var board = document.getElementById("gameboard");
var enemy = document.getElementById("enemy");
var step1 = document.getElementById("step1");
var step2 = document.getElementById("step2");
step2.style.display = "none";
//enemy.style.display = "none";
board.style.display = "none";
step1.style.display = "inline";
side =0;
n =10;
//console.log(counthit[4]);


}

function enemyBoats() {  // Plaatst de boten van de AI random op zijn bord
  for (var i=0; i < 4; i++) {
  xKeuze=  Boolean(Math.round(Math.random()));
  if(xKeuze){
  var ruimteA =6+i;
  var ruimteB = 10;
  Chooserandom(ruimteA,ruimteB,i, xKeuze);
}else if(!xKeuze){
  var ruimteA =10;
  var ruimteB = 6+ i;
    Chooserandom(ruimteA,ruimteB,i,xKeuze);
  }
  if(i ==2){
    xKeuze=  Boolean(Math.round(Math.random()));
    if(xKeuze){
    var ruimteA =6+i;
    var ruimteB = 10;
      Chooserandom(ruimteA,ruimteB,i,xKeuze);
  }else if(!xKeuze){
    var ruimteA =10;
    var ruimteB = 6+ i;
      Chooserandom(ruimteA,ruimteB,i, xKeuze);

  }
}
}

}
 function Chooserandom(ruimteA,ruimteB,i,xKeuze){
  fit = false;
 while(!fit){
   var a1 = Math.floor(Math.random() * ruimteA);
   var b1 = Math.floor(Math.random() * ruimteB);
   var redop = false;

      for (var j=0; j < 5-i; j++) {
        if(xKeuze){
          if(gameBoard[a1+ j][b1] == 2){
            redop = true;
          }

        }
        if(!xKeuze){
          if(gameBoard[a1][b1+j] == 2){
            redop = true;
          }

        }


 }
 if(!redop){
   fit = true;
      for (var j=0; j < 5-i; j++) {
   if(xKeuze){
     gameBoard[a1+ j][b1] = 2;
     gameBoard3[a1+j][b1] =5-i+n;

   }
   if(!xKeuze){
     gameBoard[a1][b1+j] = 2;
    gameBoard3[a1][b1+ j] =5-i +n;


   }
 }
n = n+ 10;
}


 }
}

// hier tussen werken
function placeBoat(e) { // het plaatsen van je boten
  if (boat5 == 0) {
    if (e.target !== e.currentTarget) {
      var row = e.target.id.substring(1, 2);
      var col = e.target.id.substring(2, 3);
      if (gameBoard2[row][col] == 0) {
        if (count < 17) {
          e.target.style.background = 'blue';
          e.target.className += "selected";
          gameBoard2[row][col] = 1;
          count++;
        }
      } else if (gameBoard2[row][col] == 1) {
        e.target.style.background = '#f6f8f9';
        e.target.className -= "selected";
        gameBoard2[row][col] = 0;
        count--;
      } else if (gameBoard2[row][col] == 2) {
        e.target.style.background = 'green';
        console.log('help paniek ik weet niet wat deze code doet');
      }
    }
    positions = [];
    for (i = 0; i < gameBoard2.length; i++) {
      for (j = 0; j < gameBoard2[i].length; j++) {
        if (gameBoard2[i][j] == "1") {
          positions.push(i, j);
        }
      }
    }
    if (boat2 == 0) {
      if ((Math.abs(positions[1] - positions[3]) == 1 && positions[0] == positions[2] || Math.abs(positions[0] - positions[2]) == 1 && positions[1] == positions[3]) && count == 2) {
        var elements = document.getElementsByClassName('selected');
        boat2 = 1;
        for (j = 0; j < elements.length; j++) {
          elements[j].style.background = "green";
        }
        gameBoard2[positions[0]][positions[1]] = 2;
        gameBoard2[positions[2]][positions[3]] = 2;
        gameBoard4[positions[0]][positions[1]] = 52;
        gameBoard4[positions[2]][positions[3]] = 52;
        count = 0;
      }
      positions = [];
    }
    if (boat2 == 1 && boat3a == 0) {
      if (Math.abs(positions[1] - positions[3]) == 1 && positions[0] == positions[2]) {
        if (Math.abs(positions[3] - positions[5]) == 1 && positions[2] == positions[4] && count == 3) {
          var elements = document.getElementsByClassName('selected');
          boat3a = 1;
          for (j = 0; j < elements.length; j++) {
            elements[j].style.background = "green";
          }
          gameBoard2[positions[0]][positions[1]] = 2;
          gameBoard2[positions[2]][positions[3]] = 2;
          gameBoard2[positions[4]][positions[5]] = 2;
          gameBoard4[positions[0]][positions[1]] = 43;
          gameBoard4[positions[2]][positions[3]] = 43;
          gameBoard4[positions[4]][positions[5]] = 43;
          count = 0;
        }
      }
      if (Math.abs(positions[0] - positions[2]) == 1 && positions[1] == positions[3]) {
        if (Math.abs(positions[2] - positions[4]) == 1 && positions[3] == positions[5] && count == 3) {
          var elements = document.getElementsByClassName('selected');
          boat3a = 1;
          for (j = 0; j < elements.length; j++) {
            elements[j].style.background = "green";
          }
          gameBoard2[positions[0]][positions[1]] = 2;
          gameBoard2[positions[2]][positions[3]] = 2;
          gameBoard2[positions[4]][positions[5]] = 2;
          gameBoard4[positions[0]][positions[1]] = 43;
          gameBoard4[positions[2]][positions[3]] = 43;
          gameBoard4[positions[4]][positions[5]] = 43;
          count = 0;
        }
      }
      positions = [];
    }
    if (boat3a == 1 && boat3b == 0) {
      if (Math.abs(positions[1] - positions[3]) == 1 && positions[0] == positions[2]) {
        if (Math.abs(positions[3] - positions[5]) == 1 && positions[2] == positions[4] && count == 3) {
          var elements = document.getElementsByClassName('selected');
          boat3b = 1;
          for (j = 0; j < elements.length; j++) {
            elements[j].style.background = "green";
          }
          gameBoard2[positions[0]][positions[1]] = 2;
          gameBoard2[positions[2]][positions[3]] = 2;
          gameBoard2[positions[4]][positions[5]] = 2;
          gameBoard4[positions[0]][positions[1]] = 33;
          gameBoard4[positions[2]][positions[3]] = 33;
          gameBoard4[positions[4]][positions[5]] = 33;
          count = 0;
        }
      }
      if (Math.abs(positions[0] - positions[2]) == 1 && positions[1] == positions[3]) {
        if (Math.abs(positions[2] - positions[4]) == 1 && positions[3] == positions[5] && count == 3) {
          var elements = document.getElementsByClassName('selected');
          boat3b = 1;
          for (j = 0; j < elements.length; j++) {
            elements[j].style.background = "green";
          }
          gameBoard2[positions[0]][positions[1]] = 2;
          gameBoard2[positions[2]][positions[3]] = 2;
          gameBoard2[positions[4]][positions[5]] = 2;
          gameBoard4[positions[0]][positions[1]] = 33;
          gameBoard4[positions[2]][positions[3]] = 33;
          gameBoard4[positions[4]][positions[5]] = 33;
          count = 0;
        }
      }
      positions = [];
    }
    if (boat3b == 1 && boat4 == 0) {
      if (Math.abs(positions[1] - positions[3]) == 1 && positions[0] == positions[2]) {
        if (Math.abs(positions[3] - positions[5]) == 1 && positions[2] == positions[4]) {
          if (Math.abs(positions[5] - positions[7]) == 1 && positions[4] == positions[6] && count == 4) {
            var elements = document.getElementsByClassName('selected');
            boat4 = 1;
            for (j = 0; j < elements.length; j++) {
              elements[j].style.background = "green";
            }
            gameBoard2[positions[0]][positions[1]] = 2;
            gameBoard2[positions[2]][positions[3]] = 2;
            gameBoard2[positions[4]][positions[5]] = 2;
            gameBoard2[positions[6]][positions[7]] = 2;
            gameBoard4[positions[0]][positions[1]] = 24;
            gameBoard4[positions[2]][positions[3]] = 24;
            gameBoard4[positions[4]][positions[5]] = 24;
            gameBoard4[positions[6]][positions[7]] = 24;
            count = 0;
          }
        }
      }
      if (Math.abs(positions[0] - positions[2]) == 1 && positions[1] == positions[3]) {
        if (Math.abs(positions[2] - positions[4]) == 1 && positions[3] == positions[5]) {
          if (Math.abs(positions[4] - positions[6]) == 1 && positions[5] == positions[7] && count == 4) {
            var elements = document.getElementsByClassName('selected');
            boat4 = 1;
            for (j = 0; j < elements.length; j++) {
              elements[j].style.background = "green";
            }
            gameBoard2[positions[0]][positions[1]] = 2;
            gameBoard2[positions[2]][positions[3]] = 2;
            gameBoard2[positions[4]][positions[5]] = 2;
            gameBoard2[positions[6]][positions[7]] = 2;
            gameBoard4[positions[0]][positions[1]] = 24;
            gameBoard4[positions[2]][positions[3]] = 24;
            gameBoard4[positions[4]][positions[5]] = 24;
            gameBoard4[positions[6]][positions[7]] = 24;
            count = 0;
          }
        }
      }
      positions = [];
    }
    if (boat4 == 1 && boat5 == 0) {
      if (Math.abs(positions[1] - positions[3]) == 1 && positions[0] == positions[2]) {
        if (Math.abs(positions[3] - positions[5]) == 1 && positions[2] == positions[4]) {
          if (Math.abs(positions[5] - positions[7]) == 1 && positions[4] == positions[6]) {
            if (Math.abs(positions[7] - positions[9]) == 1 && positions[6] == positions[8] && count == 5) {
              var elements = document.getElementsByClassName('selected');
              boat5 = 1;
              for (j = 0; j < elements.length; j++) {
                elements[j].style.background = "green";
              }
              gameBoard2[positions[0]][positions[1]] = 2;
              gameBoard2[positions[2]][positions[3]] = 2;
              gameBoard2[positions[4]][positions[5]] = 2;
              gameBoard2[positions[6]][positions[7]] = 2;
              gameBoard2[positions[8]][positions[9]] = 2;
              gameBoard4[positions[0]][positions[1]] = 15;
              gameBoard4[positions[2]][positions[3]] = 15;
              gameBoard4[positions[4]][positions[5]] = 15;
              gameBoard4[positions[6]][positions[7]] = 15;
              gameBoard4[positions[8]][positions[9]] = 15;
              count = 0;
              var board = document.getElementById("gameboard");
              var enemy = document.getElementById("enemy");
              var step1 = document.getElementById("step1");
              var step2 = document.getElementById("step2");
              step2.style.display = "block";
//              enemy.style.display = "block";
              board.style.display = "block";
              step1.style.display = "none";
              enemyBoats();
            }
          }
        }
      }
      if (Math.abs(positions[0] - positions[2]) == 1 && positions[1] == positions[3]) {
        if (Math.abs(positions[2] - positions[4]) == 1 && positions[3] == positions[5]) {
          if (Math.abs(positions[4] - positions[6]) == 1 && positions[5] == positions[7]) {
            if (Math.abs(positions[6] - positions[8]) == 1 && positions[7] == positions[9] && count == 5) {
              var elements = document.getElementsByClassName('selected');
              boat5 = 1;
              for (j = 0; j < elements.length; j++) {
                elements[j].style.background = "green";
              }
              gameBoard2[positions[0]][positions[1]] = 2;
              gameBoard2[positions[2]][positions[3]] = 2;
              gameBoard2[positions[4]][positions[5]] = 2;
              gameBoard2[positions[6]][positions[7]] = 2;
              gameBoard2[positions[8]][positions[9]] = 2;
              gameBoard4[positions[0]][positions[1]] = 15;
              gameBoard4[positions[2]][positions[3]] = 15;
              gameBoard4[positions[4]][positions[5]] = 15;
              gameBoard4[positions[6]][positions[7]] = 15;
              gameBoard4[positions[8]][positions[9]] = 15;
              count = 0;
              var board = document.getElementById("gameboard");
              var enemy = document.getElementById("enemy");
              var step1 = document.getElementById("step1");
              var step2 = document.getElementById("step2");
              step2.style.display = "block";
//              enemy.style.display = "block";
              board.style.display = "block";
              step1.style.display = "none";
              enemyBoats();
            }
          }
        }
      }
      positions = [];
    }
  }
}
//hier boven werken

function fireTorpedo(e) { // het schieten op de boten van de tegenstander
  if (side== 0){

  if (e.target !== e.currentTarget) {
    var row = e.target.id.substring(1, 2);
    var col = e.target.id.substring(2, 3);
    if (gameBoard[row][col] == 0 ) {
      e.target.style.background = '#bbb';
      gameBoard[row][col] = 3;
        side= 1;
        player2();

    } else if (gameBoard[row][col] == 2) {
      e.target.style.background = 'green';
      if(gameBoard3[row][col]%10>3){
      counthit[gameBoard3[row][col]%10 -1]++;
    }
      if(gameBoard3[row][col]== 33){
        counthit[2]++
      }
      if(gameBoard3[row][col]== 43){
        counthit[1]++
      }
      if(gameBoard3[row][col]== 52){
        counthit[0]++
      }
  //    console.log(counthit);
  //    console.log(gameBoard3.toString());
      gameBoard[row][col] = 4;
      hitCount++;
      if (hitCount == 17) {
        alert("Je hebt gewennona");
        side= 2;
        win++;
        document.getElementById("win,loss").innerHTML = "Je hebt " + win + " keer gewonnen en " + loss+ " keer verloren."
        resetgame();
        setupAI();
      }
      else{
        if(gameBoard3[row][col]==15 && counthit[4] == 5){
          alert("Je buut 5 geraakt");
        }
        if(gameBoard3[row][col]==24 && counthit[3] == 4){
          alert("Je buut 4 geraakt");
        }
        if(gameBoard3[row][col]==33 && counthit[2] == 3){
          alert("Je buut 3 geraakt");
        }
        if(gameBoard3[row][col]==43 && counthit[1] == 3){
          alert("Je buut 3 geraakt");
        }
        if(gameBoard3[row][col]==52 && counthit[0] == 2){
          alert("Je buut 2 geraakt");
        }
        side= 1;
        player2();
      }

    } else if (gameBoard[row][col] > 1) {
    }
  }

  e.stopPropagation();


}
}
