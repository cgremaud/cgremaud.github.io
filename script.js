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
            
            planetSelect.addEventListener("click", (event) => {
                destinationElement.innerHTML = `<h3> 
                    Planet: ${json[index].name} <br />
                    Distance: ${json[index].distance}<br />
                    Moons: ${json[index].moons} <br />
                    Star: ${json[index].star}<br />
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
        let launchStatus = document.getElementById("launchStatus")

        if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
            alert("All fields are required")
            event.preventDefault()
        } 

        if (!isNaN(pilotName.value)){
            event.preventDefault()
            // alert("Pilot name must be a valid string")
            faultyItems.style.visibility = "visible"
            let pilotStatus = document.getElementById("pilotStatus")
            pilotStatus.innerHTML = "Pilot not ready."
            console.log("Conditional Triggered")
            launchStatus.innerHTML= "LAUNCH ABORTED"
            launchStatus.style.color = "red"
        }

        if (!isNaN(copilotName.value)){
            event.preventDefault()
            // alert("Copilot name must be a valid string")
            faultyItems.style.visibility = "visible"
            let copilotStatus = document.getElementById("copilotStatus")
            copilotStatus.innerHTML = "Copilot not ready."
            console.log("Conditional Triggered")
            launchStatus.style.color = "red"
        }

        if (fuelLevel.value < 10000) {
            event.preventDefault()
            faultyItems.style.visibility = "visible"
            let fuelStatusElement = document.getElementById("fuelStatus")
            fuelStatusElement.innerHTML = "Fuel level too low/invalid value"
            launchStatus.style.color = "red"
        }

        if (cargoMass.value > 10000){
            faultyItems.style.visibility = "visible"
            let cargoStatusElement = document.getElementById("cargoStatus");
            cargoStatusElement.innerHTML = "Cargo mass too high/invalid value";
            event.preventDefault()
            console.log("conditional triggered")
            launchStatus.style.color = "red"
            
        } else {
            event.preventDefault()
            faultyItems.style.visibility ="visible"
            // launchStatus.innerHTML= "Go for launch!"
            // launchStatus.style.color = "green"
        }
    });
});