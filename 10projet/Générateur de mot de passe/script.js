let copyBtn=document.querySelector('#copy');
function getPassword(){
    let shars="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let passwordLength=16;
    password="";

    //générer le mot de passe
    for(let i=0; i<passwordLength; i++){
        let rondomNumber=Math.floor(Math.random() * shars.length)
        password+=shars.substring(rondomNumber, rondomNumber +1)
        // afficher le mot passe

    document.getElementById('password').value=password;

    // changer style du bouton
    copyBtn.style.background="#6c757d"
    copyBtn.style.color="#fff"
    }
 }

 //fonction copier mot de passe

 function copyMdp(){
    let inputPassword=document.querySelector("#password");

    //vérifier le mot de passe 
    if(inputPassword.value.length==16){
        // copier le mot de passe
        inputPassword.select();
        document.execCommand("copy");

        //changer le style de bouton

        copyBtn.style.background="transparent"
        copyBtn.style.color="#000"
        
        alert("mot de passe copié !")
         document.getElementById('password').value=""
    }else{
        alert("Veuillez générer un mot de passe")
    }
 }
    