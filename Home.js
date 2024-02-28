
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      document.querySelector('.opening-computer').style.display = 'none';
      document.querySelector('p').style.opacity = '1';
    }, 4000);
  });

  document.getElementById("toggleMode").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
  });

