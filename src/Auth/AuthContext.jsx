import { createContext } from "react"
import { useState } from "react"


export const AuthContext = createContext("")

export default function AuthContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false)
    const [token, setToken] = useState("")
    const [username ,setUserName] = useState("")

    const login = (token) => {
        setIsAuth(true) 
        setToken(token)
    }

    const logout = () => {
        setIsAuth(false)
        setToken("")
    }

  return  <AuthContext.Provider value={{login,logout,isAuth,setUserName,username, token,setToken}}>
        {children}
    </AuthContext.Provider>
}