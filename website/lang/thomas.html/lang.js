let params = new URLSearchParams(window.location.search)
let lang = params.get("lang")

let s = document.querySelector("#secretaire")
let i = document.querySelector("#ingenieur")
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
        s.append(miseEnForme(text.membresForAll[0].en))
        i.append(miseEnForme(text.membresForAll[1].en))
        buttonbt.append(miseEnForme(text.membresForAll[11].en))
    } else {
        clickrole.append(miseEnForme(text.membresForAll[10].fr))
        s.append(miseEnForme(text.membresForAll[0].fr))
        i.append(miseEnForme(text.membresForAll[1].fr))
        buttonbt.append(miseEnForme(text.membresForAll[11].fr))
    }
}

main()