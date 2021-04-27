import s from "../styles/project.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Projects({ details }) {
  return (
    <div className={s.project}>
      <div className={s.image}>
        <img src={details.image} alt="project-img" />
      </div>
      <div className={s.details}>
        <div className={s.title}>{details.title}</div>
        <div className={s.description}>{details.description}</div>
        <div className={s.cta}>
          <a
            href={details.links.preview}
            target="_blank"
            rel="noopener noreferrer"
            className={`${s.btn} ${s.btnPrimary}`}
          >
            Live Demo <FontAwesomeIcon icon={faExternalLinkAlt} color="white" />
          </a>
          <a
            href={details.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`${s.btn} ${s.btnSecondary}`}
          >
            <FontAwesomeIcon icon={faGithub} /> View Source
          </a>
        </div>
      </div>
    </div>
  );
}
