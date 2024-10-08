import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landing";
import LoginPage from "./pages/loginPage";
import { AppProvider, useAppContext } from "./contexts/context";
import HomeLayout from "../src/layouts/home/homeLayout";
import Navbar from "./layouts/components/navbar";
import DetailsLayout from "../src/layouts/details/detailsLayout";
import Trailer from "./components/trailerDiv";
function App() {

  return (
    <AppProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={<HomeLayout />}/>
            <Route path="/details/:id" element={<DetailsLayout />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AppProvider>
  );
}

export default App;
