let navLocation = document.querySelector("#navlocation")
let navContent = document.createElement("span")
let LANGparams = new URLSearchParams(window.location.search)
let lang2 = LANGparams.get("lang")

console.log(navLocation)
console.log(navContent)

if(
            lang2 === "en"
){
          navContent.innerHTML = `
            <nav>
                <ul>
                  <li class="deroulant">Browse
                    <ul class="sous">
                        <li><a href="index.html?lang=en">Home</a></li>
                        <li><a href="naturoll.html?lang=en">Naturoll</a></li>
                        <li><a href="membres.html?lang=en">Members</a></li>
                        <li><a href="listofpages.html?lang=en">Every pages of the website</a></li>
                    </ul>
                  </li>
                  <li class="deroulant"><img src="Flag-United-States-of-the-America.png" width="25" height="17" alt="Drapeau des Etats-Unis D'Amérique" title="Drapeau des USA"> English
                    <ul class="sous">
                      <li><a href="?lang=fr"><img src="Flag-France.png" width="25" height="17" alt="Drapeau de la republique Française" title="Drapeau Français"> Français (France)</a></li>
                      <li><a href="?lang=en"><img src="Flag-United-States-of-the-America.png" width="25" height="17" alt="Drapeau des Etats-Unis D'Amérique" title="Drapeau des USA"> English (U.S.A.)</a></li>
                    </ul>
                  </li>
                  <img src="navLogo.png" class="navLogo">
                </ul>
            </nav>
`  
} else {
            navContent.innerHTML = `
            <nav>
                <ul>
                  <li class="deroulant">Naviguer
                    <ul class="sous">
                        <li><a href="index.html?lang=fr">Accueil</a></li>
                        <li><a href="naturoll.html?lang=fr">Naturoll</a></li>
                        <li><a href="membres.html?lang=fr">Membres</a></li>
                        <li><a href="listofpages.html?lang=fr">Toutes les pages du site</a></li>
                    </ul>
                  </li>
                  <li class="deroulant"><img src="Flag-France.png" width="25" height="17" alt="Drapeau de la republique Française" title="Drapeau Français"> Français
                    <ul class="sous">
                      <li><a href="?lang=fr"><img src="Flag-France.png" width="25" height="17" alt="Drapeau de la republique Française" title="Drapeau Français"> Français (France)</a></li>
                      <li><a href="?lang=en"><img src="Flag-United-States-of-the-America.png" width="25" height="17" alt="Drapeau des Etats-Unis D'Amérique" title="Drapeau des USA"> English (U.S.A.)</a></li>
                    </ul>
                  </li>
                  <img src="navLogo.png" class="navLogo">
                </ul>
            </nav>
`
}
navLocation.append(navContent)
