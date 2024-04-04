let thomasLM = document.querySelector("#thomasbouton")
let lucasLM = document.querySelector("#lucasbouton")
let joshuaLM = document.querySelector("#joshuabouton")
let phileasLM = document.querySelector("#phileasbouton")

let p = new URLSearchParams(window.location.search)
let l = p.get("lang")

console.log(thomasLM)
console.log(lucasLM)
console.log(joshuaLM)
console.log(phileasLM)

thomasLM.addEventListener("click", function onClick () {
    if(
        l === "en"
    ){
        window.location = "thomas.html?lang=en"
    }
    else {
        window.location = "thomas.html?lang=fr"
    }
})
lucasLM.addEventListener("click", function onClick () {
    if(
        l === "en"
    ){
        window.location = "lucas.html?lang=en"
    }
    else {
        window.location = "lucas.html?lang=fr"
    }
})
joshuaLM.addEventListener("click", function onClick () {
    if(
        l === "en"
    ){
        window.location = "joshua.html?lang=en"
    }
    else {
        window.location = "joshua.html?lang=fr"
    }
})
phileasLM.addEventListener("click", function onClick () {
    if(
        l === "en"
    ){
        window.location = "phileas.html?lang=en"
    }
    else {
        window.location = "phileas.html?lang=fr"
    }
})
