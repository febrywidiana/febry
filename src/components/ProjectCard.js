import { Col } from "react-bootstrap";
import { Github } from "react-bootstrap-icons";

export const ProjectCard = ({ title, description, imgUrl, techs, githubUrl }) => {

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">

        {/* Tech Stack Badge */}
        <div className="tech-badges">
          {techs?.map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        <img src={imgUrl} alt={title} />

        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
        )}
      </div>
    </Col>
  );
};
