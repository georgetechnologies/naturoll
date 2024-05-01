let params = new URLSearchParams(window.location.search)
let lang = params.get("lang")

let title = document.querySelector("#TITLE")
let subtitle = document.querySelector("#SUBTITLE")

let t1 = document.querySelector("#titles1")
let t1text = document.querySelector("#t1desc")

let ct1desc1 = document.querySelector("#ct1desc1")
let ct1desc2 = document.querySelector("#ct1desc2")
let ct1desc3 = document.querySelector("#ct1desc3")

let lit1_1 = document.querySelector("#lit1_1")
let lit1_2 = document.querySelector("#lit1_2")
let lit1_3 = document.querySelector("#lit1_3")
let lit1_4 = document.querySelector("#lit1_4")
let lit1_5 = document.querySelector("#lit1_5")
let lit1_6 = document.querySelector("#lit1_6")
let lit1_7 = document.querySelector("#lit1_7")
let lit1_8 = document.querySelector("#lit1_8")

let t2 = document.querySelector("#titles2")
let t2text = document.querySelector("#t2desc")

let lit2_1 = document.querySelector("#lit2_1")
let lit2_2 = document.querySelector("#lit2_2")
let lit2_3 = document.querySelector("#lit2_3")
let lit2_4 = document.querySelector("#lit2_4")
let lit2_5 = document.querySelector("#lit2_5")

let t3 = document.querySelector("#titles3")
let t3text = document.querySelector("#t3desc")

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
        title.append(miseEnForme(text.indexhtml[3].en))
        subtitle.append(miseEnForme(text.indexhtml[4].en))
        t1.append(miseEnForme(text.afterhtml[0].en))
        t1text.append(miseEnForme(text.afterhtml[1].en))
        ct1desc1.append(miseEnForme(text.afterhtml[2].en))
        ct1desc2.append(miseEnForme(text.afterhtml[7].en))
        ct1desc3.append(miseEnForme(text.afterhtml[9].en))
        lit1_1.append(miseEnForme(text.afterhtml[3].en))
        lit1_2.append(miseEnForme(text.afterhtml[4].en))
        lit1_3.append(miseEnForme(text.afterhtml[5].en))
        lit1_4.append(miseEnForme(text.afterhtml[6].en))
        lit1_5.append(miseEnForme(text.afterhtml[8].en))
        lit1_6.append(miseEnForme(text.afterhtml[10].en))
        lit1_7.append(miseEnForme(text.afterhtml[11].en))
        lit1_8.append(miseEnForme(text.afterhtml[12].en))
        t2.append(miseEnForme(text.afterhtml[13].en))
        t2text.append(miseEnForme(text.afterhtml[14].en))
        lit2_1.append(miseEnForme(text.afterhtml[15].en))
        lit2_2.append(miseEnForme(text.afterhtml[16].en))
        lit2_3.append(miseEnForme(text.afterhtml[17].en))
        lit2_4.append(miseEnForme(text.afterhtml[18].en))
        lit2_5.append(miseEnForme(text.afterhtml[19].en))
        t3.append(miseEnForme(text.afterhtml[20].en))
        t3text.append(miseEnForme(text.afterhtml[21].en))
    } else {
        title.append(miseEnForme(text.indexhtml[3].fr))
        subtitle.append(miseEnForme(text.indexhtml[4].fr))
        t1.append(miseEnForme(text.afterhtml[0].fr))
        t1text.append(miseEnForme(text.afterhtml[1].fr))
        ct1desc1.append(miseEnForme(text.afterhtml[2].fr))
        ct1desc2.append(miseEnForme(text.afterhtml[7].fr))
        ct1desc3.append(miseEnForme(text.afterhtml[9].fr))
        lit1_1.append(miseEnForme(text.afterhtml[3].fr))
        lit1_2.append(miseEnForme(text.afterhtml[4].fr))
        lit1_3.append(miseEnForme(text.afterhtml[5].fr))
        lit1_4.append(miseEnForme(text.afterhtml[6].fr))
        lit1_5.append(miseEnForme(text.afterhtml[8].fr))
        lit1_6.append(miseEnForme(text.afterhtml[10].fr))
        lit1_7.append(miseEnForme(text.afterhtml[11].fr))
        lit1_8.append(miseEnForme(text.afterhtml[12].fr))
        t2.append(miseEnForme(text.afterhtml[13].fr))
        t2text.append(miseEnForme(text.afterhtml[14].fr))
        lit2_1.append(miseEnForme(text.afterhtml[15].fr))
        lit2_2.append(miseEnForme(text.afterhtml[16].fr))
        lit2_3.append(miseEnForme(text.afterhtml[17].fr))
        lit2_4.append(miseEnForme(text.afterhtml[18].fr))
        lit2_5.append(miseEnForme(text.afterhtml[19].fr))
        t3.append(miseEnForme(text.afterhtml[20].fr))
        t3text.append(miseEnForme(text.afterhtml[21].fr))
    }
}

main()

console.log(title)
