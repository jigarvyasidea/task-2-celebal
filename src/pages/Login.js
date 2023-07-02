import React from 'react';
import Template from '../components/Template';
import loginImg from '../assets/login.png';
import LoginForm from '../components/LoginForm.js';
import { useUser } from '../UserContext'; // Import the useUser hook

function Login({ setIsLoggedIn }) {
  const { userData } = useUser();

  function handleLoginSubmit() {
    setIsLoggedIn(true);
  }

  return (
    <Template
      title="Welcome Celebal X Internship Login Portal"
      desc1="Unlock Your Potential with Celebal Technology: Build Skills for Today, Tomorrow, and Beyond."
      desc2="great journey starts with a single step."
      image={loginImg}
      formtype="login"
      setIsLoggedIn={handleLoginSubmit} // Call the handleLoginSubmit function on login form submission
    />
  );
}

export default Login;
