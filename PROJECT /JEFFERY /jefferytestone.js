// Select the slant arrow image inside the button
const slantarrow = document.querySelector(".slantarrow");

// Add styles to make the image look clickable
slantarrow.style.cursor = "pointer";

// Add an event listener to navigate to page5.html when the slant arrow is clicked
slantarrow.addEventListener("click", () => {
    window.location.href = "page7.html";
});

