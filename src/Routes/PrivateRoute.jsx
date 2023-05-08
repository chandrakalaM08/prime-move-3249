



import { AuthContext } from "../Auth/AuthContext"

import { useContext } from "react"
import { Navigate } from "react-router-dom"
const PrivateRoute = ({ children }) => {
    const { isAuth } = useContext(AuthContext)
    console.log("inside private route", isAuth)
    if (isAuth === false) {
        console.log("inside private route if condition")
        return <Navigate replace to="/login"/>
     }
    
    return children
}

export default PrivateRoute