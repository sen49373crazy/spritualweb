<?php
$host = "localhost";
$userName = "root";
$password = "123456789";
$dbName = "hackethon";

// Create database connection
$conn = new mysqli($host, $userName, $password, $dbName);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if(isset($_POST['submit']))
{
    $first_name = $conn->real_escape_string($_POST['first_name']);
    $last_name = $conn->real_escape_string($_POST['last_name']);
    $class = $conn->real_escape_string($_POST['class']);
    $password = $conn->real_escape_string($_POST['password']);

    $sql = "INSERT INTO form (first_name, last_name, class, password) VALUES ('$first_name', '$last_name', '$class', '$password')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
?>

 