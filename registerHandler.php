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
    // Check if all fields are set
    if (isset($_POST['username'], $_POST['email'], $_POST['password'], $_POST['confirmPassword'], $_POST['firstName'], $_POST['lastName'], $_POST['phone'])) {
        // Retrieve form data
        $username = $_POST['username'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $confirmPassword = $_POST['confirmPassword'];
        $firstName = $_POST['firstName'];
        $lastName = $_POST['lastName'];
        $phone = $_POST['phone'];

        // Validate form data
        if (empty($username) || empty($email) || empty($password) || empty($confirmPassword) || empty($firstName) || empty($lastName) || empty($phone)) {
            die("All fields are required.");
        }

        if ($password !== $confirmPassword) {
            die("Passwords do not match.");
        }

        // Hash the password
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        // Insert user data into the database
        $query = "INSERT INTO users (username, email, password, first_name, last_name, phone) VALUES (?, ?, ?, ?, ?, ?)";
        $stmt = mysqli_prepare($connection, $query);
        mysqli_stmt_bind_param($stmt, "ssssss", $username, $email, $hashedPassword, $firstName, $lastName, $phone);

        if (mysqli_stmt_execute($stmt)) {
            echo "Registration successful. You can now <a href='login.html'>login</a>.";
        } else {
            echo "Error: " . mysqli_error($connection);
        }

        // Close statement and connection
        mysqli_stmt_close($stmt);
        mysqli_close($connection);
    } else {
        // Missing form data
        die("All fields are required.");
    }
} else {
    die("Invalid request.");
}
?>