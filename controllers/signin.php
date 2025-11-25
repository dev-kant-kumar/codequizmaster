<?php

header("Content-Type: application/json");

$conn = mysqli_connect("localhost", "root", "", "codequizmaster");

if ($conn->connect_error) {
    echo json_encode(["status" => false, "message" => "Database connection failed", "error" => $conn->connect_error]);
}


$identifier = $_POST["identifier"];
$password = $_POST["password"];


$query1 = $conn->prepare("select * from users where username = ? or email = ?");
$query1->bind_param("ss", $identifier, $identifier);

$query1->execute();
$result = $query1->get_result();

if ($result->num_rows === 0) {
    echo json_encode(["status" => false, "message" => "Login failed!", "error" => "User not found!"]);
    exit;
}

$user = $result->fetch_assoc();

if (!password_verify($password, $user["password"])) {
    echo json_encode(["status" => false, "message" => "Login failed", "error" => "Incorrect Password!"]);
    exit;
}

echo json_encode([
    "status" => true,
    "message" => "Login successful",
    "user" => [
        "_id" => $user["_id"],
        "name" => $user["name"],
        "username" => $user["username"],
        "email" => $user["email"],
        "gender" => $user["gender"],
        "created_at" => $user["created_at"],
        "updated_at" => $user["updated_at"],
    ]
]);
