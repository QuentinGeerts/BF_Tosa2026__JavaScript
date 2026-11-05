/*
  Démonstration - Les formulaires
*/

window.addEventListener("DOMContentLoaded", () => {

  // 1.  Récupération du formulaire et des champs
  const formInscription = document.getElementById("form-inscription");
  const pseudo = document.getElementById("pseudo");
  const email = document.getElementById("email");
  const age = document.getElementById("age");
  const password = document.getElementById("password");
  const debutant = document.getElementById("debutant");
  const avance = document.getElementById("avance");
  const formation = document.getElementById("formation");
  const newsletter = document.getElementById("newsletter");
  const message = document.getElementById("message");

  const inscrits = document.getElementById("inscrits");

  // 💡 Un formulaire donne aussi accès à ses champs grâce à leur "name"
  console.log('formInscription.elements :>> ', formInscription.elements);
  console.log('formInscription.elements.email :>> ', formInscription.elements.email);
  console.log('formInscription.elements["pseudo-nyme"] :>> ', formInscription.elements["pseudo-nyme"]);
  // console.log('formInscription.elements.pseudo-nyme :>> ', formInscription.elements.pseudo-nyme); // ⚠️ les tirets sont des moins (opérateur)

  // 2.  L'événement "submit"
  // → se placer sur le form (et pas sur le bouton)
  // → se déclenche au clic sur le bouton submit OU avec la touche Enter dans un champ
  formInscription.addEventListener("submit", (e) => {
    // Par défaut, le formulaire recharge la page (envoi des données)
    // preventDefault() bloque ce comportement
    e.preventDefault();

    console.log("Envoi du formulaire...");

    // Validation des champs 
    // Récupération des données
    // Envoi...
  });

});
