/*
  ## Partie C : Le calcul du prix

  Ajouter :
  - un champ "Prix unitaire" et un champ "Quantité"
  - un bouton "Calculer"
  - une `div` vide avec l'id `total`

  Au clic, afficher dans la `div` : `Total : 30 €`

  Attention : testez avec un prix de 10 et une quantité de 3, puis remplacez la multiplication par une addition. Que remarquez-vous ? Notez votre explication en commentaire dans le script.
*/

// Récupérer les éléments HTML
const price = document.getElementById("price");
const quantity = document.getElementById("quantity");
const btn = document.getElementById("btn");
const total = document.getElementById("total");

/* 
  Pour convertir :
  - parseFloat(value) → convertir une valeur avec décimal
  - parseInt(value) → convertir une valeur entière
  - Number(value) → convertir en nombre
  - +value → convertir en nombre (comme Number)

*/

btn.onclick = () => {
  const priceValue = Math.abs(+price.value);
  const quantityValue = parseInt(quantity.value);

  price.value = priceValue;
  quantity.value = quantityValue;

  const totalPrice = (priceValue * quantityValue).toFixed(2);// Arrondi à 2 décimales
  total.textContent = totalPrice; 
};

// Chaine de caractères avec un + → concaténation 
// Pour faire une addition → convertir toutes vos valeurs en numérique
