<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Signup Page | Code Quiz Master</title>
    <link rel="stylesheet" href="css/styles.css" />
    <link rel="shortcut icon" href="public/images/logo.png" type="image/x-icon">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">

</head>

<body>
    <?php include "components/header.php"; ?>

    <main>

        <form action="" id="signup-form">

            <section class="form-head">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#4dabf7" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="8" r="4"></circle>
                    <path d="M4 20c0-4 4-6 8-6s8 2 8 6"></path>
                </svg>

                <h1>Create Account</h1>
                <p>Join code quiz master</p>
            </section>
            <section class="form-msg"></section>
            <section class="form-body">

                <div class="form-field">
                    <label for="name">Name</label>
                    <div class="input-field">
                        <i class="ri-user-line"></i>
                        <input type="text" id="name" name="name" placeholder="Enter full name">
                    </div>
                    <div class="error-box name-error">
                        <i class="ri-error-warning-line"></i>
                        <p class="error-field"></p>
                    </div>
                </div>
                <div class="form-field">
                    <label for="username">Username</label>
                    <div class="input-field">
                        <i class="ri-at-line"></i>
                        <input type="text" id="username" name="username" placeholder="Choose a unique username">
                    </div>
                    <div class="error-box username-error">
                        <i class="ri-error-warning-line"></i>
                        <p class="error-field"></p>
                    </div>
                </div>

                <div class="form-field">
                    <label for="email">Email Address</label>
                    <div class="input-field">
                        <i class="ri-mail-line"></i>
                        <input type="email" id="email" name="email" placeholder="Enter email address">
                    </div>
                    <div class="error-box email-error">
                        <i class="ri-error-warning-line"></i>
                        <p class="error-field"></p>
                    </div>
                </div>

                <div class="form-field">
                    <label for="gender">Gender</label>
                    <div class="input-field">
                        <i class="ri-men-line"></i>
                        <select name="gender" id="gender">
                            <option value="">Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="others">Others</option>
                        </select>
                    </div>
                    <div class="error-box gender-error">
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

                <div class="form-field">
                    <label for="password">Confirm Password</label>
                    <div class="input-field">
                        <i class="ri-lock-2-line"></i>
                        <input type="password" id="cpassword" name="cpassword" placeholder="Confirm your password">
                        <i class="ri-eye-line" id="show-cpassword-icon"></i>
                        <i class="ri-eye-close-line hide" id="hide-cpassword-icon"></i>
                    </div>
                    <div class="error-box cpassword-error">
                        <i class="ri-error-warning-line"></i>
                        <p class="error-field"></p>
                    </div>
                </div>

            </section>

            <section class="form-foot">
                <p class="terms-txt">By creating an account, you agree to our <a href="">Terms of Service</a> and <a
                        href="">Privacy
                        Policy</a></p>
                <button type="submit" name="signup-btn" id="signup-btn">Create Account</button>
                <p class="form-switch">Already have an account? <a href="signin.php">Sign in here</a></p>
            </section>

        </form>

    </main>
    <?php include "components/footer.php"; ?>

    <script src="scripts/script.js"></script>
    <script type="module" src="scripts/signup.js"></script>
</body>

</html>
