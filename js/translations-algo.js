const translations = {
    fr: {
        navAbout: "MON PARCOURS",
        navProjects: "PROJETS",
        navSkills: "COMPÉTENCES",
        navContact: "CONTACT",
        backLink: "← Retour aux projets",

        algoTitle: "Algorithme de recherche du plus court chemin",
        algoTitleDesc : "Description du projet",
        algoDesc: "Ce projet universitaire m'a permis d'approfondir mes connaissances en algorithmique et structure de données. L'objectif était d'implémenter et comparer plusieurs <strong>algorithmes de recherche du plus court chemin</strong> entre différents points dans un graphe, codés entièrement en Python.",
        algoObjectives: "Objectifs",
        algoObjective1: "Implémenter trois algorithmes majeurs de plus court chemin",
        algoObjective2: "Comprendre les concepts de graphes et de recherche de chemins",
        algoObjective3: "Analyser et comparer les performances des algorithmes",
        algoObjective4: "Créer une visualisation des résultats",
        algoObjective5: "Optimiser le code pour différents types de données",
        algoAlgorithms: "Algorithmes implémentés",
        algoDijkstra: "Dijkstra",
        algoDijkstraDesc: "Algorithme glouton trouvant le chemin le plus court depuis un sommet source vers tous les autres sommets, adapté aux graphes à poids positifs.",
        algoAStar: "A*",
        algoAStarDesc: "Algorithme de recherche heuristique combinant les avantages de Dijkstra avec une heuristique pour accélérer la recherche.",
        algoBellmanFord: "Bellman-Ford",
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
        algoResult: "Résultat",
        algoResult1: "Les trois algorithmes produisent les mêmes chemins optimaux",
        algoResult2: "Dijkstra et A* sont plus performants que Bellman-Ford sur les graphes sans poids négatifs",
        algoResult3: "A* offre la meilleure performance en utilisant une heuristique appropriée",
        algoResult4: "Bellman-Ford gère correctement les cas limites",
        algoBtnGitHub: "Voir sur GitHub"
    },
    en: {
        navAbout: "MY JOURNEY",
        navProjects: "PROJECTS",
        navSkills: "SKILLS",
        navContact: "CONTACT",
        backLink: "← Back to projects",

        algoTitle: "Shortest Path Search Algorithm",
        algoTitleDesc : "Project Description",
        algoDesc: "This university project allowed me to deepen my knowledge of algorithms and data structures. The objective was to implement and compare several <strong>shortest path search algorithms</strong> between different points in a graph, coded entirely in Python.",
        algoObjectives: "Objectives",
        algoObjective1: "Implement three major shortest path algorithms",
        algoObjective2: "Understand graph concepts and path finding",
        algoObjective3: "Analyze and compare algorithm performance",
        algoObjective4: "Create a visualization of results",
        algoObjective5: "Optimize code for different data types",
        algoAlgorithms: "Implemented Algorithms",
        algoDijkstra: "Dijkstra",
        algoDijkstraDesc: "Greedy algorithm finding the shortest path from a source vertex to all other vertices, suitable for graphs with positive weights.",
        algoAStar: "A*",
        algoAStarDesc: "Heuristic search algorithm combining Dijkstra's advantages with a heuristic to accelerate the search.",
        algoBellmanFord: "Bellman-Ford",
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
        algoResult: "Result",
        algoResult1: "All three algorithms produce the same optimal paths",
        algoResult2: "Dijkstra and A* outperform Bellman-Ford on graphs without negative weights",
        algoResult3: "A* offers the best performance using an appropriate heuristic",
        algoResult4: "Bellman-Ford correctly handles edge cases",
        algoBtnGitHub: "View on GitHub"
    }
};

let currentLang = "fr";
const translateBtn = document.getElementById("translateBtn");

translateBtn.addEventListener("click", () => {
    currentLang = currentLang === "fr" ? "en" : "fr";
    const t = translations[currentLang];

    // Navigation
    document.querySelector('nav ul li:nth-child(1) a').innerHTML = t.navAbout;
    document.querySelector('nav ul li:nth-child(2) a').innerHTML = t.navProjects;
    document.querySelector('nav ul li:nth-child(3) a').innerHTML = t.navSkills;
    document.querySelector('nav ul li:nth-child(4) a').innerHTML = t.navContact;

    // Back link
    const backLink = document.querySelector('.back-link');
    if(backLink) backLink.innerHTML = t.backLink;

    // Page title
    document.querySelector('#project-detail h2').innerHTML = t.algoTitle;

    // Section headers
    const algoH3s = document.querySelectorAll('#project-detail h3');
    algoH3s[0].innerHTML = t.algoTitleDesc;      // Description du projet
    algoH3s[1].innerHTML = t.algoObjectives;      // Objectifs
    algoH3s[2].innerHTML = t.algoAlgorithms;       // Algorithmes implémentés
    algoH3s[3].innerHTML = t.algoTechs;            // Technologies utilisées
    algoH3s[4].innerHTML = t.algoStrengths;        // Points forts
    algoH3s[5].innerHTML = t.algoLearnings;        // Apprentissages
    algoH3s[6].innerHTML = t.algoResult;           // Résultats

    // Description
    const projectDesc = document.querySelector('.project-description');
    if(projectDesc) projectDesc.innerHTML = t.algoDesc;

    const objectivesList = document.querySelector('.objectives-list');
    if(objectivesList) {
        objectivesList.innerHTML = `
            <li>${t.algoObjective1}</li>
            <li>${t.algoObjective2}</li>
            <li>${t.algoObjective3}</li>
            <li>${t.algoObjective4}</li>
            <li>${t.algoObjective5}</li>
        `;
    }

    const strengthsList = document.querySelector('.strengths-list');
    if(strengthsList) {
        strengthsList.innerHTML = `
        <li>${t.algoObjective1}</li>
        <li>${t.algoObjective2}</li>
        <li>${t.algoObjective3}</li>
        <li>${t.algoObjective4}</li>
        <li>${t.algoObjective5}</li>
    `;
    }

    const algoCard = document.querySelectorAll('.algo-card');
    if(algoCard.length > 0) {
        algoCard[0].innerHTML = `<h4>Dijkstra</h4><p>${t.algoDijkstraDesc}</p>`;
        algoCard[1].innerHTML = `<h4>A*</h4><p>${t.algoAStarDesc}</p>`;
        algoCard[2].innerHTML = `<h4>Bellman-Ford</h4><p>${t.algoBellmanFordDesc}</p>`;
    }

    document.querySelector('.learnings-text').innerHTML = t.algoLearningsText;

    const algoResult = document.querySelector('.results-list');
    if(algoResult) {
        algoResult.innerHTML = `
            <li>${t.algoResult1}</li>
            <li>${t.algoResult2}</li>
            <li>${t.algoResult3}</li>
            <li>${t.algoResult4}</li>
        `;
    }

    document.querySelector('.btn-github').innerHTML = t.algoBtnGitHub;

    // Update button text
    translateBtn.innerHTML = currentLang === "fr" ? 'FR → EN' : 'EN → FR';
});