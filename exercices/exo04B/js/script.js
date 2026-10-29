/*
  ### Partie B : Fonctions et boucles

  - `compterVoyelles(texte)` : retourne le nombre de voyelles (a, e, i, o, u, y) dans le texte
  - `inverser(texte)` : retourne le texte à l'envers (`"Bonjour"` → `"ruojnoB"`)
  - `moyenne(...notes)` : retourne la moyenne de toutes les notes reçues, peu importe leur nombre
  - `mention(note)` : retourne la mention avec un `switch` ou des `if` :
    - moins de 10 : "Échec"
    - de 10 à 13 : "Satisfaction"
    - de 14 à 16 : "Distinction"
    - 17 et plus : "Grande distinction"

*/

function compterVoyelles(texte) {
  let compteur = 0;

  for (const lettre of texte.toLowerCase()) {
    if ("aeiouyàáâéèêìíîúùûóòôúùû".includes(lettre)) compteur++;
  }

  return compteur;
}

console.log(
  "Est-il l'heure d'y aller à la banque ? ",
  compterVoyelles("Est-il l'heure d'y aller à la banque ?"),
);

/**
 * Permet d'inverser un texte
 *
 * @param {string} texte Le texte à inverser
 */
function inverser(texte) {
  // Sans tableau
  // let texteRenverse = "";
  // //  initialisation ; condition d'arrêt ; modification
  // for (let i = 6; i >= 0; i--) {
  //   texteRenverse += texte[i];
  // }
  // return texteRenverse;

  // Avec les méthodes d'un tableau
  // // 1. Décomposer le texte en tableau de lettre
  // const lettres = texte.split("");
  // console.log('lettres :>> ', lettres);
  // // 2. Renverser le tableau de lettre
  // const lettresRenversees = lettres.reverse();
  // console.log('lettresRenversees :>> ', lettresRenversees);
  // // 3. Fusionner le tableau de lettre en chaine de caractères
  // const texteRenverses = lettresRenversees.join("");
  // console.log('texteRenverses :>> ', texteRenverses);

  // return texteRenverses;

  // Version chaînée
  return texte
    .split("") // Décomposer le texte en tableau de lettre
    .reverse() // Renverser le tableau de lettre
    .join(""); // Fusionner le tableau de lettre en chaine de caractères
}

console.log("Bonjour → ", inverser("Bonjour"));
console.log(
  "Il est bientôt l'heure de la pause → ",
  inverser("Il est bientôt l'heure de la pause"),
);

function moyenne(...notes) {
  // 1ère version - sans méthode
  let somme = 0;
  for (const note of notes) {
    somme = somme + note; // somme += note;
  }
  let moyenne = somme / notes.length;
  return +moyenne.toFixed(2);

  // 2ème version - méthode reduce
  somme = notes.reduce((acc, value) => acc + value, 0);
  moyenne = somme / notes.length;
  return +moyenne.toFixed(2);
}

console.log("moyenne(1, 2, 3, 4, 5, 6) :>> ", moyenne(1, 2, 3, 4, 5, 6));
console.log(
  "moyenne(3, 4, 4, 4, 9, 7, 2, 1, 1) :>> ",
  moyenne(3, 4, 4, 4, 9, 7, 2, 1, 1),
);

// - `mention(note)` : retourne la mention avec un `switch` ou des `if` :
// - moins de 10 : "Échec"
// - de 10 à 13 : "Satisfaction"
// - de 14 à 16 : "Distinction"
// - 17 et plus : "Grande distinction"

function mention(note) {
  // 1ère version
  if (note < 10) return "Échec";
  else if (note < 14) return "Satisfaction";
  else if (note < 17) return "Distinction";
  else return "Grande distinction";

  // 2ème version
  return note < 10
    ? "Échec"
    : note < 14
      ? "Satisfaction"
      : note < 17
        ? "Distinction"
        : "Grande distinction";
}

console.log("mention(5) :>> ", mention(5));
console.log("mention(13.5) :>> ", mention(13.5));
console.log("mention(18) :>> ", mention(18));
