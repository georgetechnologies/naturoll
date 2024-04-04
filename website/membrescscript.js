let back = document.querySelector("#backToMembersPage")

let p = new URLSearchParams(window.location.search)
let l = p.get("lang")

console.log(back)

back.addEventListener("click", function onClick () {
    if(
        l === "en"
    ){
        window.location = "membres.html?lang=en"
    }
    else {
        window.location = `membres.html?lang=fr`
    }
})

let secretaire = document.querySelector("#secretaire")
let ingenieur = document.querySelector("#ingenieur")
let designer = document.querySelector("#designer")
let gestionnaire = document.querySelector("#gestionnaire")
let programmeur = document.querySelector("#programmeur")
let technicien = document.querySelector("#technicien")
let traducteur = document.querySelector("#traducteur")
let devadj = document.querySelector("#devadj")
let chefDP = document.querySelector("#chefdp")
let dev = document.querySelector("#dev")
let progadj = document.querySelector("#progadj")
let msgLocation = document.querySelector("#clickaction")
let w = 0

console.log(secretaire)
console.log(ingenieur)
console.log(designer)
console.log(gestionnaire)
console.log(programmeur)
console.log(technicien)
console.log(traducteur)
console.log(devadj)
console.log(msgLocation)
console.log(w)

secretaire.addEventListener("click", function onClick () {
    if(
        w === 0 
    ){
        msgLocation.innerHTML = ``
    }
    if(
        l === "en"
    ){
        msgLocation.innerHTML = `Thomas is the secretary. He fills out the paper the says what each personne does each classe.`
    }
    else {
        msgLocation.innerHTML = `Thomas est secrétaire. Le secrétaire remplit la feuille qui dit ce que fais chaque personne à chaque cours.`
    }
})
ingenieur.addEventListener("click", function onClick () {
    if(
        w === 0 
    ){
        msgLocation.innerHTML = ``
    }
    if(
        l === "en"
    ){
        msgLocation.innerHTML = `Thomas is the engenier. THe engenier searcges for technical solutions for different tests. For example the balle catcher`
    }
    else {
        msgLocation.innerHTML = `Thomas est ingénieur. L'ingénieur cherche les solutions techniques pour les différentes épreuves. Par exemple l'attrappe balle`
    }
})
designer.addEventListener("click", function onClick () {
    if(
        w === 0 
    ){
        msgLocation.innerHTML = ``
    }
    if(
        l === "en"
    ){
        msgLocation.innerHTML = `Joshua is the designer. The designer designes the robot's paintwork and the globales colors of the project.`
    }
    else {
    msgLocation.innerHTML = `Joshua est designer. Le designer designe la carosserie du robot et les couleurs globales du projet.`
    }
})
gestionnaire.addEventListener("click", function onClick () {
    if(
        w === 0 
    ){
        msgLocation.innerHTML = ``
    }
    if(
        l === "en"
    ){
        msgLocation.innerHTML = `Joshua is administrator. The admin manages the budget of the team and orders the necessary materiels.`
    }
    else {
    msgLocation.innerHTML = `Joshua est gestionnaire. Le gestionnaire gère le budget de l'équipe et passe les commandes de matériaux nécésaires.`
    }
})
programmeur.addEventListener("click", function onClick () {
    if(
        w === 0 
    ){
        msgLocation.innerHTML = ``
    }
    if(
        l === "en"
    ){
        msgLocation.innerHTML = `Lucas is the programmer. The programmer code the Naturoll robot with Microsoft Makecode for micro:bit wich lets him code using blocs like with MIT's scratch.`
    }
    else {
    msgLocation.innerHTML = `Lucas est programmeur. Le programmeur code le robot Naturoll avec Microsoft Makecode for micro:bit qui lui permet de coder en language bloc type scratch.`
    }
})
technicien.addEventListener("click", function onClick () {
    if(
        w === 0 
    ){
        msgLocation.innerHTML = ``
    }
    if(
        l === "en"
    ){
        msgLocation.innerHTML = `Lucas is the technician. The Technician is in charge of all thing electronics on the robot.`
    }
    else {
    msgLocation.innerHTML = `Lucas est technicien. Le technicien s'occupe de la partie électronique du robot.`
    }
})
traducteur.addEventListener("click", function onClick () {
    if(
        w === 0 
    ){
        msgLocation.innerHTML = ``
    }
    if(
        l === "en"
    ){
        msgLocation.innerHTML = `Lucas is the translater. The translater translates the web pages on the website in english.`
    }
    else {
    msgLocation.innerHTML = `Lucas est traducteur. Le traducteur s'occupe de traduire les pages du site web en anglais.`
    }
})
devadj.addEventListener("click", function onClick () {
    if(
        w === 0 
    ){
        msgLocation.innerHTML = ``
    }
    if(
        l === "en"
    ){
        msgLocation.innerHTML = `Lucas is the developper's assistant. The developper's assistant is helps the main developper when he needs help.`
    }
    else {
    msgLocation.innerHTML = `Lucas est développeur adjoint. Le développeur adjoint aide le développeur lors de difficultés rencontrées.`
    }
})
chefDP.addEventListener("click", function onClick () {
    if(
        w === 0 
    ){
        msgLocation.innerHTML = ``
    }
    if(
        l === "en"
    ){
        msgLocation.innerHTML = `Phileas is the project manager. It's him who manages the team.`
    }
    else {
    msgLocation.innerHTML = `Philéas est le chef de projet. C'est lui qui gère l'équipe en général.`
    }
})
dev.addEventListener("click", function onClick () {
    if(
        w === 0 
    ){
        msgLocation.innerHTML = ``
    }
    if(
        l === "en"
    ){
        msgLocation.innerHTML = `Phileas is the developper. He is in charge of developpes the site.`
    }
    else {
    msgLocation.innerHTML = `Philéas est développeur informatique. C'est lui qui est en charge du développement du site internet.`
    }
})
progadj.addEventListener("click", function onClick () {
    if(
        w === 0 
    ){
        msgLocation.innerHTML = ``
    }
    if(
        l === "en"
    ){
        msgLocation.innerHTML = `Phileas is the programmer's assistant. He helps the programmers when he encounters a difficulty.`
    }
    else {
    msgLocation.innerHTML = `Philéas est programmeur adjoint. C'est lui qui aide le programmeur en cas de difficultés.`
    }
})
