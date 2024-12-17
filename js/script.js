// Définir la fonction qui affiche un message
function afficherMessage() {
  alert("Vous avez cliquer sur le logo");
}

// Ajouter un écouteur d'événement sur le bouton
document.getElementById("logo-img").addEventListener("click", afficherMessage);

function afficherUnAutreMessage() {
  alert("Début des maths.Sumériens");
}
// Ajouter un écouteur d'événement sur le bouton
document
  .getElementById("sumerien")
  .addEventListener("click", afficherUnAutreMessage);

function afficherEncorUnAutreMessage() {
  alert("vous avez cliquer sur copyright");
}
// Ajouter un écouteur d'événement sur le bouton
document
  .getElementById("copyright")
  .addEventListener("click", afficherEncorUnAutreMessage);
