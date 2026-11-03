

// 1.  Récupération des éléments (4 façons)

// 1.1.  Récupération par id
// Méthode: document.getElementById(id: string): HTMLElement | null

const recuperation = document.getElementById("recuperation");
console.log('recuperation :>> ', recuperation);

// 1.2.  Récupération par nom de classe
// Méthode: document.getElementsByClassName(className: string): HTMLCollectionOf<Element>

const titles = recuperation.getElementsByClassName("title");
console.log('titles :>> ', titles);

console.log('titles[0] :>> ', titles[0]);
console.log('titles[3] :>> ', titles[3]);

for (const title of titles) {
  console.log('title.textContent :>> ', title.textContent);
  title.style.color = "red";
}

// 1.3.  Récupération par le nom d'une balise
// Méthode: document.getELementsByTagName(tagName: string): HTMLCollectionOf<Element>
const paragraphes = document.getElementsByTagName("p");
console.log('paragraphes :>> ', paragraphes);

// 1.4.  Récupération par un sélecteur CSS

// 1.4.1.  Récupération d'un élément
// Méthode: document.querySelector(cssSelector: string): Element | null
const firstPAfterTitleClass = document.querySelector(".title + p");
console.log('firstPAfterTitleClass :>> ', firstPAfterTitleClass);

// 1.4.2.  Récupération d'un ensemble d'éléments
// Méthode: document.querySelectorAll(cssSelector: string): NodeList<Element>
const allPAfterTitleClass = document.querySelectorAll(".title + p");
console.log('allPAfterTitleClass :>> ', allPAfterTitleClass);

for (const p of allPAfterTitleClass) {
  p.style.fontStyle = "italic";
}




// 2.  Création d'un élément
// Méthode: document.createElement(tagName: string): HTML...Element

const btnCustom = document.createElement("button");
const pCustom = document.createElement("p");

btnCustom.textContent = "Clique sur moi";
pCustom.textContent = "Ceci est un paragraphe généré par Javascript";

pCustom.id = "p-custom";
pCustom.title = "Paragraphe custom";

// pCustom.class = "p"; // ❌ class est un mot réservé en Javascript
// pCustom.className = "p"; // 💩
// pCustom.className = "m-10"; // 💩
// pCustom.className = "p m-10 p-10"; // 💩
// pCustom.className = "p p-10"; // 💩

// Travaillez plutôt avec classList ❤️
pCustom.classList.add("p");
pCustom.classList.add("m-10");
pCustom.classList.add("p-10");
pCustom.classList.remove("m-10");

console.log('pCustom :>> ', pCustom);

btnCustom.addEventListener("click", () => alert("Hello"));


// 3.  Insertion d'un élément (4 façons)

const divInsertion = document.querySelector("#insertion");

// 3.1. append(...element: node): void
divInsertion.append(btnCustom, pCustom);

// 3.2. appendChild(element: node): element
const img = divInsertion.appendChild(document.createElement("img"));
img.src = "https://www.santevet.be/wp-content/uploads/sites/8/2025/03/chat_noir_soleil.jpg";
img.alt = "Texte de remplacement";
img.width = 200;

// 3.3. insertBefore(elementAInserer: Element, element: Element): Element
const newP = divInsertion.insertBefore(document.createElement("p"), btnCustom);
newP.textContent = "Mon nouveau paragraphe généré par JS";


// 3.4. insertAdjacentElement(position: InsertPosition, element: Element): element

const p = document.getElementById("p");
const checkbox = p.insertAdjacentElement("afterbegin", document.createElement("input"));
checkbox.type = "checkbox";

const emoji = p.insertAdjacentElement("beforeend", document.createElement("span"));
emoji.textContent = "🍙";

p.addEventListener("click", () => {
  const p2 = p.insertAdjacentElement("beforebegin", document.createElement("p"));
  p2.textContent = "Coucou";

  const p3 = p.insertAdjacentElement("afterend", document.createElement("p"));
  p3.textContent = "Il est bientôt midi";
});



// 4.  Suppression d'un élément (2 façons)

// 4.1. element.remove()

// newP.remove(); // Supprime newP

// 4.2. parent.removeChild(enfant: Element)

const pCustom2 = divInsertion.removeChild(document.getElementById('p-custom'));
divInsertion.append(pCustom2);

// 5. Récupération des enfants d'un parent
// Propriété: children

console.log('divInsertion.children :>> ', divInsertion.children);

for (const element of divInsertion.children) {
  // itérer sur chaque enfant d'un parent
}

// 💡 Vider l'HTML d'un page
divInsertion.textContent = "";
