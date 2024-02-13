let randomNumber; // Declare randomNumber variable outside functions

function guessNumber() {
    // Get the maximum number from the input field
    // If randomNumber is not yet defined, call GetRandNumber to generate it
    if (!randomNumber) {
        GetRandNumber();
    }

    // Get the user input from the input field
    let userInput = parseInt(document.getElementById("userInput").value);

    // Display the randomly generated number
    // document.getElementById("demo").innerText = "Random Number: " + randomNumber;

    if (userInput > 100 || userInput < 1) {
        document.getElementById("result").innerText = "Number is not between 1 and 100";
    } else if (randomNumber < userInput) {
        document.getElementById("result").innerText = "Too high";
    } else if (randomNumber > userInput) {
        document.getElementById("result").innerText = "Too low";
    } else {
        document.getElementById("result").innerText = "Correct";
    }
}

function GetRandNumber() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    // document.getElementById("demo").innerText = "Random Number: " + randomNumber;
    return randomNumber;
}