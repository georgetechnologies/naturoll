let params = new URLSearchParams(window.location.search)
let lang = params.get("lang")

let title = document.querySelector("#TITLE")
let subtitle = document.querySelector("#SUBTITLE")

let thomasbouton = document.querySelector("#thomasboutontext")
let lucasbouton = document.querySelector("#lucasboutontext")
let joshuabouton = document.querySelector("#joshuaboutontext")
let phileasbouton = document.querySelector("#phileasboutontext")

let secretaire = document.querySelector("#secretaire")
let ingenieur = document.querySelector("#ingenieur")
let programmeur = document.querySelector("#programmeur")
let technicien = document.querySelector("#technicien")
let traducteur = document.querySelector("#traducteur")
let designer = document.querySelector("#designer")
let gestionnaire = document.querySelector("#gestionnaire")
let chefDeProjet = document.querySelector("#chef")
let developpeur = document.querySelector("#dev")

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
        title.append(miseEnForme(text.membreshtml[0].en))
        subtitle.append(miseEnForme(text.membreshtml[1].en))
        thomasbouton.append(miseEnForme(text.membreshtml[6].en))
        lucasbouton.append(miseEnForme(text.membreshtml[6].en))
        joshuabouton.append(miseEnForme(text.membreshtml[6].en))
        phileasbouton.append(miseEnForme(text.membreshtml[6].en))
        secretaire.append(miseEnForme(text.membresForAll[0].en))
        ingenieur.append(miseEnForme(text.membresForAll[1].en))
        programmeur.append(miseEnForme(text.membresForAll[2].en))
        technicien.append(miseEnForme(text.membresForAll[3].en))
        traducteur.append(miseEnForme(text.membresForAll[4].en))
        designer.append(miseEnForme(text.membresForAll[5].en))
        gestionnaire.append(miseEnForme(text.membresForAll[6].en))
        chefDeProjet.append(miseEnForme(text.membresForAll[7].en))
        developpeur.append(miseEnForme(text.membresForAll[8].en))
    } else {
        title.append(miseEnForme(text.membreshtml[0].fr))
        subtitle.append(miseEnForme(text.membreshtml[1].fr))
        thomasbouton.append(miseEnForme(text.membreshtml[6].fr))
        lucasbouton.append(miseEnForme(text.membreshtml[6].fr))
        joshuabouton.append(miseEnForme(text.membreshtml[6].fr))
        phileasbouton.append(miseEnForme(text.membreshtml[6].fr))
        secretaire.append(miseEnForme(text.membresForAll[0].fr))
        ingenieur.append(miseEnForme(text.membresForAll[1].fr))
        programmeur.append(miseEnForme(text.membresForAll[2].fr))
        technicien.append(miseEnForme(text.membresForAll[3].fr))
        traducteur.append(miseEnForme(text.membresForAll[4].fr))
        designer.append(miseEnForme(text.membresForAll[5].fr))
        gestionnaire.append(miseEnForme(text.membresForAll[6].fr))
        chefDeProjet.append(miseEnForme(text.membresForAll[7].fr))
        developpeur.append(miseEnForme(text.membresForAll[8].fr))
    }
}

main()

console.log(title)
