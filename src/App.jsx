import { useState } from 'react'
import './pages/login/mobileLogin.scss'
import './pages/login/desktopLogin.scss'

import Login from './pages/login/login.jsx'
import Register from './pages/rgister/register.jsx'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

const router = createBrowserRouter([{
  path: '/login',
  element: <Login />,
},
{
  path: '/register',
  element: <Register />,
},
 
])


function App() {
  const [count, setCount] = useState(0)

const layout =() => {
return(<div>
  
</div>)
}

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
