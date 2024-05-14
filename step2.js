

// //zomming the lab
// document.addEventListener('DOMContentLoaded', function() {
//     const img = document.querySelector('.lab');
//     const zoomButton = document.getElementById('next-button');
  
//     zoomButton.addEventListener('click', function() {
//       img.classList.toggle('zoomed_lab');
      
//     });

//   });


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ****************************************************************************************STEP2**********************************************************************************
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// **************************************************************************************variables********************************************************************************
                                                                                        
var hardwatermove=document.querySelector("#hardwater")                                          // hardwater beaker
var funnel1Initial=document.querySelector("#funnel1-step2")                                     //funnel at initial conical flask (hidden)
var funnel2column=document.querySelector("#funnel2-step2")                                      // funnel at the above of the column (hidden)
var dropATinitiaConical=document.querySelector("#drop1-step2")                                  // water drops of hardwater above the funnel1 (hidden)
var dropATcolumn=document.querySelector("#drop2-step2")                                         // water dops of hardwater from conical flask to the above of the funnel2 and column (hidden)
var dropInsideColumn=document.querySelector("#drop-inside-column")                              // water drops inside the column (hidden)
var conflsk1=document.querySelector("#conical1-step2");                                         //empty flask for hardwater 
var conflsk2=document.querySelector("#conical2-step2");                                         // empty flask for hardwater below column
var filledConicalFalsk1Step2=document.querySelector("#filled-conical-falsk1-step2")              // filled conical at initial hardwater (hidden)
var filledConicalFalsk2Step2=document.querySelector("#filled-conical-flask2-step2")             // filled conical below the column (hidden)
var dropp1=document.querySelector("#waterINSIDEflask1")                                               //single drop at initial conical below the funnel (hidden)
var dropp2=document.querySelector("#waterINSIDEflask2")                                               //single drop below the column (hidden)
var emptypiptMOVbuffer=document.querySelector("#emptypipteBuffer1")                             // empty pipett for buffer solution before the movement   
var filledpiptMOVbuffer=document.querySelector("#bufferpipett")                                 //filled pipt of buffer sol
var bufferdrop=document.querySelector("#buffer-drop")                                            // single drop of buffer sol at conical falsk dropped by dropper
var blackTemptypiptMOV=document.querySelector("#blackTemptypipt")                               //empty pippte for blackT sol
var blackTppipetMOV=document.querySelector("#blackTppipet")                                     // filled pippet of blackT sol
var blckTDrop=document.querySelector("#blckTdrop")                                              


// **********************************************************************************end of variables*****************************************************************************
var f=5;
function hardwatermov(){
    
    if(f==5){
        setTimeout(() => {
            //***********hardwater went to conical flask */
            hardwatermove.style.transform= "translate(-15%,-120%) rotate(-60deg)"
            funnel1Initial.style.opacity="100"
            setTimeout(() => {
                dropATinitiaConical.style.opacity="100"  
                
                setTimeout(function() {
                    hardwatermove.style.transform= "translate(0%,0%) rotate(0deg)"
                    dropATinitiaConical.style.opacity="0"
                    dropp1.style.opacity="100"
                    // conflsk1.src="assets/filled volumetric-flask.png"
                    // var flask1=conflsk1;
                    
                    setTimeout(function()  {
                        dropp1.style.opacity="0"
                        funnel1Initial.style.opacity="0"
                        conflsk1.style.opacity="0"
                        
                        filledConicalFalsk1Step2.style.opacity="100"           
                        
                    }, 1400);
                }, 1000);
            }, 2400);
        }, 400);
        
        f+=1;
    }
}
function conicalFlaskStep2(){ 
    if(f==6)
    {
        setTimeout(function()  
        {
                //***********conical flsk went to column */
                
                // mov of conical flask to column
            setTimeout(function()  {
                filledConicalFalsk1Step2.style.transform="translate(-270%,-300%) rotate(-60deg)" 
                setTimeout(() => 
                {
                    funnel2column.style.opacity="100"
                    
                    setTimeout(() => 
                    {        
                        filledConicalFalsk1Step2.style.transform=" translate(-270%,-300%) rotate(-90deg)"
                        conflsk1.style.transform="translate(-270%,-300%) rotate(-90deg)"
                        
                        setTimeout(function(){
                            dropATcolumn.style.opacity="100"
                            setTimeout(() => {
                                filledConicalFalsk1Step2.style.opacity="0";  
                                // filledConicalFalsk1Step2.style.transitionDuration="0s"
                                dropInsideColumn.style.opacity="100"
                                conflsk1.style.opacity="100"
                                
                                setTimeout(() => {
                                    
                                    conflsk1.style.transform="translate(0%,0%) rotate(0deg)"
                                    setTimeout(() => {
                                        dropATcolumn.style.opacity="0"
                                        setTimeout(function(){
                                            funnel2column.style.opacity="0"
                                            
                                                dropInsideColumn.style.opacity="0"
                                                dropp2.style.opacity="100"
                                                setTimeout(function(){
                                                        //visible filled conical below column 
                                                    dropp2.style.opacity="0"
                                                    filledConicalFalsk2Step2.style.opacity="100"
                                                    conflsk2.style.opacity="0"
                                                },1400)
                                            
                                        },2400)
                                    }, 1400);
                                   
                            }, 1400);
                            }, 2400);
                               
                               
                        },2400)
                    }, 1400);
                }, 1400);
                    
                }, 1400);

        }, 400);
        f+=1;
    }
}

