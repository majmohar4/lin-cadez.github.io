//skrije element po 3 sekundah
setTimeout(function() {
    document.querySelector(".loading-screen").style.display = "none";
    document.querySelector(".content-container").style.display = "block";
  }, 1000);

  function countVisits() {
    // Get the current count from localStorage, or initialize it to 0 if it doesn't exist
    let count = parseInt(localStorage.getItem('visitCount')) || 0;
  
    // Increment the count and store it back in localStorage
    count++;
    localStorage.setItem('visitCount', count);
  
    // Return the current count
    return count;
  }


  function updateLastVisit() {
        // Get the current time and the last visit time from localStorage
        const now = new Date().getTime();
        const lastVisit = parseInt(localStorage.getItem('lastVisit')) || now;

        // Calculate the time elapsed since the last visit
        const elapsed = now - lastVisit;
        const minutes = Math.floor(elapsed / (1000 * 60));
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        // Format the elapsed time as a human-readable string
        let elapsedString;
        if (days > 0) {
          elapsedString = `${days} day${days > 1 ? 's' : ''} ago`;
        } else if (hours > 0) {
          elapsedString = `${hours} hour${hours > 1 ? 's' : ''} ago`;
        } else if (minutes > 0){
          elapsedString = `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        }
        else {
          elapsedString = 'few seconds ago';
        }

        localStorage.setItem('lastVisit', now);
        document.getElementById('last-visit').textContent = `Your last visit was ${elapsedString}.`;
      }

function loading_screen(){
const textElement = document.querySelector(".text");

const hexCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G"];

const text = "spaces.tk";

let hexText = "";

for (let i = 0; i < text.length; i++) {
    // Get a random hex character
    const hexCharacter = hexCharacters[Math.floor(Math.random() * hexCharacters.length)];
    // Add the character to the hex text
    hexText += hexCharacter;
}

// Set the text of the text element to be the hex text
textElement.textContent = hexText;

// Create a counter to keep track of the number of correct characters
let correctCharacters = 0;

// Create a function to update the text
function updateText() {
    // Get a random index from the hex text
    const index = Math.floor(Math.random() * hexText.length);

    // If the character at the index is not the correct character
    if (hexText[index] !== text[index]) {
        // Replace the character at the index with the correct character
        hexText = hexText.substr(0, index) + text[index] + hexText.substr(index + 1);
        // Increment the number of correct characters
        correctCharacters++;
        // Update the text of the text element
        textElement.textContent = hexText;
    }

    // If the number of correct characters is equal to the length of the text
    if (correctCharacters === text.length) {
        // Clear the interval
        clearInterval(interval);
    }
}

// Set an interval to update the text every 50 milliseconds
const interval = setInterval(updateText, 20);
}
    