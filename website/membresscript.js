let thomasLM = document.querySelector("#thomasbouton")
let lucasLM = document.querySelector("#lucasbouton")
let joshuaLM = document.querySelector("#joshuabouton")
let phileasLM = document.querySelector("#phileasbouton")

console.log(thomasLM)
console.log(lucasLM)
console.log(joshuaLM)
console.log(phileasLM)

thomasLM.addEventListener("click", function onClick () {
    window.location = "thomas.html"
})
lucasLM.addEventListener("click", function onClick () {
    window.location = "lucas.html"
})
joshuaLM.addEventListener("click", function onClick () {
    window.location = "joshua.html"
})
phileasLM.addEventListener("click", function onClick () {
    window.location = "phileas.html"
})