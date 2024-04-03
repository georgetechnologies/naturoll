let params = new URLSearchParams(window.location.search)
let lang = params.get("lang")

let title = document.querySelector("#TITLE")
let subtitle = document.querySelector("#SUBTITLE")

let titles1 = document.querySelector("#titles1")
let titles2 = document.querySelector("#titles2")
let titles3 = document.querySelector("#titles3")

let text1 = document.querySelector("#text1")
let text2 = document.querySelector("#text2")
let text3 = document.querySelector("#text3")

let textbouton = document.querySelector("#textebouton")

let text

function miseEnForme (texts) {
    let t = document.createElement("span")
    t.innerHTML = `
    <span>${texts}</span>
    `
    return t
}

function miseEnFormeTitles (texts) {
    let t = document.createElement("span")
    t.innerHTML = `
    <span>↪︎ ${texts}</span>
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
        title.append(miseEnForme(text.indexhtml[1].en))
        subtitle.append(miseEnForme(text.forall[1].en))
        titles1.append(miseEnFormeTitles(text.naturollconceptionhtml[1].en))
        titles2.append(miseEnFormeTitles(text.naturollconceptionhtml[2].en))
        titles3.append(miseEnFormeTitles(text.naturollconceptionhtml[3].en))
        text1.append(miseEnForme(text.naturollconceptionhtml[4].en))
        text2.append(miseEnForme(text.naturollconceptionhtml[5].en))
        text3.append(miseEnForme(text.naturollconceptionhtml[6].en))
        textebouton.append(miseEnForme(text.naturollChilds[0].en))
    } else {
        title.append(miseEnForme(text.indexhtml[1].fr))
        subtitle.append(miseEnForme(text.forall[1].fr))
        titles1.append(miseEnFormeTitles(text.naturollconceptionhtml[1].fr))
        titles2.append(miseEnFormeTitles(text.naturollconceptionhtml[2].fr))
        titles3.append(miseEnFormeTitles(text.naturollconceptionhtml[3].fr))
        text1.append(miseEnForme(text.naturollconceptionhtml[4].fr))
        text2.append(miseEnForme(text.naturollconceptionhtml[5].fr))
        text3.append(miseEnForme(text.naturollconceptionhtml[6].fr))
        textebouton.append(miseEnForme(text.naturollChilds[0].fr))
    }
}

main()

console.log(title)
