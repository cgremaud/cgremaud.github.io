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
                    <img height = "250px" src = ${json[index].image}>`;
                    index = Math.floor((Math.random() * 6))
                });
        });
    });
    // get the form and validate it down here
})