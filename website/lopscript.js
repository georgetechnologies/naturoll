let cat1 = document.querySelector("#accueilcat")
let cat2 = document.querySelector("#naturollcat")
let cat3 = document.querySelector("#membrescat")

console.log(cat1)
console.log(cat2)
console.log(cat3)

cat1.addEventListener("click", function onClick () {
    window.location = `index.html`
})
cat2.addEventListener("click", function onClick () {
    window.location = `naturoll.html`
})
cat3.addEventListener("click", function onClick () {
    window.location = `membres.html`
})