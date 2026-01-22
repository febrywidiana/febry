import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  // 1. DAFTAR PROJECT UNTUK TAB 1 (WEBSITE)
  const webProjects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      techs: ["React", "Bootstrap"],
      githubUrl: "#"
    },
    {
      title: "E-Commerce",
      description: "Online Shop Platform",
      imgUrl: projImg2,
      techs: ["React", "Node.js"],
      githubUrl: "#"
    },
  ];

  // 2. DAFTAR PROJECT UNTUK TAB 2 (MACHINE LEARNING)
  const mlProjects = [
    {
      title: "Fish Disease Diagnosis",
      description: "Interactive chatbot for fish diagnosis",
      imgUrl: projImg1,
      techs: ["Python", "Flask", "TensorFlow"],
      githubUrl: "https://github.com/username/fish-disease-diagnosis"
    },
    {
      title: "Sentiment Analysis",
      description: "NLP Project",
      imgUrl: projImg3,
      techs: ["Python", "NLTK"],
      githubUrl: "#"
    },
  ];

  // 3. DAFTAR PROJECT UNTUK TAB 3 (LAINNYA)
  const otherProjects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      techs: ["Python", "Flask", "TensorFlow"],
      githubUrl: "https://github.com/username/fish-disease-diagnosis"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Berikut adalah beberapa proyek yang telah saya kerjakan di berbagai bidang.</p>
                  
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    
                    {/* NAVIGASI TAB */}
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Website</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">ML</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Other</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    {/* ISI KONTEN TAB */}
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      
                      {/* --- TAB 1: WEBSITE --- */}
                      <Tab.Pane eventKey="first">
                        <Row>
                          {webProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />
                          })}
                        </Row>
                      </Tab.Pane>

                      {/* --- TAB 2: ML (Perbaikan: eventKey="second") --- */}
                      <Tab.Pane eventKey="second">
                         <Row>
                          {mlProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />
                          })}
                        </Row>
                      </Tab.Pane>

                      {/* --- TAB 3: OTHERS --- */}
                      <Tab.Pane eventKey="third">
                        <Row>
                          {otherProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />
                          })}
                        </Row>
                      </Tab.Pane>

                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}