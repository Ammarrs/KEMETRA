
import { useState } from "react"

function ResetPassword() {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")

    if (password.length < 12) {
      setError("Password must be at least 12 characters long.")
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.")
      return
    }

    setError("Password validated. Backend connection is required to save it.")
  }

  return (
    <main className="min-h-screen bg-[#FAF7F0] px-6 py-12 font-body text-[#111827]">
      <div className="mx-auto max-w-[1150px]">
        <section className="grid grid-cols-1 gap-12 lg:grid-cols-2">

          {/* Left Side - Karnak Image */}
          <div className="relative min-h-[400px] overflow-hidden rounded-lg bg-[#111827] lg:min-h-[480px]">
            <img
              src="/images/karnak-hero.jpg"
              alt="The columns of Karnak Temple in Luxor"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1420] via-[#0D1420]/40 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 z-10 p-7 text-white">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#D4A62A]">
                Your Next Chapter
              </p>

              <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl">
                More chapters await.
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Places to remember. Stories to carry with you.
                A collection shaped by your curiosity.
              </p>

              <div className="mt-5 flex items-center justify-between gap-3">
                <span className="text-[10px] text-white/80">
                  The columns of Karnak · Luxor
                </span>

                <span className="text-[#D4A62A]">
                  ●
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Reset Password Form */}
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#A47C25]">
              Account Recovery
            </p>

            <h1 className="mb-3 font-serif text-4xl font-bold">
              A fresh start.
            </h1>

            <p className="mb-8 text-sm leading-relaxed text-[#625B50]">
              Choose a new password to protect your KEMETRA account.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* New Password */}
              <div>
                <label
                  htmlFor="new-password"
                  className="mb-2 block text-sm font-semibold"
                >
                  New Password
                </label>

                <div className="relative">
                  <input
                    id="new-password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your new password"
                    autoComplete="new-password"
                    required
                    className="w-full rounded-md border border-[#D8D0C3] bg-white px-4 py-3 pr-20 text-sm outline-none focus:border-[#B28A38]"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#8C713A]"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>

                <p className="mt-2 text-xs text-[#817A70]">
                  Use at least 12 characters.
                </p>
              </div>

              {/* Confirm New Password */}
              <div>
                <label
                  htmlFor="confirm-password"
                  className="mb-2 block text-sm font-semibold"
                >
                  Confirm New Password
                </label>

                <div className="relative">
                  <input
                    id="confirm-password"
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your new password"
                    autoComplete="new-password"
                    required
                    className="w-full rounded-md border border-[#D8D0C3] bg-white px-4 py-3 pr-20 text-sm outline-none focus:border-[#B28A38]"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#8C713A]"
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Validation Message */}
              {error && (
                <p role="status" className="text-sm text-[#A05242]">
                  {error}
                </p>
              )}

              {/* Save Button */}
              <button
                type="submit"
                className="w-full rounded-md bg-[#B28A38] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#96712D]"
              >
                Save New Password
              </button>
            </form>

            {/* Request New Reset Link */}
            <a
              href="/forgot-password"
              className="mt-5 flex w-full items-center justify-center rounded-md border border-[#C5A04A] bg-transparent px-6 py-3.5 text-sm font-semibold text-[#111827] transition hover:bg-[#F1EBDD]"
            >
              Request a New Reset Link
            </a>
          </div>
        </section>

        {/* Security Information */}
        <section className="mt-10 rounded-md bg-[#F1EBDD] p-6">
          <h2 className="font-serif text-xl font-semibold">
            Keep your account yours.
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-[#625B50]">
            Use a unique password you haven't used elsewhere.
            If your reset link has expired or was already used,
            request a new link from Forgot Password.
          </p>
        </section>
      </div>
    </main>
  )
}

export default ResetPassword
