const DobrodoselHTML = document.getElementById("dobrodosel-html")
const ime = "Marjan"
const Pozdrav = "Bonžur"
const custvo = "🍎"

Pozdraviosebo(ime, Pozdrav, custvo)

function Pozdraviosebo(imeosebe, Pozdravosebe, custvoosebe) {
    DobrodoselHTML.textContent = `${Pozdravosebe}, ${imeosebe}! ${custvoosebe}`    
}

