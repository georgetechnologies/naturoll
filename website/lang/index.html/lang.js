let params = new URLSearchParams(window.location.search)
let lang = params.get("lang")
let title = document.querySelector("#TITLE")
let subtitle = document.querySelector("#SUBTITLE")
let buttontext = document.querySelector("#discover")
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
        title.append(miseEnForme(text.indexhtml[1].en))
        subtitle.append(miseEnForme(text.forall[1].en))
        buttontext.append(miseEnForme(text.indexhtml[0].en))
    } else {
        title.append(miseEnForme(text.indexhtml[1].fr))
        subtitle.append(miseEnForme(text.forall[1].fr))
        buttontext.append(miseEnForme(text.indexhtml[0].fr))
    }
}

main()

console.log(title)
