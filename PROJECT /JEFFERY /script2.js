// Select the pink heart image
const pinkHeart = document.querySelector(".pinkheart");

// Add styles to make the image look clickable
pinkHeart.style.cursor = "pointer";

// Add an event listener to navigate to page3.html when the pink heart is clicked
pinkHeart.addEventListener("click", () => {
    window.location.href = "page3.html";
});

const heartVector = document.querySelector(".heart");

// Add an event listener to navigate to page3.html when the heart vector is clicked
heartVector.addEventListener("click", () => {
    window.location.href = "page4.html";
});
