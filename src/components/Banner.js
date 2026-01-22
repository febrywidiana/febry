import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Earth from "./Earth";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Web Developer"];
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">

          {/* EARTH — MOBILE ATAS, DESKTOP KANAN */}
          <Col
            xs={12}
            md={6}
            xl={5}
            className="order-1 order-md-2"
          >
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__zoomIn earth-wrapper"
                      : "earth-wrapper"
                  }
                >
                  <Earth />
                </div>
              )}
            </TrackVisibility>
          </Col>

          {/* TEXT */}
          <Col
            xs={12}
            md={6}
            xl={7}
            className="order-2 order-md-1"
          >
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__fadeIn"
                      : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>

                  <h1>
                    Hi! I'm{" Febry widiana "}
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>

                  <p>
                    Saya adalah seorang mahasiswa Informatika yang memiliki
              ketertarikan mendalam pada Machine Learning, Natural Language
              Processing (NLP), dan Web Development.
                  </p>

                  <button>
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
