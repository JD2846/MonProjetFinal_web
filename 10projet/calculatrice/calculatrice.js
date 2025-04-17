let resultat=document.querySelector('.input')
let ecran=document.querySelector('.ecran');
let input=document.querySelector("input");
function ValeurEntrée(valeur){
    ecran.value+=valeur;
}
function calcul(){
    try{
        resultat.value=eval(ecran.value)
    }catch(error){
        ecran.value="erreur";
        
    }
}

function effaceDernier(){
    ecran.value=ecran.value.slice(0, -1);
}

function efface(){
    ecran.value="";
    resultat.value="";
}
function restart(){
    ecran.value=eval(ecran.value)
    resultat.value=""
}
// let tableau=[];
// let nbr1;
// const getButton = (button)=>{
//     button.addEventListener('click', function(){
//         let val=button.value
//         ecran.innerHTML+=val;
//         if(!isNaN(button.value)){
//             nbr1=[val];
//             console.log((Number.parseFloat(nbr1)));
//         }
       
//         else {
//             let tableau1=[];
           
//         }
//         tableau1=[val];
//         console.log(tableau1)
//         switch (val) {
//             case "=":
//                 cool(nbr1,tableau1)
//                 break;
        
//             default:
//                 break;
//         }
//         function cool(a,b){
//             return a+b
//         }
//     //    tableau.push(button.value)  
//     //    for(let i of tableau){
//     //     if (!isNaN(i)){
//     //         tab[i]=i;
//     //        ecran.innerHTML+=tab[i];
            
           
            
//     //     }
//     //     else{
//     //         tab1[i]=i;
//     //         console.log (Number.parseFloat(tab1[i]));
//     //         // ecran.innerHTML=tab1[i];
//     //     }
//     //    }
//     //    console.log(Number.parseFloat((tab[0]+tab[1])));
//     //    console.log(tableau)
//     })    
// }

// function addition(a,b){
//     return a+b
// }
// addition();
   
// buttons.forEach(button=>getButton(button));
// //console.log(tableau);

// // let tab0 = [4, 6, 8, 5, 3]

// // for(let i of tab0){
// //     //console.log("Dans le tableau ", tab0[i])
// //     console.log(tab0.indexOf(i))
// //     console.log("La valeur de i ",i)

// // }
// // console.log("========================================================")
 
// // for(let i = 0; i < tab0.length; i++)
// // {
// //     console.log("La valeur de i: "+i, "Tab[i] est : "+tab0[i])
// // }

// // const somme=(a,b)=>{
    
// //     return `
// //         a+b = ${a+b},
// //         sous(a, b) = ${sous(a, b)}
// //     `;
// // }
// // console.log(somme(10,5));
// // function sous(a,b){
// //     return a-b;
// // }


// // let i=0
// // for(i=0; i<10; i++){
// //     if (i % 2 !=0){
// //         continue;
// //     }
// //     console.log(i)
    
// // }