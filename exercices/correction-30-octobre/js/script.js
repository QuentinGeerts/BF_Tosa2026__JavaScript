/*
  liste de tâches (partie 1)
  Un champ texte et un bouton "Ajouter" qui ajoute la tâche à la liste
  Un bouton "Supprimer" à côté de chaque tâche
  Un clic sur une tâche la marque comme terminée (texte barré grâce à une classe CSS)
  Impossible d'ajouter une tâche vide
*/

const todoInput = document.getElementById("todo-input");
const btnAdd = document.getElementById("btn-add");
const todos = document.getElementById("todos");


btnAdd.addEventListener("click", () => {

  // Récupérer la valeur du champ
  const todoValue = todoInput.value.trim();
  todoInput.value = "";
  todoInput.focus();

  // Vérifier si le champ est vide
  if (todoValue == "") return;

  // Créer le li
  const li = document.createElement("li");
  li.textContent = todoValue;
  li.addEventListener("click", () => {
    li.classList.toggle("barre");
  })

  // Créer le bouton de suppression
  const btnDelete = document.createElement("button");
  btnDelete.textContent = "hello";
  btnDelete.addEventListener("click", () => {
    // li.remove();
  })
  li.append(btnDelete);

  // Insérer le li dans la liste
  todos.append(li);


  console.log('li.textContent :>> ', li.textContent);

});



