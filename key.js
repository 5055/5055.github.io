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


  return {
    init: function() {
      document.body.appendChild(s);
    },

    run: function(e) {
      var e = e || window.event;
      s.style.left  = (e.clientX - 5) + 'px';
      s.style.top = (e.clientY - 10) + 'px';
      getMouseCoords(e);
    }
  };
}());

window.onload = function() {
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
