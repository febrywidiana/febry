import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import Profile from "./pages/Profile";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Earth from "./components/Earth";

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Earth /> 
              <Skills />
              <Projects />
              <Contact />   {/* Newsletter DI HOME SAJA */}
              {/* <Footer />    Footer DI HOME */}
            </>
          }
        />

        {/* PROFILE PAGE */}
        <Route
          path="/profile"
          element={
            <>
              <Profile />
              {/* Tidak ada Contact / Newsletter */}
               {/* boleh footer, opsional */}
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
