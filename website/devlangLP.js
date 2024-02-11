let explLocation = document.querySelector("#devlangclickedexpl")
let langMB = document.querySelector("#devlangMB")
let langHTML = document.querySelector("#devlangHTML")
let langCSS = document.querySelector("#devlangCSS")
let langJS = document.querySelector("#devlangJS")
let s = 0

console.log(explLocation)
console.log(langMB)
console.log(langHTML)
console.log(langCSS)
console.log(langJS)

langMB.addEventListener("click", function onClick () {
    if(
        s === 0
    ){
        explLocation.innerHTML = ``
        console.log("reset ok")
    }
    explLocation.innerHTML = `Microsoft MakeCode for micro:bit est un outil permmettant le codage en bloc pour la carte BBC micro:bit`
})
langHTML.addEventListener("click", function onClick () {
    if(
        s === 0
    ){
        explLocation.innerHTML = ``
        console.log("reset ok")
    }
    explLocation.innerHTML = `Le HTML 5 est un language de programmation permettant de créer des pages web. Le HTML permet de créer la structure du site, les textes etc.`
})
langCSS.addEventListener("click", function onClick () {
    if(
        s === 0
    ){
        explLocation.innerHTML = ``
        console.log("reset ok")
    }
    explLocation.innerHTML = `Le CSS 3 permet de rajouter du style à la page web.`
})
langJS.addEventListener("click", function onClick () {
    if(
        s === 0
    ){
        explLocation.innerHTML = ``
        console.log("reset ok")
    }
    explLocation.innerHTML = `Le JavaScript permet de rajouter du dynamisme à la page web. C'est ce language qui gère les intèraction comme les boutons.`
})