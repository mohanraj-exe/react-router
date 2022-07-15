import React from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

function Login() {
    const location = useLocation()
    const navigate = useNavigate()
    const urlParams = useParams()

  return (
    <>
      <h2>Login</h2>
      <h3>Login/Sign Up Credentials</h3>
      <p>User_ID :{urlParams.userId}</p>
      <p>Email_ID :{urlParams.emailId}</p><br />


      <p>Name: {location.state.name}</p>
      <p>Age: {location.state.age}</p>
      <button onClick={() => navigate(-1)}>BACK{'<<'}</button>
      <button onClick={() => navigate(1)}>NEXT{'>>'}</button>
    </>
  );
}

export default Login;