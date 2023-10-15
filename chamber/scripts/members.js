const baseURL = "https://andrek4z.github.io/wdd230/chamber/";
const membersURL = "https://andrek4z.github.io/wdd230/chamber/data/members.json";
const gridMembers = document.querySelector("#gridMe");
const listMembers = document.querySelector("#listMe");

async function getMembers()
{
    const response = await fetch(membersURL);
    const data = await response.json();
    console.log(data);
    displayMembersGrid(data.members);
    displayMembersList(data.members);
}

const displayMembersGrid = (members) =>
{
    members.forEach((member) =>
    {
        let card = document.createElement("section");
        let icon = document.createElement("img");
        let address = document.createElement("li");
        let number = document.createElement("li");
        let websiteURL = document.createElement("li");

        icon.setAttribute("src", member.imagenURLs);
        icon.setAttribute('alt', `Icon of ${member.name}`);
        icon.setAttribute('loading', 'lazy');
        icon.setAttribute('width', '200');
        icon.setAttribute('height', '180');

        address.textContent = member.address;
        number.textContent = member.phoneNumber;

        websiteURL.setAttribute("href", member.websiteURLs);
        websiteURL.textContent = member.websiteURLs;

        card.appendChild(icon);
        card.appendChild(address);
        card.appendChild(number);
        card.appendChild(websiteURL);

        gridMembers.appendChild(card);
    });
}

const displayMembersList = (members) =>
{
    members.forEach((member) =>
    {
        let card = document.createElement("section");
        let name = documente.createElement("li");
        let address = document.createElement("li");
        let number = document.createElement("li");
        let websiteURL = document.createElement("li");
        
        name.textContent = member.name;
        address.textContent = member.address;
        number.textContent = member.phoneNumber;

        websiteURL.setAttribute("href", member.websiteURLs);
        websiteURL.textContent = member.websiteURLs;

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(number);
        card.appendChild(websiteURL);

        listMembers.appendChild(card);
    });
}

getMembers()

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
