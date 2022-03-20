//const imeigralca = "Jaz"
//let tocke = 45
//---------------------------------------------------------------------------
// Ce je mozno, uporabi const (nespremenljiva spremenljivka)
// Ce ni mozno, uporabi let (spremenljiva spremenljivka)
// Katere spremenljivke naj bojo let in katere const?

// Stranka zeli narociti stvari. Nadaljni podatki:
const rednaCena = 520
const popust = 120
let postnina = 12
let prevzemposiljke = "5-12 dni"

// Pripetila se je napaca. Postnina je drazja in prevoz bo potreboval vec casa!
postnina = 15
prevzemposiljke = "7-14 dni"

// Izracun Cene
const Polnacena = rednaCena - popust + postnina

// Obvestilo stranki
console.log("Koncna cena: " + Polnacena + ". Prispelo bo cez " + prevzemposiljke)
