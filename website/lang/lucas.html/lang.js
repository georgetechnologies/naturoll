let params = new URLSearchParams(window.location.search)
let lang = params.get("lang")

let pr = document.querySelector("#programmeur")
let tech = document.querySelector("#technicien")
let trad = document.querySelector("#traducteur")
let devadj2 = document.querySelector("#devadj")
let clickrole = document.querySelector("#clickrole")
let buttonbt = document.querySelector("#buttonbacktext")

let know = document.querySelector("#knows")

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
        pr.append(miseEnForme(text.membresForAll[2].en))
        tech.append(miseEnForme(text.membresForAll[3].en))
        trad.append(miseEnForme(text.membresForAll[4].en))
        devadj2.append(miseEnForme(text.lucashtml[4].en))
        know.append(miseEnForme(text.knownDevLangs[0].en))
        buttonbt.append(miseEnForme(text.membresForAll[11].en))
    } else {
        clickrole.append(miseEnForme(text.membresForAll[10].fr))
        pr.append(miseEnForme(text.membresForAll[2].fr))
        tech.append(miseEnForme(text.membresForAll[3].fr))
        trad.append(miseEnForme(text.membresForAll[4].fr))
        devadj2.append(miseEnForme(text.lucashtml[4].fr))
        know.append(miseEnForme(text.knownDevLangs[0].fr))
        buttonbt.append(miseEnForme(text.membresForAll[11].fr))
    }
}

main()