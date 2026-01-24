import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import Profile from "./pages/Profile";
import { Projects } from "./components/Projects"; // Pastikan import ini ada
import { Skills } from "./components/Skills"; // Pastikan import ini ada
import Earth from "./components/Earth";

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        {/* 1. HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Earth />
            </>
          }
        />

        {/* 2. PROFILE PAGE (Hapus Projects dari sini) */}
        <Route
          path="/profile"
          element={<Profile />}
        />

        {/* 3. NEW PROJECTS PAGE (Buat Route Baru) */}
        <Route
          path="/projects"
          element={<Projects />}
        />
        <Route
          path="/skills"
          element={<Skills />}
        />

      </Routes>
    </Router>
  );
}

export default App;