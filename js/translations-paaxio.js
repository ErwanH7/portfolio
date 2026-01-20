const translations = {
    fr: {
        navAbout: "MON PARCOURS",
        navProjects: "PROJETS",
        navSkills: "COMPÉTENCES",
        navContact: "CONTACT",
        backLink: "← Retour aux projets",

        paaxioTitle: "Projet Paaxio",
        paaxioSubtitle: "Développement d'un site web selon un cahier des charges",
        paaxioTitleDesc: "Description du projet",
        paaxioDesc: "Paaxio est un projet universitaire ambitieux qui se divise en deux phases. La première phase (première année) a consisté à rédiger un <strong>cahier des charges complet</strong> définissant les fonctionnalités et les spécifications du site. La deuxième phase (actuellement en cours en deuxième année) implique le <strong>développement du site web fonctionnel</strong> respectant ce cahier des charges.",
        paaxioConcept: "Concept du projet",
        paaxioConceptDesc: "Paaxio est une plateforme innovante destinée à offrir une expérience utilisateur unique. Le projet combine design moderne et fonctionnalités avancées pour répondre aux besoins spécifiques définis dans le cahier des charges.",
        paaxioPhase1: "Phase 1 - Cahier des charges (Année 1) ✓",
        paaxioPhase1li1: "Analyse des besoins utilisateurs",
        paaxioPhase1li2: "Définition des fonctionnalités principales",
        paaxioPhase1li3: "Spécifications techniques détaillées",
        paaxioPhase1li4: "Création de wireframes et prototypes",
        paaxioPhase1li5: "Planification du projet",
        paaxioPhase2: "Phase 2 - Développement web (Année 2)",
        paaxioPhase2Desc: "Cette phase consiste à implémenter le cahier des charges précédemment défini. Le site sera développé en respectant scrupuleusement les spécifications et en utilisant les meilleures pratiques de développement web.",
        paaxioObjectives: "Objectifs de développement",
        paaxioObjective1: "Créer une interface utilisateur attrayante et intuitive",
        paaxioObjective2: "Implémenter les fonctionnalités selon les spécifications",
        paaxioObjective3: "Gérer les données de manière sécurisée",
        paaxioObjective4: "Assurer une expérience utilisateur optimale",
        paaxioObjective5: "Respecter les standards web et d'accessibilité",
        paaxioObjective6: "Assurer la performance et la scalabilité",
        paaxioTechs: "Technologies utilisées",
        paaxioStrengths: "Points forts attendus",
        paaxioStrength1: "Respect strict du cahier des charges",
        paaxioStrength2: "Interface utilisateur professionnelle",
        paaxioStrength3: "Code modulaire et maintenable",
        paaxioStrength4: "Documentation complète",
        paaxioLearnings: "Apprentissages attendus",
        paaxioLearnings1: "Gestion complète du cycle de développement d'un projet",
        paaxioLearnings2: "Implémentation d'un cahier des charges en environnement professionnel",
        paaxioLearnings3: "Travail en équipe et collaboration",
        paaxioLearnings4: "Gestion de projet et planification",
        paaxioLearnings5: "Développement full-stack",
        paaxioProjectStatus: "État du projet",
        paaxioProjectStatusDesc: "<strong>Phase 1 : </strong> Cahier des charges complété et validé<br>     <strong>Phase 2 : </strong> En cours de développement",
        paaxioBtnGitHub: "Voir sur GitHub"
    },
    en: {
        navAbout: "MY JOURNEY",
        navProjects: "PROJECTS",
        navSkills: "SKILLS",
        navContact: "CONTACT",
        backLink: "← Back to projects",

        paaxioTitle: "Paaxio Project",
        paaxioSubtitle: "Website Development Based on Specifications",
        paaxioTitleDesc: "Project Description",
        paaxioDesc: "Paaxio is an ambitious university project divided into two phases. The first phase (first year) consisted of writing a <strong>comprehensive specifications document</strong> defining the site's features and specifications. The second phase (currently underway in the second year) involves the <strong>development of a functional website</strong> complying with this specifications document.",
        paaxioConcept: "Project Concept",
        paaxioConceptDesc: "Paaxio is an innovative platform designed to provide a unique user experience. The project combines modern design and advanced features to meet the specific needs defined in the specifications document.",
        paaxioPhase1: "Phase 1- Specifications Document (Year 1) ✓",
        paaxioPhase1li1: "User needs analysis",
        paaxioPhase1li2: "Definition of main features",
        paaxioPhase1li3: "Detailed technical specifications",
        paaxioPhase1li4: "Creation of wireframes and prototypes",
        paaxioPhase1li5: "Project planning",
        paaxioPhase2: "Phase 2- Website Development (Year 2)",
        paaxioPhase2Desc: "This phase involves implementing the previously defined specifications document. The website will be developed while strictly adhering to the specifications and using best practices in web development.",
        paaxioObjectives: "Objectives of Development",
        paaxioObjective1: "Create a detailed and professional specifications document",
        paaxioObjective2: "Implement the features according to the specifications",
        paaxioObjective3: "Manage data securely",
        paaxioObjective4: "Ensure optimal user experience",
        paaxioObjective5: "Respect web standards and accessibility",
        paaxioObjective6: "Ensure performance and scalability",
        paaxioTechs: "Technologies Used",
        paaxioStrengths: "Strengths Expected",
        paaxioStrength1: "Realistic project with distinct phases",
        paaxioStrength2: "Professional and detailed specifications document",
        paaxioStrength3: "Modern and responsive website",
        paaxioStrength4: "Use of current web technologies",
        paaxioLearnings: "Learning Outcomes",
        paaxioLearnings1: "Complete management of a project's development cycle",
        paaxioLearnings2: "Implementation of a specifications document in a professional environment",
        paaxioLearnings3: "Teamwork and collaboration",
        paaxioLearnings4: "Project management and planning",
        paaxioLearnings5: "Full-stack development",
        paaxioProjectStatus: "Project Status",
        paaxioProjectStatusDesc: "<strong>Phase 1: </strong> Specifications document completed and validated<br>     <strong>Phase 2: </strong> In development",
        paaxioBtnGitHub: "View on GitHub"
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
    document.querySelector('#project-detail h2').innerHTML = t.paaxioTitle;

    // Section headers
    const paaxioH3s = document.querySelectorAll('#project-detail h3');
    paaxioH3s[0].innerHTML = t.paaxioSubtitle;      // Sous titre du projet
    paaxioH3s[1].innerHTML = t.paaxioTitleDesc;      // Description du projet
    paaxioH3s[2].innerHTML = t.paaxioConcept;       // Concept du projet
    paaxioH3s[3].innerHTML = t.paaxioPhase1;       // Phase 1
    paaxioH3s[4].innerHTML = t.paaxioPhase2;       // Phase 2
    paaxioH3s[5].innerHTML = t.paaxioObjectives;   // Objectifs
    paaxioH3s[6].innerHTML = t.paaxioTechs;        // Technologies utilisées
    paaxioH3s[7].innerHTML = t.paaxioStrengths;    // Points forts
    paaxioH3s[8].innerHTML = t.paaxioLearnings;    // Apprentissages
    paaxioH3s[9].innerHTML = t.paaxioProjectStatus; // État du projet

    document.querySelector('.project-description').innerHTML = t.paaxioDesc;

    // Phase 1 list items
    const phase1List = document.querySelector('.phase-info ul');
    if(phase1List) {
        phase1List.innerHTML = `
            <li>${t.paaxioPhase1li1}</li>
            <li>${t.paaxioPhase1li2}</li>
            <li>${t.paaxioPhase1li3}</li>
            <li>${t.paaxioPhase1li4}</li>
            <li>${t.paaxioPhase1li5}</li>
        `;
    }

    const phase2Para = document.querySelector('.phase-info-2');
    if(phase2Para) phase2Para.innerHTML = t.paaxioPhase2Desc;

    // Objectives
    const objectivesList = document.querySelector('.objectives-list');
    if(objectivesList) {
        objectivesList.innerHTML = `
            <li>${t.paaxioObjective1}</li>
            <li>${t.paaxioObjective2}</li>
            <li>${t.paaxioObjective3}</li>
            <li>${t.paaxioObjective4}</li>
            <li>${t.paaxioObjective5}</li>
            <li>${t.paaxioObjective6}</li>
        `;
    }

    // Strengths
    const strengthsList = document.querySelector('.strengths-list');
    if(strengthsList) {
        strengthsList.innerHTML = `
        <li>${t.paaxioStrength1}</li>
        <li>${t.paaxioStrength2}</li>
        <li>${t.paaxioStrength3}</li>
        <li>${t.paaxioStrength4}</li>
    `;
    }

    // Learnings
    const learningsList = document.querySelector('.learnings-list');
    if(learningsList) {
        learningsList.innerHTML = `
        <li>${t.paaxioLearnings1}</li>
        <li>${t.paaxioLearnings2}</li>
        <li>${t.paaxioLearnings3}</li>
        <li>${t.paaxioLearnings4}</li>
        <li>${t.paaxioLearnings5}</li>
    `;
    }

    // Project Status
    document.querySelector('.project-status').innerHTML = t.paaxioProjectStatusDesc;

    document.querySelector(".project-links").querySelectorAll(".btn-github")[0].innerHTML = t.paaxioBtnGitHub;

    // Update button text
    translateBtn.innerHTML = currentLang === "fr" ? 'FR → EN' : 'EN → FR';
});
