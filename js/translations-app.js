const translations = {
    fr: {
        navAbout: "MON PARCOURS",
        navProjects: "PROJETS",
        navSkills: "COMPÉTENCES",
        navContact: "CONTACT",
        backLink: "← Retour aux projets",

        appTitle: "Développement d'une application",
        appTitleDesc: "Description du projet",
        appDesc: "Ce projet universitaire m'a permis de développer une véritable application desktop en utilisant le framework Qt. Le travail s'est déroulé en respectant un <strong>cahier des charges détaillé</strong> fourni par les enseignants, ce qui m'a initié aux méthodes de développement professionnel.",
        appObjectives: "Objectifs",
        appObjective1: "Développer une application desktop fonctionnelle avec Qt",
        appObjective2: "Respecter un cahier des charges technique",
        appObjective3: "Implémenter une interface utilisateur intuitive",
        appObjective4: "Gérer la base de données et les données persistantes",
        appObjective5: "Assurer la qualité et la stabilité du code",
        appFeatures: "Fonctionnalités principales",
        appFeatures1: "Interface graphique moderne et responsive",
        appFeatures2: "Gestion d'événements complexes",
        appFeatures3: "Persistance de données efficace",
        appFeatures4: "Système d'authentification sécurisé",
        appFeatures5: "Rapports et analyses intégrés",
        appTechs: "Technologies utilisées",
        appStrengths: "Points forts",
        appStrength1: "Application desktop complète et fonctionnelle",
        appStrength2: "Interface utilisateur bien conçue avec Qt",
        appStrength3: "Gestion efficace de la base de données",
        appStrength4: "Respect complet du cahier des charges",
        appStrength5: "Code bien structuré et maintenable",
        appLearnings: "Apprentissages",
        appLearningsText: "Ce projet m'a permis de découvrir le développement d'applications desktop et le framework Qt. J'ai appris l'importance de respecter un cahier des charges et de travailler de manière professionnelle. C'est une excellente introduction au développement d'applications complexes.",
        appBtnGitHub: "Voir sur GitHub"
    },
    en: {
        navAbout: "MY JOURNEY",
        navProjects: "PROJECTS",
        navSkills: "SKILLS",
        navContact: "CONTACT",
        backLink: "← Back to projects",

        appTitle: "Application Development",
        appTitleDesc: "Project Description",
        appDesc: "This university project allowed me to develop a real desktop application using the Qt framework. The work was carried out in compliance with a <strong>detailed specifications document</strong> provided by the teachers, which introduced me to professional development methods.",
        appObjectives: "Objectives",
        appObjective1: "Develop a functional desktop application with Qt",
        appObjective2: "Comply with technical specifications",
        appObjective3: "Implement an intuitive user interface",
        appObjective4: "Manage the database and persistent data",
        appObjective5: "Ensure code quality and stability",
        appFeatures: "Main Features",
        appFeatures1: "Modern and responsive graphical interface",
        appFeatures2: "Complex event management",
        appFeatures3: "Efficient data persistence",
        appFeatures4: "Secure authentication system",
        appFeatures5: "Integrated reports and analytics",
        appTechs: "Technologies Used",
        appStrengths: "Strengths",
        appStrength1: "Complete and functional desktop application",
        appStrength2: "Well-designed user interface with Qt",
        appStrength3: "Efficient database management",
        appStrength4: "Full compliance with specifications",
        appStrength5: "Well-structured and maintainable code",
        appLearnings: "Learning Outcomes",
        appLearningsText: "This project allowed me to discover desktop application development and the Qt framework. I learned the importance of following a specifications document and working professionally. It's an excellent introduction to developing complex applications.",
        appBtnGitHub: "View on GitHub"
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
    document.querySelector('#project-detail h2').innerHTML = t.appTitle;

    // Section headers
    const appH3s = document.querySelectorAll('#project-detail h3');
    appH3s[0].innerHTML = t.appTitleDesc;          // Description du projet
    appH3s[1].innerHTML = t.appObjectives;         // Objectifs
    appH3s[2].innerHTML = t.appTechs;              // Technologies utilisées        
    appH3s[3].innerHTML = t.appFeatures;           // Fonctionnalités principales
    appH3s[4].innerHTML = t.appStrengths;          // Points forts
    appH3s[5].innerHTML = t.appLearnings;          // Apprentissages

    document.querySelector('.project-description').innerHTML = t.appDesc;

    // Objectives
    const objectivesList = document.querySelector('.objectives-list');
    if(objectivesList) {
        objectivesList.innerHTML = `
            <li>${t.appObjective1}</li>
            <li>${t.appObjective2}</li>
            <li>${t.appObjective3}</li>
            <li>${t.appObjective4}</li>
            <li>${t.appObjective5}</li>
        `;
    }

    // Technologies
    const FeaturesList = document.querySelector('.features-list');
    if(FeaturesList) {
        FeaturesList.innerHTML = `
            <li>${t.appFeatures1}</li>
            <li>${t.appFeatures2}</li>
            <li>${t.appFeatures3}</li>
            <li>${t.appFeatures4}</li>
            <li>${t.appFeatures5}</li>
        `;
    }

    // Strengths
    const strengthsList = document.querySelector('.strengths-list');
    if(strengthsList) {
        strengthsList.innerHTML = `
        <li>${t.appStrength1}</li>
        <li>${t.appStrength2}</li>
        <li>${t.appStrength3}</li>
        <li>${t.appStrength4}</li>
        <li>${t.appStrength5}</li>
        `
    }

    // Learnings
    document.querySelector('.learnings-text').innerHTML = t.appLearningsText;

    document.querySelector(".project-links").querySelectorAll(".btn-github")[0].innerHTML = t.appBtnGitHub;    

    // Update button text
    translateBtn.innerHTML = currentLang === "fr" ? 'FR → EN' : 'EN → FR';
});
