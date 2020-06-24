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

