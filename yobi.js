document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.querySelector(".menu-btn");
    const sidebar = document.querySelector(".sidebar");
    const gridContainer = document.querySelector(".grid-container");

    menuBtn.addEventListener("click", function () {
        this.classList.toggle("active");
        sidebar.classList.toggle("active");
        menuBtn.querySelectorAll('span').forEach(span => {
            span.style.backgroundColor = (span.style.backgroundColor === 'white') ? 'black' : 'white';
        });        
    });

    document.addEventListener("click", function (event) {
        setTimeout(() => {
            if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
                sidebar.classList.remove("active");
                menuBtn.classList.remove("active"); // Reset menu button state
                menuBtn.querySelectorAll('span').forEach(span => {
                    span.style.backgroundColor = 'black'; // Reset color
                });
            }
        }, 100); // Small delay to prevent immediate closing
    });
    document.querySelectorAll('.grid-item').forEach(item => {
        item.addEventListener('click', function() {
          window.location.href = 'gallery1.html';
        });
      });
          
});
