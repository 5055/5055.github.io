var BkEq=0,BkEw=0,BkEq=0,BkEe=0,BkEr=0,BkEt=0,BkEy=0,BkEu=0,BkEi=0,BkEo=0,random_nummer;
function myfunctionload() {
  document.body.style.background = "url('woods.png')no-repeat fixed";
  document.body.style.backgroundSize = "100% 100%";
}
function myFunctionstadhuis() {
  document.body.style.background = "url('woods.png')no-repeat fixed";
  document.body.style.backgroundSize = "100% 100%";

  var stadhuisbuiten = document.getElementById("stadhuisbuiten");
  woonwijkenbuiten.style.display = "none";marktbuiten.style.display = "none";
  if (stadhuisbuiten.style.display === "none") {
    stadhuisbuiten.style.display = "block";
    stadhuisbinnen.style.display = "block";
  }
    else {
        stadhuisbuiten.style.display = "block";
        stadhuisbinnen.style.display = "block";
      }
}
function myFunctionmarkt() {
  document.body.style.background = "url('woods2.png')no-repeat fixed";
  document.body.style.backgroundSize = "100% 100%";

  var marktbuiten = document.getElementById("marktbuiten");
  stadhuisbuiten.style.display = "none";woonwijkenbuiten.style.display = "none";stadhuisbinnen.style.display = "none";
  if (marktbuiten.style.display === "none") {
    marktbuiten.style.display = "block";
  }
    else {
        marktbuiten.style.display = "block";
      }

}
function myFunctionwoonwijken() {
  document.body.style.background = "url('woods3.png')no-repeat fixed";
  document.body.style.backgroundSize = "100% 100%";


  stadhuisbuiten.style.display = "none";marktbuiten.style.display = "none";stadhuisbinnen.style.display = "none";
  if (woonwijkenbuiten.style.display === "none") {
    woonwijkenbuiten.style.display = "block";
  }
    else {
        woonwijkenbuiten.style.display = "block";
      }
}
function myFunctionkaart() {

  var kaartmessage = document.getElementById("kaartmessage");
  if (kaartmessage.style.display === "block") {
      kaartmessage.style.display = "none";
  } else {
      kaartmessage.style.display = "block";
  }
}
function myFunctionM1(){
  document.body.style.background = "url('woodsM1.png')no-repeat fixed";
  document.body.style.backgroundSize = "100% 100%";

      stad.style.display =  "none" ;
      textM1.style.display = "block";
}
function myfunctionreturnM1() {
  document.body.style.background = "url('woods.png')no-repeat fixed";
  document.body.style.backgroundSize = "100% 100%";

  stad.style.display =  "block" ;
  textM1.style.display = "none";
}
function myFunctionM2(){
  document.body.style.background = "url('woodsM2.png')no-repeat fixed";
  document.body.style.backgroundSize = "100% 100%";

      stad.style.display =  "none" ;
      textM2.style.display = "block";
}
function myfunctionreturnM2() {
  document.body.style.background = "url('woods.png')no-repeat fixed";
  document.body.style.backgroundSize = "100% 100%";

  stad.style.display =  "block" ;
  textM2.style.display = "none";
}
function myFunctionM3(){
  document.body.style.background = "url('woodsM3.png')no-repeat fixed";
  document.body.style.backgroundSize = "100% 100%";

      stad.style.display =  "none" ;
      textM3.style.display = "block";
}
function myfunctionreturnM3() {
  document.body.style.background = "url('woods.png')no-repeat fixed";
  document.body.style.backgroundSize = "100% 100%";

  stad.style.display =  "block" ;
  textM3.style.display = "none";
}
function myFunctionM4(){
  document.body.style.background = "url('woodsM4.png')no-repeat fixed";
  document.body.style.backgroundSize = "100% 100%";

      stad.style.display =  "none" ;
      textM4.style.display = "block";
}
function myfunctionreturnM4() {
  document.body.style.background = "url('woods2.png')no-repeat fixed";
  document.body.style.backgroundSize = "100% 100%";

  stad.style.display =  "block" ;
  textM4.style.display = "none";
}
function myFunctionM5(){
  document.body.style.background = "url('woodsM5.png')no-repeat fixed";
  document.body.style.backgroundSize = "100% 100%";

      stad.style.display =  "none" ;
      textM5.style.display = "block";
}
function myfunctionreturnM5() {
  document.body.style.background = "url('woods2.png')no-repeat fixed";
  document.body.style.backgroundSize = "100% 100%";

  stad.style.display =  "block" ;
  textM5.style.display = "none";
}
function myFunctionM6(){
  document.body.style.background = "url('woodsM6.png')no-repeat fixed";
  document.body.style.backgroundSize = "100% 100%";

      stad.style.display =  "none" ;
      textM6.style.display = "block";
}
function myfunctionreturnM6() {
  document.body.style.background = "url('woods2.png')no-repeat fixed";
  document.body.style.backgroundSize = "100% 100%";

  stad.style.display =  "block" ;
  textM6.style.display = "none";
}
function myFunctionM7(){
  document.body.style.background = "url('woodsM7.png')no-repeat fixed";
  document.body.style.backgroundSize = "100% 100%";

      stad.style.display =  "none" ;
      textM7.style.display = "block";
}
function myfunctionreturnM7() {
  document.body.style.background = "url('woods3.png')no-repeat fixed";
  document.body.style.backgroundSize = "100% 100%";

  stad.style.display =  "block" ;
  textM7.style.display = "none";
}
function myFunctionM8(){
  document.body.style.background = "url('woodsM8.png')no-repeat fixed";
  document.body.style.backgroundSize = "100% 100%";

      stad.style.display =  "none" ;
      textM8.style.display = "block";
}
function myfunctionreturnM8() {
  document.body.style.background = "url('woods3.png')no-repeat fixed";
  document.body.style.backgroundSize = "100% 100%";

  stad.style.display =  "block" ;
  textM8.style.display = "none";
}
function myFunctionM9(){
  document.body.style.background = "url('woodsM9.png')no-repeat fixed";
  document.body.style.backgroundSize = "100% 100%";

      stad.style.display =  "none" ;
      textM9.style.display = "block";
}
function myfunctionreturnM9() {
  document.body.style.background = "url('woods3.png')no-repeat fixed";
  document.body.style.backgroundSize = "100% 100%";

  stad.style.display =  "block" ;
  textM9.style.display = "none";
}

