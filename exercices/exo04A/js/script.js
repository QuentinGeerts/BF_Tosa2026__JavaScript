/*
  ### Partie A : Mes premières fonctions

  Écrire et tester (au moins 2 appels chacune) les fonctions suivantes :

  - `estPair(nombre)` : retourne `true` si le nombre est pair, `false` sinon
  - `maximum(a, b)` : retourne le plus grand des deux nombres
  - `celsiusVersFahrenheit(celsius)` : retourne la température en Fahrenheit (formule : `celsius * 9 / 5 + 32`)
  - `prixTTC(prixHT, taux = 0.21)` : retourne le prix TVA comprise. Si le taux n'est pas donné, on utilise 21 %

*/

function estPair(nombre) {
  return nombre % 2 == 0;
}

console.log("5 est pair ?", estPair(5)); // false
console.log("4 est pair ?", estPair(4)); // true

function maximum(a, b) {
  // 1ère version
  if (a > b) {
    return a;
  }
  else {
    return b;
  }

  // 2ème version (♥)
  return a > b ? a : b;

  // 3ème version (variante de la première)
  if (a > b) return a;
  return b;
}

console.log("4 > 5:", maximum(4, 5)); // b = 5
console.log("6 > 5:", maximum(6, 5)); // a = 6


function celsiusVersFahrenheit(celsius) {
  return ((celsius * (9 / 5)) + 32).toFixed(2);
}

console.log("18.2°C → ", celsiusVersFahrenheit(18.2), "°F");
console.log("-4.8°C → ", celsiusVersFahrenheit(-4.8), "°F");

function prixTTC(prixHT, taux = 0.21) {
  return prixHT * (1 + taux);
}

console.log("100€ HTC à 21% → ", prixTTC(100), "€"); // 121 €
console.log("100€ HTC à 6% → ", prixTTC(100, 0.06), "€"); // 106 €