const copyrightYear = new Date().getFullYear();
const lastModifiedDate = document.lastModified;

const copyrightParagraph = document.querySelector("footer p:first-child");
copyrightParagraph.textContent = `©${copyrightYear} Trujillo Chamber`;

const lastModifiedParagraph = document.querySelector("footer p:last-child");
lastModifiedParagraph.textContent = `Last Modification: ${lastModifiedDate}`;