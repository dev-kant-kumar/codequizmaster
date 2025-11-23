<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forgot Password Page | Code Quiz Master</title>
      <link rel="stylesheet" href="css/styles.css" />
    <link rel="shortcut icon" href="public/images/logo.png" type="image/x-icon">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">

</head>

<body>
    <?php include "components/header.php"; ?>

    <main>

        <form action="">

            <section class="form-head">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#4dabf7" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="8" r="4"></circle>
                    <path d="M4 20c0-4 4-6 8-6s8 2 8 6"></path>
                </svg>

                <h1>Forgot Password</h1>
                <p>Find your account</p>
            </section>
            <section class="form-body">
                <div class="form-field">
                    <label for="username">Username or Email </label>
                    <div class="input-field">
                        <i class="ri-at-line"></i>
                        <input type="text" id="username" name="username" placeholder="Choose a unique username">
                    </div>
                    <div class="error-box">
                        <i class="ri-error-warning-line"></i>
                        <p class="error-field">Username is required!</p>
                    </div>
                </div>
            </section>

            <section class="form-foot">
                <!-- <p class="terms-txt"><a href="">Can't reset your password?</a></p> -->
                <button type="submit" name="signup">Continue</button>
                <p class="form-switch">Back to <a href="signin.php">Login</a></p>
            </section>
        </form>


    </main>
    <?php include "components/footer.php"; ?>
    <script src="scripts/script.js"></script>
</body>

</html>
