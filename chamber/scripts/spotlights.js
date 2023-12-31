const spot = document.querySelector("#spotlights");
const linkMembers = "https://andrek4z.github.io/wdd230/chamber/data/members.json"

async function getMembers()
{
    const response = await fetch(linkMembers);
    const data = await response.json();
    console.log(data.members);
    displayMembers(data.members);
}

const displayMembers = (members) =>
{
    const maxCards = 3;
    let counter = 0;

    members.forEach((member) => 
    {
        if(member.membershipLevel === "Gold Membership" || member.membershipLevel === "Silver Membership")
        {
            if(counter < maxCards) 
            {
                let spotCard = document.createElement("div");
                let name = document.createElement("h4");
                let address = document.createElement("p");
                let phoneNumber = document.createElement("p");
                let email = document.createElement("p");

                name.textContent = member.name;
                address.textContent = member.address;
                phoneNumber.textContent= member.phoneNumber;
                email.textContent = member.email;
                spotCard.append(name);
                spotCard.append(address);
                spotCard.append(phoneNumber);
                spotCard.append(email);
                spot.append(spotCard);

                counter++;
            }
        }
    });
}

getMembers();
