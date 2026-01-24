import { Container, Row, Col } from "react-bootstrap";
import { EyeFill } from "react-bootstrap-icons"; 
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// Import gambar sertifikat yang BENAR
import certImg1 from "../assets/img/sf1.png"; 
import certImg2 from "../assets/img/sf2.png"; 
import certImg3 from "../assets/img/sf4.png"; 
import certImg4 from "../assets/img/sf3.png"; 
import colorSharp from "../assets/img/color-sharp.png"; 

export const Skills = () => {

  const certificates = [
    {
      title: "AI Ignition Training", // Sesuaikan judul
      description: "KUMPUL & Asian Development Bank", // Sesuaikan deskripsi
      imgUrl: certImg1, // Pakai variabel certImg1
      pdfUrl: "/assets/pdf/sertifikat-ai.pdf" // Sesuaikan nama file PDF
    },
    {
      title: "Web Development",
      description: "Fullstack JavaScript",
      imgUrl: certImg2, // Ganti dengan gambar sertifikat kedua yang benar
      pdfUrl: "/assets/pdf/sertifikat-web.pdf"
    },
    {
      title: "Web Development",
      description: "Fullstack JavaScript",
      imgUrl: certImg3, // Ganti dengan gambar sertifikat kedua yang benar
      pdfUrl: "/assets/pdf/sertifikat-web.pdf"
    },
    {
      title: "Web Development",
      description: "Fullstack JavaScript",
      imgUrl: certImg4, // Ganti dengan gambar sertifikat kedua yang benar
      pdfUrl: "/assets/pdf/sertifikat-web.pdf"
    },
    // ... tambahkan sertifikat lain di sini
  ];

  return (
    <section className="certificate-section" id="skills">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  
                  <div className="cert-header">
                    <h2>Sertifikat</h2>
                    <p>Berikut adalah sertifikat kompetensi yang telah saya miliki.</p>
                  </div>

                  <Row>
                    {certificates.map((cert, index) => {
                      return (
                        // PERBAIKAN DI SINI:
                        // Gunakan md={6} xl={4} agar di layar besar jadi 3 kolom (lebih kecil & rapi)
                        <Col key={index} xs={12} md={6} xl={4} className="mb-4">
                          
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