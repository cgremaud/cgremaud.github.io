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
    console.log(event);
    let form = document.querySelector("form");


    form.addEventListener("submit", (event) => {
        event.preventDefault()
        
        console.log("form submitted")
        

    })
})