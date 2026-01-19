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
        navAbout: "MON PARCOURS",
        navProjects: "PROJETS",
        navSkills: "COMPÉTENCES",
        navContact: "CONTACT",

        aboutTitle: "MON PARCOURS NUMÉRIQUE",
        about1: "Bonjour, je m'appelle <strong>Hoarau Erwan</strong> et je suis actuellement étudiant en <strong>informatique à l'IUT de Bayonne et du Pays Basque.</strong>",
        about2: "Passionné par les <strong>nouvelles technologies</strong>, je souhaite développer mes compétences en <strong>développement d'applications et de sites web</strong>, dans le but de contribuer à des projets innovants.",
        about3: "Mon <strong>esprit d'équipe, ma rigueur et ma discipline</strong> me permettent de m'intégrer rapidement et de mener à bien des projets ambitieux.",

        projectsTitle: "MES PROJETS",
        project1Title: "Création d'un site web",
        project1Desc: "Il s'agit de mon premier projet universitaire qui consistait à créer un site sans div ni flex sur le sujet de notre choix.",
        project1bis: "Voir les détails du projet.",
        project1ter: "GitHub du projet.",
        
        project2Title: "Développement d’une application",
        project2Desc: "Il s'agit d'un projet universitaire où l'on devait à l'aide d'un cahier des charges produire une application Qt fonctionnel.",
        project2bis: "Voir les détails du projet.",
        project2ter: "GitHub du projet.",

        project3Title: "Création d'un algorithme de recherche du plus cours chemin",
        project3Desc: "Il s'agit d'un projet universitaire où l'on devait trouver le plus cours chemin entre différents points grâce aux différents algorithmes (Dijkstra, A*, Bellman-Ford) codé en python.",
        project3bis: "Voir les détails du projet.",
        project3ter: "GitHub du projet.",

        project4Title: "Développement d'un site web grâce à un cahier des charges",
        project4Desc: "Il s'agit d'un autre projet universitaire qui consiste à produire un cahier des charges dans un premier temps (ce que l'on a fait en 1ère année) puis dans un second temps produire un site web fonctionnel (ce que l'on fait en 2ème année).",
        project4bis: "Voir les détails du projet.",
        project4ter: "Site web du projet.",

        project5Title: "Projet universitaire d'un site web en PHP",
        project5Desc: "Il s'agit d'un projet universitaire qui consiste à créer un site web en PHP avec une base de données SQL.",
        project5bis: "Voir les détails du projet.",
        project5ter: "Site web du projet.",

        project6Title: "Création d'un site web Pokédex",
        project6Desc: "Il s'agit d'un projet personnel qui consiste à créer un Pokédex en utilisant une base de données qui provient de base d'un excel trouvé sur internet, mais ne le trouvant pas si pratique j'ai décidé de le passer en base de données SQL et d'en faire un site a part entière.",
        project6bis: "Voir les détails du projet.",
        project6ter: "Projet bientôt disponible !",

        competencesTitle: "Mes Compétences",

        contact: "CONTACT",
        contactLink1: "Vous pouvez regarder mon GitHub grâce à ce lien :",
        contactLink2: "Vous pouvez regarder mon LinkedIn grâce à ce lien :",
        contactLink3: "Télécharger mon CV en cliquant ici :",
        contactLink4: "Ou me contacter directement via le formulaire ci-dessous :",
        inputName: "Votre nom",
        inputEmail: "Votre email",
        inputMsg: "Votre message",
        sendBtn: "Envoyer"
    },
    en: {
        navAbout: "MY JOURNEY",
        navProjects: "PROJECTS",
        navSkills: "SKILLS",
        navContact: "CONTACT",

        aboutTitle: "MY DIGITAL JOURNEY",
        about1: "Hello, my name is <strong>Hoarau Erwan</strong> and I am currently a student in <strong>Computer Science at the IUT of Bayonne and the Basque Country.</strong>",
        about2: "Passionate about <strong>new technologies</strong>, I want to develop my skills in <strong>application and web development</strong> in order to contribute to innovative projects.",
        about3: "My <strong>team spirit, rigor and discipline</strong> allow me to quickly integrate and successfully carry out ambitious projects.",

        projectsTitle: "MY PROJECTS",
        project1Title: "Website Creation",
        project1Desc: "This was my first university project, which consisted of creating a website without divs or flexbox on a topic of our choice.",
        project1bis: "See project details.",
        project1ter: "GitHub of the project.",
        
        project2Title: "Application Development",
        project2Desc: "This was a university project where we had to develop a functional Qt application based on a specifications document.",
        project2bis: "See project details.",
        project2ter: "GitHub of the project.",

        project3Title: "Shortest Path Algorithm",
        project3Desc: "This was a university project where we had to find the shortest path between different points using algorithms (Dijkstra, A*, Bellman-Ford) coded in Python.",
        project3bis: "See project details.",
        project3ter: "GitHub of the project.",

        project4Title: "Website Development from a Specifications Document",
        project4Desc: "Another university project where we first created a specifications document (in the first year) and then developed a functional website (in the second year).",
        project4bis: "See project details.",
        project4ter: "Website of the project.",

        project5Title: "University Project of a PHP Website",
        project5Desc: "This was a university project that involved creating a PHP website with an SQL database.",
        project5bis: "See project details.",
        project5ter: "Website of the project.",

        project6Title: "Pokédex Website Creation",
        project6Desc: "This is a personal project that involves creating a Pokédex using a database originally from an Excel file found online. Finding it impractical, I decided to convert it to an SQL database and create a standalone website.",
        project6bis: "See project details.",
        project6ter: "Project coming soon!",

        competencesTitle: "MY SKILLS",

        contact: "CONTACT",
        contactLink1: "You can check out my GitHub through this link:",
        contactLink2: "You can check out my LinkedIn through this link:",
        contactLink3: "Download my CV by clicking here:",
        contactLink4: "Or contact me directly via the form below:",
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
    document.querySelector('nav ul li:nth-child(1) a').innerHTML = t.navAbout;
    document.querySelector('nav ul li:nth-child(2) a').innerHTML = t.navProjects;
    document.querySelector('nav ul li:nth-child(3) a').innerHTML = t.navSkills;
    document.querySelector('nav ul li:nth-child(4) a').innerHTML = t.navContact;

    // Section "À propos"
    document.querySelector("#about h2").innerHTML = t.aboutTitle;
    document.querySelectorAll("#about p")[0].innerHTML = t.about1;
    document.querySelectorAll("#about p")[1].innerHTML = t.about2;
    document.querySelectorAll("#about p")[2].innerHTML = t.about3;

    // Section "Projets"
    document.querySelector("#projects h2").innerHTML = t.projectsTitle;
    
    // Projet 1
    document.querySelectorAll(".project-card h3")[0].innerHTML = t.project1Title;
    document.querySelectorAll(".project-card p")[0].innerHTML = t.project1Desc;
    document.querySelectorAll(".project-card")[0].querySelectorAll(".btn-secondary")[0].innerHTML = t.project1bis;
    document.querySelectorAll(".project-card")[0].querySelectorAll(".btn-github")[0].innerHTML = t.project1ter;

    // Projet 2
    document.querySelectorAll(".project-card h3")[1].innerHTML = t.project2Title;
    document.querySelectorAll(".project-card p")[1].innerHTML = t.project2Desc;
    document.querySelectorAll(".project-card")[1].querySelectorAll(".btn-secondary")[0].innerHTML = t.project2bis;
    document.querySelectorAll(".project-card")[1].querySelectorAll(".btn-github")[0].innerHTML = t.project2ter;

    // Projet 3
    document.querySelectorAll(".project-card h3")[2].innerHTML = t.project3Title;
    document.querySelectorAll(".project-card p")[2].innerHTML = t.project3Desc;
    document.querySelectorAll(".project-card")[2].querySelectorAll(".btn-secondary")[0].innerHTML = t.project3bis;
    document.querySelectorAll(".project-card")[2].querySelectorAll(".btn-github")[0].innerHTML = t.project3ter;

    // Projet 4
    document.querySelectorAll(".project-card h3")[3].innerHTML = t.project4Title;
    document.querySelectorAll(".project-card p")[3].innerHTML = t.project4Desc;
    document.querySelectorAll(".project-card")[3].querySelectorAll(".btn-secondary")[0].innerHTML = t.project4bis;
    document.querySelectorAll(".project-card")[3].querySelectorAll(".btn-primary")[0].innerHTML = t.project4ter;

    // Projet 5
    document.querySelectorAll(".project-card h3")[4].innerHTML = t.project5Title;
    document.querySelectorAll(".project-card p")[4].innerHTML = t.project5Desc;
    document.querySelectorAll(".project-card")[4].querySelectorAll(".btn-secondary")[0].innerHTML = t.project5bis;
    document.querySelectorAll(".project-card")[4].querySelectorAll(".btn-primary")[0].innerHTML = t.project5ter;

    // Projet 6
    document.querySelectorAll(".project-card h3")[5].innerHTML = t.project6Title;
    document.querySelectorAll(".project-card p")[5].innerHTML = t.project6Desc;
    document.querySelectorAll(".project-card")[5].querySelectorAll(".btn-secondary")[0].innerHTML = t.project6bis;
    document.querySelectorAll(".project-card")[5].querySelectorAll(".btn-primary")[0].innerHTML = t.project6ter;

    // Section "Compétences"
    document.querySelector("#skills h2").innerHTML = t.competencesTitle;

    // Section "Contact"
    document.querySelector("#contact h2").innerHTML = t.contact;
    const contactLinks = document.querySelectorAll(".contact-links");
    if(contactLinks[0] && contactLinks[0].querySelector("a")) {
        contactLinks[0].querySelector("a").innerHTML = t.contactLink1;
    }
    if(contactLinks[1] && contactLinks[1].querySelector("a")) {
        contactLinks[1].querySelector("a").innerHTML = t.contactLink2;
    }
    if(contactLinks[2] && contactLinks[2].querySelector("p")) {
        contactLinks[2].querySelector("p").innerHTML = t.contactLink4;
    }
    document.querySelector("#contact input[name='name']").placeholder = t.inputName;
    document.querySelector("#contact input[name='email']").placeholder = t.inputEmail;
    document.querySelector("#contact textarea").placeholder = t.inputMsg;
    document.querySelector("#contact button").innerHTML = t.sendBtn;

    // Changer le texte du bouton
    translateBtn.innerHTML = currentLang === "fr"
  ? 'FR → EN'
  : 'EN → FR';
});


