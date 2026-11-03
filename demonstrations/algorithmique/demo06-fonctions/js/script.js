/*
  Chapître 06 - Les fonctions
  Emplacement en mémoire qui stocke des lignes instructions que vous pouvez réutiliser à tout moment.

  En fonction du retour:
  - fonction → retourne une valeur
  - procédure → ne retourne pas de valeur

  Fonction: Un bloc indépendant (hors objet)
  Méthode: Un bloc qui existe dans un objet
*/

/*
  Programmation procédurale
            ↓
  Programmation fonctionnelle
            ↓
  Programmation orienté objet
*/

/* --- Syntaxe
  function nomFonction (parametre, ...) {
    // bloc d'instructions
    [return expression;]
  }
*/

// 1.  Procédure nommée (par défaut)
// → Ne renvoie pas de valeur

// Déclaration
function direBonjour() {
  console.log("Bonjour !");
}

// 2.  Exécution du code stocké
// → Invocation / Appel
// → nomMethode()

direBonjour();

// 3.  Paramètres
// → Une variable locale (à la fonction) qui permet au programme principal de fournir une information

function direBonjourA(prenom) {
  // Paramètre (déclaration)
  // console.log("Bonjour " + prenom + " !");
  console.log(`Bonjour ${prenom} !`);
}

direBonjourA("Azraël"); // Argument
direBonjourA("Chaymae");
direBonjourA("Zenabou");

function direBonjourADansHtml(prenom) {
  const message = document.getElementById("message");
  message.textContent = `Bonjour ${prenom} !`;
}

direBonjourADansHtml("Sébastien");
direBonjourADansHtml("Yasmina");
direBonjourADansHtml("Zineddine");

function direBonjourDeA(expediteur, destinataire) {
  console.log(`${expediteur} dit bonjour à ${destinataire}`);
}

direBonjourDeA("Siham", "Samir");

// 4.  Paramètres facultatifs
// → Définissant une valeur par défaut
// → parametre = valeur

function direBonjourAvecDefaut(prenom = null) {
  if (prenom == null) {
    console.log(`Bonjour !`);
  } else {
    console.log(`Bonjour ${prenom} !`);
  }
}

direBonjourAvecDefaut();
direBonjourAvecDefaut("Marwan");

function direBonjourDeA2(expediteur, destinataire = null) {
  if (destinataire != null)
    console.log(`${expediteur} dit bonjour à ${destinataire}`);
  else console.log(`${expediteur} dit bonjour !`);
}

direBonjourDeA2("Sophie");
direBonjourDeA2("Killian", "Hicham");

function direBonjourDeA3(expediteur, destinataire = null, message = null) {
  if (destinataire != null)
    console.log(`${expediteur} dit '${message}' à ${destinataire}`);
  else if (message != null) console.log(`${expediteur} dit '${message}' !`);
  else console.log(`${expediteur} dit 'Bonjour' !`);
}

direBonjourDeA3("Corina", "Erdal", "Bonjour");
direBonjourDeA3("Fatima", null, "Bonjour tout le monde !"); // <!>
direBonjourDeA3("Kazem");

// 5.  Fonctions
// → Renvoie une valeur

function addition(nb1, nb2) {
  let resultat = nb1 + nb2;
  return resultat;
  // OU (attention, tout ce qui se trouve après une return dans son bloc d'instructions ne sera pas exécuté)
  return nb1 + nb2;
}

let resultat = addition(5, 7);
console.log(`addition(5, 7):`, resultat);
console.log(`addition(6, 7):`, addition(6, 7));

console.log(`addition(6, 7):`, addition("6", 7));
console.log(`addition(6, 7):`, addition("a", 7));

// 6.  Imbrication

console.log(addition(addition(1, 1), 2)); // <!> à bien ouvrir et fermer

// 7.  Documentation

/**
 * Fonction qui retourne la différence entre deux valeurs.
 *
 * @param {number} nb1 Le premier nombre
 * @param {number} nb2 Le deuxième nombre
 * @returns {number} La différence de nb1 et nb2
 */
function soustraction(nb1, nb2) {
  return nb1 - nb2;
}

