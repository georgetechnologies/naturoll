let params = new URLSearchParams(window.location.search)
let lang = params.get("lang")
let title = document.querySelector("#TITLE")
let subtitle = document.querySelector("#SUBTITLE")

let titles1 = document.querySelector("#titles1")
let titles2 = document.querySelector("#titles2")
let titles3 = document.querySelector("#titles3")

let subtitles1 = document.querySelector("#subtitle1")
let subtitles2 = document.querySelector("#subtitle2")
let subtitles3 = document.querySelector("#subtitle3")
let subtitles4 = document.querySelector("#subtitle4")
let subtitles5 = document.querySelector("#subtitle5")
let subtitles6 = document.querySelector("#subtitle6")
let subtitles7 = document.querySelector("#subtitle7")
let subtitles8 = document.querySelector("#subtitle8")
let subtitles9 = document.querySelector("#subtitle9")

titles1.addEventListener("click", function onClick () {
    if(
        lang === "en"
    ){
        window.location = "naturoll-conception.html?lang=en"
    }
    else {
        window.location = "naturoll-conception.html?lang=fr"
    }
})

titles2.addEventListener("click", function onClick () {
    if(
        lang === "en"
    ){
        window.location = "naturoll-deroulement.html?lang=en"
    }
    else {
        window.location = "naturoll-deroulement.html?lang=fr"
    }
})

titles3.addEventListener("click", function onClick () {
    if(
        lang === "en"
    ){
        window.location = "naturoll-roles.html?lang=en"
    }
    else {
        window.location = "naturoll-roles.html?lang=fr"
    }
})

let text

function miseEnForme (texts) {
    let t = document.createElement("span")
    t.innerHTML = `
    <span>${texts}</span>
    `
    return t
}

async function main () {
    let ans = await fetch("https://raw.githubusercontent.com/georgetechnologies/naturoll/main/website/lang/lang.json", {
        headers: {
            Accept: 'application/json'
        }
    })
    text = await ans.json()

    if(
        lang === "en"
    ){
        title.append(miseEnForme(text.forall[0].en))
        subtitle.append(miseEnForme(text.forall[1].en))
        titles1.append(miseEnForme(text.naturollhtml[0].en))
        subtitles1.append(miseEnForme(text.naturollhtml[1].en))
        subtitles2.append(miseEnForme(text.naturollhtml[2].en))
        subtitles3.append(miseEnForme(text.naturollhtml[3].en))
        titles2.append(miseEnForme(text.naturollhtml[4].en))
        subtitles4.append(miseEnForme(text.naturollhtml[5].en))
        subtitles5.append(miseEnForme(text.naturollhtml[6].en))
        titles3.append(miseEnForme(text.naturollhtml[7].en))
        subtitles6.append(miseEnForme(text.naturollhtml[8].en))
        subtitles7.append(miseEnForme(text.naturollhtml[9].en))
        subtitles8.append(miseEnForme(text.naturollhtml[10].en))
        subtitles9.append(miseEnForme(text.naturollhtml[11].en))
    } else {
        title.append(miseEnForme(text.forall[0].fr))
        subtitle.append(miseEnForme(text.forall[1].fr))
        titles1.append(miseEnForme(text.naturollhtml[0].fr))
        subtitles1.append(miseEnForme(text.naturollhtml[1].fr))
        subtitles2.append(miseEnForme(text.naturollhtml[2].fr))
        subtitles3.append(miseEnForme(text.naturollhtml[3].fr))
        titles2.append(miseEnForme(text.naturollhtml[4].fr))
        subtitles4.append(miseEnForme(text.naturollhtml[5].fr))
        subtitles5.append(miseEnForme(text.naturollhtml[6].fr))
        titles3.append(miseEnForme(text.naturollhtml[7].fr))
        subtitles6.append(miseEnForme(text.naturollhtml[8].fr))
        subtitles7.append(miseEnForme(text.naturollhtml[9].fr))
        subtitles8.append(miseEnForme(text.naturollhtml[10].fr))
        subtitles9.append(miseEnForme(text.naturollhtml[11].fr))
    }
}

main()

console.log(title)
