// Select the correct-fish image
const bluefish = document.getElementById("bluefish");

// Add styles to make the image look clickable
bluefish.style.cursor = "pointer";

// Add an event listener to navigate to correct.html when the image is clicked
bluefish.addEventListener("click", () => {
    window.location.href = "page151.html";
});

// Select the incorrect-fish image
const incorrect = document.getElementById("incorrect");

// Add styles to make the image look clickable
incorrect.style.cursor = "pointer"; // Fixed this line

// Add an event listener to navigate to correct.html when the image is clicked
incorrect.addEventListener("click", () => {
    window.location.href = "page121.html";
});
