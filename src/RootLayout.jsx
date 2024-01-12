import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import { navData } from "./constants"
import './global.css'
const RootLayout = () => {
  return (
    <>
      <Navbar data={navData} />
      <main className='mt-16'>
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout