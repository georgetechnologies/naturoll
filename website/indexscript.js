let bouton = document.querySelector("#discover")
let mbouton = document.querySelector("#Mdiscover")
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
