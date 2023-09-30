const modeButton = document.querySelector("#mode");
const main = document.querySelector("body");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☑️")) {
		main.classList.add("dark");
		// main.style.background = "#242424";
		// main.style.color = "darkgray";
		modeButton.textContent = "❎";
	} else {
		main.classList.remove("dark");
		// main.style.background = "white";
		// main.style.color = "black";
		modeButton.textContent = "☑️";
	}
});