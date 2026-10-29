// Exercice 1 - Mon premier tableau
const couleurs = ["rouge", "vert", "bleu", "jaune"];
//                   0        1       2       3 
console.log('couleurs :>> ', couleurs);
console.log('couleurs[0] :>> ', couleurs[0]);
console.log('couleurs[2] :>> ', couleurs[2]);


// Exercice 2 - Combien d'éléments ?
const jours = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];

console.log('jours.length :>> ', jours.length);
console.log(`La semaine compte ${jours.length} jours.`);


// Exercice 3 - Le dernier élément
let animaux = ["chat", "chien", "lapin", "tortue", "hamster"];
console.log('animaux[4] :>> ', animaux[4]);
console.log('animaux[animaux.length - 1] :>> ', animaux[animaux.length - 1]);


// Exercice 4 - Changer une valeur
let notes = [12, 8, 15, 10];
notes[1] = 14;
notes[notes.length - 1] = 18;
console.log('notes :>> ', notes);


// Exercice 5 - Remplir un tableau vide
const courses = [];
courses[0] = "pain";
courses[1] = "lait";
courses[2] = "oeufs";
courses[courses.length] = "beurre";
console.log('courses :>> ', courses);
console.log('courses.length :>> ', courses.length);
