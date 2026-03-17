/*
il prezzo del biglietto è definito in base ai km (0.21 € al km),
va applicato uno sconto del 20% per i minorenni,
va applicato uno sconto del 40% per gli over 65. 
*/


const price = 0.21
const age = document.getElementById("age")
const km = document.getElementById("km") 
const formEl = document.querySelector("form")


    formEl.addEventListener('submit', function(e){
        e.preventDefault()

    let finalPrice = price * km.value 

    if (age.value < 18) {
        finalPrice = finalPrice * 0.80} 
    else if (age.value >= 65) {
        finalPrice = finalPrice * 0.60} 

console.log(finalPrice);

})




