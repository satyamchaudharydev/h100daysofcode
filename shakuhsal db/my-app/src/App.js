import "./App.css";
import { Create } from "./Create";
import { Home } from "./Home";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import { AuthProvider } from "./AuthContext";
import {EditProduct} from"./EditProduct"
function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/:id" element={<EditProduct />} />
            <Route path="/" element={<Create />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
