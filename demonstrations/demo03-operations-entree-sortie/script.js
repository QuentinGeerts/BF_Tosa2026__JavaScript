/*
  Chapître 3 - Les opérations d'entrée et sortie
*/

// 1. Les sorties

// 1.1. La console
// Méthode: console.log()

// Peut afficher une simple valeur
console.log("Ceci est un texte");

// Peut afficher le contenu d'une variable
let prenom = "Quentin";
let nom = "Geerts";
console.log(prenom);

// Peut afficher autant de valeurs que l'on veut 
console.log("Ceci", "est", "un", "texte");

// On peut concaténer
// Fusioner des valeurs ensemble pour ne former qu'une seule valeur
// Opérateur de concaténation: +
console.log("Tu t'appelles " + prenom);

let nomComplet = prenom + " " + nom;
console.log(nomComplet);

console.warn("Ceci est un avertissement.");
console.error("Ceci est une erreur.");


// 1.2.  La boite de dialogue
// Méthode: alert()

// alert("Ceci est une boite de dialogue.");
// alert("Tu t'appelles " + nomComplet);

// 1.3.  Au travers du DOM

const outputDiv = document.getElementById("output");
outputDiv.textContent = `<button onclick='alert("Je t ai hacké hehe!")'>Remplis depuis le Javascript</button>`; // ♥

outputDiv.innerHTML = `<button onclick='alert("Je t ai hacké hehe!")'>Remplis depuis le Javascript</button>`; // Attention faille XSS (cyber-sécurité)

outputDiv.innerText = `<button onclick='alert("Je t ai hacké hehe!")'>Remplis depuis le Javascript</button>`; 

// 2. Les entrées

// 2.1. La boite de dialogue
// Méthode: prompt(message?: any, default?: any): string
// Méthode: confirm(message?: any): boolean

// let age = prompt("Quel âge as-tu ?");
// let age = prompt("Quel âge as-tu ?", 25);
// alert("Ok, tu as " + age + " ans.");

// const sortir = confirm("Veux-tu quitter la page ?");
// console.log("Sortir de la page:", sortir);

// 2.2. Au travers du DOM

const firstname = document.getElementById("firstname");
const sendBtn = document.getElementById("sendBtn");
const message = document.getElementById("message");


sendBtn.onclick = () => {
  // Code à déclencher quand je vais cliquer sur le bouton
  // 1. Récupérer le texte dans l'input
  console.log(firstname.value);
  const inputValue = firstname.value;
  // 2. Modifier le texte du message
  message.textContent = inputValue;


  // Fantaisie
  firstname.value = "";
  firstname.focus();
};
