document.addEventListener("DOMContentLoaded", function(event) {
  
  document.getElementById("s-pract").addEventListener("mouseenter", function(){
    document.querySelectorAll(".l-pract").forEach(function(elem){
      elem.classList.add("image-overlay-reveal");
    });
  });

  document.getElementById("s-pract").addEventListener("mouseleave", function(){
    document.querySelectorAll(".l-pract").forEach(function(elem){
      elem.classList.remove("image-overlay-reveal");
    });
  });

  document.getElementById("s-teach").addEventListener("mouseenter", function(){
    document.querySelectorAll(".l-teach").forEach(function(elem){
      elem.classList.add("image-overlay-reveal");
    });
  });

  document.getElementById("s-teach").addEventListener("mouseleave", function(){
    document.querySelectorAll(".l-teach").forEach(function(elem){
      elem.classList.remove("image-overlay-reveal");
    });
  });

  document.getElementById("s-learn").addEventListener("mouseenter", function(){
    document.querySelectorAll(".l-learn").forEach(function(elem){
      elem.classList.add("image-overlay-reveal");
    });
  });

  document.getElementById("s-learn").addEventListener("mouseleave", function(){
    document.querySelectorAll(".l-learn").forEach(function(elem){
      elem.classList.remove("image-overlay-reveal");
    });
  });


});