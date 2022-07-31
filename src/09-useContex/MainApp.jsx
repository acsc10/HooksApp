import { Routes, Route, Navigate } from "react-router-dom";
import { UserProvider } from "./Context/UserProvider";
import {Home} from './Home';
import {About} from './About';
import {Login} from './Login'
import { Navbar } from "./Navbar";
export const MainApp = () => {
  return (
   <UserProvider>
        <h1>MainApp</h1>
           <Navbar/>
        <hr />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="/*" element= {<Navigate to="about"/>} />
        </Routes>
   </UserProvider>
  )
}
