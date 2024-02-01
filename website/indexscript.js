let bouton = document.querySelector("button")
let errorMsg = document.createElement("h2")
let errorMsgLocation = document.querySelector("#errorMsg")

console.log(bouton)

bouton.addEventListener("click", function onClick () {
    window.location = "naturoll.html"
    errorMsg = `La page charge, soyez patient :) !`
    errorMsgLocation.prepend(errorMsg)
})
