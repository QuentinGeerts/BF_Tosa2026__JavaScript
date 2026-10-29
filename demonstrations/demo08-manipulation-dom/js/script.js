const btn = document.getElementById("btn");
const container = document.getElementById("container");
const pokemonsContainer = document.getElementById("pokemons-container");

let compteur = 0;

const pokemons = [
  {
    nom: 'Pikachu',
    niveau: 45
  },
  {
    nom: 'Bulbizarre',
    niveau: 12
  },
  {
    nom: 'Salamèche',
    niveau: 18
  },
  {
    nom: 'Carapuce',
    niveau: 15
  },
  {
    nom: 'Rondoudou',
    niveau: 22
  },
  {
    nom: 'Évoli',
    niveau: 30
  },
  {
    nom: 'Ronflex',
    niveau: 52
  },
  {
    nom: 'Dracaufeu',
    niveau: 68
  },
  {
    nom: 'Mewtwo',
    niveau: 70
  },
  {
    nom: 'Psykokwak',
    niveau: 27
  },
]

btn.onclick = () => {
  const p = document.createElement("p");
  
  p.textContent = "Il est bientôt 17h.";
  p.id = 'custom-paragraph-' + compteur++;
  p.className = 'paragraph underline'
  p.style.color = 'red';
  p.style.backgroundColor = 'aquamarine';

  // Permet d'ajouter en tant que DERNIER enfant
  container.append(p);

  // appendChild permet d'ajouter en tant que dernier enfant également
  // retourne la référence de l'élément ajouté
  // Astuce: créer un élément directement en paramètre et le récupérer après l'ajout
  const button = container.appendChild(document.createElement('button'));
  button.textContent = "Petit bouton :)";
  button.onclick = () => { console.log("Compteur:", compteur); }

  
  console.log('p :>> ', p);
  console.log('button :>> ', button);

  console.dir(button); // recommande pour voir les propriétés de l'objet
};

// function fnA () {
//   console.log("A");
// }

// function fnB () {
//   console.log("B");
// }

// btn.addEventListener("click", fnA);
// btn.addEventListener("click", fnB);
// btn.removeEventListener('click', fnA);


window.addEventListener("DOMContentLoaded", () => {
  for (const pokemon of pokemons) {
    // console.log('pokemon :>> ', pokemon);
    const div = pokemonsContainer.appendChild(document.createElement('div'));
    div.className = "pokemon";
    div.textContent = `${pokemon.nom} niv.${pokemon.niveau}`;

    console.log('div :>> ', div);
  }
});
