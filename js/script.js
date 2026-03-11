// ── Traductions FR / EN ──────────────────────────────────────────────────────
const translations = {
  fr: {
    navAbout:   "MON PARCOURS",
    navProjects:"PROJETS",
    navSkills:  "COMPÉTENCES",
    navContact: "CONTACT",

    aboutTitle: "MON PARCOURS NUMÉRIQUE",
    about1: "Bonjour, je m'appelle <strong>Hoarau Erwan</strong> et je suis actuellement étudiant en <strong>informatique à l'IUT de Bayonne et du Pays Basque.</strong>",
    about2: "Passionné par les <strong>nouvelles technologies</strong>, je souhaite développer mes compétences en <strong>développement d'applications et de sites web</strong>, dans le but de contribuer à des projets innovants.",
    about3: "Mon <strong>esprit d'équipe, ma rigueur et ma discipline</strong> me permettent de m'intégrer rapidement et de mener à bien des projets ambitieux.",

    projectsTitle: "MES PROJETS",
    project1Title: "Création d'un site web",
    project1Desc:  "Il s'agit de mon premier projet universitaire qui consistait à créer un site sans div ni flex sur le sujet de notre choix.",
    project1bis: "Voir les détails du projet",
    project1ter: "GitHub du projet.",
    project2Title: "Développement d'une application",
    project2Desc:  "Il s'agit d'un projet universitaire où l'on devait à l'aide d'un cahier des charges produire une application Qt fonctionnel.",
    project2bis: "Voir les détails du projet",
    project2ter: "GitHub du projet.",
    project3Title: "Création d'un algorithme de recherche du plus court chemin",
    project3Desc:  "Il s'agit d'un projet universitaire où l'on devait trouver le plus court chemin entre différents points grâce aux différents algorithmes (Dijkstra, A*, Bellman-Ford) codé en python.",
    project3bis: "Voir les détails du projet",
    project3ter: "GitHub du projet.",
    project4Title: "Développement d'un site web grâce à un cahier des charges",
    project4Desc:  "Il s'agit d'un autre projet universitaire qui consiste à produire un cahier des charges dans un premier temps (ce que l'on a fait en 1ère année) puis dans un second temps produire un site web fonctionnel (ce que l'on fait en 2ème année).",
    project4bis: "Voir les détails du projet",
    project4ter: "Site web du projet.",
    project5Title: "Projet universitaire d'un site web en PHP",
    project5Desc:  "Il s'agit d'un projet universitaire qui consiste à créer un site web en PHP avec une base de données SQL.",
    project5bis: "Voir les détails du projet",
    project5ter: "Site web du projet.",
    project6Title: "Création d'un site web Pokédex",
    project6Desc:  "Il s'agit d'un projet personnel qui consiste à créer un Pokédex en utilisant une base de données qui provient de base d'un excel trouvé sur internet, mais ne le trouvant pas si pratique j'ai décidé de le passer en base de données SQL et d'en faire un site à part entière.",
    project6bis: "Voir les détails du projet",
    project6ter: "Projet bientôt disponible !",

    competencesTitle: "MES COMPÉTENCES",
    btnLabel: "FR → EN",
  },
  en: {
    navAbout:   "MY JOURNEY",
    navProjects:"PROJECTS",
    navSkills:  "SKILLS",
    navContact: "CONTACT",

    aboutTitle: "MY DIGITAL JOURNEY",
    about1: "Hello, my name is <strong>Hoarau Erwan</strong> and I am currently a student in <strong>Computer Science at the IUT of Bayonne and the Basque Country.</strong>",
    about2: "Passionate about <strong>new technologies</strong>, I want to develop my skills in <strong>application and web development</strong> in order to contribute to innovative projects.",
    about3: "My <strong>team spirit, rigor and discipline</strong> allow me to quickly integrate and successfully carry out ambitious projects.",

    projectsTitle: "PROJECTS",
    project1Title: "Website Creation",
    project1Desc:  "This was my first university project, which consisted of creating a website without divs or flexbox on a topic of our choice.",
    project1bis: "See project details",
    project1ter: "GitHub of the project.",
    project2Title: "Application Development",
    project2Desc:  "This was a university project where we had to develop a functional Qt application based on a specifications document.",
    project2bis: "See project details",
    project2ter: "GitHub of the project.",
    project3Title: "Shortest Path Search Algorithm",
    project3Desc:  "This was a university project where we had to find the shortest path between different points using algorithms (Dijkstra, A*, Bellman-Ford) coded in Python.",
    project3bis: "See project details",
    project3ter: "GitHub of the project.",
    project4Title: "Website Development from a Specifications Document",
    project4Desc:  "Another university project where we first created a specifications document (in the first year) and then developed a functional website (in the second year).",
    project4bis: "See project details",
    project4ter: "Website of the project.",
    project5Title: "University PHP Website Project",
    project5Desc:  "This was a university project that involved creating a PHP website with an SQL database.",
    project5bis: "See project details",
    project5ter: "Website of the project.",
    project6Title: "Pokédex Website Creation",
    project6Desc:  "This is a personal project that involves creating a Pokédex using a database originally from an Excel file found online. Finding it impractical, I decided to convert it to an SQL database and create a standalone website.",
    project6bis: "See project details",
    project6ter: "Project coming soon!",

    competencesTitle: "SKILLS",
    btnLabel: "EN → FR",
  }
};

