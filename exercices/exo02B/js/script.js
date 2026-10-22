/*
  ## Partie B : La boîte de dialogue

  Au chargement de la page :
  1. Demander le pseudo de l'utilisateur avec `prompt()` (valeur par défaut : "Invité")
  2. Afficher `Bienvenue Invité !` (avec le pseudo saisi) dans un `h1` de la page
*/

let pseudo = prompt("Entrez  votre pseudo :", "Invité");

const greeting = document.getElementById("greeting");
// console.log('greeting :>> ', greeting);

greeting.textContent = pseudo;
