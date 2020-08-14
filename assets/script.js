const heading = document.querySelector('#colourValue');
const buttons = document.querySelectorAll('.colourButton');
const answerMessage = document.querySelector("#answer");
const resetButton = document.querySelector("#resetButton");
const body = document.querySelector("body");

heading.textContent = "Hello!";

function makeColourValue () {
	return Math.round(Math.random()*255);
}

function setButtonColour (button, red, green, blue) {
	button.style.backgroundColor = 'rgb('+ red +','+ green +','+ blue +')'
};

function startGame () {
	answerMessage.innerHTML = "";
	const answerButton = Math.round(Math.random() * (buttons.length - 1));

	buttons.forEach( function(button, i) {
		const red = makeColourValue();
		const green = makeColourValue();
		const blue = makeColourValue();

		setButtonColour(button, red, green, blue);

		if (i === answerButton) {
			heading.innerHTML = `(${red}, ${green}, ${blue})`;
		}

		button.addEventListener('click', function () {
			if (this === buttons[answerButton]) {
				answerMessage.innerHTML = 'Correct';
				setButtonColour(body, red, green, blue);
			} else {
				answerMessage.innerHTML = 'Wrong answer! Guess again';
			}
		})
	});
};

startGame();

resetButton.addEventListener('click', startGame);