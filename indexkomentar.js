
let mojizaznamki = [] // S tem, ko dodamo pikice, je vsebina samodejno string
// mojizaznamki = JSON.parse(mojizaznamki) // S JSON.parse pretvorimo string v niz (array)
// mojizaznamki.push("mojastran.si") // V niz (array) vstavimo vrednost
// mojizaznamki = JSON.stringify(mojizaznamki) // Array spremenimo nazaj v string
// console.log(typeof mojizaznamki)

Zaznamkishramba = localStorage.getItem("Zaznamki")
const Predpomnjenipodatki = JSON.parse(Zaznamkishramba)

const Gumbizbrisi = document.getElementById("izbrisi-gumb")
const vnosuporabnika = document.getElementById("vnos-pr") // Const pomeni, da ne more biti spremenjeno npr. da bi hotel kasneje napisati vnosuporabnika = "Napis" - TO NE GRE, CE DAS CONST - KONSTANTNO - STALNO
const VnosGumb = document.getElementById("vnos-gumb")
const SeznamHTML = document.getElementById("seznamzaznamkov")
const Shranizavihek = document.getElementById("zavihek-gumb")
const Pocistizadnjo = document.getElementById("pocisti-zadnjo")


if (Zaznamkishramba) {
    mojizaznamki = Predpomnjenipodatki
    Prikaz(mojizaznamki)
}

Pocistizadnjo.addEventListener('click', function(){
    mojizaznamki.pop()
    Prikaz(mojizaznamki)
})
Shranizavihek.addEventListener('click', 
function(){
    browser.tabs.query({active: true, currentWindow: true}, function(tabs){
        mojizaznamki.push(tabs[0].url)
        localStorage.setItem("Zaznamki", JSON.stringify(mojizaznamki))
        Prikaz(mojizaznamki)
        console.log( localStorage.getItem("Zaznamki") )
    })
})



function Prikaz(vrednost) {
    let seznamzaznamkov = ""
    for (i = 0; i < vrednost.length; i++) {
    //seznamzaznamkov +=  "<li><a href='" + mojizaznamki[i] + "' target='_blank'>" + mojizaznamki[i] + "</a></li>"
    seznamzaznamkov += `   
    <li>
    <a href='${vrednost[i]}' target='_blank'>${vrednost[i]}</a>
    </li>
    `
    ///// Znak ' uporabimo, da lahko raztezamo kodo. V njemu, ce zelimo uporabiti stvari iz javascripta moramo uporabiti ${}.

    //------------------------------------------------------------------------
    //    SeznamHTML.innerHTML += "<li>" + mojizaznamki[i] + "</li>" //. innerHTML namesto .textContent pomeni, da lahko vstavis cel html znotraj HTML elementa
    //------------------------------------------------------------------------
    //-----------------------Zgornje bi lahko ustvarili tudi tako:------------
    // ustvarimo element
    // nastavimo vsebino besedilo(text content)
    // const li = document.createElement("li")
    // li.textContent = mojizaznamki[i]
    // SeznamHTML.append(li)
    //------------------------------------------------------------------------

}

    SeznamHTML.innerHTML = seznamzaznamkov  // S tem ko spreminjas HTML, vpliva na odzivnost delovanja. Ce bi bilo to znotraj loopa, bi se brez razloga ponavljalo.
}

Gumbizbrisi.addEventListener('dblclick', 
    function() {
    localStorage.clear()
    mojizaznamki = []
    SeznamHTML.textContent = ''


})


VnosGumb.addEventListener("click", function(){
    const Vsebinavnosa = vnosuporabnika.value /// .value izpise stvari, ki so vnesene v vnos-pr
    mojizaznamki.push(Vsebinavnosa)
    localStorage.setItem("Zaznamki", JSON.stringify(mojizaznamki))
    Prikaz(mojizaznamki)
    vnosuporabnika.value = ""
    console.log( localStorage.getItem("Zaznamki") )
    
})
