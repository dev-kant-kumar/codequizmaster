const validationRules = {
  name: {
    required: "Name is required",
    minLength: { value: 2, message: "Name must be at least 2 characters" },
    maxLength: { value: 50, message: "Name must not exceed 50 characters" },
    pattern: {
      value: /^[a-zA-Z\s.'-]+$/,
      message:
        "Name can only contain letters, spaces, dots, hyphens and apostrophes",
    },
  },

  username: {
    required: "Username is required",
    minLength: { value: 3, message: "Username must be at least 3 characters" },
    maxLength: { value: 20, message: "Username must not exceed 20 characters" },
    pattern: {
      value: /^[a-zA-Z0-9_]+$/,
      message: "Username can only contain letters, numbers and underscores",
    },
    noSpaces: "Username cannot contain spaces",
    startsWithLetter: {
      value: /^[a-zA-Z]/,
      message: "Username must start with a letter",
    },
  },

  email: {
    required: "Email is required",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Please enter a valid email address",
    },
    maxLength: { value: 100, message: "Email must not exceed 100 characters" },
  },

  gender: {
    required: "Please select a gender",
  },

  password: {
    required: "Password is required",
    minLength: { value: 8, message: "Password must be at least 8 characters" },
    maxLength: {
      value: 128,
      message: "Password must not exceed 128 characters",
    },
    uppercase: {
      value: /[A-Z]/,
      message: "Password must contain at least one uppercase letter",
    },
    lowercase: {
      value: /[a-z]/,
      message: "Password must contain at least one lowercase letter",
    },
    number: {
      value: /[0-9]/,
      message: "Password must contain at least one number",
    },
    specialChar: {
      value: /[!@#$%^&*(),.?":{}|<>]/,
      message: "Password must contain at least one special character",
    },
    noSpaces: "Password cannot contain spaces",
  },

  confirmPassword: {
    required: "Please confirm your password",
    match: "Passwords do not match",
  },
};

// Validation Functions
function validateName(name) {
  const errors = [];

  if (!name || name.trim() === "") {
    return [validationRules.name.required];
  }

  if (name.length < validationRules.name.minLength.value) {
    errors.push(validationRules.name.minLength.message);
  }

  if (name.length > validationRules.name.maxLength.value) {
    errors.push(validationRules.name.maxLength.message);
  }

  if (!validationRules.name.pattern.value.test(name)) {
    errors.push(validationRules.name.pattern.message);
  }

  return errors;
}

function validateUsername(username) {
  const errors = [];

  if (!username || username.trim() === "") {
    return [validationRules.username.required];
  }

  if (username.includes(" ")) {
    errors.push(validationRules.username.noSpaces);
  }

  if (username.length < validationRules.username.minLength.value) {
    errors.push(validationRules.username.minLength.message);
  }

  if (username.length > validationRules.username.maxLength.value) {
    errors.push(validationRules.username.maxLength.message);
  }

  if (!validationRules.username.pattern.value.test(username)) {
    errors.push(validationRules.username.pattern.message);
  }

  if (!validationRules.username.startsWithLetter.value.test(username)) {
    errors.push(validationRules.username.startsWithLetter.message);
  }

  return errors;
}

function validateEmail(email) {
  const errors = [];

  if (!email || email.trim() === "") {
    return [validationRules.email.required];
  }

  if (!validationRules.email.pattern.value.test(email)) {
    errors.push(validationRules.email.pattern.message);
  }

  if (email.length > validationRules.email.maxLength.value) {
    errors.push(validationRules.email.maxLength.message);
  }

  return errors;
}

function validateGender(gender) {
  if (!gender) {
    return [validationRules.gender.required];
  }
  return [];
}

function validatePassword(password) {
  const errors = [];

  if (!password) {
    return [validationRules.password.required];
  }

  if (password.includes(" ")) {
    errors.push(validationRules.password.noSpaces);
  }

  if (password.length < validationRules.password.minLength.value) {
    errors.push(validationRules.password.minLength.message);
  }

  if (password.length > validationRules.password.maxLength.value) {
    errors.push(validationRules.password.maxLength.message);
  }

  if (!validationRules.password.uppercase.value.test(password)) {
    errors.push(validationRules.password.uppercase.message);
  }

  if (!validationRules.password.lowercase.value.test(password)) {
    errors.push(validationRules.password.lowercase.message);
  }

  if (!validationRules.password.number.value.test(password)) {
    errors.push(validationRules.password.number.message);
  }

  if (!validationRules.password.specialChar.value.test(password)) {
    errors.push(validationRules.password.specialChar.message);
  }

  return errors;
}

function validateConfirmPassword(password, confirmPassword) {
  if (!confirmPassword) {
    return [validationRules.confirmPassword.required];
  }

  if (password !== confirmPassword) {
    return [validationRules.confirmPassword.match];
  }

  return [];
}

export {
  validateConfirmPassword,
  validateEmail,
  validateGender,
  validateName,
  validatePassword,
  validateUsername,
};
