var alphaArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'r', 'p', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
wins = 0,
losses = 0,
guessesLeft = 9,
guessesSoFar = [],
alphaPick = alphaArray[Math.floor(Math.random() * alphaArray.length)];
console.log(alphaPick);

document.onkeyup = function(event) {
	var guess = event.key;

	if (guessesLeft > 0) {
		if (guess === alphaPick) {
			wins++;
			document.querySelector("#wins").innerHTML = 'Wins: ' + wins;
			guessesLeft	= 9;
			document.querySelector("#guesses-left").innerHTML = 'Guesses Left: ' + guessesLeft;
			guessesSoFar = [];
			document.querySelector("#guesses-so-far").innerHTML = 'Your Guesses so far: ' + guessesSoFar;
			alphaPick = alphaArray[Math.floor(Math.random() * alphaArray.length)];
			console.log(alphaPick);
		}		
		else {
			guessesSoFar.push(guess);
			document.querySelector("#guesses-so-far	").innerHTML = 'Your Guesses so far: ' + guessesSoFar;
			guessesLeft--;
			document.querySelector("#guesses-left").innerHTML = 'Guesses Left: ' + guessesLeft;
		}
	}

	if (guessesLeft === 0) {
		losses++;
		document.querySelector("#losses").innerHTML = 'Losses: ' + losses;
		guessesLeft = 9;
		document.querySelector("#guesses-left").innerHTML = 'Guesses Left: ' + guessesLeft;
		guessesSoFar = [];
		document.querySelector("#guesses-so-far").innerHTML = 'Your Guesses so far: ' + guessesSoFar;
		alphaPick = alphaArray[Math.floor(Math.random() * alphaArray.length)];
		console.log(alphaPick);	
	}
}