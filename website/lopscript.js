let cat1 = document.querySelector("#accueilcat")
let cat2 = document.querySelector("#naturollcat")
let cat3 = document.querySelector("#membrescat")

let p5 = new URLSearchParams(window.location.search)
let l5 = p5.get("lang")

console.log(cat1)
console.log(cat2)
console.log(cat3)

cat1.addEventListener("click", function onClick () {
    if(
        l5 === "en"
    ){
        window.location = "index.html?lang=en"
    }
    else {
        window.location = "index.html?lang=fr"
    }
})
cat2.addEventListener("click", function onClick () {
    if(
        l5 === "en"
    ){
        window.location = "naturoll.html?lang=en"
    }
    else {
        window.location = "naturoll.html?lang=fr"
    }
})
cat3.addEventListener("click", function onClick () {
    if(
        l5 === "en"
    ){
        window.location = "membres.html?lang=en"
    }
    else {
        window.location = "membres.html?lang=fr"
    }
})
