<?php

header("Content-Type: application/json");

$conn = mysqli_connect("localhost", "root", "", "codequizmaster");

if ($conn->connect_error) {
    echo json_encode(["status" => false, "message" => "Database connection failed", "error" => $conn->connect_error]);
}


$username = $_POST["username"];
$avatar = $_FILES["avatar"];

if (!$avatar || !$username) {
    echo json_encode([
        "status" => false,
        "message" => "upload user avatar failed",
        "error" => "username and avatar is required!"
    ]);
    exit;
}

$fileName = uniqid() . "_" . basename($avatar["name"]);
$uploadPath = "../uploads/" . $fileName;

move_uploaded_file($avatar["tmp_name"], $uploadPath);



$query = $conn->prepare("update users set avatar = ? where username = ?");
$query->bind_param("ss", $fileName, $username);


$query->execute();

if ($query->affected_rows > 0) {
    $query2 = $conn->prepare("select * from users where username = ?");
    $query2->bind_param("s", $username);
    $query2->execute();

    $user = $query2->get_result()->fetch_assoc();
    echo json_encode([
        "status" => true,
        "message" => "Avatar upload successful",
        "user" => [
            "_id" => $user["_id"],
            "name" => $user["name"],
            "username" => $user["username"],
            "email" => $user["email"],
            "gender" => $user["gender"],
            "avatar" => $user["avatar"],
            "created_at" => $user["created_at"],
            "updated_at" => $user["updated_at"],
        ]
    ]);

    session_start();
    $_SESSION["name"] = $user["name"];
    $_SESSION["username"] = $user["username"];
    $_SESSION["email"] = $user["email"];
    $_SESSION["gender"] = $user["gender"];
    $_SESSION["avatar"] = $user["avatar"];
    $_SESSION["created_at"] = $user["created_at"];


}
