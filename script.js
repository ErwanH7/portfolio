// Animation des cartes de projets au scroll
const cards = document.querySelectorAll('.project-card');
window.addEventListener('scroll', () => {
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if(rect.top < window.innerHeight - 100) {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }
    });
});

// Formulaire de contact
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const response = await fetch('contact.php', { method: 'POST', body: data });
    const result = await response.text();
    status.textContent = result;
    form.reset();
});

// Traduction EN/FR
const translations = {
    fr: {
        navAbout: "À propos",
        navProjects: "Projets",
        navContact: "Contact",

        aboutTitle: "À propos de moi",
        about1: "Bonjour, je m'appelle <strong>Hoarau Erwan</strong> et je suis actuellement étudiant en <strong>informatique à l'IUT de Bayonne et du Pays Basque.</strong>",
        about2: "Passionné par les <strong>nouvelles technologies</strong>, je souhaite développer mes compétences en <strong>développement d'applications et de sites web</strong>, dans le but de contribuer à des projets innovants.",
        about3: "Mon <strong>esprit d'équipe, ma rigueur et ma discipline</strong> me permettent de m'intégrer rapidement et de mener à bien des projets ambitieux.",

        projectsTitle: "Mes projets",
        project1Title: "Création d'un site web",
        project1Desc: "Il s'agit de mon premier projet universitaire qui consistait à créer un site sans div ni flex sur le sujet de notre choix.",
        
        project2Title: "Développement d’une application",
        project2Desc: "Il s'agit d'un projet universitaire où l'on devais à l'aide d'un cahier des charges produire une application Qt fonctionnel.",

        project3Title: "Création d'un algorithme de recherche du plus cours chemin",
        project3Desc: "Il s'agit d'un projet universitaire où l'on devais trouver le plus cours chemin entre différents points grâce aux différents algorithmes (Dijkstra, A*, Bellman-Ford) codé en python.",

        project4Title: "Développement d'un site web grâce à un cahier des charges",
        project4Desc: "Il s'agit d'un autre projet universitaire qui consiste à produire un cahier des charges dans un premier temps (ce que l'on a fait en 1ère année) puis dans un second temps produire un site web fonctionnel (ce que l'on a fait en 2ème année).",

        contact: "Contact",
        sendBtn: "Envoyer"
    },
    en: {
        navAbout: "About",
        navProjects: "Projects",
        navContact: "Contact",

        aboutTitle: "About Me",
        about1: "Hello, my name is <strong>Hoarau Erwan</strong> and I am currently a student in <strong>Computer Science at the IUT of Bayonne and the Basque Country.</strong>",
        about2: "Passionate about <strong>new technologies</strong>, I want to develop my skills in <strong>application and web development</strong> in order to contribute to innovative projects.",
        about3: "My <strong>team spirit, rigor and discipline</strong> allow me to quickly integrate and successfully carry out ambitious projects.",

        projectsTitle: "My Projects",
        project1Title: "Website Creation",
        project1Desc: "This was my first university project, which consisted of creating a website without divs or flexbox on a topic of our choice.",
        
        project2Title: "Application Development",
        project2Desc: "This was a university project where we had to develop a functional Qt application based on a specifications document.",

        project3Title: "Shortest Path Algorithm",
        project3Desc: "This was a university project where we had to find the shortest path between different points using algorithms (Dijkstra, A*, Bellman-Ford) coded in Python.",

        project4Title: "Website Development from a Specifications Document",
        project4Desc: "Another university project where we first created a specifications document (in the first year) and then developed a functional website (in the second year).",

        contact: "Contact",
        sendBtn: "Send"
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
    document.querySelector('nav ul li:nth-child(3) a').innerHTML = t.navContact;

    // Section "À propos"
    document.querySelector("#about h2").innerHTML = t.aboutTitle;
    document.querySelectorAll("#about p")[0].innerHTML = t.about1;
    document.querySelectorAll("#about p")[1].innerHTML = t.about2;
    document.querySelectorAll("#about p")[2].innerHTML = t.about3;

    // Section "Projets"
    document.querySelector("#projects h2").innerHTML = t.projectsTitle;
    document.querySelectorAll(".project-card h3")[0].innerHTML = t.project1Title;
    document.querySelectorAll(".project-card p")[0].innerHTML = t.project1Desc;

    document.querySelectorAll(".project-card h3")[1].innerHTML = t.project2Title;
    document.querySelectorAll(".project-card p")[1].innerHTML = t.project2Desc;

    document.querySelectorAll(".project-card h3")[2].innerHTML = t.project3Title;
    document.querySelectorAll(".project-card p")[2].innerHTML = t.project3Desc;

    document.querySelectorAll(".project-card h3")[3].innerHTML = t.project4Title;
    document.querySelectorAll(".project-card p")[3].innerHTML = t.project4Desc;

    // Section "Contact"
    document.querySelector("#contact h2").innerHTML = t.contact;
    document.querySelector("#contact button").innerHTML = t.sendBtn;

    // Changer le texte du bouton
    translateBtn.textContent = currentLang === "fr" ? "EN" : "FR";
});

// Cacher le header en scrollant vers le bas et le montrer en scrollant vers le haut
let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        // on descend → cacher le header
        header.style.top = "-100px"; 
    } else {
        // on monte → montrer le header
        header.style.top = "0";
    }

    lastScroll = currentScroll;
});