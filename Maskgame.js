const elem = document.getElementById("scr").children;
const header = document.getElementById("header");
const start_btn = document.getElementById("strtbtn");
const user_Name = document.getElementById("userName")
const game_Intro = document.getElementById("gameIntro");
const game_Zone = document.getElementById("gameZone");
const footer = document.getElementsByTagName("footer");
var cache = {};
var i = 1;
start_btn.addEventListener("click", function () {
  audio1 = document.createElement("AUDIO");
  document.body.appendChild(audio1);
  audio1.src = "crowd.mp3";
  audio1.play();
  audio1.loop=true;
});

function playMaskUp() {
  audio2 = document.createElement("AUDIO");
  document.body.appendChild(audio1);
  audio2.src = "catchmask.mp3";
  audio2.play();
}

function playApplause() {
  audio1.pause();
  audio1.remove();
  audio2.pause();
  audio2.remove();
  audio1 = document.createElement("AUDIO");
  document.body.appendChild(audio1);
  audio1.src = "applause.mp3";
  audio1.play();
}

$("#strtbtn").click(function (e) {
  setInterval(function () {
    $("#time").html(i);
    i++;
  }, 1000);
});

$("#resetButton").click(function (e) {
  i = 0;
});
for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("onclick", ()=>{startAnimation(id)});
  }
const startAnimation = (id = 16) => {
  if(id==14) {
    clearInterval(Frame);
  } else if(id == 16){
    var posV = 0,
    posH = 0;
    min = 0,
    max = 14;
    const Frame = setInterval(frame, 100);
    function frame() {
      if (posV >= screen.height-100 || posH >= screen.width-300 || posV < 0 || posH < 0) {
        posV = 0;
        posH = 0;
        elem[(Math.floor(Math.random()*(max - min) + min))].style.marginTop = posV + "px";
        elem[(Math.floor(Math.random()*(max - min) + min))].style.marginLeft = posH + "px";
      } else {
        console.log(screen.height, screen.width);
        elem[(Math.floor(Math.random()*(max - min) + min))].style.marginTop = posV + "px";
        elem[(Math.floor(Math.random()*(max - min) + min))].style.marginLeft = posH + "px";
        posH += 50;
        posV += 300;
      }
    }
  }
}

function gameplay() {
  header.style.display = "none";
  game_Intro.style.display = "none";
  game_Zone.style.display = "block";
  footer[0].style.display =  "none";

  for (let i = 0; i < elem.length; i++) {
    elem[i].style.visibility = "visible";
  }
  startAnimation();
}

function oncatch(id) {
  if(!cache[id]) {
  if (id <= 15) {
    var elem = document.getElementById(id);
    elem.innerHTML = "😷";
    var dispan = document.getElementById("score");
    dispan.innerHTML = Number(dispan.innerHTML)+1;
    var score = dispan.innerHTML;
    var Time = document.getElementById("time").innerHTML;
    playMaskUp();
    cache[id] = 1;
  }
  if (score == 15) {
    playApplause();
    game_Zone.style.display = "none";
    var scoreCont = document.getElementById("scoreCard");
    header.style.display = "block";
    var scoreboard = `<p style="font-size:200%;"><strong>Great Job Warrior!!</strong></p><hr class="hrStyles"><p style="font-size: 100%;">You have completed this game in ${Time} seconds!!</p>
    <a id="share-btn" style="opacity:1;border: 0.5px solid gold;border-radius:10px; outline: none;text-decoration: none; padding: 6px; background:transparent;" href= "whatsapp://send?text=I enjoyed🤩🤩 playing this amazing lockdown game💖💖..check your concentration and focus level🤷‍♂🤔🤔 https://rockstartushar.github.io/covid19-mask-game.io/ ..🙏have fun.. " data-action="share/whatsapp/share" target="_blank"> Share on whatsapp!!</a>
    <br/><a id="share-btn" style="opacity:1;border: 0.5px solid gold;border-radius:10px; outline: none;text-decoration: none; padding: 6px; background:transparent;" href="">Play Again</a>`
    scoreCont.innerHTML = scoreboard;
    scoreCont.style.display ="block";
  }
}
}