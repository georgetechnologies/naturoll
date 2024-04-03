let params = new URLSearchParams(window.location.search)
let lang = params.get("lang")
let title = document.querySelector("#TITLE")
let subtitle = document.querySelector("#SUBTITLE")
let buttontext = document.querySelector("#discover")
let Mbuttontext = document.querySelector("#Mdiscover")
let Mtitle = document.querySelector("#MEMBERSTITLE")
let Msubtitle = document.querySelector("#MEMBERSSUBTITLE")
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
        Mtitle.append(miseEnForme(text.indexhtml[2].en))
        subtitle.append(miseEnForme(text.forall[1].en))
        Msubtitle.append(miseEnForme(text.indexhtml[3].en))
        buttontext.append(miseEnForme(text.indexhtml[0].en))
        Mbuttontext.append(miseEnForme(text.indexhtml[0].en))
    } else {
        title.append(miseEnForme(text.indexhtml[1].fr))
        Mtitle.append(miseEnForme(text.indexhtml[2].fr))
        subtitle.append(miseEnForme(text.forall[1].fr))
        Msubtitle.append(miseEnForme(text.indexhtml[3].fr))
        buttontext.append(miseEnForme(text.indexhtml[0].fr))
        Mbuttontext.append(miseEnForme(text.indexhtml[0].fr))
    }
}

main()

console.log(title)
