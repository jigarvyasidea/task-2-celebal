import React from 'react'
import signupImg from "../assets/signup.png"
import Template from '../components/Template'

//Arrow component function
const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Register as a intern. at celebal Technology "
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="We help you to start your career."
      image={signupImg}                   //import signUp image location from assets loc3
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup
