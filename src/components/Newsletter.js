import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export const Newsletter = ({ status, message, onValidated }) => {
  // ✅ SEMUA HOOK DI ATAS
  const location = useLocation();
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') {
      setEmail('');
    }
  }, [status]);

  // ✅ CONDITIONAL RETURN SETELAH HOOK
  if (location.pathname === "/profile") {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email
      });
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Subscribe to our Newsletter <br />
              & Never miss latest updates
            </h3>

            {status === 'sending' && <Alert>Sending...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>

          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
