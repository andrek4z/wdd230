const copyrightYear = new Date().getFullYear();

const lastModifiedDate = document.lastModified;

const copyrightParagraph = document.querySelector("footer p:first-child");
copyrightParagraph.textContent = `© ${copyrightYear} 🚀Favio Andre Fernandez Mori🚀 Peru`;

const lastModifiedParagraph = document.querySelector("footer p:last-child");
lastModifiedParagraph.textContent = `Last modification: ${lastModifiedDate}`;