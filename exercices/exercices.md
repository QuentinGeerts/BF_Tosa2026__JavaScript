# 1. Variables

Créer un fichier `html` et `js`.
Dans le fichier javascript, vous devrez déclarer 5 variables PAR type.
Les types demandés sont :
- Entiers
- Réels
- Chaînes de caractères
- Booléens

Afficher les valeurs dans un console.log()

---

# 2. Entrées et sorties

Créer un dossier `exo02` avec un fichier `index.html` et un fichier `js/script.js`.

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

## Partie B : La boîte de dialogue

Au chargement de la page :
1. Demander le pseudo de l'utilisateur avec `prompt()` (valeur par défaut : "Invité")
2. Afficher `Bienvenue Invité !` (avec le pseudo saisi) dans un `h1` de la page

## Partie C : Le calcul du prix

Ajouter :
- un champ "Prix unitaire" et un champ "Quantité"
- un bouton "Calculer"
- une `div` vide avec l'id `total`

Au clic, afficher dans la `div` : `Total : 30 €`

Attention : testez avec un prix de 10 et une quantité de 3, puis remplacez la multiplication par une addition. Que remarquez-vous ? Notez votre explication en commentaire dans le script.

## Bonus (chercher sur internet)

- Écrire le texte de la partie A avec un template string (`` `${prenom} ${nom}` ``) au lieu de la concaténation
- Ajouter un bouton "Effacer" qui vide la carte de visite

--- 


## 3. Les opérateurs

### Partie A : Année bissextile

Créer un site qui demande à l'utilisateur d'entrée une année.
Le site devra déterminer s'il s'agit d'une année bissextile ou non.

Créer les éléments suivants :
- un `input` de type number
- un bouton "Calculer"
- une `div` avec comme id "resultat" avec comme valeur :
   - "L'année 2000 est une année bissextile"
   - "L'année 1998 n'est pas une année bissextile"

Rappel: 
- Une année est bissextile si elle est divisible par 4 mais pas par 100.
- Ou s'il est divisible par 400.

Bissextile : 2000, 2024
Non bissextile: 1998, 1700

--- 

## 4. Les fonctions

Un dossier par partie : `exo04A`, `exo04B`... avec un `index.html` et un `js/script.js`.
Pour les parties A à C, les résultats s'affichent dans la console.

### Partie A : Mes premières fonctions

Écrire et tester (au moins 2 appels chacune) les fonctions suivantes :

- `estPair(nombre)` : retourne `true` si le nombre est pair, `false` sinon
- `maximum(a, b)` : retourne le plus grand des deux nombres
- `celsiusVersFahrenheit(celsius)` : retourne la température en Fahrenheit (formule : `celsius * 9 / 5 + 32`)
- `prixTTC(prixHT, taux = 0.21)` : retourne le prix TVA comprise. Si le taux n'est pas donné, on utilise 21 %

```js
console.log(prixTTC(100));     // 121
console.log(prixTTC(100, 0.06));  // 106
```

### Partie B : Fonctions et boucles

- `compterVoyelles(texte)` : retourne le nombre de voyelles (a, e, i, o, u, y) dans le texte
- `inverser(texte)` : retourne le texte à l'envers (`"Bonjour"` → `"ruojnoB"`)
- `moyenne(...notes)` : retourne la moyenne de toutes les notes reçues, peu importe leur nombre
- `mention(note)` : retourne la mention avec un `switch` ou des `if` :
  - moins de 10 : "Échec"
  - de 10 à 13 : "Satisfaction"
  - de 14 à 16 : "Distinction"
  - 17 et plus : "Grande distinction"

```js
console.log(moyenne(12, 15, 18));       // 15
console.log(mention(moyenne(12, 15, 18))); // "Distinction"
```

Documenter chaque fonction avec un commentaire `/** ... */` (description, `@param`, `@returns`).

### Partie C : Les callbacks

Copier ce tableau dans votre script :

