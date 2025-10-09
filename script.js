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
        navTitle: "Mon Portfolio",
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
        project1bis: "Lien vers le GitHub du projet.",
        
        project2Title: "Développement d’une application",
        project2Desc: "Il s'agit d'un projet universitaire où l'on devait à l'aide d'un cahier des charges produire une application Qt fonctionnel.",
        project2bis: "Lien vers le GitHub du projet.",

        project3Title: "Création d'un algorithme de recherche du plus cours chemin",
        project3Desc: "Il s'agit d'un projet universitaire où l'on devait trouver le plus cours chemin entre différents points grâce aux différents algorithmes (Dijkstra, A*, Bellman-Ford) codé en python.",
        project3bis: "Lien vers le GitHub du projet.",

        project4Title: "Développement d'un site web grâce à un cahier des charges",
        project4Desc: "Il s'agit d'un autre projet universitaire qui consiste à produire un cahier des charges dans un premier temps (ce que l'on a fait en 1ère année) puis dans un second temps produire un site web fonctionnel (ce que l'on va faire en 2ème année).",
        project4bis: "Ce projet n'a pas encore de lien car il n'a pas encore commencé.",

        competencesTitle: "Mes Compétences",

        contact: "Contact",
        inputName: "Votre nom",
        inputEmail: "Votre email",
        inputMsg: "Votre message",
        sendBtn: "Envoyer"
    },
    en: {
        navTitle: "My Portfolio",
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
        project1bis: "Link to the GitHub of the project.",
        
        project2Title: "Application Development",
        project2Desc: "This was a university project where we had to develop a functional Qt application based on a specifications document.",
        project2bis: "Link to the GitHub of the project.",

        project3Title: "Shortest Path Algorithm",
        project3Desc: "This was a university project where we had to find the shortest path between different points using algorithms (Dijkstra, A*, Bellman-Ford) coded in Python.",
        project3bis: "Link to the GitHub of the project.",

        project4Title: "Website Development from a Specifications Document",
        project4Desc: "Another university project where we first created a specifications document (in the first year) and then developed a functional website (in the second year).",
        project4bis: "This project does not yet have a link as it has not yet started.",

        competencesTitle: "My Skills",

        contact: "Contact",
        inputName: "Your name",
        inputEmail: "Your email",
        inputMsg: "Your message",
        sendBtn: "Send"
    }
};

let currentLang = "fr";
const translateBtn = document.getElementById("translateBtn");

translateBtn.addEventListener("click", () => {
    currentLang = currentLang === "fr" ? "en" : "fr";
    const t = translations[currentLang];

    // Navigation
    document.querySelector("nav h1").innerHTML = t.navTitle;
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
    document.querySelectorAll(".project-card a")[0].innerHTML = t.project1bis;

    document.querySelectorAll(".project-card h3")[1].innerHTML = t.project2Title;
    document.querySelectorAll(".project-card p")[1].innerHTML = t.project2Desc;
    document.querySelectorAll(".project-card a")[1].innerHTML = t.project2bis;

    document.querySelectorAll(".project-card h3")[2].innerHTML = t.project3Title;
    document.querySelectorAll(".project-card p")[2].innerHTML = t.project3Desc;
    document.querySelectorAll(".project-card a")[2].innerHTML = t.project3bis;

    document.querySelectorAll(".project-card h3")[3].innerHTML = t.project4Title;
    document.querySelectorAll(".project-card p")[3].innerHTML = t.project4Desc;
    document.querySelectorAll(".project-card p")[4].innerHTML = t.project4bis;

    // Section "Compétences"
    document.querySelector("#skills h2").innerHTML = t.competencesTitle;

    // Section "Contact"
    document.querySelector("#contact h2").innerHTML = t.contact;
    document.querySelector("#contact input[name='name']").placeholder = t.inputName;
    document.querySelector("#contact input[name='email']").placeholder = t.inputEmail;
    document.querySelector("#contact textarea").placeholder = t.inputMsg;
    document.querySelector("#contact button").innerHTML = t.sendBtn;

    // Changer le texte du bouton
    translateBtn.textContent = currentLang === "fr" ? "FR->EN" : "EN->FR";
});


// Zoom sur les images des projets au clic
const projectImages = document.querySelectorAll(".project-card img");

projectImages.forEach(img => {
    img.addEventListener("click", () => {
        // Crée une overlay si elle n'existe pas encore
        let overlay = document.querySelector(".image-overlay");
        if (!overlay) {
            overlay = document.createElement("div");
            overlay.classList.add("image-overlay");
            document.body.appendChild(overlay);

            // Styles de l'overlay
            overlay.style.position = "fixed";
            overlay.style.top = 0;
            overlay.style.left = 0;
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.background = "linear-gradient(to top, #012459, #490252ff)";
            overlay.style.display = "flex";
            overlay.style.alignItems = "center";
            overlay.style.justifyContent = "center";
            overlay.style.zIndex = 2000;
            overlay.style.flexDirection = "column";
        }

        // Ajoute l'image cliquée + la croix
        overlay.innerHTML = `
            <span class="close-btn">&times;</span>
            <img src="${img.src}" style="max-width:90%; max-height:90%; border-radius:10px;">
        `;
        overlay.style.display = "flex";

        // Gérer la fermeture avec la croix
        const closeBtn = overlay.querySelector(".close-btn");
        closeBtn.style.position = "absolute";
        closeBtn.style.top = "20px";
        closeBtn.style.right = "30px";
        closeBtn.style.fontSize = "40px";
        closeBtn.style.color = "#fff";
        closeBtn.style.cursor = "pointer";
        closeBtn.style.fontWeight = "bold";

        //fermer avec le clic sur la croix
        closeBtn.addEventListener("click", () => {
            overlay.style.display = "none";
        });

        // Fermer avec la touche Escape
        const escHandler = (e) => {
            if (e.key === "Escape") {
                overlay.style.display = "none";
                document.removeEventListener("keydown", escHandler); // Nettoyage
            }
        };
        document.addEventListener("keydown", escHandler);
    });
});


// Animation des compétences au scroll
const progressBars = document.querySelectorAll(".progress");

function animateSkills() {
  progressBars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100 && !bar.classList.contains("animated")) {
      setTimeout(() => {
        bar.style.width = bar.getAttribute("data-value") + "%";
        bar.classList.add("animated"); // éviter de rejouer l'anim
      }, 300);
    }
  });
}

window.addEventListener("scroll", animateSkills);


// empêcher la restauration automatique du scroll par le navigateur (back/refresh)
if ('scrollRestoration' in history) {
  try { history.scrollRestoration = 'manual'; } catch (e) { /* ignore si interdit */ }
}

// Forcer le scroll en haut une fois la page affichée (pageshow gère bfcache / reload)
window.addEventListener('pageshow', () => {
  // petit délai pour s'assurer que le navigateur a fini ses actions internes
  setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }), 0);
});

// fallback : essayer aussi avantunload pour les navigateurs qui restaurent autrement
window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector("header nav ul");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