// ── Appliquer une langue au DOM ──────────────────────────────────────────────
function applyTranslation(lang) {
  const t = translations[lang];
  if (!t) return;

  // <html lang>
  document.documentElement.lang = lang === "en" ? "en" : "fr";

  // Bouton
  const btn = document.getElementById("translateBtn");
  if (btn) btn.innerHTML = t.btnLabel;

  // Navigation
  const navItems = document.querySelectorAll("nav ul li a");
  if (navItems[0]) navItems[0].innerHTML = t.navAbout;
  if (navItems[1]) navItems[1].innerHTML = t.navProjects;
  if (navItems[2]) navItems[2].innerHTML = t.navSkills;
  if (navItems[3]) navItems[3].innerHTML = t.navContact;

  // Section about
  const aboutH2 = document.querySelector("#about h2");
  if (aboutH2) aboutH2.innerHTML = t.aboutTitle;
  const aboutPs = document.querySelectorAll("#about p");
  if (aboutPs[0]) aboutPs[0].innerHTML = t.about1;
  if (aboutPs[1]) aboutPs[1].innerHTML = t.about2;
  if (aboutPs[2]) aboutPs[2].innerHTML = t.about3;

  // Section projets
  const projH2 = document.querySelector("#projects h2");
  if (projH2) projH2.innerHTML = t.projectsTitle;

  const cards = document.querySelectorAll(".project-card");

  function setCard(i, title, desc, secBtn, primBtn, primClass) {
    const card = cards[i];
    if (!card) return;
    const h3 = card.querySelector("h3");
    const p  = card.querySelector("p");
    const btnSec = card.querySelector(".btn-secondary");
    const btnPrim = card.querySelector(primClass || ".btn-primary");
    const btnGit  = card.querySelector(".btn-github");
    if (h3)      h3.innerHTML  = title;
    if (p)       p.innerHTML   = desc;
    if (btnSec)  btnSec.innerHTML = secBtn;
    if (primBtn !== null) {
      if (btnPrim) btnPrim.innerHTML = primBtn;
      if (btnGit && !btnPrim) btnGit.innerHTML = primBtn;
    }
  }

  setCard(0, t.project1Title, t.project1Desc, t.project1bis, t.project1ter, ".btn-github");
  setCard(1, t.project2Title, t.project2Desc, t.project2bis, t.project2ter, ".btn-github");
  setCard(2, t.project3Title, t.project3Desc, t.project3bis, t.project3ter, ".btn-github");
  setCard(3, t.project4Title, t.project4Desc, t.project4bis, t.project4ter, ".btn-primary");
  setCard(4, t.project5Title, t.project5Desc, t.project5bis, t.project5ter, ".btn-primary");
  setCard(5, t.project6Title, t.project6Desc, t.project6bis, t.project6ter, ".btn-primary");

  // Section compétences
  const skillsH2 = document.querySelector("#skills h2");
  if (skillsH2) skillsH2.innerHTML = t.competencesTitle;
}

// ── État courant ─────────────────────────────────────────────────────────────
// Récupère la langue détectée par lang.js (chargé avant), sinon "fr"
let currentLang = window.SITE_LANG || "fr";

