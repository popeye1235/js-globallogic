document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".round-btn");
    
    
    button.addEventListener("click", function() {
      button.style.top = "0"
      button.style.right = "0"
      button.style.transform = "tranlate(0, 0)"
    })
  })