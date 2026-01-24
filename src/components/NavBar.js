import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false); // ⬅️ kontrol toggle

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar
      expand="md"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className={scrolled ? "scrolled" : ""}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <h1 className="text-white">Febry</h1>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={HashLink}
              to="/#home"
              className={
                activeLink === "home"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => {
                setActiveLink("home");
                setExpanded(false);
              }}
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={HashLink}
              to="/skills"
              className={
                activeLink === "skills"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => {
                setActiveLink("skills");
                setExpanded(false);
              }}
            >
              Skills
            </Nav.Link>

            <Nav.Link
              as={HashLink}
              to="/projects"
              className={
                activeLink === "projects"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => {
                setActiveLink("projects");
                setExpanded(false);
              }}
            >
              Projects
            </Nav.Link>
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/febry-widiana-6ba48b385">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#">
                <img src={navIcon2} alt="GitHub" />
              </a>
              <a href="https://www.instagram.com/febrywdiana/">
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>

            <Link to="/profile" onClick={() => setExpanded(false)}>
              <button className="vvd">
                <span>My Profile</span>
              </button>
            </Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
