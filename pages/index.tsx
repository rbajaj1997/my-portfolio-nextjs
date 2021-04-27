import s from "../styles/home.module.scss";

export default function Home() {
  return (
    <section className={s.container}>
      <div className={s.hero}>
        <div className={s.title}>
          <div className={s.typewriter}>&gt; Rohit Bajaj</div>
        </div>
        <div className={s.description}>
          Hi!{" "}
          <span role="img" aria-label="hello-emoji">
            👋🏻
          </span>{" "}
          I am a full-stack developer who likes working with
          <strong> JavaScript</strong> libraries & frameworks. I am romantic
          about learning, and web development keeps me forever a student.
        </div>
      </div>
    </section>
  );
}
