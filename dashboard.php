<?php
session_start();
require_once 'db_connection.php';

// Check if user is logged in
if (!isset($_SESSION['username'])) {
    header("Location: login.html"); // Redirect to login page if not logged in
    exit();
}

// Fetch user data from the database
$username = $_SESSION['username'];
$query = "SELECT * FROM users WHERE username='$username'";
$result = $DB->read($query);

if ($result) {
    $userData = $result[0]; // Assuming username is unique, so fetch the first result
} else {
    // Handle error if user not found (though it should not happen if user is logged in)
    header("Location: login.html"); // Redirect to login page if user data not found
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Dashboard - EcoConnect</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="dashboard.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
</head>
<body>
    <header>
        <div class="container">
            <h1>EcoConnect Dashboard</h1>
            <nav>
                <ul>
                    <li><a href="home.html">Home</a></li>
                    <li><a href="dashboard.php">Dashboard</a></li>
                    <li><a href="settings.html">Settings</a></li>
                    <li><a href="logout.php">Logout</a></li> <!-- Link to logout.php to handle logout -->
                </ul>
            </nav>
        </div>
    </header>
    <main>
        <section class="dashboard">
            <div class="container">
                <h2>Welcome, <?php echo $userData['username']; ?></h2> <!-- Display username -->
                <div class="dashboard-menu">
                    <ul>
                        <li><a href="#profile">Profile</a></li>
                        <li><a href="#projects">My Projects</a></li>
                        <li><a href="#marketplace">Marketplace</a></li>
                        <li><a href="#events">Events</a></li>
                        <li><a href="#messages">Messages</a></li>
                        <li><a href="#activity">Activity Feed</a></li>
                        <li><a href="#notifications">Notifications</a></li>
                        <li><a href="#friends">Friends</a></li>
                    </ul>
                </div>
                <div class="dashboard-content">
                    <div id="profile">
                        <h3>Profile Information</h3>
                        <form id="profileForm" action="updateProfile.php" method="POST"> <!-- Form to update profile -->
                            <label for="username">Username:</label>
                            <input type="text" id="username" name="username" value="<?php echo $userData['username']; ?>" required>
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" value="<?php echo $userData['email']; ?>" required>
                            <label for="fullname">Full Name:</label>
                            <input type="text" id="fullname" name="fullname" value="<?php echo $userData['fullname']; ?>" required>
                            <label for="bio">Bio:</label>
                            <textarea id="bio" name="bio" required><?php echo $userData['bio']; ?></textarea>
                            <label for="location">Location:</label>
                            <input type="text" id="location" name="location" value="<?php echo $userData['location']; ?>" required>
                            <input type="submit" value="Update Profile">
                        </form>
                    </div>
                    <!-- Other sections like My Projects, Marketplace, Events, Messages, Activity Feed, etc. -->
                </div>
            </div>
        </section>
    </main>
    <footer>
        <div class="container">
            <p>&copy; <?php echo date('Y'); ?> EcoConnect. All rights reserved.</p>
        </div>
    </footer>
    <script src="dashboard.js"></script>
</body>
</html>