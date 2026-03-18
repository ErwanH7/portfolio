/**
 * translations-algo.js
 * Traductions + application immédiate au chargement (via window.SITE_LANG de lang.js)
 */

const translations = {
  fr: {
    navAbout: "MON PARCOURS", navProjects: "PROJETS", navSkills: "COMPÉTENCES", 
    backLink: "← Retour aux projets",
    algoTitle: "Algorithme de recherche du plus court chemin",
    algoTitleDesc: "Description du projet",
    algoDesc: "Ce projet universitaire m'a permis d'approfondir mes connaissances en algorithmique et structure de données. L'objectif était d'implémenter et comparer plusieurs <strong>algorithmes de recherche du plus court chemin</strong> entre différents points dans un graphe, codés entièrement en Python.",
    algoObjectives: "Objectifs",
    algoObjective1: "Implémenter trois algorithmes majeurs de plus court chemin",
    algoObjective2: "Comprendre les concepts de graphes et de recherche de chemins",
    algoObjective3: "Analyser et comparer les performances des algorithmes",
    algoObjective4: "Créer une visualisation des résultats",
    algoObjective5: "Optimiser le code pour différents types de données",
    algoAlgorithms: "Algorithmes implémentés",
    algoDijkstraDesc: "Algorithme glouton trouvant le chemin le plus court depuis un sommet source vers tous les autres sommets, adapté aux graphes à poids positifs.",
    algoAStarDesc: "Algorithme de recherche heuristique combinant les avantages de Dijkstra avec une heuristique pour accélérer la recherche.",
    algoBellmanFordDesc: "Algorithme capable de gérer les arêtes à poids négatifs, plus lent que Dijkstra mais plus flexible.",
    algoTechs: "Technologies utilisées",
    algoStrengths: "Points forts",
    algoStrength1: "Implémentation complète et correcte de trois algorithmes complexes",
    algoStrength2: "Gestion efficace des structures de données (listes, dictionnaires, priorités)",
    algoStrength3: "Analyse comparative des algorithmes (complexité temporelle et spatiale)",
    algoStrength4: "Visualisation graphique des résultats",
    algoStrength5: "Code testé et validé",
    algoLearnings: "Apprentissages",
    algoLearningsText: "Ce projet m'a permis de maîtriser les concepts fondamentaux d'algorithmique et de structure de données. J'ai appris à implémenter des algorithmes complexes, à analyser leur performance, et à traiter des graphes. C'est un excellent projet pour démontrer la compréhension des algorithmes classiques en informatique.",
    algoResult: "Résultats",
    algoResult1: "Les trois algorithmes produisent les mêmes chemins optimaux",
    algoResult2: "Dijkstra et A* sont plus performants que Bellman-Ford sur les graphes sans poids négatifs",
    algoResult3: "A* offre la meilleure performance en utilisant une heuristique appropriée",
    algoResult4: "Bellman-Ford gère correctement les cas limites",
    algoBtnGitHub: "Voir sur GitHub",
    footerText: "© 2026 Hoarau Erwan. Tous droits réservés.",
    btnLabel: "FR → EN",
  },
  en: {
    navAbout: "MY JOURNEY", navProjects: "PROJECTS", navSkills: "SKILLS",
    backLink: "← Back to projects",
    algoTitle: "Shortest Path Search Algorithm",
    algoTitleDesc: "Project Description",
    algoDesc: "This university project allowed me to deepen my knowledge of algorithms and data structures. The objective was to implement and compare several <strong>shortest path search algorithms</strong> between different points in a graph, coded entirely in Python.",
    algoObjectives: "Objectives",
    algoObjective1: "Implement three major shortest path algorithms",
    algoObjective2: "Understand graph concepts and path finding",
    algoObjective3: "Analyze and compare algorithm performance",
    algoObjective4: "Create a visualization of results",
    algoObjective5: "Optimize code for different data types",
    algoAlgorithms: "Implemented Algorithms",
    algoDijkstraDesc: "Greedy algorithm finding the shortest path from a source vertex to all other vertices, suitable for graphs with positive weights.",
    algoAStarDesc: "Heuristic search algorithm combining Dijkstra's advantages with a heuristic to accelerate the search.",
    algoBellmanFordDesc: "Algorithm capable of handling negative weight edges, slower than Dijkstra but more flexible.",
    algoTechs: "Technologies Used",
    algoStrengths: "Strengths",
    algoStrength1: "Complete and correct implementation of three complex algorithms",
    algoStrength2: "Efficient data structure management (lists, dictionaries, priorities)",
    algoStrength3: "Comparative analysis of algorithms (time and space complexity)",
    algoStrength4: "Visual representation of results",
    algoStrength5: "Tested and validated code",
    algoLearnings: "Learning Outcomes",
    algoLearningsText: "This project allowed me to master the fundamental concepts of algorithms and data structures. I learned how to implement complex algorithms, analyze their performance, and process graphs. It's an excellent project to demonstrate understanding of classic computer science algorithms.",
    algoResult: "Results",
    algoResult1: "All three algorithms produce the same optimal paths",
    algoResult2: "Dijkstra and A* outperform Bellman-Ford on graphs without negative weights",
    algoResult3: "A* offers the best performance using an appropriate heuristic",
    algoResult4: "Bellman-Ford correctly handles edge cases",
    algoBtnGitHub: "View on GitHub",
    footerText: "© 2026 Hoarau Erwan. All rights reserved.",
    btnLabel: "EN → ES",
  },
  es: {
    navAbout: "MI TRAYECTORIA", navProjects: "PROYECTOS", navSkills: "HABILIDADES", 
    backLink: "← Volver a proyectos",
    algoTitle: "Algoritmo de búsqueda del camino más corto",
    algoTitleDesc: "Descripción del proyecto",
    algoDesc: "Este proyecto universitario me permitió profundizar mis conocimientos en algoritmos y estructuras de datos. El objetivo era implementar y comparar varios <strong>algoritmos de búsqueda del camino más corto</strong> entre diferentes puntos en un grafo, codificados completamente en Python.",
    algoObjectives: "Objetivos",
    algoObjective1: "Implementar tres algoritmos principales de camino más corto",
    algoObjective2: "Comprender los conceptos de grafos y búsqueda de caminos",
    algoObjective3: "Analizar y comparar el rendimiento de los algoritmos",
    algoObjective4: "Crear una visualización de los resultados",
    algoObjective5: "Optimizar el código para diferentes tipos de datos",
    algoAlgorithms: "Algoritmos implementados",
    algoDijkstraDesc: "Algoritmo voraz que encuentra el camino más corto desde un vértice fuente a todos los demás vértices, adecuado para grafos con pesos positivos.",
    algoAStarDesc: "Algoritmo de búsqueda heurística que combina las ventajas de Dijkstra con una heurística para acelerar la búsqueda.",
    algoBellmanFordDesc: "Algoritmo capaz de manejar aristas con pesos negativos, más lento que Dijkstra pero más flexible.",
    algoTechs: "Tecnologías utilizadas",
    algoStrengths: "Puntos fuertes",
    algoStrength1: "Implementación completa y correcta de tres algoritmos complejos",
    algoStrength2: "Gestión eficiente de estructuras de datos (listas, diccionarios, prioridades)",
    algoStrength3: "Análisis comparativo de algoritmos (complejidad temporal y espacial)",
    algoStrength4: "Visualización gráfica de los resultados",
    algoStrength5: "Código probado y validado",
    algoLearnings: "Aprendizajes",
    algoLearningsText: "Este proyecto me permitió dominar los conceptos fundamentales de algoritmos y estructuras de datos. Aprendí a implementar algoritmos complejos, analizar su rendimiento y procesar grafos. Es un excelente proyecto para demostrar la comprensión de los algoritmos clásicos en informática.",
    algoResult: "Resultados",
    algoResult1: "Los tres algoritmos producen los mismos caminos óptimos",
    algoResult2: "Dijkstra y A* superan a Bellman-Ford en grafos sin pesos negativos",
    algoResult3: "A* ofrece el mejor rendimiento usando una heurística apropiada",
    algoResult4: "Bellman-Ford maneja correctamente los casos especiales",
    algoBtnGitHub: "Ver en GitHub",
    footerText: "© 2026 Hoarau Erwan. Todos los derechos reservados.",
    btnLabel: "ES → FR",
  }
};

