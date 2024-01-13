import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import { navData } from "./constants"
import './global.css'
import { Suspense } from "react"
import LoadingBar from "react-top-loading-bar"
const RootLayout = () => {
  return (
    <>
      <Navbar data={navData} />
      <main className='mt-16'>
        <Suspense fallback={<LoadingBar color='#0ea5e9' progress='100' />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  )
}
export default RootLayout