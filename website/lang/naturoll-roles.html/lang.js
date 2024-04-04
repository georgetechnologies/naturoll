let params = new URLSearchParams(window.location.search)
let lang = params.get("lang")

let maintitle = document.querySelector("#maintitle")

let title = document.querySelector("#TITLE")
let subtitle = document.querySelector("#SUBTITLE")

let titles1 = document.querySelector("#titles1")
let titles2 = document.querySelector("#titles2")
let titles3 = document.querySelector("#titles3")
let titles4 = document.querySelector("#titles4")

let text1 = document.querySelector("#text1")
let text2 = document.querySelector("#text2")
let text31 = document.querySelector("#text31")
let text32 = document.querySelector("#text32")
let text41 = document.querySelector("#text41")
let text42 = document.querySelector("#text42")
let text43 = document.querySelector("#text43")
let text44 = document.querySelector("#text44")
let text45 = document.querySelector("#text45")

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
        maintitle.append(miseEnForme(text.naturollroleshtml[0].en))
        title.append(miseEnForme(text.indexhtml[1].en))
        subtitle.append(miseEnForme(text.forall[1].en))
        titles1.append(miseEnFormeTitles(text.naturollroleshtml[1].en))
        titles2.append(miseEnFormeTitles(text.naturollroleshtml[2].en))
        titles3.append(miseEnFormeTitles(text.naturollroleshtml[3].en))
        titles4.append(miseEnFormeTitles(text.naturollroleshtml[4].en))
        text1.append(miseEnForme(text.naturollroleshtml[5].en))
        text1.append(miseEnForme(text.naturollroleshtml[6].en))
        text2.append(miseEnForme(text.naturollroleshtml[7].en))
        text2.append(miseEnForme(text.naturollroleshtml[8].en))
        text31.append(miseEnForme(text.naturollroleshtml[9].en))
        text32.append(miseEnForme(text.naturollroleshtml[10].en))
        text41.append(miseEnForme(text.naturollroleshtml[11].en))
        text42.append(miseEnForme(text.naturollroleshtml[12].en))
        text43.append(miseEnForme(text.naturollroleshtml[13].en))
        text44.append(miseEnForme(text.naturollroleshtml[14].en))
        text45.append(miseEnForme(text.naturollroleshtml[15].en))
        textebouton.append(miseEnForme(text.naturollChilds[0].en))
    } else {
        maintitle.append(miseEnForme(text.naturollroleshtml[0].fr))
        title.append(miseEnForme(text.indexhtml[1].fr))
        subtitle.append(miseEnForme(text.forall[1].fr))
        titles1.append(miseEnFormeTitles(text.naturollroleshtml[2].fr))
        titles2.append(miseEnFormeTitles(text.naturollroleshtml[3].fr))
        titles3.append(miseEnFormeTitles(text.naturollroleshtml[3].fr))
        titles4.append(miseEnFormeTitles(text.naturollroleshtml[4].fr))
        text1.append(miseEnForme(text.naturollroleshtml[5].fr))
        text1.append(miseEnForme(text.naturollroleshtml[6].fr))
        text2.append(miseEnForme(text.naturollroleshtml[7].fr))
        text2.append(miseEnForme(text.naturollroleshtml[8].fr))
        text31.append(miseEnForme(text.naturollroleshtml[9].fr))
        text32.append(miseEnForme(text.naturollroleshtml[10].fr))
        text41.append(miseEnForme(text.naturollroleshtml[11].fr))
        text42.append(miseEnForme(text.naturollroleshtml[12].fr))
        text43.append(miseEnForme(text.naturollroleshtml[13].fr))
        text44.append(miseEnForme(text.naturollroleshtml[14].fr))
        text45.append(miseEnForme(text.naturollroleshtml[15].fr))
        textebouton.append(miseEnForme(text.naturollChilds[0].fr))
    }
}

main()

console.log(title)
