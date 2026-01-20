const translations = {
    fr: {
        navAbout: "MON PARCOURS",
        navProjects: "PROJETS",
        navSkills: "COMPÉTENCES",
        navContact: "CONTACT",
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
        pokeLearningsText: "Ce projet personnel m'a permis d'approfondir mes compétences en:",
        pokeLearning1: "Conversion et structuration de données existantes",
        pokeLearning2: "Conception de bases de données relationnelles complexes",
        pokeLearning3: "Optimisation des performances avec SQL",
        pokeLearning4: "Développement personnel et apprentissage autonome",
        pokeLearning5: "Créativité dans l'implémentation d'une idée",
        pokeStatut: "État du projet",
        pokeStatutText: "<strong>Statut : </strong>  Projet personnel en développement continu<br><strong>Disponibilité : </strong> Bientôt disponible en ligne",
        pokeBtnGithub: "Voir sur GitHub"
    },
    en: {
        navAbout: "MY JOURNEY",
        navProjects: "PROJECTS",
        navSkills: "SKILLS",
        navContact: "CONTACT",
        backLink: "← Back to projects",

        pokeTitle: "Creating a Pokédex Website",
        pokeSubtitle: "Personal project with SQL database",
        pokeTitleDesc: "Project Description",
        pokeDesc: "This is a personal project that consists of creating a Pokédex using a database originally from an Excel file found online. Finding it not very practical, I decided to convert it to an SQL database and make it a standalone website.",
        pokeEvolutions: "Project Evolution",
        pokeEvolution1: "Discovery of a Pokémon database in Excel",
        pokeEvolution2: "Conversion to structured SQL database",
        pokeEvolution3: "Development of the consultation website",
        pokeEvolution4: "Addition of advanced features",
        pokeEvolution5: "Optimization and continuous improvement",
        pokeObjectives: "Objectives",
        pokeObjective1: "Create an interactive web Pokédex",
        pokeObjective2: "Migrate Excel data to an SQL database",
        pokeObjective3: "Implement an API to retrieve Pokémon data",
        pokeObjective4: "Create an attractive user interface",
        pokeObjective5: "Allow advanced search and filtering of Pokémon",
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
        pokeStrength4: "Fast and precise search and filtering capabilities",
        pokeStrength5: "Modular and extensible codebase",
        pokeTechChallenges: "Technical Challenges",
        pokeChallenge1: "Efficient structuring of a large database",
        pokeChallenge2: "Optimization of queries for performance",
        pokeChallenge3: "Implementation of multi-criteria search",
        pokeChallenge4: "Handling images (multiple per Pokémon)",
        pokeChallenge5: "Responsive design for all devices",
        pokeLearnings: "Learnings",
        pokeLearningsText: "This personal project allowed me to deepen my skills in:",
        pokeLearning1: "Converting and structuring existing data",
        pokeLearning2: "Designing complex relational databases",
        pokeLearning3: "Performance optimization with SQL",
        pokeLearning4: "Personal development and self-learning",
        pokeLearning5: "Creativity in implementing an idea",
        pokeStatut: "Project Status",
        pokeStatutText: "<strong>Status: </strong>  Ongoing personal project<br><strong>Availability: </strong> Coming soon online",
        pokeBtnGithub: "View on GitHub"
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
    document.querySelector('#project-detail h2').innerHTML = t.pokeTitle;

    // Section headers
    const pokeH3s = document.querySelectorAll('#project-detail h3');
    pokeH3s[0].innerHTML = t.pokeSubtitle;        // Subtitle
    pokeH3s[1].innerHTML = t.pokeTitleDesc;      // Title Description
    pokeH3s[2].innerHTML = t.pokeEvolutions;     // Project Evolution
    pokeH3s[3].innerHTML = t.pokeObjectives;     // Objectifs
    pokeH3s[4].innerHTML = t.pokeTechs;          // Technologies utilisées
    pokeH3s[5].innerHTML = t.pokeFeatures;      // Fonctionnalités principales
    pokeH3s[6].innerHTML = t.pokeStrengths;      // Points forts
    pokeH3s[7].innerHTML = t.pokeTechChallenges; // Défis techniques
    pokeH3s[8].innerHTML = t.pokeLearnings;      // Apprentissages
    pokeH3s[9].innerHTML = t.pokeStatut;        // État du projet


    // Description
    const projectDesc = document.querySelector('.project-description');
    if(projectDesc) projectDesc.innerHTML = t.pokeDesc;

    // Project evolution list
    const evolutionItems = document.querySelectorAll('.project-evolution-list li');
    if(evolutionItems) { `
            <li>${t.pokeEvolution1}</li>
            <li>${t.pokeEvolution2}</li>
            <li>${t.pokeEvolution3}</li>
            <li>${t.pokeEvolution4}</li>
            <li>${t.pokeEvolution5}</li>
        `;
    }

    // Objectives list
    const objectivesList = document.querySelector('.objectives-list');
    if(objectivesList) {
        objectivesList.innerHTML = `
            <li>${t.pokeObjective1}</li>
            <li>${t.pokeObjective2}</li>
            <li>${t.pokeObjective3}</li>
            <li>${t.pokeObjective4}</li>
            <li>${t.pokeObjective5}</li>
        `;
    }

    // Features list
    const featuresList = document.querySelector('.features-list');
    if(featuresList) {
        featuresList.innerHTML = `
            <li>${t.pokeFeature1}</li>
            <li>${t.pokeFeature2}</li>
            <li>${t.pokeFeature3}</li>
            <li>${t.pokeFeature4}</li>
            <li>${t.pokeFeature5}</li>
        `;
    }

    // Strengths list
    const strengthsList = document.querySelector('.strengths-list');
    if(strengthsList) {
        strengthsList.innerHTML = `
            <li>${t.pokeStrength1}</li>
            <li>${t.pokeStrength2}</li>
            <li>${t.pokeStrength3}</li>
            <li>${t.pokeStrength4}</li>
            <li>${t.pokeStrength5}</li>
        `;
    }

    // Challenges list
    const challengesList = document.querySelector('.challenges-list');
    if(challengesList) {
        challengesList.innerHTML = `
            <li>${t.pokeChallenge1}</li>
            <li>${t.pokeChallenge2}</li>
            <li>${t.pokeChallenge3}</li>
            <li>${t.pokeChallenge4}</li>
            <li>${t.pokeChallenge5}</li>
        `;
    }

    // Learnings text
    const learningsText = document.querySelector('.learnings-description');
    if(learningsText) learningsText.innerHTML = t.pokeLearningsText;

    // Learnings list
    const learningsList = document.querySelector('.learnings-list');
    if(learningsList) {
        learningsList.innerHTML = `
            <li>${t.pokeLearning1}</li>
            <li>${t.pokeLearning2}</li>
            <li>${t.pokeLearning3}</li>
            <li>${t.pokeLearning4}</li>
            <li>${t.pokeLearning5}</li>
        `;
    }

    // Status text
    const statutText = document.querySelector('.project-statut');
    if(statutText) statutText.innerHTML = t.pokeStatutText;

    // GitHub button
    const githubBtn = document.querySelector('.project-github-btn');
    if(githubBtn) githubBtn.innerHTML = t.pokeBtnGithub;



    // Update button text
    translateBtn.innerHTML = currentLang === "fr" ? 'FR → EN' : 'EN → FR';
});
