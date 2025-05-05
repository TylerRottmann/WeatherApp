let city = "";
let state = "";
let temperature;
let description;
const APIKey = ;

function callAPI(){
    city = document.getElementById('city').value;
    state = document.getElementById('state').value;
    console.log(city);
    if(state == ""){
        alert("Choose a state");
    }
    else{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state},us&units=imperial&APPID=${APIKey}`)
        .then(response => {
        if (!response.ok) {
            alert("City not found or invalid request");
        }
        return response.json(); // Parse JSON
        })
        .then(data => {
        // Extract and store temperature and description
        temperature = data.main.temp;
        description = data.weather[0].description;

        // Log variables to confirm they are stored
        console.log(`Temperature: ${temperature}°F`);
        console.log(`Description: ${description}`);

        //Send variables to the assigned HTML section
        document.getElementById("result").innerHTML=temperature + " °F";
        document.getElementById("description").innerHTML="There will be " + description;
        })
        .catch(error => {
        console.error("Error fetching weather data:", error);
        });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('enter').addEventListener('click', callAPI);
});
