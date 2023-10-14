const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const url = "https://api.openweathermap.org/data/2.5/weather?lat=-8.115733925302925&lon=-79.02470844951075&units=imperial&appid=a1d6f7e3010dc4c7ec86d23b888050b6";

async function apiFetch()
{
    try
    {
        const response = await fetch(url);
        if(response.ok)
        {
            const data = await response.json();
            displayResults(data);
            console.log(data);
        }
        else
        {
            throw Error(await response.text());
        }
    }
    catch(error)
    {
        console.log(error);
    }
}

function displayResults(data)
{
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src",iconsrc);
    weatherIcon.setAttribute("alt",desc);
    captionDesc.textContent = `${desc}`;
}

apiFetch();