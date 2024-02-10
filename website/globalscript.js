let navLocation = document.querySelector("#navlocation")
let navContent = document.createElement("span")

console.log(navLocation)
console.log(navContent)

navContent.innerHTML = `
            <nav>
                <ul>
                   <li class="deroulant"><img src="Flag-France.png" width="25" height="17" alt="Drapeau Français" title="Drapeau Français"> Français (France) 
                    <ul class="sous">
                      <li><a href="index.html"><img src="Flag-France.png" width="25" height="17" alt="Drapeau de la republique Française" title="Drapeau Français"> Français (France)</a></li>
                      <li><a href="en/index.html"><img src="Flag-United-States-of-the-America.png" width="25" height="17" alt="Drapeau des Etats-Unis D'Amérique" title="Drapeau des USA"> English (U.S.A.)</a></li>
                      <li><a href="#"><img src="Flag-People's-Republic-of-China.png" width="25" height="17" alt="Drapeau de la chine" title="Drapeau de la Chine"> 中文 (中国)</a></li>
                    </ul>
                  </li>
                  <li class="deroulant">Naviguer
                    <ul class="sous">
                        <li><a href="index.html">Accueil</a></li>
                        <li><a href="naturoll.html">Naturoll</a></li>
                        <li><a href="membres.html">Membres</a></li>
                    </ul>
                  </li>
                  <img src="logo.png">
                </ul>
            </nav>
`
navLocation.append(navContent)

let footerLocation = document.querySelector("#footer")
let footerContent = document.createElement("span")

footerContent.innerHTML = `
    <footer class="apple-ui">
        <center><br><br><br><br>
            Toutes les images utilisées sur le site internet du Naturoll sont libre de droits ou crées de toutes pièce par George Technologies. Certaines images on été crées par des Intelligences Artificielles. <a href="ia-use.html">En savoir plus.</a><br>
            Site développé par <a href="phileas.html">Philéas</a> aidé par <a href="lucas.html">Lucas</a>.<br>
            Retrouvez George Technologies / Naturoll sur :
            <img src="https://upload.wikimedia.org/wikipedia/fr/thumb/4/4f/Discord_Logo_sans_texte.svg/1818px-Discord_Logo_sans_texte.svg.png" class="footerlinks" id="LienDiscord">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png" class="footerlinks" id="LienX" style="background-color: black; border-radius: 5px;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" class="footerlinks" id="LienInstagram">
        </center>
    </footer>
`
footerLocation.append(footerContent)

let discordClick = document.querySelector("#LienDiscord")
let XClick = document.querySelector("#LienX")
let instagramClick = document.querySelector("#LienInstagram")

console.log(discordClick)
console.log(XClick)
console.log(instagramClick)

discordClick.addEventListener("click", function onClick () {
    window.location = "https://www.discord.gg/naturollnbx"
})
XClick.addEventListener("click", function onClick () {
    window.location = "https://www.x.com/NaturollNBX"
})
instagramClick.addEventListener("click", function onClick () {
    window.location = "https://www.instagram.com/NaturollNBX"
})
