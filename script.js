// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

window.addEventListener("load", (event) => {
    const fetchPromise = fetch("https://handlers.education.launchcode.org/static/planets.json")
    const destinationElement = document.getElementById("missionTarget")
    const planetSelect = document.getElementById("planet-select")



    fetchPromise.then((response) => {
        const jsonPromise = response.json()
        console.log(response)
        

        jsonPromise.then((json) => {
            console.log(json);

            let index = Math.floor((Math.random() * 6))
            
            //TO DO: make this modular by adding the code to fetchPlanet.js and importing
            
            planetSelect.addEventListener("click", (event) => {
                destinationElement.innerHTML = `<h3> 
                    Planet: ${json[index].name} <br />
                    Distance: ${json[index].distance}<br />
                    Moons: ${json[index].moons} <br />
                    Star: ${json[index].star}
                    Diameter: ${json[index].diameter} <br />
                    </h3><br />
                    <img src = ${json[index].image}>`;
                    index = Math.floor((Math.random() * 6))
                });
        });
    });
    // get the form and validate it down here
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]")
        let cargoMass = document.querySelector("input[name=cargoMass]")
        let faultyItems = document.getElementById("faultyItems")

        if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
            alert("All fields are required")
            event.preventDefault()
        } else if (fuelLevel.value < 10000) {
            event.preventDefault()
            faultyItems.style.visibility = "visible"
            let fuelLevelElement = document.getElementById("fuelStatus")
            fuelLevelElement.innerHTML = "Fuel level too low"
        }


    })
}) 