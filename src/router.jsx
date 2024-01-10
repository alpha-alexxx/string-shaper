import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import { About, Contact, Home } from "./pages";
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        index: true,
        element: <Home />
      },
      {
        path: '/about',
        index: true,
        element: <About />
      },
      {
        path: '/contact',
        index: true,
        element: <Contact />
      }
    ]

  }
])


export default router;