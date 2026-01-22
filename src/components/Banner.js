import { useState, useEffect, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
// 1. TAMBAHKAN IMPORT ICON DISINI
import { ArrowRightCircle, Linkedin, Github, Envelope, Instagram} from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Earth from "./Earth";

export const Banner = () => {
  const toRotate = useMemo(() => ["Web Developer"], []);
  
  const period = 1200;
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(80); 

  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];

      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      setDelta(isDeleting ? 40 : 80);

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      }

      if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(300);
      }
    };

    const ticker = setInterval(tick, delta);
    return () => clearInterval(ticker);
  }, [text, delta, isDeleting, loopNum, toRotate, period]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">

          {/* EARTH & SOCIALS — MOBILE ATAS, DESKTOP KANAN */}
          <Col xs={12} md={6} xl={5} className="order-1 order-md-2">
            <TrackVisibility>
              {({ isVisible }) => (
                // Gunakan Fragment <>...</> agar bisa memuat 2 elemen (Earth & Socials)
                <>
                  <div
                    className={
                      isVisible
                        ? "animate__animated animate__zoomIn earth-wrapper"
                        : "earth-wrapper"
                    }
                  >
                    <Earth />
                  </div>

                  {/* 2. KODE SOCIALS DITEMPATKAN DI SINI (DI BAWAH EARTH) */}
                 {/* 2. KODE SOCIALS (HANYA ICON) */}
<div 
  className={isVisible ? "animate__animated animate__fadeInUp socials" : "socials"}
  style={{ marginTop: "20px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}
>
  

  <div className="social-buttons">
    <a href="https://linkedin.com/in/febry-widiana-6ba48b385" target="_blank" rel="noreferrer" className="btn">
      <Linkedin size={30} />
    </a>

    <a href="https://github.com/febrywidiana" target="_blank" rel="noreferrer" className="btn">
      <Github size={30} />
    </a>

    <a href="mailto:emailkamu@gmail.com" className="btn">
      <Envelope size={30} />
    </a>

    <a href="https://instagram.com/febrywdiana" target="_blank" rel="noreferrer" className="btn">
      <Instagram size={30} />
    </a>
    
   
  </div>
</div>
                  {/* AKHIR KODE SOCIALS */}
                </>
              )}
            </TrackVisibility>
          </Col>

          {/* TEXT — MOBILE BAWAH, DESKTOP KIRI */}
          <Col xs={12} md={6} xl={7} className="order-2 order-md-1">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__fadeIn"
                      : ""
                  }
                >
                  <span className="tagline">Hi! I'm Febry Widiana</span>

                  <h1>
                    <span className="name"></span>{" "}
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>

                  <p>
                    Saya adalah seorang mahasiswa Informatika yang memiliki
                    ketertarikan pada Machine Learning, Natural Language
                    Processing (NLP), dan Web Development.
                  </p>

                  <button onClick={() => console.log('connect')}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};