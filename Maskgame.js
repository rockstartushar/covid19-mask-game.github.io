var i = 1;
$("#strtbtn").click(function (e) {
  setInterval(function () {
    $("#time").html(i);
    i++;
  }, 1000);
});

$("#resetButton").click(function (e) {
  i = 0;
});
function gameplay() {
  var elem = document.getElementById("scr").children;
  for (let i = 0; i < elem.length; i++) {
    elem[i].style.visibility = "visible";
  }
  var posV = 0,
  posH = 0;
  min = 0,
  max = 14;
  var id = setInterval(frame, 100);
  function frame() {
    if (posV == 100 || posH == screen.width) {
      posV = 0;
      posH = 0;
    } else {
      elem[(Math.floor(Math.random()*(max - min) + min))].style.marginTop = posV + "px";
      elem[(Math.floor(Math.random()*(max - min) + min))].style.marginLeft = posH + "px";
      posH += 10;
      posV += 10;
    }
  }
}

function oncatch(id) {
  if (id <= 15) {
    var elem = document.getElementById(id);
    elem.innerHTML = "😷";
    var dispan = document.getElementById("score");
    dispan.innerHTML = Number(dispan.innerHTML)+1;
    var score = dispan.innerHTML;
  }
  if (score == 15) {
    document.getElementById("scr").style.visibility = "hidden";
    document.getElementById("scotxt").style.visibility = "hidden";
    document.getElementById("scokbaad").style.visibility = "hidden";
    document.getElementById("time").style.visibility = "hidden";
    document.getElementById("score").style.visibility = "hidden";
    var time = document.getElementById('time').innerHTML;
    var scoreCont = document.getElementById("game-zone");
    const endstyles = {
      width: "auto",
      height: "495px",
      position: "relative",
      background: "red",
      textAlign: "center",
      color: "yellow",
      paddingTop: "40px",
      fontWeight: "bold"
    };
    Object.assign(scoreCont.style, endstyles);
    var scoreboard = `<h2>Great Job Warriors!!</h2><br /><p>You have completed this game in ${time} seconds!!</p><input type="button" id="game-share-btn" value="Share on whatsapp!!" />`
    scoreCont.innerHTML = scoreboard;
  }
  elem.id = "16";
}