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
        } else {
          elapsedString = `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        }

        // Update the last visit time in localStorage and display the elapsed time on the page
        localStorage.setItem('lastVisit', now);
        document.getElementById('last-visit').textContent = `Your last visit was ${elapsedString}.`;
      }


    