import s from "../styles/about.module.scss";

export default function About() {
  return (
    <section className={s.container}>
      <div className={s.details}>
        <p className={s.text}>
          Hello! I'm Rohit, a 23 year old, self-taught full stack developer
          based in Bangalore, India.
          <br />I graduated from
          <a
            href="http://www.nitrr.ac.in/"
            rel="noopener noreferrer"
            target="_blank"
          >
            {" "}
            National Institute of Technology, Raipur
          </a>{" "}
          in 2019, majoring in Electrical Engineering. Despite being from a
          non-computer science background, I got into coding/development because
          computers have always fascinated me.. Seeing code getting converted to
          things we use regularly, like Facebook or Amazon, was no less than
          magic to me and that's where my quest to invent began! I joined{" "}
          <a
            href="https://www2.deloitte.com/ui/en.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            Deloitte USI
          </a>{" "}
          right after college, where I worked as a Full-Stack Developer.
          Presently I work at{" "}
          <a
            href="https://paytm.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Paytm
          </a>{" "}
          as a Software Engineer. I am always interested in learning, growing,
          and contributing to awesome projects!
          <br />
          When not in front of a computer, you will probably find me playing
          chess ♟️, relishing music 🎵🎧, watching football ⚽ or solving
          sudoku.
        </p>
      </div>

      <div className={s.skills}>
        <h2 className={s.headingSecondary}>My Skill Set</h2>
        <div className={s.logoContainer}>
          <div className={s.logo}>
            <img src="/html.svg" alt="html" />
          </div>
          <div className={s.logo}>
            <img src="/css.svg" alt="css" />
          </div>
          <div className={s.logo}>
            <img src="/sass.svg" alt="sass" />
          </div>
          <div className={s.logo}>
            <img src="/javascript.svg" alt="javascript" />
          </div>
          <div className={s.logo}>
            <img src="/typescript.svg" alt="typescript" />
          </div>
          <div className={s.logo}>
            <img src="/react.svg" alt="react" />
          </div>
          <div className={s.logo}>
            <img src="/node.svg" alt="node" />
          </div>
          <div className={s.logo}>
            <img src="/express.svg" alt="express" />
          </div>
          <div className={s.logo}>
            <img src="/graphql.svg" alt="graphql" />
          </div>
          <div className={s.logo}>
            <img src="/c.svg" alt="c" />
          </div>
          <div className={s.logo}>
            <img src="/mongodb.svg" alt="mongodb" />
          </div>
          <div className={s.logo}>
            <img src="/mysql.svg" alt="mysql" />
          </div>
          <div className={s.logo}>
            <img src="/npm.svg" alt="npm" />
          </div>
          <div className={s.logo}>
            <img src="/git.svg" alt="git" />
          </div>
          <div className={s.logo}>
            <img src="/github.svg" alt="github" />
          </div>
        </div>
      </div>
    </section>
  );
}
