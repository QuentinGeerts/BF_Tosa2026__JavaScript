/*
  Démonstration 07 - Tableaux
*/

// 1.  Déclaration d'un tableau

const monTableau1 = []; // Instanciation à la volée (♥)
const monTableau2 = new Array(); // Instanciation avec constructeur

console.log("monTableau1 :>> ", monTableau1);
console.log("monTableau2 :>> ", monTableau2);

// 2.  Déclaration + initialisation des données
const monTableau3 = ["Sophie", "Zenabou", "Azrael", "Kazem", "Zineddine"]; // ♥
const monTableau4 = new Array(10);
const monTableau5 = new Array("Thierry", "Yasmina", "Sébastien");

console.log("monTableau3 :>> ", monTableau3);
console.log("monTableau4 :>> ", monTableau4);
console.log("monTableau5 :>> ", monTableau5);

// 3.  Propriété length
// Permet de récupérer le nombre d'éléments de votre tableau

console.log("monTableau1.length :>> ", monTableau1.length); // 0
console.log("monTableau3.length :>> ", monTableau3.length); // 5
console.log("monTableau5.length :>> ", monTableau5.length); // 3

// 4.  Accéder à une élément dans le tableau
// Opérateur d'indexation : []
// Index commence à 0 et terminé à taille - 1
// Accès en lecture et en écriture

// 4.1. Lecture (récupérer la donnée)
console.log("monTableau3[0] :>> ", monTableau3[0]); // Sophie
console.log("monTableau3[1] :>> ", monTableau3[1]); // Zenabou
console.log("monTableau3[2] :>> ", monTableau3[2]); // Azrael
console.log("monTableau3[3] :>> ", monTableau3[3]); // Kazem
console.log("monTableau3[4] :>> ", monTableau3[4]); // Zinedinne

// 4.2. Écriture (modifier la donnée)
monTableau3[0] = "Siham";
console.log("monTableau3 :>> ", monTableau3);

// 5.  Le typage et le nombre déléments sont égalements dynamique

monTableau5[0] = 42;
console.log("monTableau5 :>> ", monTableau5);
console.log("monTableau3[5] :>> ", monTableau3[5]);
console.log("monTableau3[-5] :>> ", monTableau3[-5]);
console.log("monTableau3[9999] :>> ", monTableau3[9999]);

monTableau5[9999] = "Quentin";
console.log("monTableau5 :>> ", monTableau5);

// 6.  Tableau associatif
// Tableau qui utilise un index en chaîne de caractères
// Associatif → Association d'une clef à une valeur

const platsSemaine = [];
platsSemaine["lundi"] = "Sandwich";
platsSemaine["mardi"] = "Cassoulet";
platsSemaine["mercredi"] = "Salade";
platsSemaine["jeudi"] = "Steak frites";
platsSemaine["vendredi"] = "Sandwich";

console.log("platsSemaine :>> ", platsSemaine);
console.log('platsSemaine["jeudi"] :>> ', platsSemaine["jeudi"]);

console.log("platsSemaine.length :>> ", platsSemaine.length); // <!> il est à 0

// Petite astuce pour récupérer le nombre d'éléments d'un tableau associatif
console.log(
  "Object.keys(platsSemaine).length :>> ",
  Object.keys(platsSemaine).length,
);
console.log("Object.values(platsSemaine) :>> ", Object.values(platsSemaine));

console.log("platsSemaine.lundi :>> ", platsSemaine.lundi); // Utilisation comme un objet
console.log("platsSemaine.mardi :>> ", platsSemaine.mardi); // Utilisation comme un objet
console.log("platsSemaine.mercredi :>> ", platsSemaine.mercredi); // Utilisation comme un objet
console.log("platsSemaine.jeudi :>> ", platsSemaine.jeudi); // Utilisation comme un objet
console.log("platsSemaine.vendredi :>> ", platsSemaine.vendredi); // Utilisation comme un objet

// platsSemaine.0 // Attention ne fonction pas

// 7.  Static vs Instance

// Static → Classe directement
// Instance → Objet créé

// 7.1.  Static
// Accessible en faisant Array.[...]

const copie = Array.from(monTableau3);
console.log("copie :>> ", copie);
console.log("copie == monTableau3 :>> ", copie == monTableau3); // False

const copie2 = monTableau3; // <!>
console.log("copie2 == monTableau3 :>> ", copie2 == monTableau3); // True

// 7.2.  Instance
// Accessible en faisant monTableau3.[...]

console.log("monTableau3.toSorted() :>> ", monTableau3.toSorted());

console.clear();

// 8.  Parcourir élément par élément dans un tableau
// → Vous pouvez utiliser n'importe quelle boucle pour parcourir un tableau
// → Certaines sont plus adéquates

// 8.1.  Exemple avec while
console.warn("Exemple avec while");

let index = 0; // Initialisation

while (index <= monTableau3.length - 1) { // Condition d'arrêt
  console.log("monTableau3[" + index + "]", monTableau3[index]);
  index++; // Incrémentation
}

index = 0; // Initialisation

while (index < monTableau3.length) { // Condition d'arrêt
  console.log("monTableau3[" + index + "]", monTableau3[index]);
  index++; // Incrémentation
}

