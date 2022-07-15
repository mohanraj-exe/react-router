import React from 'react';
import { useNavigate } from 'react-router-dom';

function Offer() {
    const navigate = useNavigate()
  return (
    <>
      <h2>Prime Day Offers</h2>
      <h3>Click "Add to Cart button" for the products you wish to buy!!!</h3>
      <button onClick={() => navigate(-1)}>BACK{'<<'}</button>
      <button onClick={() => navigate(1)}>NEXT{'>>'}</button>
      <button onClick={() => navigate("/checkout", {state: {productName: 'system76 PC', 
      offerPrice: 500, yearOfManufacture: 2022}})} >Proceed to Checkout</button> 
    </>
  );
}

export default Offer;