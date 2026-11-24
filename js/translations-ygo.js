/**
 * translations-ygo.js
 * Traductions + application immédiate au chargement (via window.SITE_LANG de lang.js)
 */

const translations = {
  fr: {
    navAbout: "MON PARCOURS", navProjects: "PROJETS", navSkills: "COMPÉTENCES",
    backLink: "← Retour aux projets",
    title: "Gestion de collection Yu-Gi-Oh",
    subtitle: "Projet personnel en Python avec assistant IA",
    headings: ["Description du projet", "Objectifs", "Technologies utilisées", "Fonctionnalités principales", "Points forts", "Défis techniques", "Apprentissages", "État du projet"],
    desc: "Ce projet personnel est une <strong>application web locale</strong> pour gérer ma collection de cartes Yu-Gi-Oh physiques. Elle permet d'enregistrer ses cartes, de voir ce qu'il manque pour compléter un deck et de classer ses decks du plus au moins réalisable. Les données des cartes (traductions, prix Cardmarket, banlist TCG) viennent de l'API publique <strong>YGOPRODeck</strong>. Un <strong>deck builder</strong> propose des decks à partir des listes de tournoi récentes, et un <strong>assistant IA</strong> basé sur un agent <strong>LangChain</strong> construit un deck sur demande en français.",
    objectives: [
      "Remplacer un suivi manuel de collection par une application fiable",
      "Savoir rapidement quelles cartes acheter pour terminer un deck",
      "Construire des decks compétitifs avec les cartes déjà possédées",
      "Mettre en pratique un agent IA à outils vu en cours (R5.14)"
    ],
    features: [
      "Recherche de cartes en français et en anglais, avec cache local des données",
      "Ajout de cartes par code de set (ex. LOB-FR005) ou par extension complète",
      "Scanner : lecture du nom et du code de la carte avec la caméra (OCR), y compris depuis un téléphone",
      "Gestion des decks : saisie manuelle, import et export de fichiers <strong>.ydk</strong>, lien <strong>ydke://</strong>",
      "Calcul des cartes manquantes et classement des decks du plus au moins réalisable",
      "Deck builder : liste type par archétype tirée des derniers decks de tournoi, dans la limite de la banlist",
      "Assistant IA : un agent LangChain consulte la collection, les listes types et la banlist, puis propose un deck vérifié"
    ],
    strengths: [
      "L'agent IA ne propose qu'un deck validé par ses outils, et ouvre la base en lecture seule",
      "Fonctionne avec un modèle local (Ollama) ou un fournisseur en ligne au choix",
      "Avertissements de banlist sans bloquer la saisie",
      "Une soixantaine de tests automatisés avec <strong>pytest</strong>",
      "Données stockées en local dans une base SQLite facile à sauvegarder"
    ],
    challenges: [
      "L'API ne connaît que les codes de set anglais : correspondance des codes français",
      "Découper un coffret de plusieurs decks d'après le code des cartes",
      "Tirer une liste type fiable de decks de tournoi qui mélangent plusieurs variantes",
      "Rendre l'OCR exploitable en ne lisant qu'une bande fine sur le texte de la carte",
      "Empêcher l'agent IA d'inventer des cartes ou des decks invalides"
    ],
    learningsText: "Ce projet personnel m'a permis d'approfondir mes compétences en :",
    learnings: [
      "Développement web en Python avec Flask et SQLite",
      "Consommation d'une API externe et mise en cache des données",
      "Conception d'un agent IA à outils avec LangChain",
      "Tests automatisés avec pytest",
      "Traitement d'images et OCR dans le navigateur"
    ],
    statutText: "<strong>Statut : </strong> Projet personnel en développement continu<br><strong>Disponibilité : </strong> Application locale, non publiée en ligne pour le moment.",
    footerText: "© 2026 Hoarau Erwan. Tous droits réservés.",
  },
  en: {
    navAbout: "MY JOURNEY", navProjects: "PROJECTS", navSkills: "SKILLS",
    backLink: "← Back to projects",
    title: "Yu-Gi-Oh collection manager",
    subtitle: "Personal Python project with an AI assistant",
    headings: ["Project description", "Objectives", "Technologies used", "Main features", "Strengths", "Technical challenges", "What I learned", "Project status"],
    desc: "This personal project is a <strong>local web application</strong> to manage my physical Yu-Gi-Oh card collection. It records your cards, shows what is missing to complete a deck and ranks your decks from most to least buildable. Card data (translations, Cardmarket prices, TCG banlist) comes from the public <strong>YGOPRODeck</strong> API. A <strong>deck builder</strong> suggests decks from recent tournament lists, and an <strong>AI assistant</strong> built on a <strong>LangChain</strong> agent builds a deck on request.",
    objectives: [
      "Replace manual collection tracking with a reliable application",
      "Quickly know which cards to buy to finish a deck",
      "Build competitive decks with the cards I already own",
      "Put into practice a tool-using AI agent studied in class (R5.14)"
    ],
    features: [
      "Card search in French and English, with a local data cache",
      "Add cards by set code (e.g. LOB-FR005) or by whole set",
      "Scanner: reads the card name and code with the camera (OCR), including from a phone",
      "Deck management: manual entry, <strong>.ydk</strong> import and export, <strong>ydke://</strong> link",
      "Missing cards calculation and decks ranked from most to least buildable",
      "Deck builder: typical list per archetype drawn from the latest tournament decks, within the banlist",
      "AI assistant: a LangChain agent checks the collection, typical lists and banlist, then suggests a validated deck"
    ],
    strengths: [
      "The AI agent only suggests a deck validated by its tools, and opens the database read-only",
      "Works with a local model (Ollama) or an online provider of your choice",
      "Banlist warnings that do not block input",
      "About sixty automated tests with <strong>pytest</strong>",
      "Data stored locally in an easy-to-back-up SQLite database"
    ],
    challenges: [
      "The API only knows English set codes: matching French codes",
      "Splitting a multi-deck box set based on card codes",
      "Drawing a reliable typical list from tournament decks that mix several variants",
      "Making OCR usable by reading only a thin strip over the card text",
      "Preventing the AI agent from inventing cards or invalid decks"
    ],
    learningsText: "This personal project helped me deepen my skills in:",
    learnings: [
      "Python web development with Flask and SQLite",
      "Consuming an external API and caching data",
      "Designing a tool-using AI agent with LangChain",
      "Automated testing with pytest",
      "Image processing and OCR in the browser"
    ],
    statutText: "<strong>Status: </strong> Personal project under continuous development<br><strong>Availability: </strong> Local application, not published online for the moment.",
    footerText: "© 2026 Hoarau Erwan. All rights reserved.",
  },
  es: {
    navAbout: "MI TRAYECTORIA", navProjects: "PROYECTOS", navSkills: "HABILIDADES",
    backLink: "← Volver a proyectos",
    title: "Gestión de colección Yu-Gi-Oh",
    subtitle: "Proyecto personal en Python con asistente de IA",
    headings: ["Descripción del proyecto", "Objetivos", "Tecnologías utilizadas", "Funcionalidades principales", "Puntos fuertes", "Retos técnicos", "Aprendizajes", "Estado del proyecto"],
    desc: "Este proyecto personal es una <strong>aplicación web local</strong> para gestionar mi colección de cartas Yu-Gi-Oh físicas. Permite registrar tus cartas, ver qué falta para completar un mazo y clasificar tus mazos del más al menos realizable. Los datos de las cartas (traducciones, precios de Cardmarket, banlist TCG) vienen de la API pública <strong>YGOPRODeck</strong>. Un <strong>deck builder</strong> propone mazos a partir de listas de torneo recientes, y un <strong>asistente de IA</strong> basado en un agente <strong>LangChain</strong> construye un mazo a petición.",
    objectives: [
      "Sustituir el seguimiento manual de la colección por una aplicación fiable",
      "Saber rápidamente qué cartas comprar para terminar un mazo",
      "Construir mazos competitivos con las cartas que ya tengo",
      "Poner en práctica un agente de IA con herramientas visto en clase (R5.14)"
    ],
    features: [
      "Búsqueda de cartas en francés e inglés, con caché local de datos",
      "Añadir cartas por código de set (ej. LOB-FR005) o por expansión completa",
      "Escáner: lee el nombre y el código de la carta con la cámara (OCR), también desde un móvil",
      "Gestión de mazos: entrada manual, importación y exportación <strong>.ydk</strong>, enlace <strong>ydke://</strong>",
      "Cálculo de cartas que faltan y mazos clasificados del más al menos realizable",
      "Deck builder: lista tipo por arquetipo sacada de los últimos mazos de torneo, dentro de la banlist",
      "Asistente de IA: un agente LangChain consulta la colección, las listas tipo y la banlist, y propone un mazo verificado"
    ],
    strengths: [
      "El agente de IA solo propone un mazo validado por sus herramientas, y abre la base en solo lectura",
      "Funciona con un modelo local (Ollama) o con el proveedor en línea que elijas",
      "Avisos de banlist sin bloquear la entrada",
      "Unos sesenta tests automatizados con <strong>pytest</strong>",
      "Datos guardados localmente en una base SQLite fácil de respaldar"
    ],
    challenges: [
      "La API solo conoce los códigos de set en inglés: correspondencia de los códigos franceses",
      "Dividir una caja de varios mazos según el código de las cartas",
      "Sacar una lista tipo fiable de mazos de torneo que mezclan varias variantes",
      "Hacer útil el OCR leyendo solo una franja fina sobre el texto de la carta",
      "Impedir que el agente de IA invente cartas o mazos no válidos"
    ],
    learningsText: "Este proyecto personal me permitió profundizar mis habilidades en:",
    learnings: [
      "Desarrollo web en Python con Flask y SQLite",
      "Consumo de una API externa y caché de datos",
      "Diseño de un agente de IA con herramientas con LangChain",
      "Tests automatizados con pytest",
      "Procesamiento de imágenes y OCR en el navegador"
    ],
    statutText: "<strong>Estado: </strong> Proyecto personal en desarrollo continuo<br><strong>Disponibilidad: </strong> Aplicación local, no publicada en línea para el momento.",
    footerText: "© 2026 Hoarau Erwan. Todos los derechos reservados.",
  },
};

