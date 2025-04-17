let addToDOButton =document.getElementById('addToDo');
let ToDOContainer = document.getElementById('todocontainer');
var inputField = document.getElementById('inputField');

addToDOButton.onclick=function(){
    if(inputField.value !=""){
        var paragraph=document.createElement('p')
    }
    //valorisé ce paragraphe avec le contenu de l'input
    paragraph.innerText=inputField.value;
    //stylisé le paragraphe
    paragraph.classList.add('paragraph_style');
    //insérer le paragraphe dans l'élement todocontainer
    ToDOContainer.appendChild(paragraph);
    //vidé le contenu de l'input
    inputField.value="";
    //barré le paragraph quand on clique
    paragraph.addEventListener('click', function(){
        paragraph.classList.add('paragraph_click')
    })
    //supprimer la tâche on double clik sur la tâche
    paragraph.addEventListener('dblclick', supprim);
    function supprim(){
        ToDOContainer.remove(paragraph);
    }
}





