// Player 1

let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomImg = "images/dice" + randomNumber1 + ".png";

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImg);

// Player 2 

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImg2 = "images/dice" + randomNumber2 + ".png";

let image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImg2);

// WHO wins ?

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins"    
} else {
    document.querySelector("h1").innerHTML = "Player 2 wins"    

}