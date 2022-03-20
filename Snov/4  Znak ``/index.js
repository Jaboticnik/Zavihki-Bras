// '` crtice

const prejemnik = "Borut"
// 2. Ustvari neznanko posiljatelj in jo poimenuj
const posiljatelj = "Joze"

// Spremeni neznanko email z uporabo ` crtice
//const email = "Pozdravljen " + prejemnik + "! Kako si? Lep pozdrav, Jaz"

//2. uporabi spremenljivko posiljatelj namesto besede Jaz na koncu

// 3. Stavke z ' lahko poljubno razprostiramo in raztezamo cez crte
const eposta = `
Pozdravljen ${prejemnik}!
Kako si?
Lep pozdrav, ${posiljatelj}`

console.log(eposta)