import s from "../styles/projects.module.scss";
import Project from "../components/Project";
import projects from "../content/projects";

export default function Projects() {
  return (
    <section className={s.container}>
      <h2 className={s.headingSecondary}>Some of my projects &#8628;</h2>
      {projects.map((project) => {
        return <Project details={project} key={project.title} />;
      })}
      <h2 className={s.headingTertiary}>
        Many more projects are <strong>in progress</strong> and will be
        showcased soon!{" "}
        <span role="img" aria-label="fire-emoji">
          🔥
        </span>
      </h2>
    </section>
  );
}
