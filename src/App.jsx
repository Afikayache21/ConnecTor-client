import { useState ,useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './pages/login/mobileLogin.scss';
import './pages/login/desktopLogin.scss';
import { useNavigate } from 'react-router-dom';
import userStore from './Services/DataStore/UserStore.js';
import Login from './pages/login/login.jsx';
import Register from './pages/register/register.jsx';
import Profile from './pages/profilePage/Profile.jsx';
import Header from './pages/parts/Header.jsx';
import Footer from './pages/parts/Footer.jsx';
const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!userStore.mail) {
      navigate('/login');
    }
  }, [userStore.mail, navigate]);

  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
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
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
