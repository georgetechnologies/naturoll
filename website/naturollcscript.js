let buttonBackToNaturoll = document.querySelector("#backToNaturoll")

let p = new URLSearchParams(window.location.search)
let l = p.get("lang")

console.log(buttonBackToNaturoll)

buttonBackToNaturoll.addEventListener("click", function onClick () {
    if(
        l === "en"
    ){
        window.location = `naturoll.html?lang=en`
    }
    else {
        window.location = `naturoll.html?lang=fr`
    }
})
