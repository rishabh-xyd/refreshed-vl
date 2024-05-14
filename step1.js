
    var engbutton=document.getElementById("engbtn")
    var languageSelctorPage=document.getElementById("langSelect")

   var beakermove=document.querySelector("#hard-water-sample")
   var measurmove=document.querySelector("#measuring-cylinder")
   var burettestand=document.querySelector("#burette01")
   var emptyburette=document.querySelector("#ff0")
   var measurwater=document.querySelector("#measur-water")
   var conicalflask1=document.querySelector("#conical-flask1")
   var conicalflask2=document.querySelector("#conicalflask2")
   var funnelimg1=document.querySelector("#funnel1")
   var buffersolution=document.querySelector("#buffer-solution")
   var blacktea=document.querySelector("#black-tea-beaker")
   var dropimg1=document.querySelector("#drop1")
   var funnel2=document.querySelector("#funnel2")
   var dropimg2=document.querySelector("#drop2")
   var conicalwater=document.querySelector("#conical-water")
   var emptpipette=document.querySelector("#emptypippete")
   var emptpipette2=document.querySelector("#emptypipette2")
    var filledpipette=document.querySelector("#filledpippete")
    var droperdrop=document.querySelector("#bufferdrop")
    var droperwater=document.querySelector("#droper-water")
    var blackdrop=document.querySelector("#blackTdrop")
    var filledblackpipt=document.querySelector("#blackTpipett")
    var coneflsk1=document.getElementById("conical-flask1");        //filled flask
    var coneflsk2=document.getElementById("conical-flask2");        //red-vien flask
    var DropsInsideConical=document.querySelector("#dropsInsideConical")

    var s=0;
    function englang(){
        if(s==0){
            languageSelctorPage.style.display = "none";
            setTimeout(() => {
                languageSelctorPage.style.opacity="0"
            }, 500);
            // message will be english
            
            s+=1;
        }
        
        
    }
    function hindilang(){
        if(s==0){
            languageSelctorPage.style.display = "none";
            s+=1;
            // var f=0;
        }
    }
    
    var f=0;



    var textOFinstructions=documnet.querySelector("#message-text")

    // textOFinstructions.textContent = "Click on the Hard Water Sample Beaker to start the Experiment";
