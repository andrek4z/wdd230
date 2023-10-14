const baseURL = "https://andrek4z.github.io/wdd230/";
const linksURL = "https://andrek4z.github.io/wdd230/data/links.json";
const linkWeek = document.querySelector("#linkWeeks")

async function getLinks()
{
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data.weeks);
}

const displayLinks = (weeks) =>
{
    let ulist = document.createElement("ul");

    weeks.forEach((week) =>
    {
        let list = document.createElement("li");

        list.textContent = `${week.week}: `
        
        week.links.forEach((link,index) =>
        {
            let a = document.createElement("a");
            
            a.setAttribute("href", link.url);
            a.setAttribute("target", "_blank");
            a.textContent = link.title;
            list.append(a);
            if(index !== week.links.length-1)
            {
                list.innerHTML += " | ";
            }
        });

        ulist.append(list);
    });

    linkWeek.append(ulist);
}

getLinks();