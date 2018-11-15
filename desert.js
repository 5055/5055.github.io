
var followCursor = (function() {
  var s = document.createElement('div');
  s.style.position = 'absolute';
  s.style.margin = '0';
  s.style.height = "1%";
  s.style.width = "3%";
  s.style.backgroundImage= "url('key.png')";
  s.style.backgroundSize = "100% 100%";
  s.style.backgroundrepeat= "no-repeat";
  s.style.backgroundposition= "left top";
  s.style.backgroundattachment= "fixed";
  s.style.left =  "-40%";
  return {
    init: function() {
      document.body.appendChild(s);
    },

    run: function(e) {
      var e = e || window.event;
      key.style.left  = (e.clientX - 7) + 'px';
      key.style.top = (e.clientY - 20) + 'px';
      getMouseCoords(e);
    }
  };
}());
window.onload = function() {
  document.body.style.background = "url('desert.png')no-repeat fixed";
  document.body.style.backgroundSize = "100% 100%";
  followCursor.init();
  document.body.onmousemove = followCursor.run;
}
function KMfail(){
  KMover.style.display = "block";
  KMmuur.style.display = "none";
}
function KMreset(){
  KMover.style.display = "none";
  KMmuur.style.display = "block";
}
function KMwin(){
  document.getElementById("KMover").innerHTML = "6";
  KMover.style.display = "block";
  KMmuur.style.display = "none";
}

function myFunctionstadhuis() {
  document.body.style.background = "url('desert.png')no-repeat fixed";
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
  document.body.style.background = "url('desert2.png')no-repeat fixed";
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
  document.body.style.background = "url('desert3.png')no-repeat fixed";
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
  document.body.style.background = "url('desertM1.png')no-repeat fixed";
  document.body.style.backgroundSize = "100% 100%";

      stad.style.display =  "none" ;
      textM1.style.display = "block";
}
function myfunctionreturnM1() {
  document.body.style.background = "url('desert.png')no-repeat fixed";
  document.body.style.backgroundSize = "100% 100%";

  stad.style.display =  "block" ;
  textM1.style.display = "none";
}
function myFunctionM2(){
  document.body.style.background = "url('desertM2.png')no-repeat fixed";
  document.body.style.backgroundSize = "100% 100%";

      stad.style.display =  "none" ;
      textM2.style.display = "block";
}
function myfunctionreturnM2() {
  document.body.style.background = "url('desert.png')no-repeat fixed";
  document.body.style.backgroundSize = "100% 100%";

  stad.style.display =  "block" ;
  textM2.style.display = "none";
}
function myFunctionM3(){
  document.body.style.background = "url('desertM3.png')no-repeat fixed";
  document.body.style.backgroundSize = "100% 100%";

      stad.style.display =  "none" ;
      textM3.style.display = "block";
}
function myfunctionreturnM3() {
  document.body.style.background = "url('desert.png')no-repeat fixed";
  document.body.style.backgroundSize = "100% 100%";

  stad.style.display =  "block" ;
  textM3.style.display = "none";
}
function myFunctionM4(){
  document.body.style.background = "url('desertM4.png')no-repeat fixed";
  document.body.style.backgroundSize = "100% 100%";

      stad.style.display =  "none" ;
      textM4.style.display = "block";
}
function myfunctionreturnM4() {
  document.body.style.background = "url('desert2.png')no-repeat fixed";
  document.body.style.backgroundSize = "100% 100%";

  stad.style.display =  "block" ;
  textM4.style.display = "none";
}
function myFunctionM5(){
  document.body.style.background = "url('desertM5.png')no-repeat fixed";
  document.body.style.backgroundSize = "100% 100%";

      stad.style.display =  "none" ;
      textM5.style.display = "block";
}
function myfunctionreturnM5() {
  document.body.style.background = "url('desert2.png')no-repeat fixed";
  document.body.style.backgroundSize = "100% 100%";

  stad.style.display =  "block" ;
  textM5.style.display = "none";
}
function myFunctionM6(){
  document.body.style.background = "url('desertM6.png')no-repeat fixed";
  document.body.style.backgroundSize = "100% 100%";

      stad.style.display =  "none" ;
      textM6.style.display = "block";
}
function myfunctionreturnM6() {
  document.body.style.background = "url('desert2.png')no-repeat fixed";
  document.body.style.backgroundSize = "100% 100%";

  stad.style.display =  "block" ;
  textM6.style.display = "none";
}
function myFunctionM7(){
  document.body.style.background = "url('desertM7.png')no-repeat fixed";
  document.body.style.backgroundSize = "100% 100%";

      stad.style.display =  "none" ;
      textM7.style.display = "block";
}
function myfunctionreturnM7() {
  document.body.style.background = "url('desert3.png')no-repeat fixed";
  document.body.style.backgroundSize = "100% 100%";

  stad.style.display =  "block" ;
  textM7.style.display = "none";
}
function myFunctionM8(){
  document.body.style.background = "url('desertM8.png')no-repeat fixed";
  document.body.style.backgroundSize = "100% 100%";

      stad.style.display =  "none" ;
      textM8.style.display = "block";
}
function myfunctionreturnM8() {
  document.body.style.background = "url('desert3.png')no-repeat fixed";
  document.body.style.backgroundSize = "100% 100%";

  stad.style.display =  "block" ;
  textM8.style.display = "none";
}
function myFunctionM9(){
  document.body.style.background = "url('desertM9.png')no-repeat fixed";
  document.body.style.backgroundSize = "100% 100%";

      stad.style.display =  "none" ;
      textM9.style.display = "block";
}
function myfunctionreturnM9() {
  document.body.style.background = "url('desert3.png')no-repeat fixed";
  document.body.style.backgroundSize = "100% 100%";

  stad.style.display =  "block" ;
  textM9.style.display = "none";
}

function othername() {
    var input = document.getElementById("userInput").value;
    if (input =="xc"){
      document.body.style.background = "url('desertM78.png')no-repeat fixed";
      document.body.style.backgroundSize = "100% 100%";
      inputtextbox.style.display = "block";
    }
}
  function myFunctionstadhuisbinnen() {
      document.body.style.background = "url('stadhuis.png')no-repeat fixed";
      document.body.style.backgroundSize = "100% 100%";

          stad.style.display =  "none" ;
          KM.style.display = "block";
          z = 1;

  }
  function naar_buiten(){
    document.body.style.background = "url('desert.png')no-repeat fixed";
    document.body.style.backgroundSize = "100% 100%";

        stad.style.display =  "block" ;
        inputtextbox.style.display = "none";
  }
