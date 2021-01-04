/*Change menubar to X when clicked and 
return back to state on click*/
function myFunction(x) {
    x.classList.toggle("change");
 	var menuBar= document.getElementById("menuBar");
	var navMenu= document.getElementById("navMenu");
    if (navMenu.style.display != "block"){  // changed from '=="none"
        navMenu.style.display = "block";
    }
    else{
        navMenu.style.display = "none";
    }
}
