let bouton = document.querySelector("#db")
let mbouton = document.querySelector("#mdb")
let abouton = document.querySelector("#ADB")
let p = new URLSearchParams(window.location.search)
let l = p.get("lang")

console.log(bouton)

bouton.addEventListener("click", function onClick () {
    if(
        l === "en"
    ){
        window.location = "naturoll.html?lang=en"
    }
    else {
        window.location = "naturoll.html?lang=fr"
    }
})

mbouton.addEventListener("click", function onClick () {
    if(
        l === "en"
    ){
        window.location = "membres.html?lang=en"
    }
    else {
        window.location = "membres.html?lang=fr"
    }
})

abouton.addEventListener("click", function onClick () {
    if(
        l === "en"
    ){
        window.location = "after.html?lang=en"
    }
    else {
        window.location = "after.html?lang=fr"
    }
})
