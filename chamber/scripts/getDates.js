const copyrightYear = new Date().getFullYear();
const lastModifiedDate = document.lastModified;

const copyrightParagraph = document.querySelector("footer p:first-child");
copyrightParagraph.textContent = `COPYRIGHT © ${copyrightYear} This is a project for WWD 230 by Favio Andre Fernandez Mori`;

const lastModifiedParagraph = document.querySelector("footer p:last-child");
lastModifiedParagraph.textContent = `Last modification: ${lastModifiedDate}`;