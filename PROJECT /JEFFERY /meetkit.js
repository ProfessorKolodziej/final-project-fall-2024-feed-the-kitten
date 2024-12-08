// Select the slant arrow image inside the button
const slantArrow = document.querySelector(".slant-arrow");

// Add styles to make the image look clickable
slantArrow.style.cursor = "pointer";

// Add an event listener to navigate to page5.html when the slant arrow is clicked
slantArrow.addEventListener("click", () => {
    window.location.href = "page41.html";
});
