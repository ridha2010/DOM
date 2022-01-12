// ****************************************************** 
// ************** Variables *****************************
// ****************************************************** 
const btnsplus = document.querySelectorAll(".btn-plus")
const btnsmoins= document.querySelectorAll(".btn-moins")
const btnmovex = document.querySelectorAll(".btn-delete")
const qtes= document.querySelectorAll(".quantity")
const lesprix = document.querySelectorAll(".prx")
const tprix=[150,250,650,650,200,150]
let bx=[true,true,true,true,true,true];by=[false,false,false,false,false,false];bm=[0]
let tot1 = document.querySelector("#prix-total")
let tot2 = document.querySelector("#rem-total")
let tot3 = document.querySelector("#net-total")
let som1=0;let som2=0; let som3=0;
let somx1=[0,0,0,0,0,0];let somx2=[0,0,0,0,0,0];let somx3=[0,0,0,0,0,0]
zx=0;
// ****************************************************** 
// **************Evenements ***************************** 
// ******************************************************
for (let i=0;i<btnsplus.length;i++){
    btnsplus[i].addEventListener("click",function(){
        btnsplus[i].previousElementSibling.innerHTML++
     if (btnsplus[i].previousElementSibling.innerHTML>3 && bx[i]) {
        lesprix[i].innerHTML=lesprix[i].innerHTML*(90/100)
        bx[i]=false
        by[i]=true
     }  
     calc1(i) 
    

    })
    
}
// ****************************************************** 
for (let i=0;i<btnsmoins.length;i++){
    btnsmoins[i].addEventListener("click",function(){
     if (btnsmoins[i].nextElementSibling.innerHTML>0) {
        btnsmoins[i].nextElementSibling.innerHTML--
    }
      if (btnsmoins[i].nextElementSibling.innerHTML<4 && by[i]) {
        lesprix[i].innerHTML=lesprix[i].innerHTML*(100/90)  
        by[i]=false 
        bx[i]=true
     }   
      calc1(i) 
    })
}

for( let i=0;i<btnmovex.length;i++) {
  btnmovex[i].addEventListener("click", function () {
    btnmovex[i].parentElement.parentElement.remove();
    btnsmoins[i].nextElementSibling.innerHTML=0
     
        calc1(i)
  })
 
}
function calc1(z) {
        som3=lesprix[z].innerHTML*qtes[z].innerHTML;
        som1=tprix[z]*qtes[z].innerHTML
        som2=som1-som3 
        somx3[z]=som3;somx1[z]=som1;somx2[z]=som2;
        let totx1=0; let totx2=0; let totx3=0;
        for(let x=0;x<tprix.length;x++) {
           totx1 += somx1[x]; 
           totx2 += somx2[x]; 
           totx3 += somx3[x]; 
        }
   
     tot3.innerHTML = totx3;
        tot2.innerHTML = totx2;
        tot1.innerHTML = totx1;
           console.log(somx3,somx2,somx1,tot1.innerHTML,tot2.innerHTML,tot3.innerHTML)
        console.log(bx,by,totx1,totx2,totx3,zx,"bm=== ",bm)
     
}
