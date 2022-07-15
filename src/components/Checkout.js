import React from 'react';
import { useNavigate,useLocation } from 'react-router-dom';

function Checkout() {
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
  return (
    <>
      <h2>CheckOut</h2>
      <button onClick={() => navigate(-1)}>BACK{'<<'}</button>
      <button onClick={() => navigate(1)}>NEXT{'>>'}</button>
      <button onClick={() => navigate("/payment")}>Make Payment</button>
      <button onClick={() => navigate("/loginUser/:userId/email/:emailId")}>Login</button>

      <br /><br />
    
    <table style={{border: '2px solid'}}>
        <tbody>
            <tr>
                <td>Product_Name:</td>
                <td>Offer_Price:</td>
                <td>Year_Of_Manufacture:</td>
            </tr>
            <tr>
                <td>{location.state.productName}</td>
                <td>{location.state.offerPrice}</td>
                <td>{location.state.yearOfManufacture}</td>
            </tr>
        </tbody>
    </table>       
    </>
  );
}

export default Checkout;