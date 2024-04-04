let params = new URLSearchParams(window.location.search)
let lang = params.get("lang")

let chefdeproj = document.querySelector("#chefdp")
let dev2 = document.querySelector("#dev")
let progadj2 = document.querySelector("#progadj")
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
        chefdeproj.append(miseEnForme(text.membresForAll[7].en))
        dev2.append(miseEnForme(text.membresForAll[8].en))
        progadj2.append(miseEnForme(text.phileashtml[3].en))
        know.append(miseEnForme(text.knownDevLangs[0].en))
        buttonbt.append(miseEnForme(text.membresForAll[11].en))
    } else {
        clickrole.append(miseEnForme(text.membresForAll[10].fr))
        chefdeproj.append(miseEnForme(text.membresForAll[7].fr))
        dev2.append(miseEnForme(text.membresForAll[8].fr))
        progadj2.append(miseEnForme(text.phileashtml[3].fr))
        know.append(miseEnForme(text.knownDevLangs[0].fr))
        buttonbt.append(miseEnForme(text.membresForAll[11].fr))
    }
}

main()