/*
  Chapitre 05 - Structures
*/

// 1.  Structures conditionnelles
// → exécuter un bloc d'instructions sur base d'une condition

// 1.1. if ... else if ... else ...
// Gère les égalités et inégalités

/* -- Syntaxe
  if (expression_booléenne) {
    // bloc d'instructions
  }
  else if (expression_booléenne) {
    // bloc d'instructions
  }
  else {
    // bloc d'instrucitons
  }
*/

// If solo
if (true) {
  console.log("Exécution du if");
}

// Comportement par défaut

if (false) {
  // Jamais exécuté
} else {
  console.log("Execution du else");
}

// D'autres conditions à vérifier
let age = 67;

if (age < 12) {
  console.log("T'es un enfant");
} else if (age < 18) {
  console.log("T'es un adolescent");
} else if (age < 65) {
  console.log("T'es un adulte");
} else {
  console.log("T'es un senior");
}

// 1.2. switch ... case ...
// Ne gère que les égalités strictes

/* --- Syntaxe
  switch (expression) {
  
    case valeur:
      // bloc d'instructions
      break;
  
    case valeur2:
    case valeur3:
    case valeur4:
      // bloc d'instructions
      break;
    
    default:
      // bloc d'instructions
      break;
  
  }
*/

let jour = "jeudi";

if (jour == "lundi") console.log("Sandwich 1");
else if (jour == "mardi") console.log("Sandwich 2");
else if (jour == "mercredi") console.log("Sandwich 3");
else if (jour == "jeudi")
  console.log("Sandwich 4"); // s'arrête là
else if (jour == "vendredi") console.log("Sandwich 5");
else if (jour == "samedi") console.log("Sandwich 6");
else console.log("Sandwich 7");

// Vérifier jusqu'à jeudi, sort de la structure if

if (jour == "lundi") console.log("Sandwich 1");
if (jour == "mardi") console.log("Sandwich 2");
if (jour == "mercredi") console.log("Sandwich 3");
if (jour == "jeudi") console.log("Sandwich 4");
if (jour == "vendredi") console.log("Sandwich 5");
if (jour == "samedi") console.log("Sandwich 6");
if (jour == "dimanche") console.log("Sandwich 7");

// Vérifie ABSOLUMENT TOUS LES IF

// Optimiser avec switch
jour = "jeudi";
switch (jour) {
  case "lundi":
  case "mardi":
  case "mercredi":
    console.log("Sandwich");
    break;
  case "jeudi":
  case "vendredi":
    console.log("Pâtes carbo");
    break;
  case "samedi":
    console.log("Salade");
    break;
  default:
    console.log("Steak frites");
}

// 2.  Structures itératives
// → répéter un bloc d'instructions sur base d'une condition


/*
  3 règles IMPORTANTES pour qu'une boucle fonctionne correctement:
  - Initialisation (où la donnée commence)
  - Condition d'arrêt (où la donnée s'arrête)
  - Modification (comment la donnée va avancer)
*/


// 2.1. while

/* --- Syntaxe
  while (expression_booléenne) {
    // bloc d'instructions
  }
*/

// Exemple 

while (false) {
  // jamais rentrer dans la boucle
}

// while (true) { ... }  // ATTENTION boucle infinie

let compteur = 1; // initialisation

while (compteur <= 10) { // condition d'arrêt
  console.log("compteur:", compteur);
  compteur++; // incrémentation
}

// ---

compteur = 0
// while (confirm("Tu veux continuer ?")) {
//   compteur++;
// }

console.log("T'as continué " + compteur + " fois...");

// 2.2. do ... while

/* --- Syntaxe
  do {
    // bloc d'instructions
  } while (expression_booléenne);
*/

// Exemple 

do {
  console.log("Rentre une fois");
} while (false);

// 2.3. for

/* --- Syntaxe
  for ( initialisation ; condition d'arrêt ; modification ) {
    // bloc d'instrutionc
  }
*/

// Exemple 

//    initia.   condi.   modif..
for (let i = 1; i <= 10; i++) {
  console.log("i:", i);
}

for (let i = 10; i >= 1; i--) {
  console.log("i:", i);
}

for (let i = 1, j = i, k = 10; i <= 10; i++, j+=3, k--) {
  console.log("i:", i, 'j:', j, 'k:', k);
  k++;
}

// for (;;) { // Attention boucle infinie
//   console.log("KO");
// }

// Imbrication de boucle autorisée
// La boucle dans la boucle tourne plus vite que l'extérieur
for (let i = 1; i <= 10; i++) {
  for (let j = i; j <= 10; j++) {
    console.log("i:", i, "j:", j);
  }
}

// A partir d'ici, on utilise le principe d'iterator
// 2.4. for...in
// → Itérer sur les clefs d'une structure clef/valeur

const tab1 = ["Pomme", "Poire", "Cerise", "Ananas"];
const personne = {
  lastname: 'Geerts',
  firstname: 'Quentin',
  age: 30
};
const word = "Bonjour";

/* --- Syntaxe
  for (const key in structure) {
    // bloc d'instructions
  }
*/

// Exemple 

// Pour un tableau, la clef est l'index
for(const index in tab1) {
  console.log("index:", index, "value:", tab1[index]);
}

// Pour un objet, la clef est une propriété
for (const prop in personne) {
  console.log("prop:", prop, "value:", personne[prop]);
}

// Pour une chaine de caracètres, la clef est un index
for(const index in word) {
  console.log("index:", index, "value:", word[index]);
}


// 2.5. for...of
// → Itérer sur les valeurs d'une structure (iterable)

/* --- Syntaxe
  for (const value of structure) { ... }
*/

// Exemple 
for (const fruit of tab1) {
  console.log("fruit:", fruit);
}

for (const letter of word) {
  console.log(letter);
}


// 2.6. forEach

/* --- Syntaxe
  tableau.forEach((element, index, tableau) => { ... })
*/

// Exemple 

tab1.forEach((element, index, tableau) => {
  console.log(element, index, tableau);
});


// 2.7. Mot-clefs "break" / "continue"

/*
  - break:
    permet de sortir de la structure
  - continue:
    permet de sortir de l'itération en cours
*/

// Exemple 

for (let i = 0; i < 10; i++) {
  if (i == 4) break;
  console.log("i:", i);
}
console.log("Fin du for");


for (let i = 0; i < 10; i++) {
  if (i == 4) continue;
  console.log("i:", i);
}
console.log("Fin du for");

