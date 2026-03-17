/**
 * translations-poke.js
 * Traductions + application immédiate au chargement (via window.SITE_LANG de lang.js)
 */

const translations = {
  fr: {
    navAbout: "MON PARCOURS", navProjects: "PROJETS", navSkills: "COMPÉTENCES", 
    backLink: "← Retour aux projets",
    pokeTitle: "Création d'un site web Pokédex",
    pokeSubtitle: "Projet personnel avec base de données SQL",
    pokeTitleDesc: "Description du projet",
    pokeDesc: "Ce projet personnel m'a permis de créer un <strong>Pokédex complet</strong> - une application web pour consulter et suivre les informations des Pokémon. Le projet a débuté à partir d'une base de données Excel trouvée sur Internet, que j'ai ensuite transformée en <strong>base de données SQL</strong> pour en faire un véritable site web fonctionnel. Face aux limites des exports CSV (données trop complexes, formats incohérents, impossible à exploiter correctement), j'ai dû chercher une alternative et j'ai découvert <strong>PokéAPI</strong> (pokeapi.co), une API publique complète que j'ai intégrée pour alimenter automatiquement la base de données via un panel d'administration dédié.",
    pokeEvolutions: "Évolution du projet",
    pokeEvolution1: "Découverte d'une base de données Pokémon en Excel",
    pokeEvolution2: "Conversion en base de données SQL structurée",
    pokeEvolution3: "Développement du site web de consultation",
    pokeEvolution4: "Ajout de fonctionnalités avancées (suivi des captures, formes, versions chromatiques)",
    pokeEvolution5: "Les exports CSV se révèlent trop complexes et impossibles à exploiter correctement -> recherche d'une alternative",
    pokeEvolution6: "Découverte et intégration de <strong>PokéAPI</strong> pour importer les données automatiquement",
    pokeEvolution7: "Développement du panel admin pour piloter les imports depuis PokéAPI",
    pokeEvolution8: "Mise en place du système d'authentification (inscription, connexion, profil utilisateur)",
    pokeEvolution9: "Ajout de la synchronisation automatique Pokédex régional -> National",
    pokeEvolution10: "Optimisation et amélioration continue",
    pokeObjectives: "Objectifs",
    pokeObjective1: "Créer une application web attractive et fonctionnelle",
    pokeObjective2: "Gérer efficacement une grande base de données (1000+ Pokémon)",
    pokeObjective3: "Implémenter des fonctionnalités de recherche et filtrage",
    pokeObjective4: "Créer une interface utilisateur ergonomique",
    pokeObjective5: "Améliorer les performances de consultation de données",
    pokeObjective6: "Permettre à chaque utilisateur de suivre sa propre collection sur plusieurs Pokédex régionaux",
    pokeTechs: "Technologies utilisées",
    pokeFeatures: "Fonctionnalités principales",
    pokeFeature1: "Catalogue complet de tous les Pokémon",
    pokeFeature2: "Recherche par nom (français, anglais, allemand)",
    pokeFeature3: "Sélectionner les Pokémon attrapés (version normale et chromatique)",
    pokeFeature4: "Gestion des multi-formes (Méga évolutions, Gigamax, formes genrées, formes régionales…)",
    pokeFeature5: "Synchronisation automatique : cocher un Pokémon dans un Pokédex régional met à jour le National",
    pokeFeature6: "Système d'authentification complet (inscription, connexion, modification du profil)",
    pokeFeature7: "Panel admin pour importer les données depuis PokéAPI ou via fichier CSV/JSON",
    pokeFeature8: "Interface responsive et intuitive",
    pokeStrengths: "Points forts",
    pokeStrength1: "Base de données bien structurée avec 1000+ entrées",
    pokeStrength2: "Requêtes SQL optimisées pour les performances",
    pokeStrength3: "Interface utilisateur attrayante et facile à utiliser",
    pokeStrength4: "Recherche et filtrage rapides et précis",
    pokeStrength5: "Mises à jour en temps réel via AJAX sans rechargement de page",
    pokeStrength6: "Code modulaire et extensible",
    pokeTechChallenges: "Défis techniques",
    pokeChallenge1: "Structuration efficace d'une grande base de données",
    pokeChallenge2: "Les CSV ne pouvaient pas être exportés correctement (données trop complexes) -> migration vers PokéAPI",
    pokeChallenge3: "Modélisation des multi-formes Pokémon (identifiants composites : \"25\", \"25_m\", \"25_mega\"…)",
    pokeChallenge4: "Logique de synchronisation unidirectionnelle Pokédex régional -> National",
    pokeChallenge5: "Implémentation de la recherche multi-critères en temps réel",
    pokeChallenge6: "Gestion des images (plusieurs sprites par Pokémon : normal, chromatique, formes)",
    pokeChallenge7: "Responsive design pour tous les appareils",
    pokeLearnings: "Apprentissages",
    pokeLearningsText: "Ce projet personnel m'a permis d'approfondir mes compétences en :",
    pokeLearning1: "Conversion et structuration de données existantes",
    pokeLearning2: "Conception de bases de données relationnelles complexes",
    pokeLearning3: "Optimisation des performances avec SQL",
    pokeLearning4: "Consommation et intégration d'une API externe (PokéAPI)",
    pokeLearning5: "Développement personnel et apprentissage autonome",
    pokeLearning6: "Créativité dans l'implémentation d'une idée et résolution de problèmes concrets",
    pokeStatut: "État du projet",
    pokeStatutText: "<strong>Statut : </strong> Projet personnel en développement continu<br><strong>Disponibilité : </strong> Disponible en ligne",
    pokeBtnWebsite: "Voir le site",
    pokeBtnGithub: "Voir sur GitHub",
    btnLabel: "FR -> EN",
  },
  en: {
    navAbout: "MY JOURNEY", navProjects: "PROJECTS", navSkills: "SKILLS", 
    backLink: "← Back to projects",
    pokeTitle: "Creating a Pokédex Website",
    pokeSubtitle: "Personal project with SQL database",
    pokeTitleDesc: "Project Description",
    pokeDesc: "This personal project allowed me to create a <strong>complete Pokédex</strong> - a web application to browse and track Pokémon information. The project started from an Excel database found online, which I then converted into an <strong>SQL database</strong> to build a fully functional website. Faced with the limitations of CSV exports (data too complex, inconsistent formats, impossible to use correctly), I had to find an alternative and discovered <strong>PokéAPI</strong> (pokeapi.co), a comprehensive public API that I integrated to automatically populate the database via a dedicated admin panel.",
    pokeEvolutions: "Project Evolution",
    pokeEvolution1: "Discovery of a Pokémon database in Excel",
    pokeEvolution2: "Conversion to structured SQL database",
    pokeEvolution3: "Development of the consultation website",
    pokeEvolution4: "Addition of advanced features (catch tracking, forms, shiny variants)",
    pokeEvolution5: "CSV exports proved too complex and impossible to use correctly -> search for an alternative",
    pokeEvolution6: "Discovery and integration of <strong>PokéAPI</strong> to import data automatically",
    pokeEvolution7: "Development of the admin panel to manage imports from PokéAPI",
    pokeEvolution8: "Implementation of the authentication system (registration, login, user profile)",
    pokeEvolution9: "Addition of automatic sync: regional Pokédex -> National",
    pokeEvolution10: "Optimization and continuous improvement",
    pokeObjectives: "Objectives",
    pokeObjective1: "Create an attractive and functional web application",
    pokeObjective2: "Efficiently manage a large database (1000+ Pokémon)",
    pokeObjective3: "Implement search and filtering features",
    pokeObjective4: "Create an ergonomic user interface",
    pokeObjective5: "Improve data browsing performance",
    pokeObjective6: "Allow each user to track their own collection across multiple regional Pokédexes",
    pokeTechs: "Technologies Used",
    pokeFeatures: "Main Features",
    pokeFeature1: "Complete catalog of all Pokémon",
    pokeFeature2: "Search by name (French, English, German)",
    pokeFeature3: "Select captured Pokémon (normal and shiny versions)",
    pokeFeature4: "Multi-form management (Mega evolutions, Gigantamax, gender forms, regional forms…)",
    pokeFeature5: "Automatic sync: checking a Pokémon in a regional Pokédex updates the National one",
    pokeFeature6: "Full authentication system (registration, login, profile editing)",
    pokeFeature7: "Admin panel to import data from PokéAPI or via CSV/JSON file",
    pokeFeature8: "Responsive and intuitive interface",
    pokeStrengths: "Strengths",
    pokeStrength1: "Well-structured database with 1000+ entries",
    pokeStrength2: "Optimized SQL queries for performance",
    pokeStrength3: "Attractive and user-friendly interface",
    pokeStrength4: "Fast and precise search and filtering",
    pokeStrength5: "Real-time updates via AJAX without page reload",
    pokeStrength6: "Modular and extensible code",
    pokeTechChallenges: "Technical Challenges",
    pokeChallenge1: "Efficient structuring of a large database",
    pokeChallenge2: "CSV files could not be exported correctly (data too complex) -> migration to PokéAPI",
    pokeChallenge3: "Modelling Pokémon multi-forms (composite IDs: \"25\", \"25_m\", \"25_mega\"…)",
    pokeChallenge4: "One-way sync logic: regional Pokédex -> National without duplicates",
    pokeChallenge5: "Implementation of real-time multi-criteria search",
    pokeChallenge6: "Handling images (multiple sprites per Pokémon: normal, shiny, forms)",
    pokeChallenge7: "Responsive design for all devices",
    pokeLearnings: "Learning Outcomes",
    pokeLearningsText: "This personal project allowed me to deepen my skills in:",
    pokeLearning1: "Converting and structuring existing data",
    pokeLearning2: "Designing complex relational databases",
    pokeLearning3: "Performance optimization with SQL",
    pokeLearning4: "Consuming and integrating an external API (PokéAPI)",
    pokeLearning5: "Personal development and self-learning",
    pokeLearning6: "Creativity in implementing an idea and solving real-world problems",
    pokeStatut: "Project Status",
    pokeStatutText: "<strong>Status: </strong> Ongoing personal project<br><strong>Availability: </strong> Available online",
    pokeBtnWebsite: "Visit the site",
    pokeBtnGithub: "View on GitHub",
    btnLabel: "EN -> ES",
  },
  es: {
    navAbout: "MI TRAYECTORIA", navProjects: "PROYECTOS", navSkills: "HABILIDADES",
    backLink: "← Volver a proyectos",
    pokeTitle: "Creación de un sitio web Pokédex",
    pokeSubtitle: "Proyecto personal con base de datos SQL",
    pokeTitleDesc: "Descripción del proyecto",
    pokeDesc: "Este proyecto personal me permitió crear un <strong>Pokédex completo</strong>, una aplicación web para consultar y seguir información de los Pokémon. El proyecto comenzó a partir de una base de datos en Excel encontrada en línea, que luego convertí en una <strong>base de datos SQL</strong> para construir un sitio web completamente funcional. Ante las limitaciones de los exports CSV (datos demasiado complejos, formatos inconsistentes, imposibles de explotar correctamente), tuve que buscar una alternativa y descubrí <strong>PokéAPI</strong> (pokeapi.co), una API pública completa que integré para poblar automáticamente la base de datos a través de un panel de administración dedicado.",
    pokeEvolutions: "Evolución del proyecto",
    pokeEvolution1: "Descubrimiento de una base de datos Pokémon en Excel",
    pokeEvolution2: "Conversión a base de datos SQL estructurada",
    pokeEvolution3: "Desarrollo del sitio web de consulta",
    pokeEvolution4: "Adición de características avanzadas (seguimiento de capturas, formas, versiones shiny)",
    pokeEvolution5: "Los exports CSV resultaron demasiado complejos e imposibles de usar correctamente -> búsqueda de alternativa",
    pokeEvolution6: "Descubrimiento e integración de <strong>PokéAPI</strong> para importar datos automáticamente",
    pokeEvolution7: "Desarrollo del panel admin para gestionar las importaciones desde PokéAPI",
    pokeEvolution8: "Implementación del sistema de autenticación (registro, inicio de sesión, perfil de usuario)",
    pokeEvolution9: "Adición de sincronización automática Pokédex regional -> Nacional",
    pokeEvolution10: "Optimización y mejora continua",
    pokeObjectives: "Objetivos",
    pokeObjective1: "Crear una aplicación web atractiva y funcional",
    pokeObjective2: "Gestionar eficientemente una gran base de datos (1000+ Pokémon)",
    pokeObjective3: "Implementar funciones de búsqueda y filtrado",
    pokeObjective4: "Crear una interfaz de usuario ergonómica",
    pokeObjective5: "Mejorar el rendimiento de la navegación de datos",
    pokeObjective6: "Permitir a cada usuario hacer seguimiento de su propia colección en varios Pokédex regionales",
    pokeTechs: "Tecnologías utilizadas",
    pokeFeatures: "Características principales",
    pokeFeature1: "Catálogo completo de todos los Pokémon",
    pokeFeature2: "Búsqueda por nombre (francés, inglés, alemán)",
    pokeFeature3: "Seleccionar los Pokémon capturados (versión normal y shiny)",
    pokeFeature4: "Gestión de multi-formas (Mega evoluciones, Gigamax, formas de género, formas regionales…)",
    pokeFeature5: "Sincronización automática: marcar un Pokémon en un Pokédex regional actualiza el Nacional",
    pokeFeature6: "Sistema de autenticación completo (registro, inicio de sesión, edición de perfil)",
    pokeFeature7: "Panel admin para importar datos desde PokéAPI o mediante archivo CSV/JSON",
    pokeFeature8: "Interfaz responsive e intuitiva",
    pokeStrengths: "Puntos fuertes",
    pokeStrength1: "Base de datos bien estructurada con más de 1000 entradas",
    pokeStrength2: "Consultas SQL optimizadas para el rendimiento",
    pokeStrength3: "Interfaz atractiva y fácil de usar",
    pokeStrength4: "Búsqueda y filtrado rápidos y precisos",
    pokeStrength5: "Actualizaciones en tiempo real vía AJAX sin recarga de página",
    pokeStrength6: "Código modular y extensible",
    pokeTechChallenges: "Desafíos técnicos",
    pokeChallenge1: "Estructuración eficiente de una gran base de datos",
    pokeChallenge2: "Los CSV no podían exportarse correctamente (datos demasiado complejos) -> migración a PokéAPI",
    pokeChallenge3: "Modelado de multi-formas Pokémon (IDs compuestos: \"25\", \"25_m\", \"25_mega\"…)",
    pokeChallenge4: "Lógica de sincronización unidireccional Pokédex regional -> Nacional",
    pokeChallenge5: "Implementación de búsqueda multi-criterio en tiempo real",
    pokeChallenge6: "Gestión de imágenes (varios sprites por Pokémon: normal, shiny, formas)",
    pokeChallenge7: "Diseño responsive para todos los dispositivos",
    pokeLearnings: "Aprendizajes",
    pokeLearningsText: "Este proyecto personal me permitió profundizar mis habilidades en:",
    pokeLearning1: "Conversión y estructuración de datos existentes",
    pokeLearning2: "Diseño de bases de datos relacionales complejas",
    pokeLearning3: "Optimización del rendimiento con SQL",
    pokeLearning4: "Consumo e integración de una API externa (PokéAPI)",
    pokeLearning5: "Desarrollo personal y autoaprendizaje",
    pokeLearning6: "Creatividad en la implementación de una idea y resolución de problemas concretos",
    pokeStatut: "Estado del proyecto",
    pokeStatutText: "<strong>Estado: </strong> Proyecto personal en desarrollo continuo<br><strong>Disponibilidad: </strong> Disponible en línea",
    pokeBtnWebsite: "Ver el sitio",
    pokeBtnGithub: "Ver en GitHub",
    btnLabel: "ES -> FR",
  }
};

