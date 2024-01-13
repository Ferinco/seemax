import { BrowserRouter,Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landing";
import LoginPage from "./pages/loginPage";
import { AppProvider } from "./contexts/context";
import HomePage from "./pages/home/home";
import HomeLayout from "./pages/home";
function App() {
  return (
      <AppProvider>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomeLayout />} />
          
        </Routes>
      </BrowserRouter>
    </div>
    </AppProvider>
  );
}

export default App;
