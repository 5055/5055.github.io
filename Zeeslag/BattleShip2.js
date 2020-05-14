/* Bootactive moet nog aan het raken vastgebonden worden
  Bordstate moet gebonden worden aan de andere code
  Bootinput aan andere code binden
  Xsize, Ysize aan andere code

*/
var Xsize = 10,
 Ysize = 10,
 Skew = 3,
  Vakje = [],
   boot = [5,4,3,3,2],
   bootactive =[],
Bordstate = [];


setupAI();   // Dit is de functie die elk potje de AI inlaadt
function setupAI(){
  for (var i=0; i < Xsize; i++) {
    Vakje[i] = [];
    Bordstate[i] = []
    for (var j=0; j < Ysize; j++) {
      Vakje[i][j] = 0;
      Bordstate[i][j] = 0;
    }
  }
    for (var i=0; i < boot.length; i++) {
      bootactive[i] = true;
    }
    //console.log(Vakje[3][4]);





  //      console.log(Vakje.toString());

    //    console.log(bootactive.toString());
  //     console.log(Vakje[a][b]);
  //        console.log(Vakje[a-1][b],Vakje[a+2][b],Vakje[a][b-1],Vakje[a][b+1]);
}

function pBoot(){  // De hoofd code om de Ai zet te bepalen
  for (var i=0; i < Xsize; i++) {
    for (var j=0; j < Ysize; j++) {
      for (var k=0; k < boot.length; k++) {
        if(bootactive[k]){
          for (var l=0; l < boot[k]; l++) {

            checkOutofBounce(i,j,k,l)

          }
        }

      }
                  SkewHit(i,j);
                  if(Bordstate[i][j] != 0){
                    Vakje[i][j] =0;
                  }
    }
  }
P2Fire();

}

function checkOutofBounce(i,j,k,l){ // Bereken hoeveel boten er op een vakje kunnen liggen en of ze niet buiten de borders liggen
  var remove = 0;
  if(i-l >= 0 && i+l <= 9){

  Vakje[i][j]++;
  removeactiveX = false;
    for (var m=0; m < boot[k]; m++) {
if(i-l+m >= 0 && i <= 5){
  if(Bordstate[i-l+m][j] == 1){
  removeactiveX = true;

  }
  }

  if(i+l-m <= 9 && i >= 6){
    if(Bordstate[i+l-m][j] == 1){
    removeactiveX = true;

    }
    }
}
  if(removeactiveX){
    remove++;
  }

  }
  if(j-l >= 0 && j+l <= 9){

    Vakje[i][j]++;
    removeactiveY = false;
      for (var m=0; m < boot[k]; m++) {
if(j-l+m >= 0  &&j <=5){
    if(Bordstate[i][j-l+m] == 1){
    removeactiveY = true;

    }
    }
    if(j+l-m <= 9 && j >= 6){
      if(Bordstate[i][j+l-m] == 1){
      removeactiveY = true;

      }
      }

  }

    if(removeactiveY){
      remove++;
    }
}
      Vakje[i][j] -= remove;
}
function SkewHit(i,j){  // De boot legt de nadruk op bepaalde vakjes in de buurt van een ander gevonden boot
  if(Bordstate[i][j] == 2){
  if(i-1 >= 0 &&i+1 <= 9){
if(Bordstate[i-1][j] != 2 && Bordstate[i+1][j] != 2){
    if(j-1 >= 0 &&j+1 <= 9){
  if(Bordstate[i][j-1] == 0){
       scaleSkew(i,j-1);
  }
  if(Bordstate[i][j+1] == 0){
           scaleSkew(i,j+1);
  }
  }
}
}
else{
      if(j-1 >= 0 &&j+1 <= 9){
  if(Bordstate[i][j-1] == 0){
      scaleSkew(i,j-1);
  }
  if(Bordstate[i][j+1] == 0){
           scaleSkew(i,j+1);
  }
}
}


if(j-1 >= 0 &&j+1 <= 9){
if(Bordstate[i][j-1] != 2 &&Bordstate[i][j+1] != 2){
  if(i-1 >= 0 &&i+1 <= 9){
if(Bordstate[i-1][j] == 0){
  scaleSkew(i-1,j);
}
if(Bordstate[i+1][j] == 0){
  scaleSkew(i+1,j);

}
}
}
else{
    if(i-1 >= 0 &&i+1 <= 9){
if(Bordstate[i-1][j] == 0){
  scaleSkew(i-1,j);
if(Bordstate[i+1][j] == 0){
  scaleSkew(i+1,j);
}
}
}





}
}
}
}
function scaleSkew(i,j){
    Vakje[i][j] += Skew*2;


}
function player2(){ // Deze functie start de AI beurt
    pBoot();
    resetcalc();

  side= 0;
}
function P2Fire(){  //Deze functie geeft visuele output en brengt speler een weer aan de beurt



var hp =getMax(Vakje);// hp = highest probability
stop = false;
//console.log(hp);
for (var i=0; i < Xsize; i++) {
  for (var j=0; j < Ysize; j++) {
if(Vakje[i][j] == hp && !stop){

  if( gameBoard2[i][j] == 2){
    if(gameBoard4[i][j]%10>3){
    counthit2[gameBoard4[i][j]%10 -1]++;
  }
    if(gameBoard4[i][j]== 33){
      counthit2[2]++
    }
    if(gameBoard4[i][j]== 43){
      counthit2[1]++
    }
    if(gameBoard4[i][j]== 52){
      counthit2[0]++
    }
Bordstate[i][j] = 2;
var element = document.getElementById("a"+ i+ j);
 element.style.backgroundColor = '#F00';
 hitCount2++;
 if (hitCount2 == 17) {
   alert("Je hebt verloren");
   side= 2;
   loss++;
        document.getElementById("win,loss").innerHTML = "Je hebt " + win + " keer gewonnen en " + loss+ " keer verloren."
   resetgame();
   setupAI();
 }
 else{
   if(gameBoard4[i][j]==15 && counthit2[4] == 5){
     bootactive[0]= false
   }
   if(gameBoard4[i][j]==24 && counthit2[3] == 4){
     bootactive[1]= false
   }
   if(gameBoard4[i][j]==33 && counthit2[2] == 3){
     bootactive[2]= false
   }
   if(gameBoard4[i][j]==43 && counthit2[1] == 3){
     bootactive[3]= false
   }
   if(gameBoard4[i][j]==52 && counthit2[0] == 2){
     bootactive[4]= false
   }
 }
  }
  if( gameBoard2[i][j] == 0 && side== 1){
Bordstate[i][j] = 1;
var element = document.getElementById("a"+ i+ j);

element.style.backgroundColor = '#66B2FF';
}

stop = true;
}
  }
}

}


function getMax(a){
  return Math.max(...a.map(e => Array.isArray(e) ? getMax(e) : e));
}

function resetcalc(){  // reset de AI voor de volgende beurt
  console.log(Vakje.toString());
  for (var i=0; i < Xsize; i++) {
    Vakje[i] = [];
    for (var j=0; j < Ysize; j++) {
      Vakje[i][j] = 0;
    }
  }

}
