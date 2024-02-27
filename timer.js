let hr1=document.getElementById("hour");
let min1=document.getElementById("min");
let sec1=document.getElementById("sec");
let h=0;
let m=0;
let s=0;
var t;
function start(){
     t=setInterval(function timer(){
         s=s+1;
         if (s>60){
             s=0;
             m=m+1;
         }
         else if (m>60) {
             h=h+1;
             m=0
         }
         sec1.textContent=s;
         min1.textContent=m;
         hr1.textContent=h;
     },1000)
}
function stop(){
   clearInterval(t);
}
