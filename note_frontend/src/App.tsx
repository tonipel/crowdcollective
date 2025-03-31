import { Navigate, Route, Routes } from 'react-router-dom';
import Frontpage from './components/Frontpage';
import Login from './components/Login';

function App() {

  const isLoggedIn = () => {
    return localStorage.getItem("auth_token") ? true : false;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={isLoggedIn() ? <Navigate to="/notes" /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notes" element={<Frontpage />} />
      </Routes>
    </>
  )
}

export default App