```js
const produits = [
  { nom: "Clavier", prix: 79.9, categorie: "informatique", stock: 12 },
  { nom: "Souris", prix: 29.99, categorie: "informatique", stock: 0 },
  { nom: "Chaise", prix: 149, categorie: "mobilier", stock: 4 },
  { nom: "Lampe", prix: 35.5, categorie: "mobilier", stock: 0 },
  { nom: "Casque", prix: 99, categorie: "audio", stock: 7 },
  { nom: "Enceinte", prix: 59.9, categorie: "audio", stock: 2 },
];
```

1. Écrire une fonction `filtrer(tableau, conditionFn)` qui retourne un nouveau tableau avec uniquement les éléments pour lesquels `conditionFn` retourne `true`
2. L'utiliser pour obtenir :
   - les produits en stock
   - les produits à moins de 50 €
   - les produits de la catégorie "audio"
   - les produits en stock ET à moins de 100 €

   Utiliser au moins une fois une fonction nommée, une fonction anonyme et une fonction fléchée comme callback.

3. Écrire une fonction `compter(tableau, conditionFn)` qui retourne le **nombre** d'éléments qui respectent la condition, et l'utiliser pour compter les produits en rupture de stock.

### Partie D : La calculatrice (DOM)

Créer une page avec :
- deux champs `number` (nombre 1 et nombre 2)
- 4 boutons : `+`, `-`, `×`, `÷`
- une `div` avec l'id `resultat`

Contraintes :
- Une fonction par opération (`addition`, `soustraction`, `multiplication`, `division`)
- Une seule fonction `calculer(operationFn)` qui :
  1. récupère les deux valeurs et les convertit en nombres
  2. appelle `operationFn` avec ces deux valeurs
  3. affiche le résultat dans la `div`
- Chaque bouton appelle `calculer` en lui donnant la bonne fonction :

```js
btnAddition.onclick = () => calculer(addition);
```

- La fonction `division` lance une erreur (`throw`) si le deuxième nombre vaut 0. Dans `calculer`, l'erreur est attrapée (`try...catch`) et le message d'erreur s'affiche dans la `div` à la place du résultat.

### Partie E : Le catalogue (DOM + callbacks)

Reprendre le tableau `produits` de la partie C.

Créer une page avec :
- 3 boutons : "En stock", "Moins de 50 €", "Audio"
- une `div` avec l'id `catalogue`
- un paragraphe avec l'id `compteur`

Au clic sur un bouton :
- la `div` affiche les noms et les prix des produits correspondants, sous la forme : `Clavier (79.90 €) - Chaise (149.00 €) - ...`
- le paragraphe affiche : `3 produit(s) trouvé(s)`

Contraintes :
- Réutiliser votre fonction `filtrer` de la partie C
- Écrire une fonction `afficherProduits(liste)` qui s'occupe de l'affichage, et l'appeler depuis chaque bouton

### Bonus

- Ajouter un champ texte et un bouton "Rechercher" : le catalogue affiche les produits dont le nom contient le texte saisi, sans tenir compte des majuscules (`toLowerCase()`, `includes()`)
- Ajouter un champ "Prix maximum" : le bouton "Filtrer" affiche les produits dont le prix est inférieur ou égal à la valeur saisie


--- 

# Les tableaux

## Partie 1 - Déclarer, lire et modifier un tableau
 
### Exercice 1 - Mon premier tableau
 
1. Déclare un tableau `couleurs` contenant 4 couleurs de ton choix.
2. Affiche le tableau complet dans la console.
3. Affiche la **première** couleur, puis la **troisième**.
Résultat attendu (exemple) :
 
```text
["rouge", "vert", "bleu", "jaune"]
rouge
bleu
```
 
### Exercice 2 - Combien d'éléments ?
 
1. Déclare un tableau `jours` contenant les 7 jours de la semaine.
2. Affiche le nombre de jours grâce à la propriété `length`.
3. Affiche la phrase : `La semaine compte 7 jours.` en utilisant `length` (et non le chiffre 7 écrit à la main).
### Exercice 3 - Le dernier élément
 
On donne le tableau :
 
```javascript
let animaux = ["chat", "chien", "lapin", "tortue", "hamster"];
```
 
