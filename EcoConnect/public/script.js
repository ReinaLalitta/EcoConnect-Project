document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = signupForm.querySelector('input[placeholder="Username"]').value;
        const email = signupForm.querySelector('input[placeholder="Email"]').value;
        const password = signupForm.querySelector('input[placeholder="Password"]').value;

        // For demonstration purposes, simply log the form data to the console.
        console.log({ username, email, password });

        // Here you would typically send the form data to the server using fetch or XMLHttpRequest.
        alert('Sign up successful! Check the console for form data.');
    });

    // Adding some interactivity to the gallery section
    const galleryItems = document.querySelectorAll('.gallery-item img');
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            alert('You clicked on a gallery item!');
        });
    });
});