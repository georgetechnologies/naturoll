let explLocation = document.querySelector("#devlangclickedexpl")
let langMB = document.querySelector("#devlangMB")
let langHTML = document.querySelector("#devlangHTML")
let langCSS = document.querySelector("#devlangCSS")
let langJS = document.querySelector("#devlangJS")
let s = 0

let p3 = new URLSearchParams(window.location.search)
let l3 = p3.get("lang")

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
    if(
        l3 === "en"
    ){
        explLocation.innerHTML = `Microsoft MakeCode for micro:bit is a tool to code using blocs the BBC micro:bit chip`
    }
    else {
        explLocation.innerHTML = `Microsoft MakeCode for micro:bit est un outil permmettant le codage en bloc pour la carte BBC micro:bit`
    }
})
langHTML.addEventListener("click", function onClick () {
    if(
        s === 0
    ){
        explLocation.innerHTML = ``
        console.log("reset ok")
    }
    if(
        l3 === "en"
    ){
        explLocation.innerHTML = `HTML 5 is a markup language used to create web pages. HTML is used used to create the website's structure, texts...`
    }
    else {
        explLocation.innerHTML = `Le HTML 5 est un language de programmation permettant de créer des pages web. Le HTML permet de créer la structure du site, les textes etc.`
    }
})
langCSS.addEventListener("click", function onClick () {
    if(
        s === 0
    ){
        explLocation.innerHTML = ``
        console.log("reset ok")
    }
    if(
        l3 === "en"
    ){
        explLocation.innerHTML = `CSS 3 add style to the web page.`
    }
    else {
    explLocation.innerHTML = `Le CSS 3 permet de rajouter du style à la page web.`
    }
})
langJS.addEventListener("click", function onClick () {
    if(
        s === 0
    ){
        explLocation.innerHTML = ``
        console.log("reset ok")
    }
    if(
        l3 === "en"
    ){
        explLocation.innerHTML = `JavaScript add dynamic effects to the page. It's a language the manages interactions like buttons.`
    }
    else {
    explLocation.innerHTML = `Le JavaScript permet de rajouter du dynamisme à la page web. C'est ce language qui gère les intèraction comme les boutons.`
    }
})
