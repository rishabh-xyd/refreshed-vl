var f=9;
var funnelOverBurette=document.querySelector("#funnelOverBurette")
var EDTAbeaker=document.querySelector("#edta-beaker")
var WaterOverBurettedrops=document.querySelector("#waterOverBurette")
var filleBburet=document.querySelector("#filledburette")
var redvineFlask=document.querySelector("#redvineflask")
var buretteEDTAsolDROPS=document.querySelector("#buretteEDTAsolDROPS")
var buretStand=document.querySelector("#buretStand")
var emptyburette=document.querySelector("#emptyburette")
var exitbutton =document.getElementById("next-button")
 exitbutton.textContent = "Exit";


function buffersolmov(){
    if(f==9)
    {
        EDTAbeaker.style.transform="translate(-55%,-250%)"
        setTimeout(function(){
            EDTAbeaker.style.transform="translate(-75%,-280%) rotate(-50deg)"
            funnelOverBurette.style.opacity="100"
            setTimeout(() => {
                
                WaterOverBurettedrops.style.opacity="100"
                setTimeout(() => {
                    filleBburet.style.opacity="100"
                    WaterOverBurettedrops.style.opacity="0"
                    setTimeout(() => {
                        funnelOverBurette.style.opacity="0"
                        EDTAbeaker.style.transform="translate(0%,0%) rotate(0deg)"
                    }, 1400);
                    
                }, 1400);
            }, 1400);
        },2400)
       
       
        f+=1;
    }
}

function redvineconicalMOV(){
    if(f==10){
        redvineFlask.style.transform="translate(-488%,-13%)"
        // EDTAbeaker.style.transform="translate(-55%,-250%)"
        // WaterOverBurettedrops.style.opacity="100"
        
        f+=1;
    }
}

function buretteTAProtate(){
    if(f==11){
        setTimeout(() => {
            
            buretteEDTAsolDROPS.style.opacity="100"
            setTimeout(() => {
                buretteEDTAsolDROPS.style.opacity="0"
                setTimeout(() => {
                    
                    redvineFlask.src="assets/blue volumetric-flask.png"
                    setTimeout(() => {
                        EDTAbeaker.style.opacity="0"
                        filleBburet.style.opacity="0"
                        buretStand.style.opacity="0"
                        emptyburette.style.opacity="0"
                        setTimeout(() => {
                            redvineFlask.style.transform="translate(0%,0%)"
                        }, 1400);
                    }, 5000);
                }, 2400);
            }, 2400);
        }, 400);
        f+=1;
    }
}

//bug here
function next1(){
    if(f==12){
        buretStand.style.opacity="100"
        // window.close();
          
    }
}



// function redvineconicalMOV(){
//     if(f==12){
//         redvineFlask.style.transform="translate(0%,0%)"
//         // EDTAbeaker.style.transform="translate(-55%,-250%)"
//         // WaterOverBurettedrops.style.opacity="100"
        
//         f+=1;
//     }
// }
