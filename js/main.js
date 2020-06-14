// Scroll Button
mainbutton = document.querySelector(".scrollbutton");
window.onscroll = function() {scrollFunction()};
function scrollFunction(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    mainbutton.style.display = "block";
	} else {
    mybutton.style.display = "none";
	}
}
function topFunction(){
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

// Biographies
function myFunction() {
  var x = document.querySelector(".biography");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}