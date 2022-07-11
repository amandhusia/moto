var car1 = document.getElementById("car1");
var car2 = document.getElementById("car2")
var
//car1
car1.addEventListener("animationiteration",function(){
    var random=((Math.floor(Math.random()*3))*130)
    car1.style.left=random +"px"
})
//car2
window.addEventListener("keydown",function(e){
   if(e.keyCode == "39") { var  car2Left = parseInt(window.getComputedStyle(car2).getPropertyValue("left"))
 if(car2Left < 840){car2.style.left=(car2Left + 130) +"px"}}

 if(e.keyCode == "37") { var  car2Left = parseInt(window.getComputedStyle(car2).getPropertyValue("left"))
 if(car2Left > 600){car2.style.left=(car2Left - 130) +"px"}}
})

//game over
function Gameover(){
    var car1Top =parseInt(window.getComputedStyle(car1).getPropertyValue("top"))
    var car1Left=parseInt(window.getComputedStyle(car1).getPropertyValue("left"))
    var car2Top =parseInt(window.getComputedStyle(car2).getPropertyValue("top"))
    var car2Left =parseInt(window.getComputedStyle(car2).getPropertyValue("left"))
    if((car1Left===car2Left) && (car1Top>250)&&(car1Top<450)){
        
    }

}