console.log("soustraction(10, 6):", soustraction(10, 6));
console.log("soustraction(10, 'a'):", soustraction(5, "a"));

// 8. Validation des typages des paramètres

function multiplication(nb1, nb2) {
  let a = parseFloat(nb1);
  let b = Number(nb2);

  if (isNaN(a) || isNaN(b))
    throw new Error(
      `Le paramètre nb1 ou nb2 doivent être des nombres. (a: ${nb1}, b: ${nb2})`,
    );

  return nb1 * nb2;
}

try {
  console.log("multiplication(10, 6):", multiplication(10, "a"));
} catch (error) {
  console.log("Erreur:", error);
}

console.log("Continue");

// 9.  Opérateur "rest"
// permet d'indiquer qu'il y a autant de paramètres que vous voulez
// → nomMethode(...variable)
// <!> toujours en dernier paramètres

function somme(valeurInitiale, ...valeurs) {
  let total = valeurInitiale;
  for (const valeur of valeurs) {
    total = total + valeur; // total += valeur;
  }
  return total;
}

console.log("somme(0, 9, 4, 6, 2, 3):", somme(0, 9, 4, 6, 2, 3));
console.log("somme(50, 12, 12, 10):", somme(50, 12, 12, 10));

// 10.  Passage par valeur vs passage par référence
// Passage par valeur → envoie une copie de la valeur (brute)
// Passage par référence → envoie la référence (adresse mémoire) d'où est stocké la valeur

// Type valeur: entier, réel, booléen
function passageParValeur(entier) {
  console.log("[passageParValeur] entier:", entier); // 0
  entier = 42;
  console.log("[passageParValeur] entier:", entier); // 42
}

// Type: string, objet, tableau
function passageParReference(tab) {
  console.log("[passageParReference] tab:", tab[0]); // 0
  tab[0] = 42;
  console.log("[passageParReference] tab:", tab[0]); // 42
}

let monEntier = 0;
console.log("[global] monEntier:", monEntier); // 0
passageParValeur(monEntier);
console.log("[global] monEntier:", monEntier); // 0

const monTableau = [0];
console.log("[global] monTableau:", monTableau[0]); // 0
passageParReference(monTableau);
console.log("[global] monTableau:", monTableau[0]); // 42

// Exemple concret

const pseudo = document.getElementById("pseudo");
const password = document.getElementById("password");
const btn = document.getElementById("btn");

btn.onclick = () => {
  console.log("Manipulation du champ avec le bouton");
  const pseudoValue = getValueAndClear(pseudo);
  message.textContent = pseudoValue;
  pseudo.focus();
};

function getValueAndClear(champ) {
  console.log("champ.value :>> ", champ.value);
  const value = champ.value.trim();
  champ.value = "";
  return value;
}

// 11.  Fonction anonyme
// → Fonction sans nom

/* --- Syntaxe
  function (parametres, ...) {
    [return ...]
  }
*/

let abc = "Hello";
console.log(abc);

console.log(direBonjour());
console.log(direBonjour);

const direBonjourFn = direBonjour;
console.log("direBonjourFn :>> ", direBonjourFn);
direBonjourFn();

const direBonjourTab = [
  direBonjour, // 0
  direBonjourA, // 1
  direBonjourDeA, // 2
];

direBonjourTab[0]();
direBonjourTab[1]("Quentin");
direBonjourTab[2]("Quentin", "Erdal");

const operations = {
  addition: addition,
  soustraction: soustraction,
  multiplication: multiplication,
  division: function (a, b) {
    return a / b;
  },
};

console.log("addition(3, 5) :>> ", operations.addition(3, 5));
console.log("soustraction(3, 5) :>> ", operations.soustraction(3, 5));
console.log("division(5,3):", operations.division(5, 3));

const fn = function (prenom) {
  console.log(`Bonjour ${prenom}`);
};

fn("Quentin");

// 12.  Fonctions flêchées
// → "Raccourci" d'écriture des fonctions anonymes

/* --- Syntaxe
  (parametres) => {
    return ...
  }

  (parametres) => ...
*/

const operations2 = {
  addition: function (a, b) {
    // Bloc d'instructions
    return a + b;
  },
  soustraction: (a, b) => {
    // Bloc d'instructions
    return a - b;
  },
  multiplication: (a, b) => a * b,
};

