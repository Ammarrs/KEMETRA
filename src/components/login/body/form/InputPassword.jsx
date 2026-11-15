
import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const InputPassword = ({
  password,
  setPassword,
  passwordError,
  setPasswordError,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const validatePassword = (value) => {
    if (!value.trim()) {
      return "Password is required";
    }

    if (value.length < 8) {
      return "Password must be at least 8 characters";
    }

    return "";
  };

  const handleBlur = () => {
    setPasswordError(validatePassword(password));
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (passwordError) {
      setPasswordError(validatePassword(value));
    }
  };

  return (
    <div>
      <div className="relative">
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder=" "
          autoComplete="current-password"
          aria-invalid={!!passwordError}
          aria-describedby={
            passwordError ? "password-error" : "password-hint"
          }
          className={`peer h-14 w-full rounded-xl border-2 bg-transparent px-4 pr-12 text-foreground outline-none transition-colors
            ${passwordError
              ? "border-danger focus:border-danger"
              : "border-border focus:border-primary"
            }`}
        />

        <label
          htmlFor="password"
          className={`pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 bg-background px-1 transition-all duration-200
            peer-focus:top-0 peer-focus:text-xs
            peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs
            ${passwordError
              ? "text-danger"
              : "text-muted-foreground peer-focus:text-primary"
            }`}
        >
          Password
        </label>

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </button>
      </div>

      {passwordError ? (
        <p
          id="password-error"
          role="alert"
          className="mt-2 text-xs text-danger"
        >
          {passwordError}
        </p>
      ) : (
        <p
          id="password-hint"
          className="mt-2 text-xs text-muted-foreground"
        >
          Password must be at least 8 characters.
        </p>
      )}
    </div>
  );
};

export default InputPassword;
