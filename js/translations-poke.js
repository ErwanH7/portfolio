/**
 * translations-poke.js
 * Traductions + application immédiate au chargement (via window.SITE_LANG de lang.js)
 */

const translations = {
  fr: {
    navAbout: "MON PARCOURS", navProjects: "PROJETS", navSkills: "COMPÉTENCES", navContact: "CONTACT",
    backLink: "← Retour aux projets",
    pokeTitle: "Création d'un site web Pokédex",
    pokeSubtitle: "Projet personnel avec base de données SQL",
    pokeTitleDesc: "Description du projet",
    pokeDesc: "Ce projet personnel m'a permis de créer un <strong>Pokédex complet</strong> - une application web pour consulter les informations des Pokémon. Le projet a débuté à partir d'une base de données Excel trouvée sur Internet, que j'ai ensuite transformée en <strong>base de données SQL</strong> pour en faire un véritable site web fonctionnel.",
    pokeEvolutions: "Évolution du projet",
    pokeEvolution1: "Découverte d'une base de données Pokémon en Excel",
    pokeEvolution2: "Conversion en base de données SQL structurée",
    pokeEvolution3: "Développement du site web de consultation",
    pokeEvolution4: "Ajout de fonctionnalités avancées",
    pokeEvolution5: "Optimisation et amélioration continue",
    pokeObjectives: "Objectifs",
    pokeObjective1: "Créer une application web attractive et fonctionnelle",
    pokeObjective2: "Gérer efficacement une grande base de données (1000+ Pokémon)",
    pokeObjective3: "Implémenter des fonctionnalités de recherche et filtrage",
    pokeObjective4: "Créer une interface utilisateur ergonomique",
    pokeObjective5: "Améliorer les performances de consultation de données",
    pokeTechs: "Technologies utilisées",
    pokeFeatures: "Fonctionnalités principales",
    pokeFeature1: "Catalogue complet de tous les Pokémon",
    pokeFeature2: "Recherche par nom, type ou génération",
    pokeFeature3: "Sélectionner les pokémon attrapés",
    pokeFeature4: "Comparaison de Pokédex (selon le nombre de pokémon attrapés)",
    pokeFeature5: "Interface responsive et intuitive",
    pokeStrengths: "Points forts",
    pokeStrength1: "Base de données bien structurée avec 1000+ entrées",
    pokeStrength2: "Requêtes SQL optimisées pour les performances",
    pokeStrength3: "Interface utilisateur attrayante et facile à utiliser",
    pokeStrength4: "Recherche et filtrage rapides et précis",
    pokeStrength5: "Code modulaire et extensible",
    pokeTechChallenges: "Défis techniques",
    pokeChallenge1: "Structuration efficace d'une grande base de données",
    pokeChallenge2: "Optimisation des requêtes pour les performances",
    pokeChallenge3: "Implémentation de recherche multi-critères",
    pokeChallenge4: "Gestion des images (plusieurs par Pokémon)",
    pokeChallenge5: "Responsive design pour tous les appareils",
    pokeLearnings: "Apprentissages",
    pokeLearningsText: "Ce projet personnel m'a permis d'approfondir mes compétences en :",
    pokeLearning1: "Conversion et structuration de données existantes",
    pokeLearning2: "Conception de bases de données relationnelles complexes",
    pokeLearning3: "Optimisation des performances avec SQL",
    pokeLearning4: "Développement personnel et apprentissage autonome",
    pokeLearning5: "Créativité dans l'implémentation d'une idée",
    pokeStatut: "État du projet",
    pokeStatutText: "<strong>Statut : </strong> Projet personnel en développement continu<br><strong>Disponibilité : </strong> Bientôt disponible en ligne",
    pokeBtnGithub: "Voir sur GitHub",
    btnLabel: "FR → EN",
  },
  en: {
    navAbout: "MY JOURNEY", navProjects: "PROJECTS", navSkills: "SKILLS", navContact: "CONTACT",
    backLink: "← Back to projects",
    pokeTitle: "Creating a Pokédex Website",
    pokeSubtitle: "Personal project with SQL database",
    pokeTitleDesc: "Project Description",
    pokeDesc: "This personal project allowed me to create a <strong>complete Pokédex</strong> - a web application to browse Pokémon information. The project started from an Excel database found online, which I then converted into an <strong>SQL database</strong> to build a fully functional website.",
    pokeEvolutions: "Project Evolution",
    pokeEvolution1: "Discovery of a Pokémon database in Excel",
    pokeEvolution2: "Conversion to structured SQL database",
    pokeEvolution3: "Development of the consultation website",
    pokeEvolution4: "Addition of advanced features",
    pokeEvolution5: "Optimization and continuous improvement",
    pokeObjectives: "Objectives",
    pokeObjective1: "Create an attractive and functional web application",
    pokeObjective2: "Efficiently manage a large database (1000+ Pokémon)",
    pokeObjective3: "Implement search and filtering features",
    pokeObjective4: "Create an ergonomic user interface",
    pokeObjective5: "Improve data browsing performance",
    pokeTechs: "Technologies Used",
    pokeFeatures: "Main Features",
    pokeFeature1: "Complete catalog of all Pokémon",
    pokeFeature2: "Search by name, type or generation",
    pokeFeature3: "Select captured Pokémon",
    pokeFeature4: "Pokédex comparison (based on number of captured Pokémon)",
    pokeFeature5: "Responsive and intuitive interface",
    pokeStrengths: "Strengths",
    pokeStrength1: "Well-structured database with 1000+ entries",
    pokeStrength2: "Optimized SQL queries for performance",
    pokeStrength3: "Attractive and user-friendly interface",
    pokeStrength4: "Fast and precise search and filtering",
    pokeStrength5: "Modular and extensible code",
    pokeTechChallenges: "Technical Challenges",
    pokeChallenge1: "Efficient structuring of a large database",
    pokeChallenge2: "Optimization of queries for performance",
    pokeChallenge3: "Implementation of multi-criteria search",
    pokeChallenge4: "Handling images (multiple per Pokémon)",
    pokeChallenge5: "Responsive design for all devices",
    pokeLearnings: "Learning Outcomes",
    pokeLearningsText: "This personal project allowed me to deepen my skills in:",
    pokeLearning1: "Converting and structuring existing data",
    pokeLearning2: "Designing complex relational databases",
    pokeLearning3: "Performance optimization with SQL",
    pokeLearning4: "Personal development and self-learning",
    pokeLearning5: "Creativity in implementing an idea",
    pokeStatut: "Project Status",
    pokeStatutText: "<strong>Status: </strong> Ongoing personal project<br><strong>Availability: </strong> Coming soon online",
    pokeBtnGithub: "View on GitHub",
    btnLabel: "EN → FR",
  }
};

