// Outil commun : une promesse qui se résout après 'ms' milliseconds
function attendre (ms, value = `${ms} ms écoulées`) {
  return new Promise((resolve, reject) => {
    if (ms < 0) {
      reject(new Error("Durée négative")); // échec → .catch() / catch
      return;
    }

    setTimeout(() => {
      resolve(value); // succès → .then() / await 
    }, ms);
  });
}

// Étape 1: synchrone vs asynchrone
// Javascript n'attend pas (non bloquant) : setTimeout programme la fonction pour plus tard,
// et le code continue tout de suite
function etape1 () {
  console.time("delai");
  console.log("A");
  setTimeout(() => { console.log("B"); console.timeEnd("delai"); }, 1000);
  console.log("C");
}


// Étape 2 : avant les promesses, les callbacks imbriqués
// Pour enchaîner 3 actions, on imbrique : c'est vite illisible ("callback hell")
// et il faut gérer les erreurs à chaque niveua
function etape2() {
  setTimeout(() => {
    console.log("1. Connexion");
    setTimeout(() => {
      console.log("2. Chargement du profil");
      setTimeout(() => {
        console.log("3. Affichage");
      }, 500);
    }, 500);
  }, 500);
}


// Étape 3 : une promesse = une valeur qui arrivera plus tard
// États : en attente (pending) → tenue (resolve) ou rompue (reject)
// Pour consommer une promesse: .then() / .catch() / .finally()
function etape3() {
  attendre(1000)
    .then((message) => { console.log(`Succès: ${message}`) }) // Succès
    .catch((error) => { console.log(`Erreur: ${error.message}`) }) // Échec
    .finally(() => { console.log("Terminé (dans tous les cas)") }) // Tous les cas

  attendre(-1)
    .then((message) => { console.log(`Succès: ${message}`) }) // Succès
    .catch((error) => { console.log(`Erreur: ${error.message}`) }) // Échec
    .finally(() => { console.log("Terminé (dans tous les cas)") }) // Tous les cas
}

// Étape 4 : chaîner des .then()
// - .then() renvoie une nouvelle promesse : on peut enchaîner
// - ce que le .then retourne est reçu par le .then suivant
// - s'il retourne une promesse, le suivant attend qu'elle soit résolue
// - Une erreur saute directmeent au .catch (les .then suivants sont ignorés)
// On va refaire l'étape 2 en version promesse
function etape4 () {
  attendre(500, "Connexion")
    .then(r => {
      console.log("1. ", r);
      return attendre(500, "Chargement du profil"); // Attendre 500 ms
    })
    .then(r => {
      console.log("2. ", r);
      return "Affichage"; // simple valeur: transmite tout de suite
    })
    .then (r => {
      console.log("3. ", r);
      throw new Error("Profil incomplet"); // Simuler une erreur
    })
    .then(() => console.log("Jamais affiché"))
    .catch((erreur) => console.log("Erreur attrapée: ", erreur.message));
}

// Étape 5 : async / await = l'étape 4, écrite comme du code "normal"
// - async devant la fonction : elle renvoie toujours une promesse
// - await met la fonction en pause jusqu'au résultat (uniquement dans une fonction async)
// - try / catch remplace .catch
async function etape5() {
  try {
    console.log("1. ", await attendre(500, "Connexion"));
    console.log("2. ", await attendre(500, "Chargement du profil"));
    console.log("3. ", await attendre(500, "Affichage"));
    await attendre(-1); // reject → on saute dans le catch
    console.log("Jamais affiché");
  } catch (error) {
    console.log("Erreur: ", error.message)
  }

  const resultat = calculer(); // sans await : o nrécupère la promesse, pas la valeur
  console.log("sans await:", resultat);
  console.log("avait await:", await resultat);
  resultat
    .then(valeur => console.log("Valeur obtenue:", valeur));

  console.log("Valeur:", valeur); // Pas accès en dehors
}

async function calculer () {
  return 42; 
}

// Étape 6 : séquentiel vs parallèle
// Deux await à la suite = l'un après l'autre (1s + 1s = 2s)
// Promise.all() lance tout en même temps et attend que tout soit fini (1s)
// Si un seule promesse échoue, Promise.all échoue
async function etape6() {
  // Séquentiel
  let debut = Date.now();
  await attendre(1000);
  await attendre(1000);
  console.log("Séquentiel:", Date.now() - debut, "ms"); // 2s

  // Parallèle
  debut = Date.now();
  const resultats = await Promise.all([attendre(1000, "A"), attendre(1000, "B")]);
  console.log("Parallèle:", Date.now() - debut, "ms", resultats); // 1s ["A", "B"]
}

// Étape 7 : L'ordre d'exécution (event loop)
// 1. tout le code synchrone
// 2. puis les promesses résolues (.then, suite d'un await)
// 3. puis les timers (setTimeout), même à 0ms
function etape7() {
  console.log("A");
  setTimeout(() => console.log("B"), 0);
  Promise.resolve().then(() => console.log("C"));
  console.log("D");
  // A D C B
}

// Étape 8 : fetch (ancêtre → XMLHttpRequest [XHR])
// fetch renvoie une promesse. 2 attentes : la réponse, puis son contenu json
// Piège: fetch ne rejette pas une erreur (404, 500) → tester response.ok
// le catch ne reçoit que les erreurs réseau
const URL_API = "https://jsonplaceholder.typicode.com";
const charger = document.getElementById("charger");
const statut = document.getElementById("statut");
const liste = document.getElementById("liste");

async function chargerUtilisateurs() {
  statut.textContent = "Chargement...";
  charger.disabled = true; // éviter les doubles clics
  liste.textContent = "";

  try {
    const response = await fetch(`${URL_API}/users`);
    if (!response.ok) throw new Error ("Erreur HTTP ", response.status);

    const utilisateurs = await response.json();
    console.log('utilisateurs :>> ', utilisateurs);

    for (const u of utilisateurs) {
      const li = document.createElement("li");
      li.textContent = `${u.name} (${u.email})`;
      liste.appendChild(li);
    }

    statut.textContent = `${utilisateurs.length} utilisateurs chargés`;
  } catch (error) {
    statut.textContent = "Impossible de charger les utilisateurs : " + error.message;
  } finally {
    charger.disabled = false;
  }
}

function etape8() {
  // Même chose en version .then() pour comparer
  fetch(`${URL_API}/users`)
    .then(response => response.json())
    .then(utilisateurs => console.log("utilisateurs:", utilisateurs))
    .catch(error => console.log("Erreur:", error));
}

charger.addEventListener("click", chargerUtilisateurs);

// Boutons des étapes
const etapes = {
  1: etape1,
  2: etape2,
  3: etape3,
  4: etape4,
  5: etape5,
  6: etape6,
  7: etape7,
  8: etape8,
};

document.querySelectorAll("[data-etape]").forEach((bouton) => {
  bouton.addEventListener("click", () => {
    console.clear();
    console.log(`%cEtape: ${bouton.textContent}`, "font-weight: bold; font-size: 14px");
    etapes[bouton.dataset.etape]();
  });
});

