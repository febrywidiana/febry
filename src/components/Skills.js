import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// KITA PAKAI ICON BAWAAN BOOTSTRAP SAJA (PASTI JALAN)
// Tidak perlu install library baru
import { 
  CodeSlash, 
  FiletypeHtml, 
  FiletypeCss, 
  FiletypeJs,
  Layers, 
  Laptop, 
  Github, 
  Google, 
  FileWord, 
  FileExcel, 
  FilePpt, 
  Brush, 
  EyeFill 
} from "react-bootstrap-icons";

// Import Gambar Sertifikat
import certImg1 from "../assets/img/sf1.png"; 
import certImg2 from "../assets/img/sf4.png"; 
import certImg3 from "../assets/img/sf2.png"; 
import certImg4 from "../assets/img/sf3.png"; 
import colorSharp from "../assets/img/color-sharp.png"; 

export const Skills = () => {

  // KATEGORI 1: WEB DEVELOPMENT
  const webDevSkills = [
    { name: "HTML", icon: <FiletypeHtml size={40} color="#E34F26" /> },
    { name: "CSS", icon: <FiletypeCss size={40} color="#1572B6" /> },
    { name: "JavaScript", icon: <FiletypeJs size={40} color="#F7DF1E" /> },
    { name: "React JS", icon: <CodeSlash size={40} color="#61DAFB" /> }, // Icon Generic Code
    { name: "Next.js", icon: <Laptop size={40} color="#ffffff" /> }, // Icon Laptop
    { name: "Laravel", icon: <Layers size={40} color="#FF2D20" /> }, // Icon Layers
    { name: "Bootstrap", icon: <Brush size={40} color="#7952B3" /> }, // Icon Brush
    { name: "Tailwind", icon: <CodeSlash size={40} color="#06B6D4" /> },
  ];

  // KATEGORI 2: TOOLS
  const toolsSkills = [
    { name: "Git", icon: <CodeSlash size={40} color="#F05032" /> },
    { name: "GitHub", icon: <Github size={40} color="#ffffff" /> },
    // Menggunakan Logo Google untuk Antigravity
    { name: "Antigravity", icon: <Google size={40} color="#4285F4" /> },
    { name: "Figma", icon: <Brush size={40} color="#F24E1E" /> },
    { name: "Canva", icon: <Laptop size={40} color="#00C4CC" /> },
  ];

  // KATEGORI 3: OFFICE
  const officeSkills = [
    { name: "Word", icon: <FileWord size={40} color="#2B579A" /> },
    { name: "Excel", icon: <FileExcel size={40} color="#217346" /> },
    { name: "PowerPoint", icon: <FilePpt size={40} color="#D24726" /> },
  ];

  // DATA SERTIFIKAT
  const certificates = [
    {
      title: "Travel The World",
      description: "React & Bootstrap Landing Page",
      imgUrl: certImg1,
      pdfUrl: "/assets/pdf/sertifikat-ai.pdf" 
    },
    {
      title: "AI Ignition Training",
      description: "Basic AI Introduction",
      imgUrl: certImg2,
      pdfUrl: "/assets/pdf/sertifikat-word.pdf"
    },
    {
      title: "AI Ignition Training",
      description: "Basic AI Introduction",
      imgUrl: certImg3,
      pdfUrl: "/assets/pdf/sertifikat-ai.pdf"
    },
    {
      title: "AI Ignition Training",
      description: "Basic AI Introduction",
      imgUrl: certImg4,
      pdfUrl: "/assets/pdf/sertifikat-ai.pdf"
    },
  ];

  return (
    <section className="skill-section" id="skills">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  
                  {/* --- HEADER --- */}
                  <div className="text-center mb-5">
                    <h2 className="section-title">My Skills</h2>
                    <p className="section-subtitle">Teknologi dan tools yang saya gunakan untuk berkarya.</p>
                  </div>

                  {/* --- SKILL GRIDS --- */}
                  <div className="skill-container">
                    
                    <h3 className="category-title">Web Development</h3>
                    <div className="skill-grid">
                      {webDevSkills.map((skill, index) => (
                        <div key={index} className="skill-card">
                          <div className="icon-box">{skill.icon}</div>
                          <span>{skill.name}</span>
                        </div>
                      ))}
                    </div>

                    <h3 className="category-title mt-5">Tools & Design</h3>
                    <div className="skill-grid">
                      {[...toolsSkills, ...officeSkills].map((skill, index) => (
                        <div key={index} className="skill-card">
                          <div className="icon-box">{skill.icon}</div>
                          <span>{skill.name}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* --- SERTIFIKAT --- */}
                  <div className="text-center mt-5 pt-5">
                    <h2 className="section-title">Certifications</h2>
                    <p className="section-subtitle">Bukti kompetensi profesional saya.</p>
                  </div>

                  <Row className="mt-4 justify-content-center">
                    {certificates.map((cert, index) => {
                      return (
                        <Col key={index} xs={12} md={6} lg={4} className="mb-4">
                          <div className="cert-card">
                            <img src={cert.imgUrl} alt={cert.title} />
                            <div className="cert-overlay">
                              <div className="cert-text">
                                <h4>{cert.title}</h4>
                                <span>{cert.description}</span>
                                {cert.pdfUrl && (
                                  <div className="cert-btn-wrapper">
                                    <a href={cert.pdfUrl} target="_blank" rel="noreferrer" className="btn-cert">
                                      <EyeFill size={18} /> Lihat Sertifikat
                                    </a>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </Col>
                      )
                    })}
                  </Row>

                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}