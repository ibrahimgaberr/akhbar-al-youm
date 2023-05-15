<?php
include "connect.php"; 

$id = filterRequest("id");

$stmt = $con->prepare("SELECT * from `course` WHERE `professor id` = ? ");
$stmt->execute (array ($id));
$data = $stmt->fetch(PDO::FETCH_ASSOC);
$count = $stmt ->rowCount();

if ($count >0){
    echo json_encode(array("status" => "success", "data" => $data));
}else{
    echo json_encode(array("status" => "failed"));

}
?>