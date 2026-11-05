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
  // console.log('formInscription.elements :>> ', formInscription.elements);
  // console.log('formInscription.elements.email :>> ', formInscription.elements.email);
  // console.log('formInscription.elements["pseudo-nyme"] :>> ', formInscription.elements["pseudo-nyme"]);
  // console.log('formInscription.elements.pseudo-nyme :>> ', formInscription.elements.pseudo-nyme); // ⚠️ les tirets sont des moins (opérateur)

  // 2.  L'événement "submit"
  // → se placer sur le form (et pas sur le bouton)
  // → se déclenche au clic sur le bouton submit OU avec la touche Enter dans un champ
  formInscription.addEventListener("submit", (e) => {
    // Par défaut, le formulaire recharge la page (envoi des données)
    // preventDefault() bloque ce comportement
    e.preventDefault();

    // Validation des champs 
    // 4.  On vérifie TOUS les champs (pour afficher toutes les erreurs d'un coup)
    const pseudoValide = validerPseudo();
    const emailValide = validerEmail();
    const ageValide = validerAge();

    if(!pseudoValide || !emailValide || !ageValide) return; // garde fou

    // Récupération des données
    const inscrit = recupererValeurs();
    console.log('inscrit :>> ', inscrit);

    inscrits.append(creerCarte(inscrit));

    // 💡 Pour information
    // Pour convertir un objet en chaîne de caractères → JSON.stringify(obj): string
    // Pour convertir une chaîne de caractères en objet → JSON.parse(chaine): obj
    const objString = JSON.stringify(inscrit);
    console.log('JSON.stringify(inscrit) :>> ', JSON.stringify(inscrit));
    console.log('JSON.parse(objString) :>> ', JSON.parse(objString));
    // --------------------

    // Envoi...
  });

  // 💡 Alternative : FormData récupère toutes les valeurs grâce aux "name"
  // const data = Object.fromEntries(new FormData(formInscription));
  // console.log('data :>> ', data);
  // Attention, tout est en string, et une checkbox non cochée n'apparaît pas


  // 3.  Récupération des valeurs (selon le type de champ)
  function recupererValeurs() {
    // clef: valeur,
    return {
      // 3.1. Champ texte, email, textarea, select → .value (toujours un string)
      pseudo: pseudo.value.trim(),
      email: email.value.trim(),
      password: password.value,
      formation: formation.value,
      message: message.value.trim(),

      // 3.2. Champ number → .value est un STRING, il faut le convertir
      age: Number(age.value),

      // 3.3. Checkbox → .checked (booléen)
      newsletter: newsletter.checked,

      // 3.4. Radio → on cherche celui qui est coché dans le groupe (même name)
      
      // Attention fonctionne qu'avec deux champs radio
      // niveau: debutant.checked ? debutant.value : avance.value,
      
      // Préférée
      niveau: document.querySelector('input[name="niveau"]:checked').value,
    };
  }


  // 4.  Validation des champs
  // → chaque fonction retourne true (valide) et false (invalide)
  // et affiche le message d'erreur sous le champ

  // Vérifier :
  // - requis (valeur != "")
  // - minLength (valeur.length >= 3)
  function validerPseudo() {
    console.log("Validation du pseudo");
    const valeur = pseudo.value.trim();

    // Fail Fast Pattern = vérifier ce qui peut poser problème
    if (valeur === "") return afficherErreur(pseudo, "Le pseudo est obligatoire.");
    if (valeur.length < 3) return afficherErreur(pseudo, "Le pseudo doit faire au moins 3 caractères");

    return afficherValide(pseudo);
  }

  // Vérifier:
  // - requis (valeur != "")
  // - min 18
  // - max 120
  function validerAge() {
    console.log("Validation de l'âge");
    const valeur = Number(age.value);

    console.log('valeur :>> ', valeur);

    if (age.value === "") return afficherErreur(age, "L'âge est obligatoire.");
    if (isNaN(valeur)) return afficherErreur(age, "Vous devez rentrer une valeur numérique.");
    if (valeur < 18 || valeur > 120) return afficherErreur(age, "Vous devez avoir entre 18 et 120 ans.")

    return afficherValide(age);
  }

  // Vérifier :
  // - requis
  // - format d'un email
  function validerEmail() {
    const valeur = email.value.trim();

    const formatEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (valeur === "") return afficherErreur(email, "L'email est obligatoire.");
    if (!formatEmail.test(valeur)) return afficherErreur(email, "Le format de l'email est incorrect.");

    return afficherValide(email);
  }


  // Le message d'erreur se trouve dans le span "erreur-[id du champ]"
  function afficherErreur(champ, texte) {
    document.getElementById(`erreur-${champ.id}`).textContent = texte;
    champ.classList.add("invalide");
    champ.classList.remove("valide");
    // champ.focus(); // Obliger à corriger la valeur avant d'aller sur un autre champ
    return false;
  }
  
  function afficherValide(champ) {
    document.getElementById(`erreur-${champ.id}`).textContent = "";
    champ.classList.remove("invalide");
    champ.classList.add("valide");
    return true;
  }


  function creerCarte(inscrit) {
    const carte = document.createElement("div");
    carte.classList.add("inscrit");

    const titre = carte.appendChild(document.createElement("p"));
    titre.textContent = `${inscrit.pseudo} (${inscrit.age} ans)`;

    const details = carte.appendChild(document.createElement("p"));
    details.textContent = `${inscrit.formation || "Aucune foration"} - ${inscrit.niveau}`; 

    const contact = carte.appendChild(document.createElement("p"));
    contact.textContent = inscrit.email;

    if (inscrit.newsletter) {
      const badge = carte.appendChild(document.createElement("p"));
      badge.textContent = "Abonné à la newsletter";
    }

    return carte;
  }
});
