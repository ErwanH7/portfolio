---
layout: default
title: Algorithme de recherche du plus court chemin - Portfolio Erwan Hoarau
extra_css:
  - /css/project-detail.css
extra_js:
  - /js/translations-algo.js
  - /js/project-detail.js
---

    <section id="project-detail">
        <a href="index.html#projects" class="back-link">← Retour aux projets</a>
        
        <h2>Algorithme de recherche du plus court chemin</h2>
        
        <div class="detail-content">
            <div class="gallery">
                <img src="image/algo_py1.png" alt="Préparation de la map" class="detail-img">
                <img src="image/algo_py2.png" alt="Exécution de l'algorithme" class="detail-img">
            </div>
            
            <h3>Description du projet</h3>
            <p class="project-description">
                Ce projet universitaire m'a permis d'approfondir mes connaissances en algorithmique et structure de données. 
                L'objectif était d'implémenter et comparer plusieurs <strong>algorithmes de recherche du plus court chemin</strong> 
                entre différents points dans un graphe, codés entièrement en Python.
            </p>

            <h3>Objectifs</h3>
            <ul class="objectives-list">
                <li>Implémenter trois algorithmes majeurs de plus court chemin</li>
                <li>Comprendre les concepts de graphes et de recherche de chemins</li>
                <li>Analyser et comparer les performances des algorithmes</li>
                <li>Créer une visualisation des résultats</li>
                <li>Optimiser le code pour différents types de données</li>
            </ul>

            <h3>Algorithmes implémentés</h3>
            <div class="algorithms">
                <div class="algo-card">
                    <h4>Dijkstra</h4>
                    <p>Algorithme glouton trouvant le chemin le plus court depuis un sommet source vers tous les autres sommets, adapté aux graphes à poids positifs.</p>
                </div>
                <div class="algo-card">
                    <h4>A*</h4>
                    <p>Algorithme de recherche heuristique combinant les avantages de Dijkstra avec une heuristique pour accélérer la recherche.</p>
                </div>
                <div class="algo-card">
                    <h4>Bellman-Ford</h4>
                    <p>Algorithme capable de gérer les arêtes à poids négatifs, plus lent que Dijkstra mais plus flexible.</p>
                </div>
            </div>

            <h3>Technologies utilisées</h3>
            <div class="tech-tags">
                <span><i class="devicon-python-plain colored"></i> Python</span>
                <span><i class="devicon-numpy-plain colored"></i> NumPy</span>
                <span><i class="devicon-pandas-plain colored"></i> Pandas</span>
                <span><i class="devicon-matplotlib-plain colored"></i> Matplotlib</span>
            </div>

            <h3>Points forts</h3>
            <ul class="strengths-list">
                <li>Implémentation complète et correcte de trois algorithmes complexes</li>
                <li>Gestion efficace des structures de données (listes, dictionnaires, priorités)</li>
                <li>Analyse comparative des algorithmes (complexité temporelle et spatiale)</li>
                <li>Visualisation graphique des résultats</li>
                <li>Code testé et validé</li>
            </ul>

            <h3>Apprentissages</h3>
            <p class="learnings-text">
                Ce projet m'a permis de maîtriser les concepts fondamentaux d'algorithmique et de structure de données. 
                J'ai appris à implémenter des algorithmes complexes, à analyser leur performance, et à traiter des graphes. 
                C'est un excellent projet pour démontrer la compréhension des algorithmes classiques en informatique.
            </p>

            <h3>Résultats</h3>
            <ul class="results-list">
                <li>Les trois algorithmes produisent les mêmes chemins optimaux</li>
                <li>Dijkstra et A* sont plus performants que Bellman-Ford sur les graphes sans poids négatifs</li>
                <li>A* offre la meilleure performance en utilisant une heuristique appropriée</li>
                <li>Bellman-Ford gère correctement les cas limites</li>
            </ul>

            <div class="project-links">
                <a href="https://github.com/ErwanH7/S2.02" class="btn-github">Voir sur GitHub</a>
            </div>
        </div>
    </section>