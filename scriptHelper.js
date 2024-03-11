// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

    let missionTarget = document.getElementById("missionTarget")
    missionTarget.innerHTML = `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name} </li>
        <li>Diameter: ${diameter} </li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">`
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    if(testInput === ""){
        return 'Empty'
    } else if(isNaN(testInput)){
        return "Not a Number"
    } else {
        return "Is a Number"
    } 
 }
 
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let firstInputValidation = validateInput(pilot)
    let secondInputValidation = validateInput(copilot)
    let thirdInputValidation = validateInput(fuelLevel)
    let fourthInputValidation = validateInput(cargoLevel)


    let launchStatus = document.getElementById("launchStatus")
    let faultyItems = document.getElementById("faultyItems")
    let fuelStatus = document.getElementById("fuelStatus")
    let cargoStatus = document.getElementById("cargoStatus")
    let pilotStatus = document.getElementById("pilotStatus")
    let copilotStatus = document.getElementById("copilotStatus")

    if(firstInputValidation == 'Empty' || secondInputValidation == 'Empty' || thirdInputValidation == 'Empty' || fourthInputValidation == 'Empty') {
        alert('All fields are required!')
    } else if(firstInputValidation != 'Not a Number' || secondInputValidation != 'Not a Number' || thirdInputValidation != "Is a Number" || fourthInputValidation != "Is a Number") {
        alert("Make sure to input valid information for each field!")
    } else {
        faultyItems.style.visibility = 'visible'
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`
        if(fuelLevel < 10000 || cargoLevel > 10000) {
            launchStatus.innerHTML = "Shuttle Not Ready for Launch"
            launchStatus.style.color = "red"
        } else {
            launchStatus.innerHTML = "Shuttle is Ready for Launch"
            launchStatus.style.color = "green"
        }
        if(fuelLevel < 10000) {
            fuelStatus.innerHTML = "Fuel level too low for launch"
        } else {
            fuelStatus.innerHTML = "Fuel level high enough for launch"
        }
        if(cargoLevel > 10000) {
            cargoStatus.innerHTML = "Cargo mass too heavy for launch"
        } else {
            cargoStatus.innerHTML = "Cargo mass low enough for launch"
        }
    }

    
 }
 
 async function myFetch() {
    let response = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    let planetsReturned = await response.json();
    return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let randomIndex = Math.floor(Math.random() * planets.length)
    let randomPlanet = planets[randomIndex]
    return randomPlanet
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;