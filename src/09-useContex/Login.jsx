import { useContext } from "react"
import { UserContext } from "./Context/UserContext";

export const Login = () => {

  const {user , setUser} = useContext(UserContext);
  console.log(user)
  return (
    <>
        <h1>Login</h1>
        <hr />
        <pre>
          {JSON.stringify( user , null , 3)}
        </pre>

        <button className="btn btn-primary" onClick={()=>{setUser({nombre:"andres" , apellido:"sanchez"})}}>
          set User
        </button>
    </>
  )
}