// 8.2.  Exemple avec for (♥)
console.warn("Exemple avec for");
for(let i = 0; i < monTableau3.length; i++) {
  console.log('monTableau3[' + i + '] :>> ', monTableau3[i]);
}

// 8.3.  Exemple avec les variantes de for
console.warn("Exemple avec forin"); 
for (const index in monTableau3) { // Parcourt des clefs
  console.log('monTableau3[' + index + '] :>> ', monTableau3[index]);  
}

// <!> vous ne pouvez pas modifier la structure du tableau
console.warn("Exemple avec forof"); // Parcourt des valeurs
for (const valeur of monTableau3) {
  console.log('valeur :>> ', valeur);
}

console.clear();

// 9. Méthodes pour manipuler les tableaux

// 9.1.  Ajouter des éléments dans un tableau

// 9.1.1.  Ajouter à la fin du tableau
// Array.prototype.push(...items: any[]): number

const t1 = [1, 2, 3];

t1.push(4);
console.log('t1 :>> ', t1);

t1.push(5, 6, 7, 8, "bonjour");
console.log('t1 :>> ', t1);

// 9.1.2.  Ajouter au début
// Array.prototype.unshift(...items: any[]): number

t1.unshift(-1, 0);
console.log('t1 :>> ', t1);

// 9.2.  Supprimer des éléments dans un tableau

// 9.2.1.  Retirer à la fin du tableau
// Array.prototype.pop(): any | undefined

let removedItem = t1.pop();
console.log('t1 :>> ', t1);
console.log('removedItem :>> ', removedItem);

// 9.2.2.  Retirer au début
// Array.prototype.shift(): any | undefined

removedItem = t1.shift();
console.log('t1 :>> ', t1);
console.log('removedItem :>> ', removedItem);

console.clear();

// 9.3.  Insérer / modifier / supprimer des éléments dans un tableau
// Array.prototype.splice(start: number, nbElement: number, ...items: any[]): any[]

const t2 = [1, 2, 3];

let removedItems = t2.splice(t2.length, 0, 4, 5); // Comme le push
console.log('removedItems :>> ', removedItems);

removedItems = t2.splice(0, 0, -2, -1); // Comme le unshift
console.log('removedItems :>> ', removedItems);

removedItems = t2.splice(t2.length - 1, 1); // Comme le pop
console.log('removedItems :>> ', removedItems);

removedItems = t2.splice(0, 1); // Comme le shift
console.log('removedItems :>> ', removedItems);

removedItems = t2.splice(3, 0, 2.5); // Insérer la 2.5 à la place du 3 en poussant les autres
console.log('removedItems :>> ', removedItems);

removedItems = t2.splice(4, 1, 2.6); // Remplacer la valeur 3 par 2.6
console.log('removedItems :>> ', removedItems);

console.table(t2);

console.clear();

// 9.4.  Trier
// Modifie le tableau original
// Array.prototype.sort(): référence originale

// Array.prototype.toSorted(): nouvelle référence
//  <!> les chaînes de caractères ne sont pas prises en compte

const t3 = [170, "bonjour", "Bienvenue", 50, 9, 1_500_000];

const t4 = t3.toSorted(); // Tri alphabétique
const t5 = t3.toSorted((a, b) => a - b); // Tri croissant

console.log(t3);
console.log(t4);
console.log(t5);

console.log(t3 == t4); // Même table (même référence mémoire)

console.clear();

// 9.5.  Renverser

const t6 = [1, 2, 3, 4, 5];
const reversedT6 = t6.reverse();
const reversed2T6 = t6.toReversed();

console.log('t6 :>> ', t6);
console.log('reversedT6 :>> ', reversedT6); // modifie le tableau d'origine
console.log('reversed2T6 :>> ', reversed2T6); // retourne une copie reverse du tableau

console.clear();

// 9.6.  Réduire

const values = [8, 4, 6, 1, 2, 6, 9, 7, 1, 2, 3, 4, 5, 6, 1, 2, 3];

let accumulateur = 0;
for (const valeur of values) {
  accumulateur = accumulateur + valeur;
}

const somme = values.reduce((accumulateur, valeur) => accumulateur + valeur, 1);
console.log('somme :>> ', somme);

// 9.7.  Transformer

const personnes = [
  { id: 1, nom: 'Geerts', prenom: 'Quentin' },
  { id: 2, nom: 'Geerts', prenom: 'Benjamin' },
  { id: 3, nom: 'Geerts', prenom: 'William' },
];

const personnesWithoutId = personnes.map(p => { 
  return { nomComplet: p.nom + ' ' + p.prenom } 
});

console.log('personnesWithoutId :>> ', personnesWithoutId);

const valuesWithReduction = values.map((value) => value * 0.5);
console.log('values :>> ', values);
console.log('valuesWithReduction :>> ', valuesWithReduction);

console.clear();

// 9.8.  Vider

const t7 = [1, 2, 3, 4, 5, 6];

removedItems = t7.splice(0, t7.length);
// console.log('removedItems :>> ', removedItems);

t7.length = 0; // Grosse astuce

console.log('t7 :>> ', t7);
