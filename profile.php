<?php
session_start();


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile Page | Code Quiz Master</title>
    <link rel="stylesheet" href="css/styles.css" />
    <link rel="shortcut icon" href="public/images/logo.png" type="image/x-icon">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
</head>

<body>
    <?php include "components/header.php"; ?>

    <main class="profile-page">

        <section class="profile-head">
            <div class="profile-pic-sec">
                <?php
                if (isset($_SESSION["avatar"]) && !empty($_SESSION["avatar"])) {
                    echo '<img src="uploads/' . $_SESSION["avatar"] . '" alt="Avatar" class="avatar">';
                } else {
                    echo '<p class="no-avatar">' . strtoupper($_SESSION["name"][0]) . '</p>';
                }
                ?>
                <section class="avatar-uploader-wrapper">
                    <i class="ri-upload-2-line upload-icon"></i>
                    <input type="file" name="avatar-input" id="avatar-input" class="avatar-input" accept="images/*">
                </section>
            </div>

            <div class="profile-info-sec">
                <p class="u-name"><?php echo $_SESSION["name"]; ?></p>
                <p class="u-username">@<?php echo $_SESSION["username"]; ?> </p>
            </div>
        </section>

        <section class="profile-body">
            <div class="info-sec">
                <span class="level"><i class="ri-user-line"></i>Name</span>
                <span><?php echo $_SESSION["name"]; ?></span>
            </div>
            <div class="info-sec">
                <span class="level"><i class="ri-at-line"></i>Username</span>
                <span><?php echo $_SESSION["username"]; ?></span>
            </div>
            <div class="info-sec">
                <span class="level"><i class="ri-mail-line"></i>Email</span>
                <span><?php echo $_SESSION["email"]; ?></span>
            </div>
            <div class="info-sec">
                <span class="level"> <i class="ri-men-line"></i>Gender</span>
                <span><?php echo $_SESSION["gender"]; ?></span>
            </div>
        </section>
        <section class="profile-foot">
            <button class="edit-btn"><i class="ri-pencil-line"></i>Edit</button>
            <button class="save-btn"><i class="ri-save-line"></i>Save Changes</button>
        </section>

    </main>
    <?php include "components/footer.php"; ?>
    <script src="scripts/script.js"></script>
</body>

</html>
