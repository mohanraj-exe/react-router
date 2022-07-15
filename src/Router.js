import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import {AboutUs,AboutUsIndex,History,Branches} from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Offer from './components/Offer';
import Enquiry from './components/Enquiry';
import Login from './components/Login';
import Checkout from './components/Checkout';

function Router() {
  return (
    <div className="App">
      <BrowserRouter>
          <Link to="/">Home</Link> &nbsp;
          <Link to="/aboutus">AboutUs</Link> &nbsp;
          <Link to="/contactus">ContactUs</Link> &nbsp;
          <Link to="/offers">Offer</Link> &nbsp;
          <Link to="/enquiry">Enquiry</Link> &nbsp;
          <Link to="/Checkout">Checkout</Link> &nbsp;
          <Link to="/loginUser/123456/email/aaa@gmail.com" state={{name: 'xxx', age: 30}}>Login</Link>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/aboutus" element={<AboutUs />}>
            <Route path="" element={<AboutUsIndex />} />
            <Route path="history" element={<History />} />
            <Route path="branches" element={<Branches />} />
          </Route>

          <Route path="/contactus" element={<ContactUs/>} />
          <Route path="/offers" element={<Offer />} />
          <Route path="/enquiry" element={<Enquiry />}/>
          <Route path="/checkout" element={<Checkout />}/>
          <Route path="/loginUser/:userId/email/:emailId" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
