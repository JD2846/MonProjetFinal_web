let nbr1=document.querySelector('.nbr1');
let nbr2=document.querySelector('.nbr2');
let op=document.querySelector('.op');
let message=document.querySelector('.message');
let score=document.querySelector('.score');
let link=document.querySelector('.link');
let section=document.querySelector('section');
let compter=0; 
// nber qléatoire début du jeu
rondom1=Math.random()*11 << 0;//génerer des nombre entre 0 à 11
rondom2=Math.random()*11 << 0;//génerer des nombre entre 0 à 11
nbr1.innerHTML=rondom1;
nbr2.innerHTML=rondom2;
//fonction de vérification 
function verifier(){
    // récuperer le resutat entré par le jouer
    let res=document.querySelector('.res').value;
    if(rondom1 + rondom2==res){
        message.style.background="green";
        message.innerHTML="Correcte"
        //créer d'autres nombres aléatoire
            rondom1=Math.random()*11 << 0;//génerer des nombre entre 0 à 11
            rondom2=Math.random()*11 << 0;//génerer des nombre entre 0 à 11
            nbr1.innerHTML=rondom1;
            nbr2.innerHTML=rondom2;
            compter+=1;
    }else{
        message.style.background="red";
        message.innerHTML="Vous avez perdu"
        section.innerHTML=" ";
        score.innerHTML=`<span>${compter}</span><br> Score`
        link.style.display="block"
    }
}