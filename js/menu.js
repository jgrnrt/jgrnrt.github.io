function toggleBurger() {
  var currentHeight = document.getElementById("overlayNav").style.height;
  var burger = document.getElementById("hamburger");
burger.classList.toggle("open");
  if(currentHeight =="0vh"){
    document.getElementById("overlayNav").style.height = "100vh";

  } else
  document.getElementById("overlayNav").style.height = "0vh";
}