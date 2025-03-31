import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/')
  }

  return (
    <button 
      type="submit"
      onClick={handleLogout}>
        Logout
    </button>
  )

}

export default Logout;
