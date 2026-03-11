/**
 * lang.js — Détection et gestion de la langue
 * Priorité : 1) localStorage (choix manuel) → 2) ?lang= URL → 3) navigator.language → 4) "fr" par défaut
 * Langues supportées : fr, en, es
 *
 * CE FICHIER DOIT ÊTRE CHARGÉ EN PREMIER, SANS defer, DANS LE <head>.
 */

(function () {
  const SUPPORTED = ["fr", "en", "es"];

  // ── 1. Masquer le body immédiatement ────────────────────────────────────────
  const style = document.createElement("style");
  style.id = "lang-fouc-guard";
  style.textContent = "body { visibility: hidden !important; }";
  document.head.appendChild(style);

  // ── 2. Détecter la langue ────────────────────────────────────────────────────
  function detectLang() {
    // Priorité 1 : choix mémorisé par l'utilisateur
    const saved = localStorage.getItem("language");
    if (SUPPORTED.includes(saved)) return saved;

    // Priorité 2 : paramètre URL (?lang=en / ?lang=es)
    const urlParam = new URLSearchParams(window.location.search).get("lang");
    if (SUPPORTED.includes(urlParam)) {
      localStorage.setItem("language", urlParam);
      return urlParam;
    }

    // Priorité 3 : langue du navigateur
    const nav = (navigator.language || navigator.userLanguage || "fr")
      .toLowerCase()
      .slice(0, 2);
    return SUPPORTED.includes(nav) ? nav : "fr";
  }

  const lang = detectLang();

  // ── 3. Exposer globalement ───────────────────────────────────────────────────
  window.SITE_LANG = lang;
  document.documentElement.lang = lang;

  // ── 4. Révéler la page (appelé par le script de traduction quand c'est prêt) ─
  window.revealPage = function () {
    const guard = document.getElementById("lang-fouc-guard");
    if (guard) guard.remove();
  };
})();
