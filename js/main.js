// Affichage du message dans la console pour vérifier que le script fonctionne
console.log("Hello JS!"); // On dit "Hello JS!" à la console

let age = 37; // L'âge de la personne, ici 37


// Exemple d'instructions : une instruction est une action immédiate qui fait quelque chose dans le programme.
// instructions à exécuter
// instruction1;
// instruction2;

// Un bloc permet de regrouper plusieurs instructions et de les exécuter ensemble sous certaines conditions.
// Exemple d'appel de fonction
// nomBloc(parametrage)

// Structure conditionnelle : si l'âge est supérieur ou égal à un certain minimum, on effectue une action
// if(age >= ageMin){
//     // actions à effectuer
// }

// Boucle qui se répète tant qu'une condition est vraie
// while(k < 10){
//     // actions répétitives
// }

// Quand on crée des variables, il est préférable de les nommer en "camelCase".
// Par exemple : 
// nomVariable
// examplelong

// Déclaration d'une variable avec "let", qui permet de changer la valeur plus tard.
let animal = "dog"; // Initialisation de la variable "animal" avec la valeur "dog"
animal = "cat"; // Changement de la valeur de "animal" en "cat"
animal = "bird"; // Changement encore une fois en "bird"


// Une constante est une valeur fixe qui ne doit jamais être modifiée.
const deux = 2; // Ici, deux est une constante qui ne peut pas changer
let quantite = 3; // Variable "quantite" qui peut être modifiée
const prix = 1.15; // Le prix reste fixe à 1.15

// La ligne suivante génère une erreur car "deux" est une constante
// deux = 3;  // Provoque une erreur, car on tente de modifier une constante

// Déclaration de variables de type chaîne de caractères (string)
// Utilisation de "Denzel Washington" comme exemple
const prenom = "Denzel"; // Le prénom de la personne
const nom = "Washington"; // Le nom de famille de la personne
let repas = "pizza"; // Son plat préféré
const criDuChien = "aboiement"; // Son cri d'animal


// Variables de type booléen : elles peuvent être "true" ou "false"
// Convention : souvent préfixées par "is" ou "has"
let isAdult = true; // La personne est adulte
let isTaskDone = false; // La tâche n'est pas terminée
const hasBeenToTokyo = true; // La personne a visité Tokyo


// La portée d'une variable définit où elle peut être utilisée dans le code.
// Une variable définie dans un bloc de code n'est valable que dans ce bloc.

// On peut utiliser les opérateurs de base pour effectuer des calculs comme additionner, soustraire, etc.
let numberToGuess = 2; // Valeur initiale de la variable

// Application de différents opérateurs arithmétiques sur numberToGuess
numberToGuess += 3; // Addition de 3 (numberToGuess devient 5)
numberToGuess -= 2; // Soustraction de 2 (numberToGuess devient 3)
numberToGuess++; // Incrémentation de 1 (numberToGuess devient 4)
numberToGuess *= 10; // Multiplication par 10 (numberToGuess devient 40)
numberToGuess /= 2; // Division par 2 (numberToGuess devient 20)
numberToGuess %= 7; // Reste de la division par 7 (numberToGuess devient 6)
numberToGuess--; // Décrémentation de 1 (numberToGuess devient 5)

// Affichage du résultat dans la console avec un message explicite
console.log("numberToGuess [2 +3 -2 +1 *10 /2 %7 -1]", numberToGuess);


// Exemple de concaténation : on combine plusieurs chaînes de caractères pour créer une plus grande chaîne
const nomComplet = prenom + " " + nom; // Fusion du prénom et du nom pour obtenir le nom complet

// Affichage du message dans la console avec une concaténation
console.log("Je m'appelle" + " " + nomComplet);


// Exemple d'interpolation de chaînes : au lieu de concaténer, on insère directement des valeurs dans une chaîne
console.log(`Je m'appelle ${prenom} ${nom}, soyez le bienvenu!`); // Ici, on insère des variables directement dans la chaîne

// Comparaison des valeurs pour tester si elles sont égales ou différentes
// "==" compare seulement les valeurs, tandis que "===" compare la valeur ET le type
if (prenom === "Denzel") {
  console.log("Le prénom est Denzel !"); // Affichage si le prénom est bien "Denzel"
}

// Boucle qui multiplie 3 par les chiffres de 1 à 10
for (let i = 1; i <= 10; i++) {
    console.log(`3 x ${i} = ${3 * i}`); // Affichage du résultat de la multiplication
}

// Affichage répétitif d'un message avec une boucle
for (let i = 0; i < 3; i++) {
    console.log("I will be a good developer"); // Affichage de l'aspiration 3 fois
}