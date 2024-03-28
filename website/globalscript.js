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
                   <li class="deroulant">English (USA) 
                    <ul class="sous">
                      <li><a href="?lang=fr"><img src="Flag-France.png" width="25" height="17" alt="Drapeau de la republique Française" title="Drapeau Français"> Français (France)</a></li>
                      <li><a href="?lang=en"><img src="Flag-United-States-of-the-America.png" width="25" height="17" alt="Drapeau des Etats-Unis D'Amérique" title="Drapeau des USA"> English (U.S.A.)</a></li>
                    </ul>
                  </li>
                  <li class="deroulant">Naviguer
                    <ul class="sous">
                        <li><a href="index.html">Accueil</a></li>
                        <li><a href="naturoll.html">Naturoll</a></li>
                        <li><a href="membres.html">Membres</a></li>
                        <li><a href="listofpages.html">Toutes les pages du site</a></li>
                    </ul>
                  </li>
                  <img src="navlogo.png" class="navLogo">
                </ul>
            </nav>
`  
} else {
            navContent.innerHTML = `
            <nav>
                <ul>
                   <li class="deroulant">Français (France) 
                    <ul class="sous">
                      <li><a href="?lang=fr"><img src="Flag-France.png" width="25" height="17" alt="Drapeau de la republique Française" title="Drapeau Français"> Français (France)</a></li>
                      <li><a href="?lang=en"><img src="Flag-United-States-of-the-America.png" width="25" height="17" alt="Drapeau des Etats-Unis D'Amérique" title="Drapeau des USA"> English (U.S.A.)</a></li>
                    </ul>
                  </li>
                  <li class="deroulant">Naviguer
                    <ul class="sous">
                        <li><a href="index.html">Accueil</a></li>
                        <li><a href="naturoll.html">Naturoll</a></li>
                        <li><a href="membres.html">Membres</a></li>
                        <li><a href="listofpages.html">Toutes les pages du site</a></li>
                    </ul>
                  </li>
                  <img src="navlogo.png" class="navLogo">
                </ul>
            </nav>
`
}
navLocation.append(navContent)
