/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
	constructor(phrase) {
		this.phrase = phrase.toLowerCase();
  };
  // Adds phrases to game board 
  addPhraseToDisplay() {
  	// Set phrase variable
  	let phraseBreak = this.phrase;

  	// Get ul within phrase div
  	let phraseContainer = document.getElementById("phrase").firstElementChild;

 		// Break up phrase
  	for (let i = 0; i < phraseBreak.length; i++) {
  		// Test to see if a letter or space, then add list item and add classes to spec
    	if (/\s/.test(phraseBreak.charAt(i))) {
    		let li = document.createElement("li");
    		li.classList.add("space");
    		phraseContainer.appendChild(li);
    	} else {
    		let li = document.createElement("li");
    		let liText = document.createTextNode( phraseBreak.charAt(i) );
    		li.classList.add("hide", "letter", phraseBreak.charAt(i) );
    		li.appendChild(liText);
    		phraseContainer.appendChild(li);
    	}
		}
  };
  /**
	* Checks if passed letter is in phrase
	* @param (string) letter - Letter to check
	*/
	checkLetter(letter) {
		if (this.phrase.includes(letter)){
			return true;
		}
	};
	/**
	* Displays passed letter on screen after a match is found
	* @param (string) letter - Letter to display
	*/
	showMatchedLetter(letter) {
    let letterClass = document.getElementsByClassName(letter);
		for (let i = 0; i < letterClass.length; i++) {
 		 letterClass[i].className = 'show letter ' + letter;
 		};
	};
};