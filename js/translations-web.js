const translations = {
    fr: {
        navAbout: "MON PARCOURS",
        navProjects: "PROJETS",
        navSkills: "COMPÉTENCES",
        navContact: "CONTACT",
        backLink: "← Retour aux projets",

        webTitle: "Création d'un site web",
        webTitleDesc: "Description du projet",
        webDesc: "Ce projet est mon premier projet universitaire réalisé durant ma première année à l'IUT. L'objectif était de créer un site web sur le sujet de notre choix avec une contrainte particulière : <strong>sans utiliser de div ni de flexbox</strong>. Cette limitation a poussé à utiliser des approches CSS alternatives et créatives.",
        webObjectives: "Objectifs",
        webObjective1: "Créer un site web complet sans utiliser les balises div",
        webObjective2: "Utiliser uniquement du HTML et du CSS",
        webObjective3: "Créer un design attrayant et responsive malgré les contraintes",
        webObjective4: "Apprendre les fondamentaux du développement web",
        webObjective5: "Maîtriser les propriétés CSS avancées",
        webTechs: "Technologies utilisées",
        webStrengths: "Points forts",
        webStrength1: "Respect strict de la contrainte (aucune div ni flexbox)",
        webStrength2: "Utilisation créative de CSS Grid et d'autres propriétés",
        webStrength3: "Design responsive sans framework",
        webStrength4: "Code HTML sémantique et bien structuré",
        webStrength5: "Site pleinement fonctionnel et esthétique",
        webLearnings: "Apprentissages",
        webLearningsText: "Ce premier projet m'a permis de bien comprendre les fondamentaux du web. En travaillant sans div ni flexbox, j'ai dû être créatif et approfondir ma compréhension de CSS. C'est une excellente base pour tous mes futurs projets web.",
        webBtnGitHub: "Voir sur GitHub"
    },
    en: {
        navAbout: "MY JOURNEY",
        navProjects: "PROJECTS",
        navSkills: "SKILLS",
        navContact: "CONTACT",
        backLink: "← Back to projects",

        webTitle: "Website Creation",
        webTitleDesc: "Project Description",
        webDesc: "This project is my first university project completed during my first year at the IUT. The objective was to create a website on a topic of our choice with a particular constraint: <strong>without using divs or flexbox</strong>. This limitation required using alternative and creative CSS approaches.",
        webObjectives: "Objectives",
        webObjective1: "Create a complete website without using div tags",
        webObjective2: "Use only HTML and CSS",
        webObjective3: "Create an attractive and responsive design despite constraints",
        webObjective4: "Learn web development fundamentals",
        webObjective5: "Master advanced CSS properties",
        webTechs: "Technologies Used",
        webStrengths: "Strengths",
        webStrength1: "Strict compliance with constraints (no divs or flexbox)",
        webStrength2: "Creative use of CSS Grid and other properties",
        webStrength3: "Responsive design without framework",
        webStrength4: "Semantic and well-structured HTML code",
        webStrength5: "Fully functional and aesthetic website",
        webLearnings: "Learning Outcomes",
        webLearningsText: "This first project allowed me to understand the fundamentals of the web well. By working without divs or flexbox, I had to be creative and deepen my understanding of CSS. It's an excellent foundation for all my future web projects.",
        webBtnGitHub: "View on GitHub"
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
    if (backLink) backLink.innerHTML = t.backLink;

    // Page title
    document.querySelector('#project-detail h2').innerHTML = t.webTitle;

    // Section headers
    const webH3s = document.querySelectorAll('#project-detail h3');
    webH3s[0].innerHTML = t.webTitleDesc;      // Description du projet
    webH3s[1].innerHTML = t.webObjectives;         // Objectifs
    webH3s[2].innerHTML = t.webTechs;              // Technologies utilisées
    webH3s[3].innerHTML = t.webStrengths;          // Points forts
    webH3s[4].innerHTML = t.webLearnings;          // Apprentissages

    document.querySelector('#project-detail p.project-description').innerHTML = t.webDesc;
    
    const objectivesList = document.querySelector('.objectives-list');
    if(objectivesList) {
        objectivesList.innerHTML = `
            <li>${t.webObjective1}</li>
            <li>${t.webObjective2}</li>
            <li>${t.webObjective3}</li>
            <li>${t.webObjective4}</li>
            <li>${t.webObjective5}</li>
        `;
    }
    
    const strengthsList = document.querySelector('.strengths-list');
    if(strengthsList) {
        strengthsList.innerHTML = `
            <li>${t.webStrength1}</li>
            <li>${t.webStrength2}</li>
            <li>${t.webStrength3}</li>
            <li>${t.webStrength4}</li>
            <li>${t.webStrength5}</li>
        `;
    }
    
    const learningsText = document.querySelector('.learnings-text');
    if(learningsText) learningsText.innerHTML = t.webLearningsText;

    document.querySelector(".project-links").querySelectorAll(".btn-github")[0].innerHTML = t.webBtnGitHub;


    // Update button text
    translateBtn.innerHTML = currentLang === "fr" ? 'FR → EN' : 'EN → FR';
});
