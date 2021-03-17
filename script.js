window.addEventListener("load", (event) => {
    //is there a best-practices way to organize all of these declarations? 

    const fetchPromise = fetch("https://handlers.education.launchcode.org/static/planets.json")

    const destinationElement = document.getElementById("missionTarget")
    const planetSelect = document.getElementById("planet-select")

    let pilotName = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]")
    let cargoMass = document.querySelector("input[name=cargoMass]")

    let copilotStatus = document.getElementById("copilotStatus")
    let pilotStatus = document.getElementById("pilotStatus")
    let fuelStatusElement = document.getElementById("fuelStatus")
    let cargoStatusElement = document.getElementById("cargoStatus");
    
    const faultyItems = document.getElementById("faultyItems")
    const launchStatus = document.getElementById("launchStatus")

    

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

        pilotStatus.innerHTML = "Pilot ready."
        copilotStatus.innerHTML = "Copilot ready."
        fuelStatusElement.innerHTML = "Fuel level high enough for launch."
        cargoStatusElement.innerHTML = "Cargo mass low enough for launch.";
        
        let goForLaunch = true
        
        launchStatus.innerHTML= "Go for launch!"
        launchStatus.style.color = "green"

        if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
            alert("All fields are required")
            event.preventDefault()
            goForLaunch = false
            launchStatus.innerHTML= "Lunch Aborted!"
            launchStatus.style.color = "red"
        } 

        if (!isNaN(pilotName.value)){
            event.preventDefault()
            // alert("Pilot name must be a valid string")
            faultyItems.style.visibility = "visible"
            goForLaunch = false
            pilotStatus.innerHTML = "Pilot not ready."
            console.log("pilot not ready")
            launchStatus.innerHTML= "LAUNCH ABORTED"
            launchStatus.style.color = "red"
        }

        if (!isNaN(copilotName.value)){
            event.preventDefault()
            // alert("Copilot name must be a valid string")
            faultyItems.style.visibility = "visible"
            goForLaunch = "false"
            copilotStatus.innerHTML = "Copilot not ready."
            console.log("Conditional Triggered")
            launchStatus.innerHTML= "LAUNCH ABORTED"
            launchStatus.style.color = "red"
        }

        if (fuelLevel.value < 10000) {
            event.preventDefault()
            faultyItems.style.visibility = "visible"
            goForLaunch = false
            fuelStatusElement.innerHTML = "Fuel level too low."
            launchStatus.innerHTML= "LAUNCH ABORTED"
            launchStatus.style.color = "red"
        }

        if (cargoMass.value > 10000){
            faultyItems.style.visibility = "visible"
            goForLaunch = false
            cargoStatusElement.innerHTML = "Cargo mass too high.";
            event.preventDefault()
            console.log("conditional triggered")
            launchStatus.innerHTML= "LAUNCH ABORTED"
            launchStatus.style.color = "red"
            
        } else if (goForLaunch === true ){
            event.preventDefault()
            launchStatus.innerHTML= "Go for launch!"
            launchStatus.style.color = "green"
            pilotStatus.innerHTML = "Pilot ready."
            copilotStatus.innerHTML = "Copilot ready."
            fuelStatusElement.innerHTML = "Fuel level high enough for launch."
            cargoStatusElement.innerHTML = "Cargo mass low enough for launch.";

            goForLaunch = true
            
            faultyItems.style.visibility ="visible"
          
        }
    });
});  