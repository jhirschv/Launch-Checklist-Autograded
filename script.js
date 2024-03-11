// Write your JavaScript code here!

 

window.addEventListener("load", function() {

    
    document.getElementById('formSubmit').addEventListener('click', function(event) {
        event.preventDefault();

        let list;
        let pilotName = document.getElementById('pilotName').value;
        let copilotName = document.getElementsByName('copilotName')[0].value;
        let fuelLevel = document.getElementsByName('fuelLevel')[0].value;
        let cargoMass = document.getElementsByName('cargoMass')[0].value;

        formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass)
    })

    myFetch().then(planets => {
        let planet = pickPlanet(planets)
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)
    })

    
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    
 });