/*start menu*/

function openmenu() {
    
    "use strict";
    document.getElementById("menu-click").style.width = "100%";
}
function closemenu() {
    
    "use strict";
    document.getElementById("menu-click").style.width = "0%";
}

/*end menu*/

/*start filter of bestsellers*/

function openFantasy() {
    
    "use strict";
    document.getElementById("Fantasy").style.width = "1519px";
    document.getElementById("Fiction").style.width = "0px";
    document.getElementById("Horror").style.width = "0px";
    document.getElementById("YoungAdult").style.width = "0px";
    document.getElementById("NonFiction").style.width = "0px";
}
function openFiction() {
    
    "use strict";
    document.getElementById("Fantasy").style.width = "0";
    document.getElementById("Fiction").style.width = "1519px";
    document.getElementById("Horror").style.width = "0px";  
    document.getElementById("YoungAdult").style.width = "0px";
    document.getElementById("NonFiction").style.width = "0px";
}
function openHorror() {
    
    "use strict";
    document.getElementById("Fantasy").style.width = "0";
    document.getElementById("Fiction").style.width = "0px";
    document.getElementById("Horror").style.width = "1519px";
    document.getElementById("YoungAdult").style.width = "0px";
    document.getElementById("NonFiction").style.width = "0px";
}
function openYoungAdult() {
    
    "use strict";
    document.getElementById("Fantasy").style.width = "0";
    document.getElementById("Fiction").style.width = "0px";
    document.getElementById("Horror").style.width = "0px";
    document.getElementById("YoungAdult").style.width = "1519px";
    document.getElementById("NonFiction").style.width = "0px";
}
function openNonFiction() {
    
    "use strict";
    document.getElementById("Fantasy").style.width = "0";
    document.getElementById("Fiction").style.width = "0px";
    document.getElementById("Horror").style.width = "0px";
    document.getElementById("YoungAdult").style.width = "0px";
    document.getElementById("NonFiction").style.width = "1519px";
}

/*end filter of bestsellers*/

/*start timer*/


var countDownDate = new Date("Jun 1, 2020 15:37:25").getTime();
function timerfn() {
    "use strict";
    var now = new Date().getTime(),
        distance = countDownDate - now,
        days = Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("day-timer").innerHTML = days;
    document.getElementById("hour-timer").innerHTML = hours;
    document.getElementById("minute-timer").innerHTML = minutes;
    document.getElementById("second-timer").innerHTML = seconds;
        
}
var x = setInterval(timerfn, 1000);
    
/*end timer*/

/*start slidshow*/

var index = 0


function slideFN() {

   "use strict";
    var slides = document.getElementsByClassName("mySlides"),
        i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";
    }
    slides[index].style.opacity = "1";
     index = (index + 1) % slides.length;
    
}
    var n =setInterval(slideFN, 4000 );

/*end slidshow*/

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}









