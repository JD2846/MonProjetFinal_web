let erreur = document.querySelector('.error_message');
let longLink = document.querySelector('.long_link');
let court = document.querySelector('.resultat');

function clique() {
    // Vérification de l'input
    if (longLink.value.trim() !== "") {
        // Vider l'erreur
        erreur.innerHTML = "";

        // Appel à l'API
        let url = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(longLink.value)}`;
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur réseau ou API');
                }
                return response.text(); // TinyURL API returns plain text
            })
            .then(shortUrl => {
                if (shortUrl) {
                    court.innerHTML = shortUrl;
                } else {
                    court.innerHTML = "Lien NON valide!";
                }
            })
            .catch(error => {
                console.error('Erreur:', error);
                court.innerHTML = "Erreur lors du raccourcissement du lien";
            });

        // Afficher le résultat
        court.style.display = "block";
    } else {
        // Afficher l'erreur si le champ est vide
        erreur.innerHTML = "Veuillez remplir le champ";
        court.style.display = "block";
    }
}