document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = signupForm.querySelector('input[placeholder="Username"]').value.trim();
        const email = signupForm.querySelector('input[placeholder="Email"]').value.trim();
        const password = signupForm.querySelector('input[placeholder="Password"]').value.trim();

        // Validate form inputs
        if (!username || !email || !password) {
            alert('All fields are required.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // For demonstration purposes, simply log the form data to the console.
        console.log({ username, email, password });

        // Here you would typically send the form data to the server using fetch or XMLHttpRequest.
        alert('Sign up successful! Check the console for form data.');
    });

    // Adding some interactivity to the gallery section
    const galleryItems = document.querySelectorAll('.gallery-item img');
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            openModal(item.src, item.alt);
        });
    });

    // Modal setup
    const modal = document.createElement('div');
    modal.id = 'galleryModal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <img class="modal-image" src="" alt="">
        </div>
    `;
    document.body.appendChild(modal);

    const modalContent = modal.querySelector('.modal-content');
    const modalImage = modal.querySelector('.modal-image');
    const closeModal = modal.querySelector('.close');

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    function openModal(src, alt) {
        modalImage.src = src;
        modalImage.alt = alt;
        modal.style.display = 'block';
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});