var roll1 = Math.floor(Math.random() * 6 + 1)
var roll2 = Math.floor(Math.random() * 6 + 1)

var randomImage1 = "./images/dice" + roll1 + ".png";
var randomImage2 = "./images/dice" + roll2 + ".png";
console.log(randomImage1);





document.querySelector(".img1").setAttribute("src", randomImage1);
document.querySelector(".img2").setAttribute("src", randomImage2);

// if (roll1 == 1) {
//     document.querySelector(".img1").setAttribute("src", "./images/dice1.png")
// }
// else if (roll1 == 2) {
//     document.querySelector(".img1").setAttribute("src", "./images/dice2.png")
// }
// else if (roll1 == 3) {
//     document.querySelector(".img1").setAttribute("src", "./images/dice3.png")
// }
// else if (roll1 == 4) {
//     document.querySelector(".img1").setAttribute("src", "./images/dice4.png")
// }
// else if (roll1 == 5) {
//     document.querySelector(".img1").setAttribute("src", "./images/dice5.png")
// }
// else {
//     document.querySelector(".img1").setAttribute("src", "./images/dice6.png")
// }
// // image change for player 2
// if (roll2 == 1) {
//     document.querySelector(".img2").setAttribute("src", "./images/dice1.png")
// }
// else if (roll2 == 2) {
//     document.querySelector(".img2").setAttribute("src", "./images/dice2.png")
// }
// else if (roll2 == 3) {
//     document.querySelector(".img2").setAttribute("src", "./images/dice3.png")
// }
// else if (roll2 == 4) {
//     document.querySelector(".img2").setAttribute("src", "./images/dice4.png")
// }
// else if (roll2 == 5) {
//     document.querySelector(".img2").setAttribute("src", "./images/dice5.png")
// }
// else {
//     document.querySelector(".img2").setAttribute("src", "./images/dice6.png")
// }
// for winner announsment


if (roll1 > roll2) {
    document.querySelector("h1").textContent = "Player 1 wins";
}
else if (roll1 < roll2) {
    document.querySelector("h1").textContent = "Player 2 wins";
}
else {
    document.querySelector("h1").textContent = "draw";
}



