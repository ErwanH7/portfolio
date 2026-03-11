/**
 * translations-app.js
 * Traductions + application immédiate au chargement (via window.SITE_LANG de lang.js)
 */

const translations = {
  fr: {
    navAbout: "MON PARCOURS", navProjects: "PROJETS", navSkills: "COMPÉTENCES", 
    backLink: "← Retour aux projets",
    appTitle: "Développement d'une application",
    appTitleDesc: "Description du projet",
    appDesc: "Ce projet universitaire m'a permis de développer une véritable application desktop en utilisant le framework Qt. Le travail s'est déroulé en respectant un <strong>cahier des charges détaillé</strong> fourni par les enseignants, ce qui m'a initié aux méthodes de développement professionnel.",
    appObjectives: "Objectifs",
    appObjective1: "Développer une application fonctionnelle selon un cahier des charges",
    appObjective2: "Maîtriser le framework Qt et le langage C++",
    appObjective3: "Créer une interface utilisateur intuitive",
    appObjective4: "Gérer les événements et interactions utilisateur",
    appObjective5: "Implémenter la logique métier selon les spécifications",
    appTechs: "Technologies utilisées",
    appFeatures: "Fonctionnalités principales",
    appFeatures1: "Interface graphique moderne et responsive",
    appFeatures2: "Gestion d'événements complexes",
    appFeatures3: "Persistance de données",
    appFeatures4: "Validation des entrées utilisateur",
    appFeatures5: "Retours utilisateur en temps réel",
    appStrengths: "Points forts",
    appStrength1: "Compréhension du modèle Qt et de sa structure signal/slot",
    appStrength2: "Développement d'interfaces complètes",
    appStrength3: "Respect des spécifications du cahier des charges",
    appStrength4: "Code bien structuré et documenté",
    appLearnings: "Apprentissages",
    appLearningsText: "Ce projet m'a initié au développement d'applications \"vraies\" avec un framework professionnel. J'ai appris à travailler avec un cahier des charges, à gérer la complexité d'une application desktop, et à mettre en œuvre des patterns de conception orienté objet.",
    appBtnGitHub: "Voir sur GitHub",
    btnLabel: "FR → EN",
  },
  en: {
    navAbout: "MY JOURNEY", navProjects: "PROJECTS", navSkills: "SKILLS", 
    backLink: "← Back to projects",
    appTitle: "Application Development",
    appTitleDesc: "Project Description",
    appDesc: "This university project allowed me to develop a real desktop application using the Qt framework. The work was carried out in compliance with a <strong>detailed specifications document</strong> provided by the teachers, which introduced me to professional development methods.",
    appObjectives: "Objectives",
    appObjective1: "Develop a functional application based on specifications",
    appObjective2: "Master the Qt framework and C++ language",
    appObjective3: "Create an intuitive user interface",
    appObjective4: "Manage user events and interactions",
    appObjective5: "Implement business logic according to specifications",
    appTechs: "Technologies Used",
    appFeatures: "Main Features",
    appFeatures1: "Modern and responsive graphical interface",
    appFeatures2: "Complex event management",
    appFeatures3: "Data persistence",
    appFeatures4: "User input validation",
    appFeatures5: "Real-time user feedback",
    appStrengths: "Strengths",
    appStrength1: "Understanding of the Qt model and its signal/slot structure",
    appStrength2: "Development of complete interfaces",
    appStrength3: "Compliance with specifications",
    appStrength4: "Well-structured and documented code",
    appLearnings: "Learning Outcomes",
    appLearningsText: "This project introduced me to developing \"real\" applications with a professional framework. I learned to work with a specifications document, manage the complexity of a desktop application, and implement object-oriented design patterns.",
    appBtnGitHub: "View on GitHub",
    btnLabel: "EN → ES",
  },
  es: {
    navAbout: "MI TRAYECTORIA", navProjects: "PROYECTOS", navSkills: "HABILIDADES",
    backLink: "← Volver a proyectos",
    appTitle: "Desarrollo de una aplicación",
    appTitleDesc: "Descripción del proyecto",
    appDesc: "Este proyecto universitario me permitió desarrollar una verdadera aplicación de escritorio utilizando el framework Qt. El trabajo se llevó a cabo cumpliendo con un <strong>cahier des charges detallado</strong> proporcionado por los profesores, lo que me introdujo a los métodos de desarrollo profesional.",
    appObjectives: "Objetivos",
    appObjective1: "Desarrollar una aplicación funcional según un cahier des charges",
    appObjective2: "Dominar el framework Qt y el lenguaje C++",
    appObjective3: "Crear una interfaz de usuario intuitiva",
    appObjective4: "Gestionar eventos e interacciones del usuario",
    appObjective5: "Implementar la lógica de negocio según las especificaciones",
    appTechs: "Tecnologías utilizadas",
    appFeatures: "Características principales",
    appFeatures1: "Interfaz gráfica moderna y responsive",
    appFeatures2: "Gestión de eventos complejos",
    appFeatures3: "Persistencia de datos",
    appFeatures4: "Validación de entradas del usuario",
    appFeatures5: "Retroalimentación en tiempo real",
    appStrengths: "Puntos fuertes",
    appStrength1: "Comprensión del modelo Qt y su estructura signal/slot",
    appStrength2: "Desarrollo de interfaces completas",
    appStrength3: "Cumplimiento de las especificaciones del cahier des charges",
    appStrength4: "Código bien estructurado y documentado",
    appLearnings: "Aprendizajes",
    appLearningsText: "Este proyecto me introdujo al desarrollo de aplicaciones \"reales\" con un framework profesional. Aprendí a trabajar con un cahier des charges, gestionar la complejidad de una aplicación de escritorio e implementar patrones de diseño orientado a objetos.",
    appBtnGitHub: "Ver en GitHub",
    btnLabel: "ES → FR",
  }
};

