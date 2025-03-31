
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/auth";
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault()

    const response = await loginUser(username, password);

    if (response) {
      navigate('/notes')
    } else {
      console.error("Login failed!");
    }
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <div className="login-input-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={({ target }) => setUsername(target.value)} />
        </div>
        <div className="login-input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )

}

export default Login;
