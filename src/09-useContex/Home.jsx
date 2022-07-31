import { useContext } from "react"
import { UserContext } from "./Context/UserContext"

export const Home = () => {
  const {user} = useContext(UserContext)

  return (
    <>
        <h1>Home: <small> Hola { user?.nombre}</small></h1>
        <hr />
        <pre>
          {JSON.stringify(user, null , 3)}
        </pre> 
    </>
  )
}
