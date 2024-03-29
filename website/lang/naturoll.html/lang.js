let params = new URLSearchParams(window.location.search)
let lang = params.get("lang")
let title = document.querySelector("#TITLE")
let subtitle = document.querySelector("#SUBTITLE")

let titles1 = document.querySelector("#titles1")
let titles2 = document.querySelector("#titles2")
let titles3 = document.querySelector("#titles3")

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
        titles2.append(miseEnForme(text.naturollhtml[4].en))
    } else {
        title.append(miseEnForme(text.forall[0].fr))
        subtitle.append(miseEnForme(text.forall[1].fr))
        titles1.append(miseEnForme(text.naturollhtml[0].fr))
        titles2.append(miseEnForme(text.naturollhtml[4].fr))
    }
}

main()

console.log(title)
