const translations = {
    fr: {
        navAbout: "MON PARCOURS",
        navProjects: "PROJETS",
        navSkills: "COMPÉTENCES",
        navContact: "CONTACT",
        backLink: "← Retour aux projets",

        pcsTitle: "Projet de site Web en PHP",
        pcsSubtitle: "Projet universitaire avec base de données SQL",
        pcsTitleDesc: "Description du projet",
        pcsDesc: "Ce projet universitaire m'a permis de développer un véritable site web en utilisant <strong>PHP</strong> et une <strong>base de données SQL</strong>. L'objectif était de créer une plateforme fonctionnelle avec gestion des données, authentification utilisateur et interface web interactive.",
        pcsObjectives: "Objectifs", 
        pcsObjective1: "Maîtriser PHP et ses concepts de programmation serveur",
        pcsObjective2: "Concevoir et utiliser une base de données SQL",
        pcsObjective3: "Créer une interface web dynamique",
        pcsObjective4: "Gérer l'authentification et les sessions utilisateur",
        pcsObjective5: "Implémenter des fonctionnalités CRUD (Create, Read, Update, Delete)",
        pcsObjective6: "Déployer le site en ligne",
        pcsTechs: "Technologies utilisées",
        pcsFeatures: "Fonctionnalités implémentées",
        pcsFeature1: "Connexion et authentification utilisateur",
        pcsFeature2: "Gestion des profils utilisateurs",
        pcsFeature3: "Opérations CRUD sur la base de données",
        pcsFeature4: "Validation des formulaires côté serveur",
        pcsFeature5: "Gestion des sessions",
        pcsFeature6: "Interface web responsive et intuitive",
        pcsStrengths: "Points forts",
        pcsStrength1: "Maîtrise complète du langage PHP",
        pcsStrength2: "Conception efficace de la base de données",
        pcsStrength3: "Sécurité des données et authentification",
        pcsStrength4: "Déploiement et mise en ligne réussis",
        pcsLearnings: "Apprentissages",
        pcsLearningsText: "Ce projet m'a initié au développement web backend avec PHP. J'ai appris à:",
        pcsLearning1: "Travailler avec des serveurs web et du code côté serveur",
        pcsLearning2: "Concevoir des bases de données relationnelles",
        pcsLearning3: "Gérer l'interaction entre frontend et backend",
        pcsLearning4: "Assurer la sécurité des données utilisateur",
        pcsLearning5: "Déployer une application web complète",
        pcsChallenges: "Défis rencontrés",
        pcsChallenge1: "Gestion de la complexité de la base de données",
        pcsChallenge2: "Partie administration avec AJAX",
        pcsChallenge3: "Optimisation des requêtes de base de données",
        pcsBtnGitHub: "Voir sur GitHub"
    },
    en: {
        navAbout: "MY JOURNEY",
        navProjects: "PROJECTS",
        navSkills: "SKILLS",
        navContact: "CONTACT",
        backLink: "← Back to projects",

        pcsTitle: "PHP Website Project",
        pcsSubtitle: "University Project with SQL Database",
        pcsTitleDesc: "Project Description",
        pcsDesc: "This university project allowed me to develop a real website using <strong>PHP</strong> and an <strong>SQL database</strong>. The goal was to create a functional platform with data management, user authentication, and an interactive web interface.",
        pcsObjectives: "Objectives",
        pcsObjective1: "Master PHP and its server-side programming concepts",
        pcsObjective2: "Design and use an SQL database",
        pcsObjective3: "Create a dynamic web interface",
        pcsObjective4: "Manage user authentication and sessions",
        pcsObjective5: "Implement CRUD (Create, Read, Update, Delete) functionality",
        pcsObjective6: "Deploy the site online",
        pcsTechs: "Technologies Used",
        pcsFeatures: "Implemented Features",
        pcsFeature1: "User login and authentication",
        pcsFeature2: "User profile management",
        pcsFeature3: "CRUD operations on the database",
        pcsFeature4: "Server-side form validation",
        pcsFeature5: "Session management",
        pcsFeature6: "Responsive and intuitive web interface",
        pcsStrengths: "Strengths",
        pcsStrength1: "Complete mastery of the PHP language",
        pcsStrength2: "Efficient database design",
        pcsStrength3: "Data security and authentication implementation",
        pcsStrength4: "Successful deployment and online hosting",
        pcsLearnings: "Learnings",
        pcsLearningsText: "This project introduced me to backend web development with PHP. I learned to:",
        pcsLearning1: "Work with web servers and server-side code",
        pcsLearning2: "Design relational databases",
        pcsLearning3: "Manage the interaction between frontend and backend",
        pcsLearning4: "Ensure user data security",
        pcsLearning5: "Deploy a complete web application",
        pcsChallenges: "Challenges Faced",
        pcsChallenge1: "Managing database complexity",
        pcsChallenge2: "Administration part with AJAX",
        pcsChallenge3: "Optimizing database queries",
        pcsBtnGitHub: "View on GitHub"
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
    document.querySelector('#project-detail h2').innerHTML = t.pcsTitle;

    // Section headers
    const pcsH3s = document.querySelectorAll('#project-detail h3');
    pcsH3s[0].innerHTML = t.pcsSubtitle;        // Sous-titre du projet
    pcsH3s[1].innerHTML = t.pcsTitleDesc;        // Description du projet
    pcsH3s[2].innerHTML = t.pcsObjectives;       // Objectifs
    pcsH3s[3].innerHTML = t.pcsTechs;           // Technologies utilisées
    pcsH3s[4].innerHTML = t.pcsFeatures;        // Fonctionnalités implémentées
    pcsH3s[5].innerHTML = t.pcsStrengths;        // Points forts
    pcsH3s[6].innerHTML = t.pcsLearnings;        // Apprentissages
    pcsH3s[7].innerHTML = t.pcsChallenges;       // Défis rencontrés

    // Objectives
    const objectivesList = document.querySelector('.objectives-list');
    if(objectivesList) {
        objectivesList.innerHTML = `
            <li>${t.pcsObjective1}</li>
            <li>${t.pcsObjective2}</li>
            <li>${t.pcsObjective3}</li>
            <li>${t.pcsObjective4}</li>
            <li>${t.pcsObjective5}</li>
            <li>${t.pcsObjective6}</li>
        `;
    }

    // Features
    const featuresList = document.querySelector('.features-list');
    if(featuresList) {
        featuresList.innerHTML = `
            <li>${t.pcsFeature1}</li>
            <li>${t.pcsFeature2}</li>
            <li>${t.pcsFeature3}</li>
            <li>${t.pcsFeature4}</li>
            <li>${t.pcsFeature5}</li>
            <li>${t.pcsFeature6}</li>
        `;
    }

    // Strengths
    const strengthsList = document.querySelector('.strengths-list');
    if(strengthsList) {
        strengthsList.innerHTML = `
            <li>${t.pcsStrength1}</li>
            <li>${t.pcsStrength2}</li>
            <li>${t.pcsStrength3}</li>
            <li>${t.pcsStrength4}</li>
        `;
    }

    // Learnings
    const learningsList = document.querySelector('.learnings-list');
    if(learningsList) {
        learningsList.innerHTML = `
            <li>${t.pcsLearning1}</li>
            <li>${t.pcsLearning2}</li>
            <li>${t.pcsLearning3}</li>
            <li>${t.pcsLearning4}</li>
            <li>${t.pcsLearning5}</li>
        `;
    }

    // Challenges
    const challengesList = document.querySelector('.challenges-list');
    if(challengesList) {
        challengesList.innerHTML = `
            <li>${t.pcsChallenge1}</li>
            <li>${t.pcsChallenge2}</li>
            <li>${t.pcsChallenge3}</li>
        `;
    }

    // Description
    const projectDesc = document.querySelector('.project-description');
    if(projectDesc) projectDesc.innerHTML = t.pcsDesc;

    document.querySelector(".project-links").querySelectorAll(".btn-github")[0].innerHTML = t.pcsBtnGitHub;

    // Update button text
    translateBtn.innerHTML = currentLang === "fr" ? 'FR → EN' : 'EN → FR';
});