1. Affiche le dernier animal en écrivant directement son indice.
2. Affiche à nouveau le dernier animal, mais cette fois **avec `length`**, pour que ton code fonctionne quelle que soit la taille du tableau.
> Indice : si un tableau a 5 éléments, quel est l'indice du dernier ?
 
### Exercice 4 - Changer une valeur
 
On donne le tableau :
 
```javascript
let notes = [12, 8, 15, 10];
```
 
1. Le professeur s'est trompé : la 2e note n'est pas 8 mais 14. Corrige-la.
2. Remplace la dernière note par 18.
3. Affiche le tableau final.
Résultat attendu :
 
```text
[12, 14, 15, 18]
```
 
### Exercice 5 - Remplir un tableau vide
 
1. Déclare un tableau vide `courses`.
2. Ajoute 3 articles en affectant directement les indices 0, 1 et 2.
3. Ajoute un 4e article à la position `courses.length`.
4. Affiche le tableau et sa longueur.
Résultat attendu (exemple) :
 
```text
["pain", "lait", "oeufs", "beurre"]
4
```
 
---
 
## Partie 2 - Parcourir un tableau avec une boucle
 
### Exercice 6 - Afficher avec une boucle
 
On donne le tableau :
 
```javascript
let prenoms = ["Léa", "Tom", "Sarah", "Nabil", "Emma"];
```
 
1. Avec une boucle `for`, affiche chaque prénom sur une ligne.
2. Modifie ta boucle pour afficher aussi la position (en commençant à 1 pour l'humain).
Résultat attendu pour la question 2 :
 
```text
1 : Léa
2 : Tom
3 : Sarah
4 : Nabil
5 : Emma
```
 
### Exercice 7 - La somme et la moyenne
 
On donne le tableau :
 
```javascript
let temperatures = [14, 17, 21, 19, 16, 22, 18];
```
 
1. Calcule la **somme** de toutes les températures avec une boucle.
2. Calcule la **moyenne** (somme / nombre d'éléments, avec `length`).
3. Affiche : `Température moyenne de la semaine : 18.14 °C` (la console affichera en réalité 18.142857142857142 : c'est normal, on n'arrondit pas encore).
### Exercice 8 - Le plus grand nombre
 
On donne le tableau :
 
```javascript
let scores = [45, 78, 12, 93, 61, 87];
```
 
1. Trouve le **plus grand** score à l'aide d'une boucle, sans méthode toute faite.
2. Affiche-le.
3. Bonus : affiche aussi son **indice** dans le tableau.
> Indice : commence par supposer que le premier élément est le plus grand, puis compare-le aux autres.
 
### Exercice 9 - Compter et filtrer
 
On donne le tableau des âges d'un groupe :
 
```javascript
let ages = [12, 25, 17, 34, 8, 19, 15, 42];
```
 
1. Compte combien de personnes sont **majeures** (18 ans ou plus) et affiche ce nombre.
2. Crée un nouveau tableau vide `mineurs`, puis remplis-le avec les âges inférieurs à 18 (utilise `mineurs[mineurs.length] = ...`).
3. Affiche le tableau `mineurs`.
Résultat attendu :
 
```text
Nombre de majeurs : 4
[12, 17, 8, 15]
```
 
---
 
## Partie 3 - Bonus : les tableaux associatifs
 
En JavaScript, un "tableau associatif" s'écrit avec un **objet** : on range les valeurs sous des **clés** (des noms) au lieu d'indices numérotés.
 
### Exercice 10 - La fiche d'un élève
 
1. Crée un tableau associatif `eleve` avec les clés `prenom`, `age` et `classe`.
2. Affiche le prénom de l'élève de deux façons : `eleve.prenom` et `eleve["prenom"]`.
3. L'élève a eu son anniversaire : augmente son âge de 1.
4. Ajoute une nouvelle clé `ville`.
5. Avec une boucle `for...in`, affiche chaque clé et sa valeur.
Résultat attendu (exemple) :
 
```text
prenom : Léa
age : 15
classe : 3B
ville : Liège
```
 