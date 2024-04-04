let params = new URLSearchParams(window.location.search)
let lang = params.get("lang")

let title = document.querySelector("#TITLE")
let subtitle = document.querySelector("#SUBTITLE")

let accueilCat = document.querySelector("#accueilcat")
let naturollCat = document.querySelector("#naturollcat")
let membresCat = document.querySelector("#membrescat")
let nonclick = document.querySelector("#nonclick")

let conception = document.querySelector("#conception")
let deroulement = document.querySelector("#deroulement")
let roles = document.querySelector("#roles")

let aop = document.querySelector("#aop")

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
        title.append(miseEnForme(text.listofpageshtml[0].en))
        subtitle.append(miseEnForme(text.listofpageshtml[1].en))
        accueilCat.append(miseEnForme(text.listofpageshtml[2].en))
        naturollCat.append(miseEnForme(text.listofpageshtml[3].en))
        membresCat.append(miseEnForme(text.listofpageshtml[4].en))
        nonclick.append(miseEnForme(text.listofpageshtml[5].en))
        conception.append(miseEnForme(text.listofpageshtml[6].en))
        deroulement.append(miseEnForme(text.listofpageshtml[7].en))
        roles.append("Roles")
        aop.append(miseEnForme(text.listofpageshtml[12].en))
    } else {
        title.append(miseEnForme(text.listofpageshtml[0].fr))
        subtitle.append(miseEnForme(text.listofpageshtml[1].fr))
        accueilCat.append(miseEnForme(text.listofpageshtml[2].fr))
        naturollCat.append(miseEnForme(text.listofpageshtml[3].fr))
        membresCat.append(miseEnForme(text.listofpageshtml[4].fr))
        nonclick.append(miseEnForme(text.listofpageshtml[5].fr))
        conception.append(miseEnForme(text.listofpageshtml[6].en))
        deroulement.append(miseEnForme(text.listofpageshtml[7].en))
        roles.append("Rôles")
        aop.append(miseEnForme(text.listofpageshtml[12].fr))
    }
}

main()