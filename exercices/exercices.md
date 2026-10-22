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
