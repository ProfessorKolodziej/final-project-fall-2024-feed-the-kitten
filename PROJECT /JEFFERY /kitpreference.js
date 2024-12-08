// Select the correct-fish image
const slantarrow= document.getElementById("slantarrow");

// Add styles to make the image look clickable
slantarrow.style.cursor = "pointer";

// Add an event listener to navigate to correct.html when the image is clicked
slantarrow.addEventListener("click", () => {
    window.location.href = "page61.html";
});
