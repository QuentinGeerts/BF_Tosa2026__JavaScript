/*
  ## Partie A : La carte de visite

  Dans la page, créer :
  - 4 champs avec leur `label` : prénom, nom, métier, ville
  - un bouton "Générer la carte"
  - une `div` vide avec l'id `carte`

  Au clic sur le bouton :
  1. Récupérer la valeur des 4 champs
  2. Afficher dans la `div` le texte suivant (avec les valeurs saisies) :

    `Quentin Geerts - Formateur à Bruxelles`

  3. Afficher aussi le nom complet dans la console
  4. Vider les 4 champs et remettre le curseur dans le champ prénom
*/

// Récupération des éléments HTML grace à leur id
const lastname = document.getElementById("lastname");
const firstname = document.getElementById("firstname");
const job = document.getElementById("job");
const city = document.getElementById("city");
const btn = document.getElementById("btn");
const carte = document.getElementById("carte");

// Toujours vérifier que vous avez bien récupéré les éléments HTML
// console.log("lastname:", lastname);
// console.log("firstname:", firstname);
// console.log("job:", job);
// console.log("city:", city);
console.log("btn:", btn);
// console.log("carte:", carte);

btn.onclick = () => {
  // Récupérer la valeur des 4 champs
  const lastnameValue = lastname.value.trim();
  const firstnameValue = firstname.value.trim();
  const jobValue = job.value.trim();
  const cityValue = city.value.trim();

  // Affichage en console des valeurs
  // console.log("lastnameValue:", "\"" + lastnameValue + '"');
  // console.log("firstnameValue:", "\"" + firstnameValue + '"');
  // console.log("jobValue:", "\"" + jobValue + '"');
  // console.log("cityValue:", "\"" + cityValue + '"');
  console.log(`${firstnameValue} ${lastnameValue}`);

  // Modifier le contenu de "carte"

  // Par concaténation :
  let texte = firstnameValue + " " + lastnameValue + " - " + jobValue + " à " + cityValue;

  // Par interpolation de chaînes de caractères
  texte = `${firstnameValue} ${lastnameValue} - ${jobValue} à ${cityValue}`;
  carte.textContent = texte;

  // [BONUS] Vider les champs
  lastname.value = "";
  firstname.value = "";
  job.value = "";
  city.value = "";

  firstname.focus();
};
