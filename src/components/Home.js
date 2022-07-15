import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <h2>Home Component</h2>
      <button onClick={() => navigate(-1)}>BACK{'<<'}</button>
      <button onClick={() => navigate(1)}>NEXT{'>>'}</button>
      <button onClick={() => navigate("/offers")}>GO TO OFFERS</button>
      <button onClick={() => navigate("/loginUser/42/email/bbb@gmail.com", 
      {state:{name: 'zzz', age: 25}})}>GO TO LOGIN{'>>>'}</button> 
    </>
  );
}

export default Home;