function applyYgoTranslation(lang) {
  const t = translations[lang];
  if (!t) return;

  document.documentElement.lang = lang;

  const navItems = document.querySelectorAll("nav ul li a");
  if (navItems[0]) navItems[0].innerHTML = t.navAbout;
  if (navItems[1]) navItems[1].innerHTML = t.navProjects;
  if (navItems[2]) navItems[2].innerHTML = t.navSkills;

  const backLink = document.querySelector(".back-link");
  if (backLink) backLink.innerHTML = t.backLink;

  const h2 = document.querySelector("#project-detail h2");
  if (h2) h2.innerHTML = t.title;

  // h3[0] = sous-titre, puis un titre par section
  const h3s = document.querySelectorAll("#project-detail h3");
  if (h3s[0]) h3s[0].innerHTML = t.subtitle;
  t.headings.forEach((text, i) => { if (h3s[i + 1]) h3s[i + 1].innerHTML = text; });

  const desc = document.querySelector(".project-description");
  if (desc) desc.innerHTML = t.desc;

  const fillList = (selector, items) => {
    const ul = document.querySelector(selector);
    if (ul) ul.innerHTML = items.map(item => `<li>${item}</li>`).join("");
  };
  fillList(".objectives-list", t.objectives);
  fillList(".features-list", t.features);
  fillList(".strengths-list", t.strengths);
  fillList(".challenges-list", t.challenges);
  fillList(".learnings-list", t.learnings);

  const learningsDesc = document.querySelector(".learnings-description");
  if (learningsDesc) learningsDesc.innerHTML = t.learningsText;

  const statut = document.querySelector(".project-statut");
  if (statut) statut.innerHTML = t.statutText;

  const footerP = document.querySelector("footer p");
  if (footerP && t.footerText) footerP.innerHTML = t.footerText;
}

// ── Init immédiate + bouton ───────────────────────────────────────────────────
let currentLang = window.SITE_LANG || "fr";

applyYgoTranslation(currentLang);
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
        applyYgoTranslation(lang);
        updateWidgetLanguage(lang);
        setActiveLangOption(lang);
        langSwitcher.classList.remove("open");
      });
    });
  }

