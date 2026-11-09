import React, { useContext } from 'react'

let AuthContext = useContext();

export function AuthProvider({children}) {
  return (
    <AuthContext.Provider>{ch}</AuthContext.Provider>
  )
}

export default AuthContext