<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <form action="loginhandler.php" method="POST">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        <button type="submit">Login</button>
    </form>

    <?php
    // Check for error messages
    if (isset($_GET['error'])) {
        $error = $_GET['error'];
        if ($error === 'invalid_credentials') {
            echo "<p style='color: red;'>Invalid username or password.</p>";
        } elseif ($error === 'missing_fields') {
            echo "<p style='color: red;'>Username and password are required.</p>";
        }
    }
    ?>
</body>
</html>