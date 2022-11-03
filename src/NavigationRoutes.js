import React from 'react';
import {Routes, Route  } from "react-router-dom";

import Login from './components/auth/UserAuth'
import Home from "./Home";
import Forgotpassword from "./components/auth/Forgotpassword";

const NavigationRoutes = () => {
  return (
    <Routes>
    <Route exact path="/" element={<Home />}/>
    <Route exact path="/login" element={<Login />}/>
    <Route exact path="/register" element={<Login />}/>
    <Route exact path="/passwordReset" element={<Forgotpassword />} />
    </Routes>
  );
}

export default NavigationRoutes;
