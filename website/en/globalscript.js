let footerLocation = document.querySelector("#footer")
let footerContent = document.createElement("span")

footerContent.innerHTML = `
    <footer class="apple-ui">
        <center><br><br><br><br>
        All images used on Naturoll website are copyright-free or made by George Technologies. Some images may be created by Artificial Intelligences <a href="ia-use.html">Learn more.</a><br>
        Website made by <a href="phileas.html">Philéas</a> with the help of <a href="lucas.html">Lucas</a>.<br>
           Come find Naturoll on
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