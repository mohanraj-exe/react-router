import React from 'react';
import { useNavigate } from 'react-router-dom';

function Enquiry() {
    const navigate = useNavigate()
  return (
    <>
      <h2>Enquiry Form</h2>
      <button onClick={() => navigate(-1)}>BACK{'<<'}</button>
      <button onClick={() => navigate(1)}>NEXT{'>>'}</button>
    </>
  );
}

export default Enquiry;