console.log(operations2.addition(5, 2));
console.log(operations2.multiplication(5, 2));

const personnes = [
  { lastname: "Geerts", firstname: "Quentin", age: 30, sex: "M" },
  { lastname: "Dupont", firstname: "Marie", age: 42, sex: "F" },
  { lastname: "Dupont", firstname: "Lucas", age: 12, sex: "M" },
  { lastname: "Dupont", firstname: "Emma", age: 8, sex: "F" },
  { lastname: "Lambert", firstname: "Thomas", age: 55, sex: "M" },
  { lastname: "Lambert", firstname: "Sophie", age: 51, sex: "F" },
  { lastname: "Peeters", firstname: "Jan", age: 37, sex: "M" },
  { lastname: "Peeters", firstname: "Lotte", age: 5, sex: "F" },
  { lastname: "Janssens", firstname: "Elise", age: 28, sex: "F" },
  { lastname: "Janssens", firstname: "Noah", age: 3, sex: "M" },
  { lastname: "Martin", firstname: "Nicolas", age: 64, sex: "M" },
  { lastname: "Martin", firstname: "Isabelle", age: 61, sex: "F" },
  { lastname: "Dubois", firstname: "Julie", age: 19, sex: "F" },
  { lastname: "Dubois", firstname: "Hugo", age: 16, sex: "M" },
  { lastname: "Leroy", firstname: "Camille", age: 33, sex: "F" },
  { lastname: "Leroy", firstname: "Louis", age: 10, sex: "M" },
  { lastname: "Leroy", firstname: "Chloé", age: 7, sex: "F" },
  { lastname: "Simon", firstname: "Antoine", age: 46, sex: "M" },
  { lastname: "Laurent", firstname: "Nathalie", age: 39, sex: "F" },
  { lastname: "Laurent", firstname: "Arthur", age: 14, sex: "M" },
  { lastname: "Michel", firstname: "Pierre", age: 72, sex: "M" },
  { lastname: "Michel", firstname: "Jeanne", age: 70, sex: "F" },
  { lastname: "Willems", firstname: "Bram", age: 25, sex: "M" },
  { lastname: "Claes", firstname: "Laura", age: 31, sex: "F" },
  { lastname: "Claes", firstname: "Mila", age: 1, sex: "F" },
  { lastname: "Goossens", firstname: "Kevin", age: 22, sex: "M" },
  { lastname: "Mertens", firstname: "Sarah", age: 17, sex: "F" },
  { lastname: "Lemaire", firstname: "Maxime", age: 11, sex: "M" },
  { lastname: "Fontaine", firstname: "Léa", age: 26, sex: "F" },
  { lastname: "Fontaine", firstname: "Gabriel", age: 9, sex: "M" },
];

function estAdulteFn(personne) {
  return personne.age >= 18;
}

function estEnfantFn(personne) {
  return personne.age < 18;
}

function estHommeFn(personne) {
  return personne.sex == "M";
}

function estFemmeFn(personne) {
  return personne.sex == "F";
}

function customFilter(array, compareFn) {
  const filtered = [];
  for (const p of array) {
    if (compareFn(p)) {
      filtered.push(p);
    }
  }
  return filtered;
}

console.log("Personnes:", personnes);
const femmes = customFilter(personnes, estFemmeFn);
console.log("Femmes:", femmes);

const hommes = customFilter(personnes, estHommeFn);
console.log("Hommes :", hommes);

const adultes = customFilter(personnes, function (p) {
  return p.age >= 18;
});
console.log("adultes :>> ", adultes);

const mineurs = customFilter(personnes, (p) => p.age < 18);
console.log("mineurs :>> ", mineurs);

const hommesMajeurs = customFilter(hommes, estAdulteFn);
console.log("hommesMajeurs :>> ", hommesMajeurs);

const fillettes = customFilter(personnes, (p) => p.sex == "F" && p.age < 18);
console.log("fillettes :>> ", fillettes);

const personnesPrenomCommence = customFilter(personnes, (p) =>
  p.lastname.startsWith("Du"),
);
console.log("personnesPrenomCommence :>> ", personnesPrenomCommence);
