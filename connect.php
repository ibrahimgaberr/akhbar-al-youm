<?php
$dsn = "mysql:host=localhost;dbname=project" ; 
$user_name = "root" ;
$password =  ""; 
$option = array(
    PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES UTF8" // FOR Arabic
);
try {
    $con = new PDO($dsn , $user_name , $password , $option ); 
    $con->setAttribute(PDO::ATTR_ERRMODE , PDO::ERRMODE_EXCEPTION) ;
    include "functions.php";
}catch(PDOException $e){
  echo $e->getMessage() ;  
}
?>

