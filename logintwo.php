<?php
session_start();

if (isset($_POST['username']) && isset($_POST['password'])) {
 
  if ($_POST['username'] == 'myusername' && $_POST['password'] == 'mypassword') {
 
    $_SESSION['username'] = $_POST['username'];
    $_SESSION['loggedin'] = true;

 
    header('Location: index.html');
    exit;
  } else {
    // Display an error message
    $error = 'Invalid username or password';
 }
};

?>