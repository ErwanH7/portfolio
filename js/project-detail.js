/**
 * project-detail.js
 * Gère : animation d'entrée, zoom image, menu burger
 * La traduction est déjà appliquée par le translations-xxx.js correspondant
 * (qui lit window.SITE_LANG posé par lang.js).
 */

document.addEventListener("DOMContentLoaded", () => {

  // ── Animation d'entrée du contenu ──────────────────────────────────────────
  const detailContent = document.querySelector(".detail-content");
  if (detailContent) {
    detailContent.style.opacity   = "0";
    detailContent.style.transform = "translateY(20px)";
    detailContent.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    setTimeout(() => {
      detailContent.style.opacity   = "1";
      detailContent.style.transform = "translateY(0)";
    }, 100);
  }

  // ── Zoom sur les images au clic ────────────────────────────────────────────
  document.querySelectorAll(".detail-img").forEach(img => {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => {
      let overlay = document.querySelector(".image-overlay-detail");
      if (!overlay) {
        overlay = document.createElement("div");
        overlay.classList.add("image-overlay-detail");
        document.body.appendChild(overlay);
        Object.assign(overlay.style, {
          position: "fixed", top: 0, left: 0,
          width: "100%", height: "100%",
          background: "rgba(0,0,0,0.9)",
          display: "flex", alignItems: "center",
          justifyContent: "center", zIndex: 2000,
          flexDirection: "column"
        });
      }

      overlay.innerHTML = `
        <span class="close-btn" style="position:absolute;top:20px;right:30px;font-size:40px;color:#fff;cursor:pointer;font-weight:bold;">&times;</span>
        <img src="${img.src}" style="max-width:90%;max-height:90%;border-radius:10px;">
      `;
      overlay.style.display = "flex";

      function closeOverlay() {
        overlay.style.display = "none";
        document.removeEventListener("keydown", escHandler);
      }

      overlay.querySelector(".close-btn").addEventListener("click", closeOverlay);
      overlay.addEventListener("click", e => { if (e.target === overlay) closeOverlay(); });
      const escHandler = e => { if (e.key === "Escape") closeOverlay(); };
      document.addEventListener("keydown", escHandler);
    });
  });

  // ── Menu burger ────────────────────────────────────────────────────────────
  const menuToggle = document.getElementById("menuToggle");
  const navLinks   = document.querySelector("header nav ul");
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => navLinks.classList.toggle("active"));
  }

  // ── Révéler la page (au cas où lang.js ne l'aurait pas encore fait) ────────
  if (typeof window.revealPage === "function") window.revealPage();
});
