let liens=document.querySelectorAll("a");

liens.forEach(lien=>(lien.addEventListener('click', function(){
})))

// dark-mode 

let darkMode=document.querySelector('.dark-mode');
let afficheDarkMode=document.querySelector('.form-dark');
let clic=0;
darkMode.addEventListener('click', function(){
   if(clic===1){
    afficheDarkMode.style.opacity="1";
    clic=0
   }
    else{
        afficheDarkMode.style.opacity="1";
        clic=1
    }
})
let body=document.querySelector('body');
let aside=document.querySelector('aside');
let section=document.querySelector('section');

let btnNuit=document.querySelector('.sombre');
btnNuit.addEventListener('click', ()=>{
    body.classList.add('modeNuit');
    afficheDarkMode.style.opacity="0";
})
let btnJour=document.querySelector('.claire');
btnJour.addEventListener('click', ()=>{
    
    body.classList.remove('modeNuit');
    afficheDarkMode.style.opacity="0";
})

let more=document.querySelector('.more');
let paragraph=document.querySelectorAll('#paragraph');
more.addEventListener('click', ()=>{
    aside.classList.add('grand');
    more.style.display="none"
    moins.style.display="flex";
    paragraph.forEach(para=>para.style.display="flex");
    
    
});
let moins=document.querySelector('.moins');
moins.addEventListener('click', ()=>{
    aside.classList.remove('grand');
    moins.style.display="none"
     more.style.display="flex"
     paragraph.forEach(para=>para.style.display="none");
});
// function agrandir(){
   

// }


  
let search=document.querySelector('#search')
let loop=document.querySelector('.loop');
loop.addEventListener('click', function(){
        loop.style.display="none";
        search.style.display="block";
   
})
let projets = document.querySelectorAll('.afficheProjet');
let profils=document.querySelector('.section-top')
let iframe=document.querySelector('iframe')
let projet;

projets.forEach(projet => {
  projet.addEventListener('click', ()=>{
       document.querySelector('iframe').src=projet.getAttribute('data-url');
       profils.style.display="none";
      iframe.style.display="block";
   })
   
 });

 let affiche=document.querySelector('.affiche')
 let sectionBottom=document.querySelector('.section-bottom')
function clickfonction(valeur){
    affiche.innerHTML=valeur;
    
}





// Récupérer les éléments du DOM



// Événement d'entrée sur le champ de recherche
search.addEventListener('input', function () {
    const searchTerm = search.value.trim().toLowerCase(); // Récupérer la valeur de recherche

    // Parcourir tous les liens de projets
    projets.forEach(link => {
        const linkText = link.querySelector('p').textContent.toLowerCase(); // Obtenir le texte du lien
        
        // Vérifier si le texte du lien contient le terme de recherche
        if (linkText.includes(searchTerm)) {
            link.style.display = ''; // Afficher l'élément (retour à la valeur par défaut)
            liens.textContent='le mot introuvable'
        } else {
            link.style.display = 'none'; // Masquer l'élément
        }
    });
});