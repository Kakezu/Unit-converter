const convertBtn = document.getElementById("convert-btn");
const inputNumber = document.getElementById("number-input");
const length = document.getElementById("measurement-meter")
const volume = document.getElementById("measurement-volume")
const mass = document.getElementById("measurement-mass")

convertBtn.addEventListener("click", function() {
    // With .value you get the input field's value
    let number = inputNumber.value;
    length.textContent = `
        ${number} meters = ${(number * 3.28084).toFixed(3)} feet 
        | ${number} feet = ${(number / 3.28084).toFixed(3)} meters
    `
    volume.textContent = `
        ${number} liters = ${(number * 0.2641720524).toFixed(3)} gallons 
        | ${number} gallons = ${(number / 0.2641720524).toFixed(3)} liters
    `
    mass.textContent = `
        ${number} kilos = ${(number * 2.20462262185).toFixed(3)} pounds 
        | ${number} pounds = ${(number / 2.20462262185).toFixed(3)} kilos
    `
})