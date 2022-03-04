import "./App.css";
import Home from "./component/Home";
import MainShop from "./component/Shop";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Reset from "./component/Reset";
import BuyPage from "./component/BuyPage";
import CartPage from "./component/CartPage";
import { React, useState,useEffect } from "react";
import PrivateRoute from "./component/PrivateRouter";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MiniBuyPage from "./component/MiniBuyPage";
import { Sample } from "./component/Sample";
function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/:id" element={<BuyPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
          <Route path="shop" element={<MainShop />}>
            <Route path=":id" element={<MiniBuyPage />} />
          </Route>
          <Route path="/reset" element={<Reset />} />
          <Route path="/Login" element={<Login />} />

          <Route path="/sign-up" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
