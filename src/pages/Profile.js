import "../profile.css";
import {
  Linkedin,
  Github,
  Envelope,
  Instagram,
  Facebook
} from "react-bootstrap-icons";

const Profile = () => {
  return (
    <section className="profile">
      <div className="profile-container">

        {/* Avatar */}
        <div className="profile-avatar">
          <img src="/profile.jpeg" alt="Profile" />
        </div>

        {/* Content */}
        <div className="profile-content">
          <h1>
            Febry <span>Widiana</span>
          </h1>
          <h3>Mahasiswa Informatika</h3>

          <div className="about">
            <h2>About Me</h2>
            <p>
              Halo! Saya adalah seorang mahasiswa Informatika yang memiliki
              ketertarikan mendalam pada Machine Learning, Natural Language
              Processing (NLP), dan Web Development. Saya senang membangun
              solusi inovatif yang menggabungkan kecerdasan buatan dengan
              pengalaman pengguna yang intuitif.
            </p>
          </div>

          <div className="socials">
            <h2>Connect & Socials</h2>

            <div className="social-buttons">
              <a
                href="https://linkedin.com/in/username"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/username"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>

              <a
                href="mailto:emailkamu@gmail.com"
                className="btn"
              >
                <Envelope size={18} />
                <span>Email</span>
              </a>

              <a
                href="https://instagram.com/username"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                <Instagram size={18} />
                <span>Instagram</span>
              </a>
              <a
                 href="https://facebook.com/username"
                target="_blank"
  rel="noreferrer"
  className="btn"
              >
                <Facebook size={18} />
                <span>Facebook</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