// ── Init au chargement ───────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  // Appliquer immédiatement la bonne langue
  applyTranslation(currentLang);

  // Révéler la page (supprime le masque posé par lang.js)
  if (typeof window.revealPage === "function") window.revealPage();

  // ── Bouton de traduction ───────────────────────────────────────────────────
  const translateBtn = document.getElementById("translateBtn");
  if (translateBtn) {
    translateBtn.addEventListener("click", () => {
      currentLang = currentLang === "fr" ? "en" : "fr";
      localStorage.setItem("language", currentLang);
      applyTranslation(currentLang);
      updateWidgetLanguage(currentLang);
    });
  }

  // ── Navigation active selon la section visible ────────────────────────────
  const sections  = document.querySelectorAll("section[id]");
  const navAnchors = document.querySelectorAll("header nav ul li a");

  function setActiveNav(id) {
    navAnchors.forEach(a => {
      const href = a.getAttribute("href") || "";
      // Correspondance : #about, #projects, #skills, #contact
      if (href.includes("#" + id)) {
        a.classList.add("active");
      } else {
        a.classList.remove("active");
      }
    });
  }

  if (sections.length && navAnchors.length) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveNav(entry.target.id);
        });
      },
      {
        rootMargin: "-30% 0px -60% 0px", // déclenche quand la section est ~centrée à l'écran
        threshold: 0,
      }
    );
    sections.forEach(s => observer.observe(s));
  }

  // ── Menu burger ───────────────────────────────────────────────────────────
  const menuToggle = document.getElementById("menuToggle");
  const navLinks   = document.querySelector("header nav ul");
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => navLinks.classList.toggle("active"));
    document.querySelectorAll("header nav ul li a").forEach(link => {
      link.addEventListener("click", () => navLinks.classList.remove("active"));
    });
  }

  // ── Animation des cartes au scroll ────────────────────────────────────────
  const cards = document.querySelectorAll(".project-card");
  function animateCards() {
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }
    });
  }
  window.addEventListener("scroll", animateCards);

  // ── Zoom sur les images des cartes ────────────────────────────────────────
  const projectImages = document.querySelectorAll(".project-card img");
  projectImages.forEach(img => {
    img.addEventListener("click", () => {
      projectImages.forEach(i => i.classList.remove("active"));
      img.classList.add("active");

      let overlay = document.querySelector(".image-overlay");
      if (!overlay) {
        overlay = document.createElement("div");
        overlay.classList.add("image-overlay");
        document.body.appendChild(overlay);
      }

      overlay.innerHTML = `
        <span class="close-btn" aria-label="Fermer">&times;</span>
        <img src="${img.src}" class="popup-img" alt="">
      `;
      void overlay.offsetWidth;
      overlay.classList.add("show");

      function closeOverlay() {
        overlay.classList.remove("show");
        img.classList.remove("active");
        setTimeout(() => { overlay.innerHTML = ""; }, 300);
        document.removeEventListener("keydown", escHandler);
      }

      overlay.querySelector(".close-btn").addEventListener("click", e => {
        e.stopPropagation();
        closeOverlay();
      });
      overlay.addEventListener("click", e => { if (e.target === overlay) closeOverlay(); });
      const escHandler = e => { if (e.key === "Escape") closeOverlay(); };
      document.addEventListener("keydown", escHandler);
    });
  });

  // ── Animation des barres de compétences ───────────────────────────────────
  const progressBars = document.querySelectorAll(".progress");
  function animateSkills() {
    progressBars.forEach(bar => {
      const rect = bar.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100 && !bar.classList.contains("animated")) {
        setTimeout(() => {
          bar.style.width = bar.getAttribute("data-value") + "%";
          bar.classList.add("animated");
        }, 300);
      }
    });
  }
  window.addEventListener("scroll", animateSkills);

  // ── Widget Feedeko ─────────────────────────────────────────────────────────
  // Appliquer la langue au widget après son chargement
  setTimeout(() => updateWidgetLanguage(currentLang), 1000);
});

// ── Scroll en haut à chaque chargement de page ───────────────────────────────
if ("scrollRestoration" in history) {
  try { history.scrollRestoration = "manual"; } catch (e) { /* ignore */ }
}
window.addEventListener("pageshow", () => {
  setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: "auto" }), 0);
});

// ── Mise à jour du widget Feedeko ─────────────────────────────────────────────
function updateWidgetLanguage(lang) {
  if (typeof widgetTranslations === "undefined") return;
  const widgetT = widgetTranslations[lang];
  if (!widgetT) return;

  const checkWidget = setInterval(() => {
    const btn   = document.getElementById("fw-btn");
    const panel = document.getElementById("fw-panel");
    if (btn && panel) {
      clearInterval(checkWidget);
      const btnSVG = btn.querySelector("svg");
      if (btnSVG) btn.innerHTML = btnSVG.outerHTML + widgetT.buttonLabel;

      const title      = panel.querySelector("h3");
      const subtitle   = panel.querySelector("p.fw-subtitle");
      const textarea   = document.getElementById("fw-msg");
      const emailInput = document.getElementById("fw-field-qqw1jz6b");
      const emailLabel = panel.querySelector("label[for='fw-field-qqw1jz6b']");
      const sendBtn    = document.getElementById("fw-send");

      if (title)      title.textContent    = widgetT.title;
      if (subtitle)   subtitle.textContent = widgetT.subtitle;
      if (textarea)   textarea.placeholder = widgetT.placeholder;
      if (emailInput) emailInput.placeholder = widgetT.emailPlaceholder;
      if (emailLabel) {
        const requireMark = emailLabel.querySelector(".fw-field-required");
        if (requireMark) {
          requireMark.textContent = widgetT.requiredText;
          requireMark.setAttribute("title", widgetT.requiredLabel);
        }
        emailLabel.firstChild.textContent = widgetT.emailLabel;
      }
      if (sendBtn) sendBtn.textContent = widgetT.sendLabel;
    }
  }, 100);
  setTimeout(() => clearInterval(checkWidget), 5000);
}
