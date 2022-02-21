import "./App.css";
import { CompanyPage } from "./component/CompanyPage";
import { StateProvider } from "./component/StateContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddressPage } from "./component/AddressPage";
import { Page } from "./component/Page";
import { DetailsPage } from "./component/DetailsPage";
import { CompanyResult } from "./component/CompanyResult";

function App() {
  return (
    <>
      <div className="App">
        <StateProvider>
          <BrowserRouter>
            <Routes>
              <Route path="page" element={<Page />}>
                <Route path="company" element={<CompanyPage />}></Route>
                <Route path="company/:id" element={<DetailsPage />}></Route>

                <Route path="address" element={<AddressPage />}></Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </StateProvider>
      </div>
    </>
  );
}

export default App;