function applyAlgoTranslation(lang) {
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
  if (h2) h2.innerHTML = t.algoTitle;

  const h3s = document.querySelectorAll("#project-detail h3");
  if (h3s[0]) h3s[0].innerHTML = t.algoTitleDesc;
  if (h3s[1]) h3s[1].innerHTML = t.algoObjectives;
  if (h3s[2]) h3s[2].innerHTML = t.algoAlgorithms;
  if (h3s[3]) h3s[3].innerHTML = t.algoTechs;
  if (h3s[4]) h3s[4].innerHTML = t.algoStrengths;
  if (h3s[5]) h3s[5].innerHTML = t.algoLearnings;
  if (h3s[6]) h3s[6].innerHTML = t.algoResult;

  const desc = document.querySelector(".project-description");
  if (desc) desc.innerHTML = t.algoDesc;

  const objectives = document.querySelector(".objectives-list");
  if (objectives) objectives.innerHTML = `
    <li>${t.algoObjective1}</li><li>${t.algoObjective2}</li>
    <li>${t.algoObjective3}</li><li>${t.algoObjective4}</li>
    <li>${t.algoObjective5}</li>`;

  const strengths = document.querySelector(".strengths-list");
  if (strengths) strengths.innerHTML = `
    <li>${t.algoStrength1}</li><li>${t.algoStrength2}</li>
    <li>${t.algoStrength3}</li><li>${t.algoStrength4}</li>
    <li>${t.algoStrength5}</li>`;

  const algoCards = document.querySelectorAll(".algo-card");
  if (algoCards[0]) algoCards[0].innerHTML = `<h4>Dijkstra</h4><p>${t.algoDijkstraDesc}</p>`;
  if (algoCards[1]) algoCards[1].innerHTML = `<h4>A*</h4><p>${t.algoAStarDesc}</p>`;
  if (algoCards[2]) algoCards[2].innerHTML = `<h4>Bellman-Ford</h4><p>${t.algoBellmanFordDesc}</p>`;

  const learnings = document.querySelector(".learnings-text");
  if (learnings) learnings.innerHTML = t.algoLearningsText;

  const results = document.querySelector(".results-list");
  if (results) results.innerHTML = `
    <li>${t.algoResult1}</li><li>${t.algoResult2}</li>
    <li>${t.algoResult3}</li><li>${t.algoResult4}</li>`;

  const ghBtn = document.querySelector(".btn-github");
  if (ghBtn) ghBtn.innerHTML = t.algoBtnGitHub;

  const footerP = document.querySelector("footer p");
  if (footerP && t.footerText) footerP.innerHTML = t.footerText;
}

// ── Init immédiate + bouton ───────────────────────────────────────────────────
let currentLang = window.SITE_LANG || "fr";

// appliquer immédiatement les traductions et widget
applyAlgoTranslation(currentLang);
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
        applyAlgoTranslation(lang);
        updateWidgetLanguage(lang);
        setActiveLangOption(lang);
        langSwitcher.classList.remove("open");
      });
    });
  }
