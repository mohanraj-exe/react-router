import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

function AboutUs() {
    const navigate = useNavigate()
  return (
    <>
      <h2>About Us</h2>
      <button onClick={() => navigate(-1)}>BACK{'<<'}</button>
      <button onClick={() => navigate(1)}>NEXT{'>>'}</button><br />
      <button onClick={() => navigate('/aboutus/history')}>History</button>
      &nbsp;
      <button onClick={() => navigate('/aboutus/branches')}> Branches </button>
      <Outlet />
    </>
  );
}

function AboutUsIndex() {
  return (
    <>
      <h3> About Us Index </h3>
    </>
  );
}

function History() {
  return (
    <>
      <h3> History </h3>
    </>
  );
}

function Branches() {
  return (
    <>
      <h3> Branches </h3>
    </>
  );
}


export {AboutUs,AboutUsIndex,History,Branches};