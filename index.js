function play(){
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomString1 = "images/dice"+randomNumber1+".png";
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomString2 = "images/dice"+randomNumber2+".png";


document.querySelector(".img1").setAttribute("src",randomString1);
document.querySelector(".img2").setAttribute("src",randomString2);

if(randomNumber1>randomNumber2)
document.querySelector("h1").innerHTML="Player 1 win";
else if(randomNumber1<randomNumber2)
document.querySelector("h1").innerHTML="Player 2 win";
else
document.querySelector("h1").innerHTML="Draw";

}