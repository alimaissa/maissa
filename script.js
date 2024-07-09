// script.js

// Function to display a random love message
function displayLoveMessage() {
    const loveMessages = [
        "You make my world brighter every day.",
        "I feel so lucky to have you in my life.",
        "Your smile is my favorite thing in the world.",
        "You are my sunshine on a cloudy day.",
        "Every moment with you is precious."
    ];

    // Get a random message from the array
    const randomIndex = Math.floor(Math.random() * loveMessages.length);
    const message = loveMessages[randomIndex];

    // Display the message in the message box
    const messageBox = document.getElementById('love-message');
    messageBox.textContent = message;
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting
    const nameInput = document.getElementById('name-input');
    const name = nameInput.value.trim();

    if (name !== '') {
        alert(`Thank you, ${name}! Your message has been sent.`);
        nameInput.value = ''; // Clear the input field
    } else {
        alert('Please enter your name.');
    }
}

// Event listener for button click to display love message
const loveButton = document.getElementById('love-button');
if (loveButton) {
    loveButton.addEventListener('click', displayLoveMessage);
}

// Event listener for form submission
const messageForm = document.getElementById('message-form');
if (messageForm) {
    messageForm.addEventListener('submit', handleSubmit);
}
