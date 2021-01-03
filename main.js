/*Change menubar to X when clicked and 
return back to state on click*/
function myFunction(x) {
    x.classList.toggle("change");
  }

//   

var menuBar= document.getElementById("menuBar")
var navMenu= document.getElementById("navMenu")

menuBar.onclick = function() {
    if (navMenu.style.display == "none"){
        navMenu.style.display = "block";
    }
    else{
        navMenu.style.display = "none";
    }
}