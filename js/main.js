"use strict" 
 
document.getElementById("promo-button").addEventListener("click", () => { 
 document.body.style.overflow = "hidden"; 
 document.getElementById("cover").classList.add("cover-block"); 
 document.getElementById("modal-window").classList.add("window-position"); 
}); 
 
document.getElementById("cover").addEventListener("click", () => { 
 document.body.style.overflow = "visible"; 
 document.getElementById("cover").classList.remove("cover-block"); 
 document.getElementById("modal-window").classList.remove("window-position"); 
});