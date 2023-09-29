const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `Welcome to my Home Page! 🥳 `;
}
numVisits++;

localStorage.setItem("numVisits-ls", numVisits);