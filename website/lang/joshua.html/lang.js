let params = new URLSearchParams(window.location.search)
let lang = params.get("lang")

let d = document.querySelector("#designer")
let g = document.querySelector("#gestionnaire")
let clickrole = document.querySelector("#clickrole")
let buttonbt = document.querySelector("#buttonbacktext")

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
        clickrole.append(miseEnForme(text.membresForAll[10].en))
        d.append(miseEnForme(text.membresForAll[5].en))
        g.append(miseEnForme(text.membresForAll[6].en))
        buttonbt.append(miseEnForme(text.membresForAll[11].en))
    } else {
        clickrole.append(miseEnForme(text.membresForAll[10].fr))
        d.append(miseEnForme(text.membresForAll[5].fr))
        g.append(miseEnForme(text.membresForAll[6].fr))
        buttonbt.append(miseEnForme(text.membresForAll[11].fr))
    }
}

main()