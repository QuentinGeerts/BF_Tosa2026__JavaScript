/*
  page interactive simple
  Une page avec un titre, un paragraphe et une liste vide
  Au chargement, le script modifie le texte du titre avec textContent
  Le script ajoute une classe CSS au paragraphe avec classList
  Le script crée trois éléments <li> à partir d'un tableau et les ajoute à la liste
*/

const title = document.getElementById("title");
const paragraph = document.getElementById("paragraph");
const list = document.getElementById("list");

const values = ["Hello", "World", "!"];

// Déclenchement au chargement de votre page
window.addEventListener("DOMContentLoaded", (event) => {
  // Modification du texte au chargement de la page
  title.textContent = "Bienvenue sur ma page";

  // Ajout d'une classe à un élément
  paragraph.classList.add("italic");

  // Parcourt de la liste, création des li et insertion dans la list
  for (const element of values) {
    // Création du li
    const li = document.createElement("li");
    // Modifier le contenu du li
    li.textContent = element;
    // Insérer le li dans la liste
    list.append(li);
  }
});
