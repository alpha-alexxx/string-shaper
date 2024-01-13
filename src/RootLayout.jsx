import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import { navData } from "./constants"
import './global.css'
import { Suspense, useRef } from "react"
import LoadingBar from "react-top-loading-bar"
const RootLayout = () => {
  const ref = useRef(null)
  return (
    <>
      <Navbar data={navData} />
      <main className='mt-16'>
        <Suspense fallback={<LoadingBar color='#f11946' ref={ref} />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  )
}

export default RootLayout