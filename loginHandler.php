<?php
// Start session
session_start();

// Database connection details
$host = "localhost";
$username = "root";
$password = "Lalitta@#&2003";
$db = "ecoconnect_db";

// Create connection
$connection = mysqli_connect($host, $username, $password, $db);

// Check connection
if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if username and password are set
    if (isset($_POST['username']) && isset($_POST['password'])) {
        // Retrieve form data
        $username = $_POST['username'];
        $password = $_POST['password'];

        // Validate form data
        if (empty($username) || empty($password)) {
            die("Username and password are required.");
        }

        // Fetch user data from the database
        $query = "SELECT * FROM users WHERE username = ?";
        $stmt = mysqli_prepare($connection, $query);
        mysqli_stmt_bind_param($stmt, "s", $username);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        $user = mysqli_fetch_assoc($result);

        // Verify password
        if ($user && password_verify($password, $user['password'])) {
            // Set session variables
            $_SESSION['user_id'] = $user['user_id'];
            $_SESSION['username'] = $user['username'];
            // Redirect to the dashboard
            header("Location: dashboard.php");
            exit();
        } else {
            // Invalid credentials
            header("Location: login.php?error=invalid_credentials");
            exit();
        }

        // Close statement and connection
        mysqli_stmt_close($stmt);
        mysqli_close($connection);
    } else {
        // Missing username or password
        header("Location: login.php?error=missing_fields");
        exit();
    }
} else {
    die("Invalid request.");
}
?>