document.addEventListener("DOMContentLoaded", function () {
    const signupBtns = document.querySelectorAll(".signupbtn"); // Select all signup buttons
    const modal = document.getElementById("signupModal");
    const closeBtn = document.querySelector(".close");
    const body = document.body;

    // Open Modal for all signup buttons
    signupBtns.forEach((btn) => {
        btn.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior
            modal.classList.add("active");
            body.classList.add("modal-open");

            const sidebar = document.querySelector('.sidebar');
            if (sidebar) sidebar.style.display = 'none'; // Hide sidebar if it exists
        });
    });

    // Close Modal
    closeBtn.addEventListener("click", function () {
        modal.classList.remove("active");
        body.classList.remove("modal-open");

        const sidebar = document.querySelector('.sidebar');
        if (sidebar) sidebar.style.display = ''; // Reset display
    });

    // Close when clicking outside modal
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.classList.remove("active");
            body.classList.remove("modal-open");
            
            const sidebar = document.querySelector('.sidebar');
            if (sidebar) sidebar.style.display = ''; // Reset display
        }
    });
});
