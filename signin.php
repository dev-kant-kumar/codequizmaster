<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Signin Page | Code Quiz Master</title>
    <link rel="stylesheet" href="css/styles.css" />
    <link rel="shortcut icon" href="public/images/logo.png" type="image/x-icon">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
</head>

<body>
    <?php include "components/header.php"; ?>

    <main>

        <form action="" id="signin-form">

            <section class="form-head">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#4dabf7" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="8" r="4"></circle>
                    <path d="M4 20c0-4 4-6 8-6s8 2 8 6"></path>
                </svg>

                <h1>Login</h1>
                <p>Sign in to level up your skills</p>
            </section>
            <section class="form-msg"></section>
            <section class="form-body">


                <div class="form-field">
                    <label for="identifier">Username or Email</label>
                    <div class="input-field">
                        <i class="ri-at-line"></i>
                        <input type="text" id="identifier" name="identifier" placeholder="Enter username">
                    </div>
                    <div class="error-box username-error">
                        <i class="ri-error-warning-line"></i>
                        <p class="error-field"></p>
                    </div>
                </div>


                <div class="form-field">
                    <label for="password">Password </label>
                    <div class="input-field">
                        <i class="ri-lock-2-line"></i>
                        <input type="password" id="password" name="password" placeholder="Create a strong password">

                        <i class="ri-eye-line" id="show-password-icon"></i>
                        <i class="ri-eye-close-line hide" id="hide-password-icon"></i>

                    </div>
                    <div class="error-box password-error">
                        <i class="ri-error-warning-line"></i>
                        <p class="error-field"></p>
                    </div>
                </div>
            </section>

            <section class="form-foot">
                <p class="terms-txt"><a href="forgotpassword.php">Forgot your password?</a></p>
                <button type="submit" name="signin" id="signin-btn">Sign in</button>
                <p class="form-switch">Don't have an account? <a href="signup.php">Create account</a></p>
            </section>
        </form>


    </main>
    <?php include "components/footer.php"; ?>
    <script src="scripts/script.js"></script>
    <script type="module" src="scripts/signin.js"></script>
</body>

</html>
