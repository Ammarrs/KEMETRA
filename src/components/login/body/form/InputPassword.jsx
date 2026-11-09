import React from 'react'
import { FiEyeOff } from 'react-icons/fi';
import { FiEye } from 'react-icons/fi';
import { useState } from 'react';

const InputPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>


      <div className="relative">
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder=" "
          className="peer h-14 w-full rounded-xl border-2 border-border bg-transparent px-4 text-foreground outline-none transition-colors focus:border-primary"
        />
        <label
          htmlFor="password"
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 bg-background px-1 text-muted-foreground transition-all duration-200
                      peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary
                      peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs"
        >
          Password
        </label>

        <button
          type="button"
          onClick={() => setShowPassword((show) => !show)}
          className="absolute inset-y-0 right-4 flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          {showPassword ? (
            <>
              <FiEyeOff className="text-base" />
              Hide
            </>
          ) : (
            <>
              <FiEye className="text-base" />
              Show
            </>
          )}

        </button>
      </div>

      <p className="text-xs text-muted-foreground mt-2">
        Your password is hidden. Select Show to reveal it.
      </p>



      <div className="space-y-2 ">
        <label
          htmlFor="password"
          className="block text-sm font-semibold text-foreground"
        >
        </label>

      </div>

    </div>
  )
}

export default InputPassword