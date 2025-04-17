
let start=document.querySelector(".start");
let stop=document.querySelector(".stop");
let restart=document.querySelector(".restart");
let sp=document.getElementsByTagName('span');
let audio=document.querySelector("audio")
var t;
var h=0, mn=0, s=0, sm=0;
function chrono(){
    sm+=1
    if(sm==10){
       sm=1
       s+=1
    }
    if(s==60){
        s=0
        mn+=1
    }
    if(mn==60){
        mn=0
        h+=1
    }
    sp[0].innerHTML= h +"h"
    sp[1].innerHTML= mn +"min"
    sp[2].innerHTML= s +"s"
    sp[3].innerHTML= sm +"ms"
}
start.addEventListener('click', function(){
    t=setInterval(chrono,100);
    console.log(t)
})
stop.addEventListener('click',function(){
    clearInterval(t);
})
restart.addEventListener('click',function(){
    clearInterval(t);
    h=0, mn=0, s=0, sm=0;
    sp[0].innerHTML= h +"h"
    sp[1].innerHTML= mn +"min"
    sp[2].innerHTML= s +"s"
    sp[3].innerHTML= sm +"ms"
})
