for (var i=0; i< document.querySelectorAll(".guitar").length; i++)
{
    document.querySelectorAll(".guitar")[i].addEventListener("click",function(){
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);

    });

}
document.addEventListener("keypress",function(event){
    console.log(event);
    makeSound(event.key);
    buttonAnimation(event.key);
});


function buttonAnimation(currentKey) {
  
    if (currentKey == 'e' || currentKey == 'B' || currentKey == 'G' || currentKey == 'D' || currentKey == 'A' || currentKey == 'E' || currentKey == 'C'){
        switch (currentKey){
            case "e":
                var activeButton = document.querySelector(".First_String_e");
                but_pressed(activeButton);
                break;
            case "B":
                var activeButton = document.querySelector(".Second_String_B");
                but_pressed(activeButton);
                break;
            case "G":
                var activeButton = document.querySelector(".Third_String_G");
                but_pressed(activeButton);
                break;
            case "D":
                var activeButton = document.querySelector(".Fourth_String_D");
                but_pressed(activeButton);
                break;
            case "A":
                var activeButton = document.querySelector(".Fifth_String_A");
                but_pressed(activeButton);
                break;
            case "E":
                var activeButton = document.querySelector(".Sixth_String_E");
                but_pressed(activeButton);
                break;
            case "C":
                var activeButton = document.querySelector(".C_Chord");
                but_pressed(activeButton);
                break;
            default:
                alert(currentKey);
        }
    }
    else{
        var activeButton = document.querySelector("." + currentKey);
        but_pressed(activeButton);
    }
}

function but_pressed(activeButton){
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 200);
  
  }
 


function makeSound(event)
{
    switch (event){
        case "First_String_e":
        case "e":
            var audio = new Audio("sounds/1st_String_e.mp3");
            audio.play();
            break;
        case "Second_String_B":
        case "B":
            var audio = new Audio("sounds/2nd_String_B.mp3");
            audio.play();
            break;
        case "Third_String_G":
        case "G":
            var audio = new Audio("sounds/3rd_String_G.mp3");
            audio.play();
            break;
        case "Fourth_String_D":
        case "D":
            var audio = new Audio("sounds/4th_String_D.mp3");
            audio.play();
            break;
        case "Fifth_String_A":
        case "A":
            var audio = new Audio("sounds/5th_String_A.mp3");
            audio.play();
            break;
        case "Sixth_String_E":
        case "E":
            var audio = new Audio("sounds/6th_String_E.mp3");
            audio.play();
            break;
        case "C_Chord":
        case "C":
            var audio = new Audio("sounds/C_Chord.mp3");
            audio.play();
            break;
        default:
            console.log(event);
    }
}