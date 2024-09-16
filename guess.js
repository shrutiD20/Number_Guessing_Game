document.addEventListener("DOMContentLoaded", function () {
    const maxInput = document.getElementById("maxNumber");
    const guessInput = document.getElementById("guessInput");
    const guessBtn = document.getElementById("guessBtn");
    const quitBtn = document.getElementById("quitBtn");
    const feedback = document.getElementById("feedback");
    
    let max, randomNumber;

    guessBtn.addEventListener("click", function () {
        if (!max) {
            max = parseInt(maxInput.value);
            randomNumber = Math.floor(Math.random() * max) + 1;
        }

        let guess = parseInt(guessInput.value);

        if (isNaN(guess)) {
            feedback.textContent = "Please enter a valid number.";
        } else if (guess === randomNumber) {
            feedback.textContent = "Congratulations! You guessed it right, the number was " + randomNumber;
        } else if (guess > randomNumber) {
            feedback.textContent = "Your guess is too large, try a smaller number.";
        } else {
            feedback.textContent = "Your guess is too small, try a larger number.";
        }
    });

    quitBtn.addEventListener("click", function () {
        feedback.textContent = "You Quit! The random number was " + randomNumber;
    });
});
