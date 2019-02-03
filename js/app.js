/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Define variables
const game = new Game();
const reset = document.getElementById("btn__reset");
const qwerty = document.getElementById("qwerty");

// Run game on button click
reset.addEventListener('click', () => {
    game.startGame();
});

qwerty.addEventListener('click', function(e){
    game.handleInteraction(e.target);
});
