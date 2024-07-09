import { useState } from 'react'
import './pages/login/mobileLogin.scss'
import './pages/login/desktopLogin.scss'

import Login from './pages/login/login.jsx'
import Register from './pages/rgister/register.jsx'
import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom'
import Profile from './pages/profilePage/profile.jsx'
const Layout = (Layout) => {
  return (
    <div className='layout'>
      <Outlet/>
    </div>
  )
}
const router = createBrowserRouter([{
  path: '/login',
  element: <Login />,
},
{
  path: '/register',
  element: <Register />,
},
{
  path: '/',
  element: <Layout />,
  children: [
    {
      path: '/profile',
      element: <Profile/>,
    },
  ]
}

])


function App() {
  const [count, setCount] = useState(0)

  const layout = () => {
    return (<div>

    </div>)
  }

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
