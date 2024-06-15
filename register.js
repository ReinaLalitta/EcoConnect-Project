document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const errorMessage = document.getElementById('error-message');

    registerForm.addEventListener('submit', function(event) {
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const phone = document.getElementById('phone').value;

        if (!username || !email || !password || !confirmPassword || !firstName || !lastName || !phone) {
            errorMessage.style.display = 'block';
            errorMessage.textContent = 'Please fill in all fields.';
            event.preventDefault(); // Prevent form submission
        } else if (password !== confirmPassword) {
            errorMessage.style.display = 'block';
            errorMessage.textContent = 'Passwords do not match.';
            event.preventDefault(); // Prevent form submission
        } else {
            errorMessage.style.display = 'none';
        }
    });
});