// dashboard.js

document.addEventListener('DOMContentLoaded', function() {
    // Fetch user data and populate dashboard
    fetch('getUserData.php')
        .then(response => response.json())
        .then(userData => {
            document.querySelector('.dashboard h2').textContent = `Welcome, ${userData.username}`;

            // Populate profile section
            document.querySelector('#profile').innerHTML = `
                <h3>Profile Information</h3>
                <form id="profileForm">
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" value="${userData.username}" required>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" value="${userData.email}" required>
                    <input type="submit" value="Update Profile">
                </form>
            `;

            // Populate projects section
            const projectsList = userData.projects.map(project => `<li>${project}</li>`).join('');
            document.querySelector('#projects #projectList').innerHTML = projectsList;

            // Populate marketplace section
            const marketplaceList = userData.marketplace.map(item => `<li>${item}</li>`).join('');
            document.querySelector('#marketplace #marketplaceList').innerHTML = marketplaceList;

            // Populate events section
            const eventsList = userData.events.map(event => `<li>${event}</li>`).join('');
            document.querySelector('#events #eventList').innerHTML = eventsList;

            // Populate messages section
            const messageList = userData.messages.map(message => `<li>${message}</li>`).join('');
            document.querySelector('#messages #messageList').innerHTML = messageList;

            // Populate activity feed section
            const activityList = userData.activity.map(activity => `<li>${activity}</li>`).join('');
            document.querySelector('#activity #activityList').innerHTML = activityList;
        })
        .catch(error => console.error('Error fetching user data:', error));
});

// Function to show project form
function showProjectForm() {
    const projectForm = document.getElementById('projectForm');
    projectForm.style.display = projectForm.style.display === 'none' ? 'block' : 'none';
}

// Function to show marketplace form
function showMarketplaceForm() {
    const marketplaceForm = document.getElementById('marketplaceForm');
    marketplaceForm.style.display = marketplaceForm.style.display === 'none' ? 'block' : 'none';
}

// Function to show event form
function showEventForm() {
    const eventForm = document.getElementById('eventForm');
    eventForm.style.display = eventForm.style.display === 'none' ? 'block' : 'none';
}