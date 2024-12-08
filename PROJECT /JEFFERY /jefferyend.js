document.addEventListener("DOMContentLoaded", () => {
	const confettiCount = 100; // Number of confetti pieces per explosion
	const explosionInterval = 2000; // Time interval between explosions in milliseconds

	function createConfettiPiece(xDirection, yDirection, xStart, yStart) {
		 const confetti = document.createElement("div");
		 confetti.classList.add("confetti");
		 confetti.style.backgroundColor = "#FF69B4"; // Fixed pink color (Hot Pink)
		 confetti.style.setProperty("--x", xDirection); // Horizontal trajectory
		 confetti.style.setProperty("--y", yDirection); // Vertical trajectory
		 confetti.style.left = xStart + "px";
		 confetti.style.top = yStart + "px";
		 confetti.style.width = confetti.style.height = Math.random() * 10 + 5 + "px"; // Random size

		 document.body.appendChild(confetti);

		 // Remove the confetti piece after the animation ends
		 confetti.addEventListener("animationend", () => confetti.remove());
	}

	function explodeFirework() {
		 const screenWidth = window.innerWidth;
		 const screenHeight = window.innerHeight;

		 // Random explosion starting point
		 const xStart = Math.random() * screenWidth;
		 const yStart = Math.random() * screenHeight / 2; // Restrict to upper half of the screen

		 for (let i = 0; i < confettiCount; i++) {
			  const xDirection = Math.random() * 20 - 10; // Random X velocity
			  const yDirection = Math.random() * 20 - 10; // Random Y velocity
			  createConfettiPiece(xDirection, yDirection, xStart, yStart);
		 }

		 // Gradually fade the background to a dim color
		 document.body.style.backgroundColor = `rgba(0, 0, 0, ${Math.random() * 0.5 + 0.3})`;
		 setTimeout(() => {
			  document.body.style.backgroundColor = "rgba(0, 0, 0, 0)"; // Reset background
		 }, 2000); // Adjust timing to match the explosion
	}

	// Trigger fireworks explosions at regular intervals
	setInterval(explodeFirework, explosionInterval);

	// Optional: Trigger additional fireworks on click
	document.addEventListener("click", explodeFirework);
});
