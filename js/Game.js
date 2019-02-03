/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
	constructor(missed, phrases, activePhrase) {
		this.missed = 0;
		this.phrases = this.createPhrases();
		this.activePhrase = null;
  };
  // Create phrases
  createPhrases() {
  	let phrases  = [];
  		phrases.push(new Phrase('Where were going we dont need roads'));
			phrases.push(new Phrase('Great Scott'));
			phrases.push(new Phrase('DeLorean'));
			phrases.push(new Phrase('Time Machine'));
			phrases.push(new Phrase('What the hell is a gigawatt'));
		return phrases;
  };
  // Selects and returns random phrase
  getRandomPhrase() {
  	return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  };
  startGame() {
  	// Hide overlay
  	document.getElementById("overlay").style.display = "none";
  	this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  };

  handleInteraction(button) {
  	if (button.tagName == 'BUTTON') {
  		let letter = button.textContent;
			
			button.disabled = true;

			if (this.activePhrase.checkLetter(letter)) {
				this.activePhrase.showMatchedLetter(letter);
				button.className = "key chosen"; /* Adds 'chosen' class */
				if (this.checkForWin()) {
					this.gameOver();
				}
			} else {
				button.className = "key wrong"; /* Adds 'wrong' class */
				this.removeLife();
			}
		}
	};

  /**
	* Checks for winning move
	* @return {boolean} True if game has been won, false if game wasn't
	won
	*/
	checkForWin() {
		let hiddenCounter = document.getElementsByClassName("hide").length;
		if (hiddenCounter === 0) {
			return true;
		} else {
			return false
		};
	};
	/**
	* Increases the value of the missed property
	* Removes a life from the scoreboard
	* Checks if player has remaining lives and ends game if player is out
	*/
	removeLife() {
		this.missed += 1;
		let life = document.getElementsByClassName("tries")
		let lifeCounter = life.length;

		if (this.missed === 5) {
			this.gameOver();
		} else {
			life[0].firstElementChild.src="images/lostHeart.png";
			life[0].className = 'wrong';
		}; 
	};
	/**
	* Displays game over message
	* @param {boolean} gameWon - Whether or not the user won the game
	*/
	gameOver() {
		let overlay = document.getElementById("overlay");
		let tagline = document.getElementById("game-over-message");
		let buttonPlay = document.getElementById("btn__reset");

		overlay.style.display = "flex";
		if (this.missed === 5) {
			overlay.className = "lose";
			tagline.innerHTML = "Oops! You lose."
			buttonPlay.innerHTML = "Play Again"
			this.resetGame();
		} else {
			overlay.className = "win";
			tagline.innerHTML = "Hooray! You win."
			buttonPlay.innerHTML = "Play Again"
			this.resetGame();
		}
	};

	// Reset Game to Start
	resetGame() {
		let phraseBoard = document.getElementById("phrase").firstElementChild;
		phraseBoard.innerHTML = '';

		let keyReset = document.getElementsByClassName("key");
		for (let i = 0; i < keyReset.length; i++) {
			keyReset[i].className = "key";
 		};

 		let wrongReset = document.getElementsByClassName("wrong");
 		for (let i = 0; i < 4; i + 1) {
			wrongReset[i].firstElementChild.src="images/liveHeart.png";
			wrongReset[i].className = "tries";
 		};
	};
};