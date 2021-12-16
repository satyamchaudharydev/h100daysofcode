import "./App.css";
import Home from "./component/Home";
import MainShop  from "./component/Shop";
import Login from "./component/Login"
import Signup from "./component/Signup";
import BuyPage from "./component/BuyPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<MainShop />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/Buy" element={<BuyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
