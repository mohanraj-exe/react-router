import React from 'react';
import { useNavigate } from 'react-router-dom';

function ContactUs() {
    const navigate = useNavigate()
  return (
    <>
      <h2>Contact Us</h2>
      <button onClick={() => navigate(-1)}>BACK{'<<'}</button>
      <button onClick={() => navigate(1)}>NEXT{'>>'}</button>
    </>
  );
}

export default ContactUs;