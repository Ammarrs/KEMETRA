import { Link } from "react-router-dom";
import InputEmail from './form/InputEmail';
import InputPassword from "./form/InputPassword";
import { Checkbox } from '@heroui/react';
import { FiArrowRight, FiArrowUpRight, FiLock, } from "react-icons/fi";

export default function LoginForm() {
  return (
    <section className="mx-auto w-full max-w-xl font-body border-2 border-border p-5 rounded-3xl shadow-2xl">

      {/* Heading */}
      <div className="mb-8 space-y-3">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Your KEMETRA collection
        </span>

        <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
          Welcome back.
        </h1>

        <p className="text-sm leading-relaxed text-muted-foreground">
          Sign in to return to your saved places, stories and discoveries.
        </p>
      </div>

      {/* Form */}
      <form className="space-y-6">
        {/* Email */}
        <InputEmail />
        {/* Password */}
        <InputPassword />
        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between gap-3">
          <label className="flex cursor-pointer items-center gap-2 text-xs font-medium text-foreground">
            <input
              type="checkbox"
              name="rememberMe"
              className="size-4 cursor-pointer rounded border-border accent-primary focus:ring-primar"
            />
            Remember me
          </label>

          <Link
            to="/forgot-password"
            className="text-xs font-medium text-muted transition-colors hover:text-primary hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        {/* Sign In Button */}
        <button
          type="button"
          className="flex h-12 w-full items-center justify-center gap-3 rounded-md bg-primary text-sm font-semibold text-secondary transition-all duration-300 hover:bg-primary-hover"
        >
          <FiArrowRight className="text-base" />
          Sign In
        </button>

      </form>

      {/* Divider */}
      <div className="my-8 border-t border-divider" />

      {/* Create Account */}
      <div className="space-y-3 text-center">
        <p className="text-xs text-muted-foreground">
          New to KEMETRA?
        </p>

        <Link
          to="/create-account"
          className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary"
        >
          Create Account
          <FiArrowUpRight className="text-base" />
        </Link>
      </div>

      {/* Privacy */}
      <div className="mt-10 flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <FiLock className="shrink-0 text-sm" />
        <span>Your collection is private and stays yours.</span>
      </div>

    </section>
  );
}
