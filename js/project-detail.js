// Script commun pour les pages détails des projets
// Ajouter des interactions spécifiques si nécessaire

document.addEventListener('DOMContentLoaded', () => {
    // Animation du contenu
    const detailContent = document.querySelector('.detail-content');
    if (detailContent) {
        detailContent.style.opacity = '0';
        detailContent.style.transform = 'translateY(20px)';
        detailContent.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            detailContent.style.opacity = '1';
            detailContent.style.transform = 'translateY(0)';
        }, 100);
    }

    // Gestion du scroll fluide pour les liens de retour
    const backLink = document.querySelector('.back-link');
    if (backLink) {
        backLink.addEventListener('click', (e) => {
            // Garder le comportement par défaut du lien
        });
    }
});

// Zoom sur les images au clic
const detailImages = document.querySelectorAll('.detail-img');

detailImages.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
        let overlay = document.querySelector(".image-overlay-detail");
        if (!overlay) {
            overlay = document.createElement("div");
            overlay.classList.add("image-overlay-detail");
            document.body.appendChild(overlay);

            overlay.style.position = "fixed";
            overlay.style.top = 0;
            overlay.style.left = 0;
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.background = "rgba(0, 0, 0, 0.9)";
            overlay.style.display = "flex";
            overlay.style.alignItems = "center";
            overlay.style.justifyContent = "center";
            overlay.style.zIndex = 2000;
            overlay.style.flexDirection = "column";
        }

        overlay.innerHTML = `
            <span class="close-btn" style="position: absolute; top: 20px; right: 30px; font-size: 40px; color: #fff; cursor: pointer; font-weight: bold;">&times;</span>
            <img src="${img.src}" style="max-width:90%; max-height:90%; border-radius:10px;">
        `;
        overlay.style.display = "flex";

        const closeBtn = overlay.querySelector(".close-btn");
        closeBtn.addEventListener("click", () => {
            overlay.style.display = "none";
        });

        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) {
                overlay.style.display = "none";
            }
        });

        const escHandler = (e) => {
            if (e.key === "Escape") {
                overlay.style.display = "none";
                document.removeEventListener("keydown", escHandler);
            }
        };
        document.addEventListener("keydown", escHandler);
    });
});
