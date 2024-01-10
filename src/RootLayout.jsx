import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import { navData } from "./constants"
import './global.css'
const RootLayout = () => {
  return (
    <>
      <Navbar data={navData} />
      <Outlet />
    </>
  )
}

export default RootLayout