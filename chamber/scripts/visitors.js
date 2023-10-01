const currentDate = Date.now();

const latestVisitDate = localStorage.getItem("latestVisitDate");

if (!latestVisitDate || (currentDate - latestVisitDate) > 86400000) {
  localStorage.setItem("latestVisitDate", currentDate);
  document.getElementById("visitors").innerHTML = "Welcome! Let us know if you have any questions.";
}

else if ((currentDate - latestVisitDate) < 86400000) {
  document.getElementById("visitors").innerHTML = "Back so soon! Awesome!";
}

else {
  const daysSinceLastVisit = Math.ceil((currentDate - latestVisitDate) / 86400000);
  document.getElementById("visitors").innerHTML = `You last visited ${daysSinceLastVisit} ${daysSinceLastVisit === 1 ? "day" : "days"} ago.`;
}