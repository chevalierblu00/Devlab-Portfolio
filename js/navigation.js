// Récupérer tous les liens dans la navigation
const navigationLinks = document.querySelectorAll(".navigation a");

// Fonction pour afficher une section et masquer les autres
function afficherSection(cible) {
  const sections = document.querySelectorAll(".container, #compétance, .bloc");
  sections.forEach(section => {
    section.style.display = (section.id === cible) ? "" : "none";
  });

  // Mettre en gras le lien cliqué et désélectionner les autres liens
  navigationLinks.forEach(link => {
    if (link.getAttribute("data-target") === cible) {
      link.style.fontWeight = "bold";
    } else {
      link.style.fontWeight = "normal";
    }
  });

  // Sauvegarder l'ID de la dernière section affichée dans le stockage local
  localStorage.setItem("lastSection", cible);
}

// Récupérer l'ID de la dernière section affichée depuis le stockage local (si disponible)
const lastSection = localStorage.getItem("lastSection");

// Afficher la dernière section affichée (ou "présentation" par défaut si aucune n'a été enregistrée)
afficherSection(lastSection || "présentation");

// Ajouter un gestionnaire d'événements pour chaque lien
navigationLinks.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault(); // Empêche la navigation par défaut du lien
    const target = this.getAttribute("data-target"); // Obtenir la valeur de data-target
    afficherSection(target); // Afficher la section cible
  });
});
