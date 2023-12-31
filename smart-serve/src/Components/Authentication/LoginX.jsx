import React, { useState } from 'react';
import classes from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';

const LoginFormx = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputType = showPassword ? 'text' : 'password';

  const validateLogin = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(username)) {
      alert('Invalid username. Please enter a valid email address.');
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@])[A-Za-z\d@]+$/;
    if (!passwordRegex.test(password)) {
      alert('Invalid password. Password must contain an uppercase letter, a number, and only allow @ as a special character.');
      return;
    }
    console.log('login')

   
    if (password === 'SmartServTest@123') {
      navigate('/Dashboard')
      
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  return (
    <div className={classes.login_container}>

      <form className={classes.login_form}>
        <img src="public/logo.jpeg" alt="SmartServ Logo" className={classes.logo} />
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          required
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        />

        <input
          type={inputType}
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          pattern="^(?=.[@])(?=.[A-Z])(?=.*[0-9])[a-zA-Z0-9@]+$"
        />

        {/* <button
          type="button"
          className={classes.show_hide_button}
          onClick={togglePasswordVisibility}
        >
          {showPassword ? 'Hide' : 'Show'} Password
        </button> */}

        <button
          type="button"
          className={classes.login_button}
          onClick={validateLogin}
        >
          Login
        </button>

        <Link to="/Forgotpassword" className={classes.forgot_password}>
          Forgot your password
        </Link>
      </form>
    </div>
  );
};

export default LoginFormx;