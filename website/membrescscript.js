let back = document.querySelector("#backToMembersPage")

console.log(back)

back.addEventListener("click", function onClick () {
    window.location = `membres.html`
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
    msgLocation.innerHTML = `Thomas est secrétaire. Le secrétaire remplit la feuille qui dit ce que fais chaque personne à chaque cours.`
})
ingenieur.addEventListener("click", function onClick () {
    if(
        w === 0 
    ){
        msgLocation.innerHTML = ``
    }
    msgLocation.innerHTML = `Thomas est ingénieur. L'ingénieur cherche les solutions techniques pour les différentes épreuves. Par exemple l'attrappe balle pour l'épreuve`
})
designer.addEventListener("click", function onClick () {
    if(
        w === 0 
    ){
        msgLocation.innerHTML = ``
    }
    msgLocation.innerHTML = `Joshua est designer. Le designer designe la carosserie du robot et les couleurs globales du projet.`
})
gestionnaire.addEventListener("click", function onClick () {
    if(
        w === 0 
    ){
        msgLocation.innerHTML = ``
    }
    msgLocation.innerHTML = `Joshua est gestionnaire. Le gestionnaire gère le budget de l'équipe et passe les commandes de matériaux nécésaires.`
})
programmeur.addEventListener("click", function onClick () {
    if(
        w === 0 
    ){
        msgLocation.innerHTML = ``
    }
    msgLocation.innerHTML = `Lucas est programmeur. Le programmeur code le robot Naturoll avec Microsoft Makecode for micro:bit qui lui permet de coder en language bloc type scratch.`
})
technicien.addEventListener("click", function onClick () {
    if(
        w === 0 
    ){
        msgLocation.innerHTML = ``
    }
    msgLocation.innerHTML = `Lucas est technicien. Le technicien s'occupe de la partie électronique du robot.`
})
traducteur.addEventListener("click", function onClick () {
    if(
        w === 0 
    ){
        msgLocation.innerHTML = ``
    }
    msgLocation.innerHTML = `Lucas est traducteur. Le traducteur s'occupe de traduire les pages du site web en anglais.`
})
devadj.addEventListener("click", function onClick () {
    if(
        w === 0 
    ){
        msgLocation.innerHTML = ``
    }
    msgLocation.innerHTML = `Lucas est développeur adjoint. Le développeur adjoint aide le développeur lors de difficultés rencontrées.`
})
chefDP.addEventListener("click", function onClick () {
    if(
        w === 0 
    ){
        msgLocation.innerHTML = ``
    }
    msgLocation.innerHTML = `Philéas est le chef de projet. C'est lui qui gère l'équipe en général.`
})
dev.addEventListener("click", function onClick () {
    if(
        w === 0 
    ){
        msgLocation.innerHTML = ``
    }
    msgLocation.innerHTML = `Philéas est développeur informatique. C'est lui qui est en charge du développement du site internet.`
})
progadj.addEventListener("click", function onClick () {
    if(
        w === 0 
    ){
        msgLocation.innerHTML = ``
    }
    msgLocation.innerHTML = `Philéas est programmeur adjoint. C'est lui qui aide le programmeur en cas de difficultés.`
})