function applyPokeTranslation(lang) {
  const t = translations[lang];
  if (!t) return;

  document.documentElement.lang = lang === "en" ? "en" : "fr";

  const btn = document.getElementById("translateBtn");
  if (btn) btn.innerHTML = t.btnLabel;

  const navItems = document.querySelectorAll("nav ul li a");
  if (navItems[0]) navItems[0].innerHTML = t.navAbout;
  if (navItems[1]) navItems[1].innerHTML = t.navProjects;
  if (navItems[2]) navItems[2].innerHTML = t.navSkills;
  if (navItems[3]) navItems[3].innerHTML = t.navContact;

  const backLink = document.querySelector(".back-link");
  if (backLink) backLink.innerHTML = t.backLink;

  const h2 = document.querySelector("#project-detail h2");
  if (h2) h2.innerHTML = t.pokeTitle;

  const h3s = document.querySelectorAll("#project-detail h3");
  if (h3s[0]) h3s[0].innerHTML = t.pokeSubtitle;
  if (h3s[1]) h3s[1].innerHTML = t.pokeTitleDesc;
  if (h3s[2]) h3s[2].innerHTML = t.pokeEvolutions;
  if (h3s[3]) h3s[3].innerHTML = t.pokeObjectives;
  if (h3s[4]) h3s[4].innerHTML = t.pokeTechs;
  if (h3s[5]) h3s[5].innerHTML = t.pokeFeatures;
  if (h3s[6]) h3s[6].innerHTML = t.pokeStrengths;
  if (h3s[7]) h3s[7].innerHTML = t.pokeTechChallenges;
  if (h3s[8]) h3s[8].innerHTML = t.pokeLearnings;
  if (h3s[9]) h3s[9].innerHTML = t.pokeStatut;

  const desc = document.querySelector(".project-description");
  if (desc) desc.innerHTML = t.pokeDesc;

  const evolutions = document.querySelector(".phase-info ul");
  if (evolutions) evolutions.innerHTML = `
    <li>${t.pokeEvolution1}</li><li>${t.pokeEvolution2}</li>
    <li>${t.pokeEvolution3}</li><li>${t.pokeEvolution4}</li>
    <li>${t.pokeEvolution5}</li>`;

  const objectives = document.querySelector(".objectives-list");
  if (objectives) objectives.innerHTML = `
    <li>${t.pokeObjective1}</li><li>${t.pokeObjective2}</li>
    <li>${t.pokeObjective3}</li><li>${t.pokeObjective4}</li>
    <li>${t.pokeObjective5}</li>`;

  const features = document.querySelector(".features-list");
  if (features) features.innerHTML = `
    <li>${t.pokeFeature1}</li><li>${t.pokeFeature2}</li>
    <li>${t.pokeFeature3}</li><li>${t.pokeFeature4}</li>
    <li>${t.pokeFeature5}</li>`;

  const strengths = document.querySelector(".strengths-list");
  if (strengths) strengths.innerHTML = `
    <li>${t.pokeStrength1}</li><li>${t.pokeStrength2}</li>
    <li>${t.pokeStrength3}</li><li>${t.pokeStrength4}</li>
    <li>${t.pokeStrength5}</li>`;

  const challenges = document.querySelector(".challenges-list");
  if (challenges) challenges.innerHTML = `
    <li>${t.pokeChallenge1}</li><li>${t.pokeChallenge2}</li>
    <li>${t.pokeChallenge3}</li><li>${t.pokeChallenge4}</li>
    <li>${t.pokeChallenge5}</li>`;

  const learningsDesc = document.querySelector(".learnings-description");
  if (learningsDesc) learningsDesc.innerHTML = t.pokeLearningsText;

  const learnings = document.querySelector(".learnings-list");
  if (learnings) learnings.innerHTML = `
    <li>${t.pokeLearning1}</li><li>${t.pokeLearning2}</li>
    <li>${t.pokeLearning3}</li><li>${t.pokeLearning4}</li>
    <li>${t.pokeLearning5}</li>`;

  const statut = document.querySelector(".project-statut");
  if (statut) statut.innerHTML = t.pokeStatutText;
}

// ── Init immédiate + bouton ───────────────────────────────────────────────────
let currentLang = window.SITE_LANG || "fr";

document.addEventListener("DOMContentLoaded", () => {
  applyPokeTranslation(currentLang);
  if (typeof window.revealPage === "function") window.revealPage();

  document.getElementById("translateBtn").addEventListener("click", () => {
    currentLang = currentLang === "fr" ? "en" : "fr";
    localStorage.setItem("language", currentLang);
    applyPokeTranslation(currentLang);
  });
});