function movehardwater(){
    //movement of hardwater to measuring cylinder
    if(f==0){
        // textOFinstructions.textContent = "100ml of Hard Water is poured inside the Measuring Cylinder.";
        beakermove.style.transform= "translate(-25%,-180%) rotate(-60deg)"
        funnelimg1.style.opacity="100"
        setTimeout(function(){
            dropimg1.style.opacity="100"
            setTimeout(function(){
                        measurwater.style.opacity="100"
                    dropimg1.style.opacity="0"
                    setTimeout(function(){
                    beakermove.style.transform= "translate(0%,0%) rotate(0deg)"
                    funnelimg1.style.opacity="0"
                    dropimg1.style.opacity="0"
                    textOFinstructions.textContent = "100ml of Hard Water is poured inside the Measuring Cylinder.";
                },1400)
            },1400)
        },2400)
    
        f+=1;
    }
}
    

    function movecyldr(){
        // movement of measuring cylinder to conical flask
      if(f==1){
        measurmove.style.transform="translate(-20%, -40%) rotate(-60deg)"
        measurwater.style.transform="translate(100%, -115.5%) rotate(-60deg)"
        funnel2.style.opacity="100"
        
        setTimeout(function(){
          measurwater.style.opacity="0"
          dropimg2.style.opacity="100"
        
          setTimeout(function(){
            dropimg2.style.opacity="0"
            funnel2.style.opacity="0"
            DropsInsideConical.style.opacity="100"
            setTimeout(() => {
                DropsInsideConical.style.opacity="0"
                coneflsk1.src="assets/filled volumetric-flask.png"
            }, 1400);
           
        },1400)
        
              
        
        
    },1400)
    setTimeout(function(){
        
      measurmove.style.transform= "translate(0%,0%) rotate(0deg)"
      measurwater.style.transform="translate(0%, 0%) rotate(0deg)"
        funnel2.style.visibility="hidden";
        dropimg2.style.visibility="hidden";
        conicalwater.style.visibility="visible";
},3000) 
f+=1;
      }
    }


    function emptypipettee(){
    if(f==2){
        //droper(pipette) hawaw mei le jane ke liye
        emptpipette.style.transform= "translate(-1500%,-70%) rotate(-90deg)"
    
    setTimeout(function(){
        //droper went inside to buffer solution
        emptpipette.style.transform= "translate(-750%,-70%) rotate(-90deg)"
        
        setTimeout(function(){
            //do not delete this timeout

            setTimeout(function(){
                
                filledpipette.style.opacity="100"

                emptpipette.style.opacity ="0"
                        
               
               
                setTimeout(function(){
                    //droper buffer solution hawa mei
                    emptpipette.style.transform= "translate(-1000%, 263.55%) rotate(-90deg) "
                    filledpipette.style.transform= "translate(0%, -100%)"
                    

                    setTimeout(function(){
                        // hawa se conical flask mei

                        filledpipette.style.transform= "translate(-2740%, -100%)"
                        

                        setTimeout(function(){
                            //conical falsk se gayab
                            filledpipette.style.transform= "translate(-2740%, -30%)"
                            
                            
                            setTimeout(function(){
                                droperdrop.style.opacity="100"
                                
                                filledpipette.style.opacity="0"
                              
                                 emptpipette.style.opacity="100"
                                
                                setTimeout(() => {
                                    droperdrop.style.opacity="0"
                                    emptpipette.style.transform= "translate(-1500%, 263.55%) rotate(-90deg) "
                                    emptpipette.style.opacity="0"
                                    emptpipette2.style.opacity="100"
                               }, 1400);

                                
                            },2400)
                            
                        },2400)
                        
                    },2400)
                    
                },1400)
                
                
            },1400)
           
        },1400)

    },2400)
    f+=1;
    }
   }

   function emptypipettee2(){
    if(f==3){
        emptpipette2.style.transform="translate(-1500%, -300%) rotate(-90deg)"
        setTimeout(function(){
            emptpipette2.style.transform="translate(-750%, -300%) rotate(-90deg)"
            setTimeout(function(){
                emptpipette2.style.opacity="0"
               
               filledblackpipt.style.opacity="100"
               //filledblackpipt.style.transitionDuration="0s"
               
                    setTimeout(function(){
                        
                        filledblackpipt.style.transform="translate(0%, -100%)"
                        setTimeout(function(){
                            emptpipette2.style.transform="translate(-979%, 156.8%) rotate(-90deg)"
                            filledblackpipt.style.transform="translate(-3750%, -100%)"
                            setTimeout(() => {
                                filledblackpipt.style.transform="translate(-3750%, -27%)"
                                // emptpipette2.style.transitionDuration="0s"
                                // filledblackpipt.style.transitionDuration="0.9s"
                                setTimeout(() => {
                                    filledblackpipt.style.opacity="0"
                                    emptpipette2.style.opacity="100"
                                    blackdrop.style.opacity="100"
                                    // blackdrop.style.transitionDuration="1s"
                                    setTimeout(() => {
                                        blackdrop.style.opacity="0"
                                        // blackdrop.style.transitionDuration="0s"
                                        setTimeout(() => {
                                            
                                            
                                            // emptpipette2.style.transform="translate(700%, -100%)" //bug here
                                            setTimeout(function()  {
                                                coneflsk2.src="assets/redvine volumetric-flask.png"
                                                emptpipette2.style.opacity="0"

                                            }, 400);
                                        }, 200);
                                        
                                    }, 2400);
                                }, 1400);
                            }, 2400);
                        },1000)
                    },3000)
            },2400)
        },2400)
    }
f+=1;
}

var nextbutton =document.getElementById("next-button")
function next1(){
    if(f==4){
        
        
            // Set the URL of the destination page
           // var destinationPage = "C:\Users\risha\OneDrive\Desktop\IITK VISHU\step2.html";
            
            // Navigate to the destination page
            window.location.href = "step2.html";
            f+=1;
        


    }

}
var textOFinstructions=document.querySelector("#Message")



      