function MOVconicalflasktoSPACE(){
    if(f==7){
        setTimeout(function(){
            // moving of filled conical flask after the column process to the open area
            // dropp2.style.opacity="100"
            filledConicalFalsk2Step2.style.transform="translate(300% ,0%) rotate(30deg)"
            conflsk1.style.opacity="0"
            setTimeout(() => {
                
                filledConicalFalsk2Step2.style.transform="translate(350% ,15%) rotate(0deg)"

            }, 1400);
            
        },400)
        f+=1;
    }
}
function piptmovhardwater(){
    if(f==8){
        //working of pipette for buffer solution
        // and moving of empty pipette of blackT so we can show the working of EBT
        setTimeout(function(){
            emptypiptMOVbuffer.style.transform= "translate(-1800%,-400%) rotate(-90deg)"
            setTimeout(() => {
                emptypiptMOVbuffer.style.transform= "translate(-650%,-450%) rotate(-90deg)"
                setTimeout(() => {
                    
                    emptypiptMOVbuffer.style.opacity="0"
                    emptypiptMOVbuffer.style.transitionDuration="0s"
                    filledpiptMOVbuffer.style.opacity="100"
                    filledpiptMOVbuffer.style.transitionDuration="0s"

                    setTimeout(() => {
                        filledpiptMOVbuffer.style.transform="translate(-650%,-150%)"
                        filledpiptMOVbuffer.style.transitionDuration="2s"
                        setTimeout(() => {
                            filledpiptMOVbuffer.style.transform="translate(-2800%,-150%)"
                            emptypiptMOVbuffer.style.transform= "translate(-900%,-113%) rotate(-90deg)"
                            emptypiptMOVbuffer.style.transitionDuration="2s"
                            setTimeout(() => {
                                filledpiptMOVbuffer.style.transform="translate(-2765%,-30%)"
                                setTimeout(() => {
                                    emptypiptMOVbuffer.style.opacity="100"
                                    setTimeout(() => {
                                        filledpiptMOVbuffer.style.opacity="0"
                                        bufferdrop.style.visibility="visible"
                                        setTimeout(() => {
                                            bufferdrop.style.visibility="hidden"
                                            setTimeout(() => {
                                                emptypiptMOVbuffer.style.opacity="0"
                                                emptypiptMOVbuffer.style.transform= "translate(-2200%,-113%) rotate(-90deg)"
                                                blackTemptypiptMOV.style.opacity="100"
                                            }, 1400);
                                        }, 1400);
                                        
                                    }, 1400);
                                }, 1400);
                            }, 1800);
                        }, 1400);
                    }, 1400);

                }, 2400);
            }, 2400);
        },400)
        f+=1;
    }
}

function blackTpiptMOV(){
    if(f==9){
        setTimeout(() => {
            
            blackTemptypiptMOV.style.transform="translate(-1500%,-340%) rotate(-90deg)"
            setTimeout(() => {
                blackTemptypiptMOV.style.transform="translate(-450%,-341%) rotate(-90deg)"
                setTimeout(() => {
                    blackTppipetMOV.style.opacity="100"
                    // blackTppipetMOV.style.transitionDuration="0s"
                    setTimeout(() => {
                        blackTemptypiptMOV.style.opacity="0"       //bug
                        blackTemptypiptMOV.style.transitionDuration="0s"
                        blackTppipetMOV.style.transform="translate(0%,-150%)"
                        setTimeout(() => {
                            blackTppipetMOV.style.transform="translate(-1750%,-150%)"
                            setTimeout(() => {
                                blackTemptypiptMOV.style.transform="translate(-780%,-112.5%) rotate(-90deg)"
                                blackTemptypiptMOV.style.transitionDuration="2s"
                                blackTppipetMOV.style.transform="translate(-1875%,-40%)"
                                setTimeout(() => {
                                    blackTemptypiptMOV.style.opacity="100"
                                    setTimeout(() => {
                                        blckTDrop.style.opacity="100"
                                        blackTppipetMOV.style.opacity="0"
                                        // blackTppipetMOV.style.transitionDuration="0s"
                                        setTimeout(() => {
                                            blckTDrop.style.opacity="0"
                                            filledConicalFalsk2Step2.src="assets/blue volumetric-flask.png"
                                            setTimeout(() => {
                                                blackTemptypiptMOV.style.transform="translate(-2000%,-112.5%) rotate(-90deg)"
                                                blackTemptypiptMOV.style.opacity="0"
                                            }, 1400);
                                        }, 1400);
                                    }, 1400);
                                    
                                }, 1400);
                            }, 2400);
                        }, 1400);
                    }, 1400);
                }, 3400);
            }, 2400);
        }, 400);

        f+=1;
    }
}

var nextbutton =document.getElementById("next-button")
function next1(){
    if(f==10){
        
        {
            // Set the URL of the destination page
           // var destinationPage = "C:\Users\risha\OneDrive\Desktop\IITK VISHU\step2.html";
            
            // Navigate to the destination page
            window.location.href = "step3.html";
            f+=1;
        };


    }

}


