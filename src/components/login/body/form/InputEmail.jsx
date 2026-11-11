
const InputEmail = ({ email, setEmail, emailError, setEmailError }) => {

  const validateInput = (value) => {
    if (!value.trim()) {
      return "Email is required";
    }

    if (value) {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

      if (!isValidEmail) {
        return "Please enter a valid email address";
      }
    }

    return "";
  };

  const handleBlur = () => {
    setEmailError(validateInput(email));
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (emailError) {
      setEmailError(validateInput(value));
    }
  };
  return (
    <div>

      <div className="relative">
        <input
          id="email"
          type="text"
          value={email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder=" "
          autoComplete="username"
          className={`peer h-14 w-full rounded-xl border-2 bg-transparent px-4 text-foreground outline-none transition-colors
            ${emailError
              ? "border-danger focus:border-danger"
              : "border-border focus:border-primary"
            }`}
        />
        <label
          htmlFor="email"
          className={`pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 bg-background px-1 transition-all duration-200
            peer-focus:top-0 peer-focus:text-xs
            peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs
            ${emailError
              ? "text-danger"
              : "text-muted-foreground peer-focus:text-primary"
            }`}
        > Email
        </label>

      </div>
      {emailError ? (
        <p
          id="email-error"
          role="alert"
          className="mt-2 text-xs text-danger"
        >
          {emailError}
        </p>
      ) : (
        <p
          id="email-hint"
          className="mt-2 text-xs text-muted-foreground"
        >
          Use the email or username linked to your account.
        </p>
      )}    </div>
  )
}

export default InputEmail