function applyAppTranslation(lang) {
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
  if (h2) h2.innerHTML = t.appTitle;

  const h3s = document.querySelectorAll("#project-detail h3");
  if (h3s[0]) h3s[0].innerHTML = t.appTitleDesc;
  if (h3s[1]) h3s[1].innerHTML = t.appObjectives;
  if (h3s[2]) h3s[2].innerHTML = t.appTechs;
  if (h3s[3]) h3s[3].innerHTML = t.appFeatures;
  if (h3s[4]) h3s[4].innerHTML = t.appStrengths;
  if (h3s[5]) h3s[5].innerHTML = t.appLearnings;

  const desc = document.querySelector(".project-description");
  if (desc) desc.innerHTML = t.appDesc;

  const objectives = document.querySelector(".objectives-list");
  if (objectives) objectives.innerHTML = `
    <li>${t.appObjective1}</li><li>${t.appObjective2}</li>
    <li>${t.appObjective3}</li><li>${t.appObjective4}</li>
    <li>${t.appObjective5}</li>`;

  const features = document.querySelector(".features-list");
  if (features) features.innerHTML = `
    <li>${t.appFeatures1}</li><li>${t.appFeatures2}</li>
    <li>${t.appFeatures3}</li><li>${t.appFeatures4}</li>
    <li>${t.appFeatures5}</li>`;

  const strengths = document.querySelector(".strengths-list");
  if (strengths) strengths.innerHTML = `
    <li>${t.appStrength1}</li><li>${t.appStrength2}</li>
    <li>${t.appStrength3}</li><li>${t.appStrength4}</li>`;

  const learnings = document.querySelector(".learnings-text");
  if (learnings) learnings.innerHTML = t.appLearningsText;

  const ghBtn = document.querySelector(".project-links .btn-github");
  if (ghBtn) ghBtn.innerHTML = t.appBtnGitHub;
}

// ── Init immédiate + bouton ───────────────────────────────────────────────────
let currentLang = window.SITE_LANG || "fr";

applyAppTranslation(currentLang);
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
        applyAppTranslation(lang);
        updateWidgetLanguage(lang);
        setActiveLangOption(lang);
        langSwitcher.classList.remove("open");
      });
    });
  }

