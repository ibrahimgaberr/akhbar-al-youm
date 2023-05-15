<?php
include "connect.php"; 

$student_id = filterRequest("student_id");
$course_name = filterRequest("course_name");

$stmt = $con->prepare("SELECT `attendant`, `date` FROM `atten` WHERE `student id` = ? AND `course name` = ? ");
$stmt->execute (array ($student_id, $course_name));
$data = $stmt->fetchAll(PDO::FETCH_ASSOC);
$count = $stmt ->rowCount();

if ($count >0){
    echo json_encode(array("status" => "success", "data" => $data));
}else{
    echo json_encode(array("status" => "failed"));

}
?>