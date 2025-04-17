 const contenantChoixOrdinateur=document.querySelector('#choix-ordinateur');
 const contenantChoixUtilisateur=document.querySelector('#choix-utilisateur');
 const contenantResultat=document.querySelector('#resultat');
 const choixPossibles=document.querySelectorAll('button');
 let choixUtilisateur;
 let resultat;
 let choixOrdi;
 //evenement de click sur les boutons
choixPossibles.forEach(choixPossible=>choixPossible.addEventListener('click',(e)=>{
     //récuperer ID
    choixUtilisateur = e.target.id;
    //ajout de image correspond au ID
    contenantChoixUtilisateur.innerHTML=`<img src="${choixUtilisateur}.png">`
    generer_choix_ordi();
    verifier()
}))
 
//fonction pour générer le choix ordinateur

function generer_choix_ordi(){
    let  rondom = Math.floor(Math.random() * 3) +1;
    if(rondom===1){
        choixOrdi="pierre"
    }
    if(rondom===2){
        choixOrdi="papier"
    }
    if(rondom===3){
        choixOrdi="ciseaux"
    }
     contenantChoixOrdinateur.innerHTML=`<img src="${choixOrdi}.png">`
}
//fonction de vérification du jeu 
 
function verifier(){
    if(choixUtilisateur==choixOrdi){
        resultat="Egalité !"
    }
    //les conditions où le joueur perd
    if(choixUtilisateur=="pierre" && choixOrdi=="papier"){
        resultat="Perdu !"
    }
    if(choixUtilisateur=="papier" && choixOrdi=="ciseaux"){
        resultat="Perdu !"
    }
    if(choixUtilisateur=="ciseaux" && choixOrdi=="pierre"){
        resultat="Perdu !"
    }

    //les conditions où le joueur gagne
    if(choixUtilisateur=="pierre" && choixOrdi=="ciseaux"){
        resultat="Gagné !"
    }
    if(choixUtilisateur=="ciseaux" && choixOrdi=="papier"){
        resultat="Gagné !"
    }
    if(choixUtilisateur=="papier" && choixOrdi=="pierre"){
        resultat="Gagné !"
    }
    contenantResultat.innerHTML=resultat;
}