import { useState } from "react"
import { UserContext } from "./UserContext"

export const UserProvider = ({children}) => {
    //const user = {nombre:"andres" , apellido:"sanchez"};
    const [User, setUser] = useState()
  return (
        <UserContext.Provider value={{user: User , setUser}}>
            {children}
        </UserContext.Provider>
  )
}
