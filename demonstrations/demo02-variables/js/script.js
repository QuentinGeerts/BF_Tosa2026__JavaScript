// Commentaire sur une seule ligne

/*
  Commentaire 
  sur plusieurs
  lignes
*/

/**
 * JSCode (documentation)
 */

// 1.  Variables
// Un emplacement en mémoire qui permet de stocker UNE donnée.

// La donnée est caractérisée :
// - Valeur
// - Type (entier, réel, chaîne, ...)
// - Nom (étiquette)
// - Référence (adresse en mémoire)

// Javascript est un langage au typage dynamique
// → La variable prend le type de la donnée automatiquement

// 1.1.  Déclaration
// Réservation d'un emplacement en mémoire
// Syntaxe: let nomVariable;

/*
  Règles: (obligatoire)
  1. Accents et caractères spéciaux interdit
    - Deux seuls caractères autorisés : _ $
  2. Clair et concis

  Conventions d'écriture: (conseillé)
  - lowerCamelCase (♥) - variables, méthodes, ...
  - UpperCamelCase - POO (programmation orienté objet), Classe, Typage
  - UPPER_CASE - constantes
  - "kebab-case" - json, clef/valeur tableau
  -----
  - snake_case (orienté python, php) 
*/

let prenom, nomFamille, motPasseHash;
let age;
let caractere;

// 1.2.  Affectation
// Donner une valeur à une variable (placer une valeur dans la boite)
// Syntaxe: nomVariable = valeur;

motPasseHash = "8ef!Dz:=1948";
prenom = "Quentin"; // type: string
prenom = 42; // type: number
age = 30;
caractere = "1";
caractere = "a";

// 1.3.  Déclaration et initialisation
// Initialisation: première affectation

let a = 2.5, b = 15; // type: number
let c = d = 5; // Affectation multiple

a = "Quentin"; // type: string

// 1.4.  Types de données

// - string : chaîne de caractères → guillemets / apostrophe / backtick
// - number : entier et réel (décimal est un point (.))
// - boolean : true / false
// - undefined : donné à la création sans initialisation
// - null : absence de valeur

let maString = "Hello"; // string
let monNumber1 = 42; // number
let monNumber2 = 4.2; // number
let monBoolean1 = true; // boolean
let monBoolean2 = false; // boolean
let monUndefined; // undefined
let monNull = null; // object

// Obtenir le type d'une variable
// typeof

console.log("maString:", typeof maString);
console.log("monNumber1:", typeof monNumber1);
console.log("monNumber2:", typeof monNumber2);
console.log("monBoolean1:", typeof monBoolean1);
console.log("monBoolean2:", typeof monBoolean2);
console.log("monUndefined:", typeof monUndefined);
console.log("monNull:", typeof monNull);

// 1.5.  Constantes
// Un emplacement en mémoire qui stocke une valeur immuable.
// Syntaxe: const NOM_CONSTANTE = valeur;

const MA_CONSTANTE = 42;
// MA_CONSTANTE = 4.2; // Provoque une erreur


// 1.6. Différence entre var et let/const
// Avant 2015:
// var (GLOBAL): mot-clef qui permet de déclarer un emplacement en mémoire
// Après 2015 (ECMAScript 6 / 2015):
// let / const (LOCAL)

var maVariable1 = "Hello";
var maVariable1 = "World !"; // Redéclaration POSSIBLE avec var

let maVariable2 = "Hello";
// let maVariable2 = "World !"; // Redéclaration IMPOSSIBLE avec let

console.log('maVariable1 :>> ', maVariable1);

if (true) {
  // sous bloc
  let maVariable2 = "World !";
  maVariable2 = "Coucou";
  console.log('maVariable2 :>> ', maVariable2); // World !
}

if (true) {
  // sous bloc
  maVariable2 = "Hey";
}

console.log('maVariable2 :>> ', maVariable2); // Hello