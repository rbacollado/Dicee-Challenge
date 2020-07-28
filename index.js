var randomNumber1 = Math.floor(Math.random() * 6 + 1); // random number 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1-6.png

var randomImagesrc = "images/" + randomDiceImage; // images/dice1-6.png

var img1 = document.querySelectorAll("img")[0].setAttribute("src", randomImagesrc);


var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomDiceImage2 = "dice" + randomNumber2 + ".png"; // dice1-6.png

var randomImagesrc2 = "images/" + randomDiceImage2; // images/dice1-6.png

var img2 = document.querySelectorAll("img")[1].setAttribute("src", randomImagesrc2);


if ( randomDiceImage > randomDiceImage2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!"
}else if (randomDiceImage2 > randomDiceImage){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩"
}else{
    document.querySelector("h1").innerHTML = "Draw!"
}


