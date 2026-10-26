/*
  Chapitre 4 - Les opérateurs
*/

// 1. Opérateurs arithmétiques
// Retourne une valeur numérique

console.warn("1. Opérateurs arithmétiques");

let a = 10, b = 3;

// Opérateur +
// → Addition
// → Concaténation : string + ...
console.log(`${a} + ${b} = ${a + b}`); // addition
console.log(`${a} + '${b}' = ${a + b.toString()}`); // concaténation
console.log(`${a} - ${b} = ${a - b}`); // soustraction
console.log(`${a} * ${b} = ${a * b}`); // multiplication
console.log(`${a} / ${b} = ${a / b}`); // division
console.log(`${a} / ${b} = ${parseInt(a / b)}`); // division entière
console.log(`${a} % ${b} = ${a % b}`); // modulo
console.log(`${a} ** ${b} = ${a ** b}`); // exposant

// 2. Opérateurs de comparaison
// Retourne une valeur booléenne

console.warn("2. Opérateurs de comparaison");

// 2.1. Égalité (== / ===)
// → == : permet de vérifier la valeur uniquement
console.log(`${4} == ${4} → ${4 == 4} `); // true
console.log(`${4} == '${'4'}' → ${4 == '4'} `); // true

// → === : permet de vérifier la valeur et le type
console.log(`${4} === '${'4'}' → ${4 === '4'} `); // false

// 2.2. Différence (!= / !==)
// → == : permet de vérifier la valeur uniquement
console.log(`${4} != ${4} → ${4 != 4} `); // false
console.log(`${4} != '${'4'}' → ${4 != '4'} `); // false

// → !== : permet de vérifier la valeur et le type
console.log(`${4} !== '${'4'}' → ${4 !== '4'} `); // true


// 2.3. Strictement supérieur (>)
console.log(`${4} > ${5} → ${4 > 5} `); // false
console.log(`${4} > ${4} → ${4 > 4} `); // false
console.log(`${4} > ${3} → ${4 > 3}`); // true


// 2.4. Strictement inférieur (<)
console.log(`${4} < ${5} → ${4 < 5} `); // true
console.log(`${4} < ${4} → ${4 < 4} `); // false
console.log(`${4} < ${3} → ${4 < 3}`); // false


// 2.5. Supérieur ou égal (>=)
console.log(`${4} >= ${5} → ${4 >= 5} `); // false
console.log(`${4} >= ${4} → ${4 >= 4} `); // true
console.log(`${4} >= ${3} → ${4 >= 3}`); // true

// 2.6. Inférieur ou égal (<=)
console.log(`${4} <= ${5} → ${4 <= 5} `); // true
console.log(`${4} <= ${4} → ${4 <= 4} `); // true
console.log(`${4} <= ${3} → ${4 <= 3}`); // false

// 3. Opérateurs de logique 
// Permet de fusionner deux valeurs booléennes pour n'en former qu'une
// → Retourne une valeur booléenne

console.warn("3. Opérateurs de logique");

// 3.1. ET (&&) → *
// dès qu'on a faux → faux
console.log(`${false} && ${false} → ${false && false}`); // false
console.log(`${true} && ${false} → ${true && false}`); // false
console.log(`${false} && ${true} → ${false && true}`); // false
console.log(`${true} && ${true} → ${true && true}`); // true

// 3.2. OU (||) → +
// dès qu'on a vrai → vrai
console.log(`${false} || ${false} → ${false || false}`); // false
console.log(`${true} || ${false} → ${true || false}`); // true
console.log(`${false} || ${true} → ${false || true}`); // true
console.log(`${true} || ${true} → ${true || true}`); // true

// 3.2. XOR [eXclusive OR] (^)
// L'un mais pas l'autre !
// → retourne une valeur numérique (0, 1) 
//    → reconvertir (en prenant l'inverse de l'inverse)
// 0 : false
// 1 : true
console.log(`${false} ^ ${false} → ${!!(false ^ false)}`); // false
console.log(`${true} ^ ${false} → ${!!(true ^ false)}`); // true
console.log(`${false} ^ ${true} → ${!!(false ^ true)}`); // true
console.log(`${true} ^ ${true} → ${!!(true ^ true)}`); // false

// 3.3. Négation [inverse] (!)
console.log(`!true → ${!true}`); // false
console.log(`!false → ${!false}`); // true

// --- Idée d'utilisation

// Connaître l'état de la température de la maison

// let temperature = 27.8;

// let estBonneTemperature = temperature >= 18 && temperature <= 22;
// console.log('estBonneTemperature :', estBonneTemperature);

// if (temperature >= 18 && temperature <= 22) {
//   if (temperature < 18) {} // allumer le chauffage
//   if (temperature > 22) {} // allumer la clim
// }

// --- Fin d'exemple

// 3.4. Prioriété des booléens

// Se lire de la gauche vers la droite
console.log(`${true} && ${true} && ${false} → ${true && true && false}`);
// && est prioritaire par rapport au ||
console.log(`${true} || ${true} && ${false} → ${true || true && false}`);

// 4. Opérateurs raccourcis

a = a + 5; // 10 + 5
console.log('a :>> ', a); // 15
a += 5; // 15 + 5
console.log('a :>> ', a); // 20

a -= 5; // a = a - 5
a *= 5; // a = a * 5
a /= 5; // a = a / 5
a %= 5; // a = a % 5
// ...

// 5. Opérateurs de pré/post incrémentation (++) /décrémentation (--)

a = a + 1;
// Raccourcir en 
a += 1;
// Raccourcir en (attention qu'avec la valeur 1)
a++; // ou ++a

let c = 5;
console.log('c :>> ', c);

// 5.1. Pré-incrémentation (pré = avant)
// a. Incrémentation la valeur
// b. Affecter la valeur

let d = ++c; // c: 6 | d: 6
console.log('c :>> ', c);
console.log('d :>> ', d);

// 5.2. Post-incrémentation (post = après)
// a. Affecter la valeur
// b. Incrémenter la valeur

let e = c++; // c: 7 | e: 6
console.log('c :>> ', c);
console.log('e :>> ', e);

// 5.3. Pré-décrémentation (pré = avant)
// a. Décrémentation la valeur
// b. Affecter la valeur

let f = --c; // c: 6 | f: 6
console.log('c :>> ', c);
console.log('f :>> ', f);

// 5.4. Post-décrémentation (post = après)
// a. Affecter la valeur
// b. Décrémenter la valeur

let g = c--; // c: 5 | g: 6
console.log('c :>> ', c);
console.log('g :>> ', g);


// 6. Opérateur ternaire (condition ? valeur_vrai : valeur_faux)
// → structure RETOURNE la valeur si c'est vrai ou si c'est faux

let age = 25;
console.log(age >= 18 ? "Adulte" : "Enfant");

// 7. Opérateur nullish-coalescing (??)
// Permet de vérifier si la valeur à gauche du ?? est null
// Si vrai: donner la valeur par défaut à droite
// Si faux: prendre la valeur de gauche

let pseudo;

pseudo = null ?? "Anonyme";
console.log('pseudo :>> ', pseudo); // Anonyme

pseudo = "Oyumiro" ?? "Anonyme";
console.log('pseudo :>> ', pseudo); // Oyumiro

pseudo = pseudo ?? "Inconnu";
pseudo ??= "Inconnu"; // Permet de donner une valeur par défaut si pas établi
console.log('pseudo :>> ', pseudo);

// 8. Opérateur optionnel (optional chaining) (?.)

const lastname = document.getElementById("lastname");
console.log('lastname :>> ', lastname);
console.log('lastname?.value :>> ', lastname?.value);
