import { useNavigate } from "react-router-dom";
import { Button } from "@heroui/react";
import InputEmail from './body/form/InputEmail';
import { useAuth } from './../../context/Authentication/authContext';

const ForgotPasswordForm = () => {
  const navigate = useNavigate();
  const {
    email,
    emailError,
    validateEmail,
    setEmailError,
  } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailValidation = validateEmail(email);

    setEmailError(emailValidation);

    if (emailValidation) return;
    // coll back
    navigate("/reset-password");
  };

  return (
    <section className="mx-auto w-full max-w-xl font-body border-2 border-border p-5 rounded-3xl shadow-2xl">

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Account Recovery
          </p>
          <h1 className="text-4xl font-semibold text-foreground md:text-5xl">
            Find your way back.
          </h1>
          <p className="text-muted-foreground">
            Enter your account email. We'll help you return to your saved places
            and stories.
          </p>
        </div>


        <InputEmail />

        <Button
          type="submit"
          className="w-full rounded-md bg-primary py-6 font-semibold text-secondary hover:bg-primary-hover dark:text-background"
        >
          Send Reset Link
        </Button>

        <p className="text-sm text-muted-foreground">
          For your privacy, we show the same confirmation whether or not an account exists.
        </p>

        <Button
          type="button"
          variant="outline"
          onPress={() => navigate("/login")}
          className="w-full rounded-md border border-primary bg-transparent py-6 font-semibold text-foreground"
        >
          Back to Sign In
        </Button>
      </form>
    </section >

  );

}

export default ForgotPasswordForm

