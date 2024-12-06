// Redirect to page10.html after 2 seconds
setTimeout(function() {
	window.location.href = "page91.html";
}, 2000); // Adjust the time (in milliseconds) as needed

document.addEventListener("DOMContentLoaded", () => {
	const colors = ["#FF5733", "#33FF57", "#3357FF", "#F7DC6F", "#AF7AC5", "#48C9B0"];
	const confettiCount = 100; // Number of confetti pieces

	function createConfettiPiece(xDirection, yDirection) {
		 const confetti = document.createElement("div");
		 confetti.classList.add("confetti");
		 confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
		 confetti.style.setProperty("--x", xDirection); // Random horizontal direction
		 confetti.style.setProperty("--y", yDirection); // Random vertical direction
		 confetti.style.left = window.innerWidth / 2 + "px";
		 confetti.style.top = window.innerHeight / 2 + "px";
		 confetti.style.width = confetti.style.height = Math.random() * 10 + 5 + "px"; // Random size

		 document.body.appendChild(confetti);

		 // Remove the confetti piece after the animation ends
		 confetti.addEventListener("animationend", () => confetti.remove());
	}

	function explodeConfetti() {
		 for (let i = 0; i < confettiCount; i++) {
			  const xDirection = Math.random() * 20 - 10; // Random X velocity
			  const yDirection = Math.random() * 20 - 10; // Random Y velocity
			  createConfettiPiece(xDirection, yDirection);
		 }
	}

	// Trigger explosion on page load
	explodeConfetti();

	// Trigger explosion on click
	document.addEventListener("click", explodeConfetti);
});
