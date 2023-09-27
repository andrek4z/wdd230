const copyrightYear = new Date().getFullYear();

const lastModifiedDate = document.lastModified;

const copyrightParagraph = document.querySelector("footer p:first-child");
copyrightParagraph.textContent = `©Favio Andre Fernandez Mori | BYU-Idaho | WDD 230 - Fall ${copyrightYear}`;

const lastModifiedParagraph = document.querySelector("footer p:last-child");
lastModifiedParagraph.textContent = `Last modification: ${lastModifiedDate}`;