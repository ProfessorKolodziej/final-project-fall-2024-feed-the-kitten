// Select the start-arrow image
const startArrow = document.getElementById("start-arrow");

// Add styles to make the image look clickable
startArrow.style.cursor = "pointer";

// Add an event listener to navigate to page2.html when the image is clicked
startArrow.addEventListener("click", () => {
    window.location.href = "page2.html";
});
