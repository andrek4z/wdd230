const baseURL = "https://andrek4z.github.io/wdd230/chamber/";
const membersURL = "https://andrek4z.github.io/wdd230/chamber/data/members.json";
const gridMembers = document.querySelector("#gridMe");

async function getMembers()
{
    const response = await fetch(membersURL);
    const data = await response.json();
    /*console.log(data);*/
    displayMembersGrid(data.members);
}

const displayMembersGrid = (members) =>
{
    members.forEach((member) =>
    {
        let card = document.createElement("section");
        let icon = document.createElement("img");
        let name = document.createElement("li");
        let address = document.createElement("li");
        let number = document.createElement("li");
        let websiteURL = document.createElement("a");

        icon.setAttribute("src", member.imagenURLs);
        icon.setAttribute("alt", `Icon of ${member.name}`);
        icon.setAttribute("loading", "lazy");
        icon.setAttribute("width", "200");
        icon.setAttribute("height", "180");

        name.textContent = member.name;
        address.textContent = member.address;
        number.textContent = member.phoneNumber;

        websiteURL.setAttribute("href", member.websiteURLs);
        websiteURL.textContent = member.websiteURLs;

        card.appendChild(icon);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(number);
        card.appendChild(websiteURL);

        gridMembers.appendChild(card);
    });
}

getMembers()

/*---------------------------------Buttom---------------------------- */

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => 
{
	display.classList.add("gridMe");
	display.classList.remove("listMe");
});

listbutton.addEventListener("click", showList);

function showList() 
{
	display.classList.add("listMe");
	display.classList.remove("gridMe");
}