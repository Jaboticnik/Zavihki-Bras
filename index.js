let letmojizaznamki = []

Zaznamkishramba = localStorage.getItem("Zaznamki")
const Predpomnjenipodatki = JSON.parse(Zaznamkishramba)

const Gumbizbrisi = document.getElementById("izbrisi-gumb")
const vnosuporabnika = document.getElementById("vnos-pr") 
const VnosGumb = document.getElementById("vnos-gumb")
const SeznamHTML = document.getElementById("seznamzaznamkov")
const Shranizavihek = document.getElementById("zavihek-gumb")
const Besedilo = document.getElementById("napisi")

const ul = document.createElement("ul")

if (Zaznamkishramba) {
    mojizaznamki = Predpomnjenipodatki
    Prikaz(mojizaznamki)
}

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
Besedilo.innerHTML = ""
ul.innerHTML = ""

for (i = 0; i < vrednost.length; i++) {

const li = document.createElement("li")   

const a = document.createElement("a")
a.setAttribute('href', `${vrednost[i]}`)
a.setAttribute('target', '_blank')
a.textContent = `${vrednost[i]}`
li.appendChild(a)

const button = document.createElement("button")
button.setAttribute('id', i)
button.innerHTML= `<img src="slike/smetnjak.svg" style="height:13px">`

li.append(button)
 ul.setAttribute('id', "seznamzaznamkov")
 Besedilo.appendChild(ul)
 ul.appendChild(li)
 function onClick() {
    Izbrisi(button.id)
    console.log("PRITISNJEN" + button.id)
 }
 button.addEventListener("click", onClick, false);
}}

Gumbizbrisi.addEventListener('click', 
    function() {
    localStorage.clear()
    mojizaznamki = []
    SeznamHTML.textContent = ''
    Prikaz(mojizaznamki)

})


VnosGumb.addEventListener("click", function(){
    if(vnosuporabnika.value === "") {
        alert("Izpolni vsa polja")
    }
    else{
        const Vsebinavnosa = vnosuporabnika.value 
        mojizaznamki.push(Vsebinavnosa)
        localStorage.setItem("Zaznamki", JSON.stringify(mojizaznamki))
        Prikaz(mojizaznamki)
        vnosuporabnika.value = ""
        console.log( localStorage.getItem("Zaznamki") )
    }
    
    
})

function Izbrisi(vrednost) {
    mojizaznamki.splice(vrednost, 1)
    localStorage.setItem("Zaznamki", JSON.stringify(mojizaznamki))
    Prikaz(mojizaznamki)
}
