let perso = document.querySelector(".perso");
let obstacles = document.querySelector(".obstacles");
let affiche = document.querySelector(".affiche");
let scoreSound = document.querySelector("audio")

function sauter() {
    // Fonction pour faire sauter le personnage
    if (!perso.classList.contains("animation")) {
        perso.classList.add('animation');
    }
    setTimeout(function() {
        perso.classList.remove('animation');
    }, 500);
}

let i = 0; // Initialisation du score

// Vérifier si l'obstacle touche le personnage ou est passé
let verification = setInterval(function() {
    let persoTop = parseInt(window.getComputedStyle(perso).getPropertyValue("top"));
    let obstaclesLeft = parseInt(window.getComputedStyle(obstacles).getPropertyValue("left"));

    // Vérifier si l'obstacle a été évité (obstacle passé)
    if (obstaclesLeft < -30) { // -30 pour s'assurer que l'obstacle est complètement passé
        i += 1; // Incrémenter le score
        affiche.innerHTML = i; // Mettre à jour l'affichage du score
        obstacles.style.animation = "none"; // Réinitialiser l'animation de l'obstacle
        void obstacles.offsetWidth; // Forcer le recalcul du style pour relancer l'animation
        obstacles.style.animation = ""; // Redémarrer l'animation de l'obstacle
        scoreSound.play(); // Jouer le son de gain de points
        // reinitialiser les vitesses

        obstacles.classList.remove('vitesseSuperieure')
        obstacles.classList.add('vitesse')
    }

    // Vérifier si l'obstacle touche le personnage
    if (obstaclesLeft < 20 && obstaclesLeft > 0 && persoTop >= 130) {
          // stopper le son
          scoreSound.pause();

        // Collision détectée
        obstacles.style.animation = "none";
        alert("Vous avez perdu\nScore : " + i);
        i = 0; // Réinitialiser le score
        affiche.innerHTML = i; // Mettre à jour l'affichage du score
        obstacles.style.animation = ""; // Réinitialiser l'animation de l'obstacle
        
       
    }
    if(i>6){
        // augmentation de la vitesse
        obstacles.classList.add('vitesse')
    }
    if(i>20){
        // augmentation de la vitesse
        obstacles.classList.add('vitesseSuperieure')
    }
    
    
}, 10);