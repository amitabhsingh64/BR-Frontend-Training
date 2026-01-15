import { useState } from 'react'
import ReactRoutes from './RoutingModules.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/dashboard/dashboard.jsx'
import Signup from './pages/signUp/SignUp.jsx'
import Login from './pages/signIn/SignIn.jsx'


const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<Dashboard/>
    },
    {
      path:'/signup',
      element:<Signup/>
    },
    {
      path:'/login',
      element:<Login/>
    }
  ]
)

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App