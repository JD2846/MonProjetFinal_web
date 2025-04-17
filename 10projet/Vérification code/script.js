//Définir les variables
let myInput=document.getElementById('psw');
let letter=document.getElementById('letter');
let capital=document.getElementById('capital');
let number=document.getElementById('number');
let length=document.getElementById('length');

//lorsque l'utilisateur clique sur le champ du mot de passe; afficer la boite message
myInput.onfocus=function(){
 
    document.getElementById('message').style.display="block"
}
// lorsque l'utilisateur clique en dehors du champ du mot de passe, masquer la boite message
myInput.onblur=function(){
    document.getElementById('message').style.display="none"
}
//lorsque l'utilisateur tape quelque chose dans le champ mot de passe
myInput.onkeyup=function(){
    let lowerCaseLetters=/[a-z]/g
    if(myInput.value.match(lowerCaseLetters)){
        //si le mot de passe contient une lettre miniscule, enlever la classe "invalide" et ajouter la classe "valid"
        letter.classList.remove('invalid');
        letter.classList.add('valid')
    }else{
        //si le mot de passe ne contient pas une lettre miniscule, enlever la classe "valide" et ajouter la classe "invalid"
        letter.classList.add('invalid');
        letter.classList.remove('valid')
    }
    let upperCaseLetters=/[A-Z]/g
    if(myInput.value.match(upperCaseLetters)){
        //si le mot de passe contient une lettre majuscule, enlever la classe "invalide" et ajouter la classe "valid"
        capital.classList.remove('invalid');
        capital.classList.add('valid')
    }else{
        //si le mot de passe ne contient pas une lettre majuscule, enlever la classe "valide" et ajouter la classe "invalid"
        capital.classList.add('invalid');
        capital.classList.remove('valid')
    }
    let numbers=/[0-9]/g
    if(myInput.value.match(numbers)){
        //si le mot de passe contient un chiffre, enlever la classe "invalide" et ajouter la classe "valid"
        number.classList.remove('invalid');
        number.classList.add('valid')
    }else{
        //si le mot de passe ne contient pas un chiffre, enlever la classe "valide" et ajouter la classe "invalid"
        number.classList.add('invalid');
        number.classList.remove('valid')
    }
    //valider caracter
    
    if(myInput.value.length >=8){
        //si le mot de passe contient un chiffre, enlever la classe "invalide" et ajouter la classe "valid"
        length.classList.remove('invalid');
        length.classList.add('valid')
    }else{
        //si le mot de passe ne contient pas un chiffre, enlever la classe "valide" et ajouter la classe "invalid"
        length.classList.add('invalid');
        length.classList.remove('valid')
    }
    

}