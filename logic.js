// Select all buttons and the reset button
let buttons = document.querySelectorAll(".btn");
let reset = document.querySelector(".rset");

// Function to handle the game logic
function myFunc(playerChoice) {
    let random = Math.floor(Math.random() * 16); // Generate a random number between 0 and 15

    if (playerChoice === random) {
        alert("You Lose!");
        buttons.forEach(button => {
            button.style.background = "black"; // Change color of all buttons to black if the player loses
        });
    } else {
        buttons[playerChoice].style.background = "white"; // Change color of the clicked button to white
    }
}

// Function to reset the game
function resetGame() {
    buttons.forEach(button => {
        button.style.background = ""; // Reset button colors
    });
}

// Add click event listeners to each button
buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        myFunc(index); // Pass the index of the clicked button as playerChoice
    });
});

// Reset button functionality
reset.addEventListener("click", () => {
    resetGame(); // Reset the game
    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            myFunc(index); // Pass the index of the clicked button as playerChoice
        });
    });
});