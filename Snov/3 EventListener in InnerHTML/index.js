// Uporabi .innerHTML da prikazes "Kupi!" gumb znotraj div-a z idjem = "kontejner"

const Kontejner = document.getElementById("kontejner")

Kontejner.innerHTML = "<button id='Gumb'>" + "Kupi" + "</button>"

// Ko pritisnes gumb, izpisi besedilo (<p> paragraph) pod gumbom,
// ki pravi :"Hvala za vas nakup!"

const GumbHTML = document.getElementById('Gumb')

GumbHTML.addEventListener('click',
function() {
Kontejner.innerHTML += "<br>" + "<p>Hvala za vas nakup!</p>"   
})

