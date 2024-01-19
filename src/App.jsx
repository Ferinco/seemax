import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landing";
import LoginPage from "./pages/loginPage";
import { AppProvider } from "./contexts/context";
import HomeLayout from "./layouts/homeLayout";
import Navbar from "./layouts/components/navbar";
import DetailsLayout from "./layouts/detailsLayout";
function App() {
  return (
    <AppProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={<HomeLayout />} />
            <Route path="/details/:id" element={<DetailsLayout />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AppProvider>
  );
}

export default App;