// Zoom sur les images des projets au clic
const projectImages = document.querySelectorAll(".project-card img");

projectImages.forEach(img => {
  img.addEventListener("click", () => {
    // Retire la classe active de toutes les images
    projectImages.forEach(i => i.classList.remove("active"));
    // Ajoute la couleur à l’image cliquée
    img.classList.add("active");

    // Trouve ou crée l'overlay (sans style.display inline)
    let overlay = document.querySelector(".image-overlay");
    let isNew = false;
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.classList.add("image-overlay");
      document.body.appendChild(overlay);
      isNew = true;
    }

    // Remplit l'overlay (image + croix)
    overlay.innerHTML = `
      <span class="close-btn" aria-label="Fermer">&times;</span>
      <img src="${img.src}" class="popup-img" alt="">
    `;

    // Forcer reflow pour que la classe show déclenche la transition proprement
    // (utile si l'overlay venait d'être créé)
    void overlay.offsetWidth;

    // Affiche en ajoutant la classe show (CSS gère opacity/transform)
    overlay.classList.add("show");

    // Gestion fermeture
    const closeBtn = overlay.querySelector(".close-btn");
    const popupImg = overlay.querySelector(".popup-img");

    function closeOverlay() {
      overlay.classList.remove("show");
      // retire la classe active sur l'image
      img.classList.remove("active");
      // après la transition, si tu veux vider ou cacher complètement:
      setTimeout(() => {
        overlay.innerHTML = "";
      }, 300); // doit matcher la durée CSS (300ms)
      document.removeEventListener("keydown", escHandler);
    }

    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      closeOverlay();
    });

    // fermer au clic hors de l'image (sur l'overlay)
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeOverlay();
    });

    // échap
    const escHandler = (e) => {
      if (e.key === "Escape") closeOverlay();
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


