let params = new URLSearchParams(window.location.search)
let lang = params.get("lang")

let maintitle = document.querySelector("#maintitle")

let title = document.querySelector("#TITLE")
let subtitle = document.querySelector("#SUBTITLE")

let titles1 = document.querySelector("#titles1")
let titles2 = document.querySelector("#titles2")

let text1 = document.querySelector("#text1")
let text2 = document.querySelector("#text2")

let difficulte1 = document.querySelector("#difficulte1")
let difficulte2 = document.querySelector("#difficulte2")

let textbouton = document.querySelector("#textebouton")

let s = document.createElement("span")
let s2 = document.createElement("span")

let ntt = document.querySelector("#ntt")

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
        maintitle.append(miseEnForme(text.naturollderoulementhtml[0].en))
        title.append(miseEnForme(text.indexhtml[1].en))
        subtitle.append(miseEnForme(text.forall[1].en))
        titles1.append(miseEnFormeTitles(text.naturollderoulementhtml[2].en))
        titles2.append(miseEnFormeTitles(text.naturollderoulementhtml[3].en))
        text1.append(miseEnForme(text.naturollderoulementhtml[4].en))
        text2.append(miseEnForme(text.naturollderoulementhtml[5].en))
        s.innerHTML = `The first of many was during the first testt. Lucas spent some time trying to fix a probleme: The first test needs the robot 
        to follow line perfectly, but when Naturoll met a right angle turn (see image underneath), ether the robot would turn the right way, 
        ether the robot would neatly stop. The problem was quikly fixed by Lucas`
        s2.innerHTML = `An other issue was linked mechanical structure of the robot. When we cut one of the pieces, one of them was incorrectly printed and wouldn't fit with the others.`
        difficulte1.append(s)
        difficulte2.append(s2)
        textebouton.append(miseEnForme(text.naturollChilds[0].en))
        ntt.append(miseEnForme(text.naturollderoulementhtml[6].en))
    } else {
        maintitle.append(miseEnForme(text.naturollderoulementhtml[0].fr))
        title.append(miseEnForme(text.indexhtml[1].fr))
        subtitle.append(miseEnForme(text.forall[1].fr))
        titles1.append(miseEnFormeTitles(text.naturollderoulementhtml[2].fr))
        titles2.append(miseEnFormeTitles(text.naturollderoulementhtml[3].fr))
        text1.append(miseEnForme(text.naturollderoulementhtml[4].fr))
        text2.append(miseEnForme(text.naturollderoulementhtml[5].fr))
        s.innerHTML = `La première de toutes fut lors de la programmation pour l'épreuve numéro 1. Lucas a passé du temps à essayer de corriger un problème: dans l'épreuve numéro 1 
        où le robot doit pouvoir suivre des lignes parfaitement, lorsque Naturoll rencontrait un virage en angle droit (voir image ci dessous), soit le robot tournait correctement 
        dans une direction mais faisait n'importe quoi dans l'autre direction, soit le robot s'arrête net. Ce problème a été très vite corrigé par Lucas`
        s2.innerHTML = `Une autre difficulté a été liée avec la structure mécanique du robot. "Lors de la découpe d'une des pièces, une des pièces s'est mal imprimée et ne s'emboitait pas avec les autres.`
        difficulte1.append(s)
        difficulte2.append(s2)
        textebouton.append(miseEnForme(text.naturollChilds[0].fr))
        ntt.append(miseEnForme(text.naturollderoulementhtml[6].fr))
    }
}

main()

console.log(title)
