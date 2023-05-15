<?php
$host ="mysql:host=localhost;dbname=aref";
$user_name = "root" ;
$password =  ""; 
$dbname = "database_name";
$option = array(
PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES UTF8" // FOR Arabic
);
if(isset($_POST['submit'])){
    $username = $_POST['username'];
    $password = $_POST['password'];
    $sql = "SELECT * FROM name WHERE username='$username' AND password='$password'";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        session_start();
        $_SESSION['username'] = $username;
        header('Location: welcome.php');
    } else {
        echo "Invalid username or password";
    }
};