function applyPokeTranslation(lang) {
  const t = translations[lang];
  if (!t) return;

  // <html lang>
  document.documentElement.lang = lang;

  // Mise à jour du label visible dans le globe
  const langCurrentEl = document.getElementById("langCurrent");
  const labels = { fr: "FR", en: "EN", es: "ES" };
  if (langCurrentEl) langCurrentEl.textContent = labels[lang] || lang.toUpperCase();

  // Rétrocompatibilité translateBtn (pages projet)
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
    <li>${t.pokeEvolution5}</li><li>${t.pokeEvolution6}</li>
    <li>${t.pokeEvolution7}</li><li>${t.pokeEvolution8}</li>
    <li>${t.pokeEvolution9}</li><li>${t.pokeEvolution10}</li>`;

  const objectives = document.querySelector(".objectives-list");
  if (objectives) objectives.innerHTML = `
    <li>${t.pokeObjective1}</li><li>${t.pokeObjective2}</li>
    <li>${t.pokeObjective3}</li><li>${t.pokeObjective4}</li>
    <li>${t.pokeObjective5}</li><li>${t.pokeObjective6}</li>`;

  const features = document.querySelector(".features-list");
  if (features) features.innerHTML = `
    <li>${t.pokeFeature1}</li><li>${t.pokeFeature2}</li>
    <li>${t.pokeFeature3}</li><li>${t.pokeFeature4}</li>
    <li>${t.pokeFeature5}</li><li>${t.pokeFeature6}</li>
    <li>${t.pokeFeature7}</li><li>${t.pokeFeature8}</li>`;

  const strengths = document.querySelector(".strengths-list");
  if (strengths) strengths.innerHTML = `
    <li>${t.pokeStrength1}</li><li>${t.pokeStrength2}</li>
    <li>${t.pokeStrength3}</li><li>${t.pokeStrength4}</li>
    <li>${t.pokeStrength5}</li><li>${t.pokeStrength6}</li>`;

  const challenges = document.querySelector(".challenges-list");
  if (challenges) challenges.innerHTML = `
    <li>${t.pokeChallenge1}</li><li>${t.pokeChallenge2}</li>
    <li>${t.pokeChallenge3}</li><li>${t.pokeChallenge4}</li>
    <li>${t.pokeChallenge5}</li><li>${t.pokeChallenge6}</li>
    <li>${t.pokeChallenge7}</li>`;

  const learningsDesc = document.querySelector(".learnings-description");
  if (learningsDesc) learningsDesc.innerHTML = t.pokeLearningsText;

  const learnings = document.querySelector(".learnings-list");
  if (learnings) learnings.innerHTML = `
    <li>${t.pokeLearning1}</li><li>${t.pokeLearning2}</li>
    <li>${t.pokeLearning3}</li><li>${t.pokeLearning4}</li>
    <li>${t.pokeLearning5}</li><li>${t.pokeLearning6}</li>`;

  const statut = document.querySelector(".project-statut");
  if (statut) statut.innerHTML = t.pokeStatutText;
  
  const websiteBtn = document.querySelector(".btn-website");
  if (websiteBtn) websiteBtn.innerHTML = t.pokeBtnWebsite;

  const ghBtn = document.querySelector(".btn-github");
  if (ghBtn) ghBtn.innerHTML = t.pokeBtnGithub;
}

// ── Init immédiate + bouton ───────────────────────────────────────────────────
let currentLang = window.SITE_LANG || "fr";

applyPokeTranslation(currentLang);
if (typeof updateWidgetLanguage === "function") updateWidgetLanguage(currentLang);

 // Révéler la page (supprime le masque posé par lang.js)
  if (typeof window.revealPage === "function") window.revealPage();

  // ── Sélecteur de langue (globe dropdown) ─────────────────────────────────
  const langSwitcher  = document.getElementById("langSwitcher");
  const langGlobeBtn  = document.getElementById("langGlobeBtn");
  const langDropdown  = document.getElementById("langDropdown");
  const langCurrent   = document.getElementById("langCurrent");
  const langOptions   = document.querySelectorAll(".lang-option");

  const langLabels = { fr: "FR", en: "EN", es: "ES" };

  function setActiveLangOption(lang) {
    langOptions.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
    if (langCurrent) langCurrent.textContent = langLabels[lang] || lang.toUpperCase();
  }

  // Init visuelle
  setActiveLangOption(currentLang);

  if (langGlobeBtn && langDropdown) {
    // Ouvrir / fermer au clic sur le globe
    langGlobeBtn.addEventListener("click", e => {
      e.stopPropagation();
      langSwitcher.classList.toggle("open");
    });

    // Fermer en cliquant ailleurs
    document.addEventListener("click", e => {
      if (!langSwitcher.contains(e.target)) langSwitcher.classList.remove("open");
    });

    // Choisir une langue
    langOptions.forEach(btn => {
      btn.addEventListener("click", () => {
        const lang = btn.dataset.lang;
        currentLang = lang;
        localStorage.setItem("language", lang);
        applyPokeTranslation(lang);
        updateWidgetLanguage(lang);
        setActiveLangOption(lang);
        langSwitcher.classList.remove("open");
      });
    });
  }