function othername() {
    var input = document.getElementById("userInput").value;
    if (input =="xc"){
      document.body.style.background = "url('woodsM78.png')no-repeat fixed";
      document.body.style.backgroundSize = "100% 100%";
      inputtextbox.style.display = "block";
    }
}
  function myFunctionstadhuisbinnen() {
      document.body.style.background = "url('stadhuis.png')no-repeat fixed";
      document.body.style.backgroundSize = "100% 100%";

          stad.style.display =  "none" ;
          BkE_file.style.display = "block";

  }
  function naar_buiten(){
    document.body.style.background = "url('woods.png')no-repeat fixed";
    document.body.style.backgroundSize = "100% 100%";

        stad.style.display =  "block" ;
        BkE_file.style.display = "none";
  }
  function BkEbuttonone(){
    if(BkEq ==0){
    BkEbutton1.style.backgroundColor = "rgba(256,0,0,0.9)";
    BkEq = 1;
    BkEPC_one();
    BkEend();
    }
    }
    function BkEbuttontwo(){
      if(BkEw ==0){
      BkEbutton2.style.backgroundColor = "rgba(256,0,0,0.9)";
      BkEw = 1;
      BkEPC_one();
      BkEend();
    }
    }
    function BkEbuttonthree(){
      if(BkEe ==0){
      BkEbutton3.style.backgroundColor = "rgba(256,0,0,0.9)";
      BkEe = 1;
      BkEPC_one();
      BkEend();
    }
    }
    function BkEbuttonfour(){
      if(BkEr ==0){
      BkEbutton4.style.backgroundColor = "rgba(256,0,0,0.9)";
      BkEr = 1;
      BkEPC_one();
      BkEend();
    }
    }
    function BkEbuttonfive(){
      if(BkEt ==0){
      BkEbutton5.style.backgroundColor = "rgba(256,0,0,0.9)";
      BkEt = 1;
      BkEPC_one();
      BkEend();
    }
    }
    function BkEbuttonsix(){
      if(BkEy ==0){
      BkEbutton6.style.backgroundColor = "rgba(256,0,0,0.9)";
      BkEy = 1;
      BkEPC_one();
      BkEend();
    }
    }
    function BkEbuttonseven(){
      if(BkEu ==0){
      BkEbutton7.style.backgroundColor = "rgba(256,0,0,0.9)";
      BkEu = 1;
      BkEPC_one();
      BkEend();
    }
    }
    function BkEbuttoneight(){
      if(BkEi ==0){
      BkEbutton8.style.backgroundColor = "rgba(256,0,0,0.9)";
      BkEi = 1;
      BkEPC_one();
      BkEend();
    }
    }
    function BkEbuttonnine(){
      if(BkEo ==0){
      BkEbutton9.style.backgroundColor = "rgba(256,0,0,0.9)";
      BkEo = 1;
      BkEPC_one();
      BkEend();
    }
    }
    function reset(){
      BkEbutton1.style.backgroundColor = "rgba(230,230,230,0.9)";
      BkEbutton2.style.backgroundColor = "rgba(230,230,230,0.9)";
      BkEbutton3.style.backgroundColor = "rgba(230,230,230,0.9)";
      BkEbutton4.style.backgroundColor = "rgba(230,230,230,0.9)";
      BkEbutton5.style.backgroundColor = "rgba(230,230,230,0.9)";
      BkEbutton6.style.backgroundColor = "rgba(230,230,230,0.9)";
      BkEbutton7.style.backgroundColor = "rgba(230,230,230,0.9)";
      BkEbutton8.style.backgroundColor = "rgba(230,230,230,0.9)";
      BkEbutton9.style.backgroundColor = "rgba(230,230,230,0.9)";
      BkEq=0,BkEw=0,BkEq=0,BkEe=0,BkEr=0,BkEt=0,BkEy=0,BkEu=0,BkEi=0,BkEo=0;
      BkEwin.style.display = "none";
      BkElose.style.display = "none";
    }
    function BkEPC_one(){
        if((BkEq ==0 && BkEw ==2 && BkEe ==2)||(BkEq ==0 && BkEr ==2 && BkEu ==2)||(BkEq ==0 && BkEt ==2 && BkEo ==2)){
        BkEbutton1.style.backgroundColor = "rgba(0,0,0,1)";
        BkEq =2;
        BkEend();
        }
        else if((BkEq ==2 && BkEw ==0 && BkEe ==2)||(BkEw ==0 && BkEt ==2 && BkEi ==2)){
        BkEbutton2.style.backgroundColor = "rgba(0,0,0,1)";
        BkEw =2;
        BkEend();
        }
        else if((BkEq ==2 && BkEw ==2 && BkEe ==0)||(BkEe ==0 && BkEy ==2 && BkEo ==2)||(BkEe ==0 && BkEt ==2 && BkEu ==2)){
        BkEbutton3.style.backgroundColor = "rgba(0,0,0,1)";
        BkEe =2;
        BkEend();
        }
        else if((BkEr ==0 && BkEt ==2 && BkEy ==2)||(BkEq ==2 && BkEr ==0 && BkEu ==2)){
        BkEbutton4.style.backgroundColor = "rgba(0,0,0,1)";
        BkEr =2;
        BkEend();
        }
        else if((BkEr ==2 && BkEt ==0 && BkEy ==2)||(BkEw ==2 && BkEt ==0 && BkEi ==2)||(BkEq ==2 && BkEt ==0 && BkEo ==2)||(BkEe ==2 && BkEt ==0 && BkEu ==2)){
        BkEbutton5.style.backgroundColor = "rgba(0,0,0,1)";
        BkEt =2;
        BkEend();
        }
        else if((BkEr ==2 && BkEt ==2 && BkEy ==0)||(BkEe ==2 && BkEy ==0 && BkEo ==2)){
        BkEbutton6.style.backgroundColor = "rgba(0,0,0,1)";
        BkEy =2;
        BkEend();
        }
        else if((BkEu ==0 && BkEi ==2 && BkEo ==2)||(BkEq ==2 && BkEr ==2 && BkEu ==0)||(BkEu ==0 && BkEt ==2 && BkEe ==2)){
        BkEbutton7.style.backgroundColor = "rgba(0,0,0,1)";
        BkEu =2;
        BkEend();
        }
        else if((BkEu ==2 && BkEi ==0 && BkEo ==2)||(BkEw ==2 && BkEt ==2 && BkEi ==0)){
        BkEbutton8.style.backgroundColor = "rgba(0,0,0,1)";
        BkEi =2;
        BkEend();
        }
        else if((BkEu ==2 && BkEi ==2 && BkEo ==0)||(BkEe ==2 && BkEy ==2 && BkEo ==0)||(BkEq ==2 && BkEt ==2 && BkEo ==0)){
        BkEbutton9.style.backgroundColor = "rgba(0,0,0,1)";
        BkEo =2;
        BkEend();
        }
        else if((BkEq ==0 && BkEw ==1 && BkEe ==1)||(BkEq ==0 && BkEr ==1 && BkEu ==1)||(BkEq ==0 && BkEt ==1 && BkEo ==1)){
        BkEbutton1.style.backgroundColor = "rgba(0,0,0,1)";
        BkEq =2;
        BkEend();
        }

        else if((BkEq ==1 && BkEw ==0 && BkEe ==1)||(BkEw ==0 && BkEt ==1 && BkEi ==1)){
        BkEbutton2.style.backgroundColor = "rgba(0,0,0,1)";
        BkEw =2;
        BkEend();
        }

        else if((BkEq ==1 && BkEw ==1 && BkEe ==0)||(BkEe ==0 && BkEy ==1 && BkEo ==1)||(BkEe ==0 && BkEt ==1 && BkEu ==1)){
        BkEbutton3.style.backgroundColor = "rgba(0,0,0,1)";
        BkEe =2;
        BkEend();
        }

        else if((BkEr ==0 && BkEt ==1 && BkEy ==1)||(BkEq ==1 && BkEr ==0 && BkEu ==1)){
        BkEbutton4.style.backgroundColor = "rgba(0,0,0,1)";
        BkEr =2;
        BkEend();
        }

        else if((BkEr ==1 && BkEt ==0 && BkEy ==1)||(BkEw ==1 && BkEt ==0 && BkEi ==1)||(BkEq ==1 && BkEt ==0 && BkEo ==1)||(BkEe ==1 && BkEt ==0 && BkEu ==1)){
        BkEbutton5.style.backgroundColor = "rgba(0,0,0,1)";
        BkEt =2;
        BkEend();
        }

        else if((BkEr ==1 && BkEt ==1 && BkEy ==0)||(BkEe ==1 && BkEy ==0 && BkEo ==1)){
        BkEbutton6.style.backgroundColor = "rgba(0,0,0,1)";
        BkEy =2;
        BkEend();
        }

        else if((BkEu ==0 && BkEi ==1 && BkEo ==1)||(BkEq ==1 && BkEr ==1 && BkEu ==0)||(BkEu ==0 && BkEt ==1 && BkEe ==1)){
        BkEbutton7.style.backgroundColor = "rgba(0,0,0,1)";
        BkEu =2;
        BkEend();
        }

        else if((BkEu ==1 && BkEi ==0 && BkEo ==1)||(BkEw ==1 && BkEt ==1 && BkEi ==0)){
        BkEbutton8.style.backgroundColor = "rgba(0,0,0,1)";
        BkEi =2;
        BkEend();
        }

        else if((BkEu ==1 && BkEi ==1 && BkEo ==0)||(BkEe ==1 && BkEy ==1 && BkEo ==0)||(BkEq ==1 && BkEt ==1 && BkEo ==0)){
        BkEbutton9.style.backgroundColor = "rgba(0,0,0,1)";
        BkEo =2;
        BkEend();
        }

        else{
          BkEPC_two();
        }
    }
    function BkEPC_two(){
      random_nummer = Math.floor(Math.random() * 9+1);
    if(random_nummer==1 &&(BkEq ==1  ||BkEq ==2)){
      BkEPC_one();
      return;
    }
    else if(random_nummer==1 &&BkEq ==0){
      BkEbutton1.style.backgroundColor = "rgba(0,0,0,1)";
      BkEq =2;
      BkEend();
    }
    if(random_nummer==2 &&(BkEw ==1  ||BkEw ==2)){
      BkEPC_one();
      return;
    }
    else if(random_nummer==2 &&BkEw ==0){
      BkEbutton2.style.backgroundColor = "rgba(0,0,0,1)";
      BkEw =2;
      BkEend();
    }
    if(random_nummer==3 &&(BkEe ==1  ||BkEe ==2)){
      BkEPC_one();
      return;
    }
    else if(random_nummer==3 &&BkEe ==0){
      BkEbutton3.style.backgroundColor = "rgba(0,0,0,1)";
      BkEe =2;
      BkEend();
    }
    if(random_nummer==4 &&(BkEr ==1  ||BkEr ==2)){
      BkEPC_one();
      return;
    }
    else if(random_nummer==4 &&BkEr ==0){
      BkEbutton4.style.backgroundColor = "rgba(0,0,0,1)";
      BkEr =2;
      BkEend();
    }
    if(random_nummer==5 &&(BkEt ==1  ||BkEt ==2)){
      BkEPC_one();
      return;
    }
    else if(random_nummer==5 &&BkEt ==0){
      BkEbutton5.style.backgroundColor = "rgba(0,0,0,1)";
      BkEt =2;
      BkEend();
    }
    if(random_nummer==6 &&(BkEy ==1  ||BkEy ==2)){
      BkEPC_one();
      return;
    }
    else if(random_nummer==6 &&BkEy ==0){
      BkEbutton6.style.backgroundColor = "rgba(0,0,0,1)";
      BkEy =2;
      BkEend();
    }
    if(random_nummer==7 &&(BkEu ==1  ||BkEu ==2)){
      BkEPC_one();
      return;
    }
    else if(random_nummer==7 &&BkEu ==0){
      BkEbutton7.style.backgroundColor = "rgba(0,0,0,1)";
      BkEu =2;
      BkEend();
    }
    if(random_nummer==8 &&(BkEi ==1  ||BkEi ==2)){
      BkEPC_one();
      return;
    }
    else if(random_nummer==8 &&BkEi ==0){
      BkEbutton8.style.backgroundColor = "rgba(0,0,0,1)";
      BkEi =2;
      BkEend();
    }
    if(random_nummer==9 &&(BkEo ==1  ||BkEo ==2)){
      BkEPC_one();
      return;
    }
    else if(random_nummer==9 &&BkEo ==0){
      BkEbutton9.style.backgroundColor = "rgba(0,0,0,1)";
      BkEo =2;
      BkEend();
    }
    }
    function BkEend(){
      if((BkEq ==1 && BkEw ==1 && BkEe ==1)||(BkEr ==1 && BkEt ==1 && BkEy ==1)||(BkEu ==1 && BkEi ==1 && BkEo ==1)
        ||(BkEq ==1 && BkEr ==1 && BkEu ==1)||(BkEw ==1 && BkEt ==1 && BkEi ==1)||(BkEe ==1 && BkEy ==1 && BkEo ==1)
        ||(BkEq ==1 && BkEt ==1 && BkEo ==1)||(BkEe ==1 && BkEt ==1 && BkEu ==1)){
          BkEwin.style.display = "block";
        }
        else if((BkEq ==2 && BkEw ==2 && BkEe ==2)||(BkEr ==2 && BkEt ==2 && BkEy ==2)||(BkEu ==2 && BkEi ==2 && BkEo ==2)
          ||(BkEq ==2 && BkEr ==2 && BkEu ==2)||(BkEw ==2 && BkEt ==2 && BkEi ==2)||(BkEe ==2 && BkEy ==2 && BkEo ==2)
          ||(BkEq ==2 && BkEt ==2 && BkEo ==2)||(BkEe ==2 && BkEt ==2 && BkEu ==2)){
            BkElose.style.display = "block";
          }

    }
