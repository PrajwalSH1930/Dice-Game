var randomnum1 = Math.floor(Math.random() * 6) + 1;
var randomdiceimg = "dice" + randomnum1 + ".png";
var randomimg = "images/" + randomdiceimg;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimg);

var randomnum2 = Math.floor(Math.random() * 6) + 1;
var randomdiceimg = "dice" + randomnum2 + ".png";
var randomimg = "images//" + randomdiceimg;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomimg);

if (randomnum1 > randomnum2) {
  document.querySelector("h1").innerHTML = "🏆 Player 1 Wins";
} else if (randomnum1 < randomnum2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins 🏆";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
