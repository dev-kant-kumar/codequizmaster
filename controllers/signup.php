<?php

header("Content-Type: application/json");

$conn = mysqli_connect("localhost", "root", "", "codequizmaster");

if ($conn->connect_error) {
    echo json_encode(["status" => false, "message" => "Database connection failed", "error" => $conn->connect_error]);
}


$name = $_POST["name"];
$username = $_POST["username"];
$email = $_POST["email"];
$gender = $_POST["gender"];
$password = $_POST["password"];
$hased_password = password_hash($password, PASSWORD_DEFAULT);

$query = $conn->prepare("insert into users(name,username,email,gender,password) values (?, ?, ?, ?, ?)");
$query->bind_param("sssss", $name, $username, $email, $gender, $hased_password);



try {
    $query->execute();
    echo json_encode(["status" => true, "message" => "Account created successfully"]);
} catch (Exception $e) {

    echo json_encode(["status" => false, "message" => "Faild to create account", "error" => $e->getMessage()]);
}
