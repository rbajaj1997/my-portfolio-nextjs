import React from "react";
import s from "../styles/footer.module.scss";

export default function Navbar() {
  return (
    <footer className={s.footer}>
      <a href="mailto:rbajaj1402@gmail.com" className={s.primaryLink}>
        rbajaj1402@gmail.com
      </a>
      <a
        href="https://www.linkedin.com/in/rbajaj1997/"
        target="_blank"
        rel="noopener noreferrer"
        className={s.primaryLink}
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/rbajaj1997"
        target="_blank"
        rel="noopener noreferrer"
        className={s.primaryLink}
      >
        github
      </a>
    </footer>
  );
}
