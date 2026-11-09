import React from 'react'

const InputEmail = () => {
  return (
    <div>

      <div className="relative">
        <input
          id="Email"
          type="text"
          placeholder=" "
          className="peer h-14 w-full rounded-xl border-2 border-border bg-transparent px-4 text-foreground outline-none transition-colors focus:border-primary"
        />
        <label
          htmlFor="Email"
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 bg-background px-1 text-muted-foreground transition-all duration-200
                      peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary
                      peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs"
        >
          Email or username
        </label>

      </div>
      <p className="text-xs text-muted-foreground mt-2">
        Use the email or username linked to your account.
      </p>
    </div>
  )
}

export default InputEmail