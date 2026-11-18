export const validateEmail = (value) => {
  if (!value.trim()) {
    return "Email is required";
  }

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  if (!isValidEmail) {
    return "Please enter a valid email address";
  }

  return "";
};

export const validatePassword = (value) => {
  if (!value.trim()) {
    return "Password is required";
  }

  if (value.length < 8) {
    return "Password must be at least 8 characters";
  }

  return "";
};