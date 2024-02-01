let button = document.querySelector("#boutonDiscover")
let errorMsg = document.createElement("p")
let errorMsgLocation = document.querySelector("#errorMsg")

button.addEventListener("click", function onClick () {
    window.location("naturoll.html")
    errorMsg = `La page charge, soyez patient :) !`
    errorMsgLocation.prepend(errorMsg)
})
