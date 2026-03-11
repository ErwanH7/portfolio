/**
 * lang.js — Détection et gestion de la langue
 * Priorité : 1) localStorage (choix manuel) → 2) navigator.language → 3) "fr" par défaut
 *
 * CE FICHIER DOIT ÊTRE CHARGÉ EN PREMIER, SANS defer, DANS LE <head>.
 * Il masque le body immédiatement pour éviter le flash, puis révèle
 * la page une fois la traduction appliquée.
 */

(function () {
  // ── 1. Masquer le body immédiatement ────────────────────────────────────────
  const style = document.createElement("style");
  style.id = "lang-fouc-guard";
  style.textContent = "body { visibility: hidden !important; }";
  document.head.appendChild(style);

  // ── 2. Détecter la langue ────────────────────────────────────────────────────
  function detectLang() {
    // Priorité 1 : choix mémorisé par l'utilisateur
    const saved = localStorage.getItem("language");
    if (saved === "fr" || saved === "en") return saved;

    // Priorité 2 : paramètre URL (?lang=en)
    const urlParam = new URLSearchParams(window.location.search).get("lang");
    if (urlParam === "fr" || urlParam === "en") {
      localStorage.setItem("language", urlParam);
      return urlParam;
    }

    // Priorité 3 : langue du navigateur
    const nav = (navigator.language || navigator.userLanguage || "fr")
      .toLowerCase()
      .slice(0, 2);
    return nav === "en" ? "en" : "fr";
  }

  const lang = detectLang();

  // ── 3. Exposer globalement ───────────────────────────────────────────────────
  window.SITE_LANG = lang;

  // Mettre à jour <html lang="…"> tout de suite
  document.documentElement.lang = lang === "en" ? "en" : "fr";

  // ── 4. Révéler la page (appelé par le script de traduction quand c'est prêt) ─
  window.revealPage = function () {
    const guard = document.getElementById("lang-fouc-guard");
    if (guard) guard.remove();
  };
})();
