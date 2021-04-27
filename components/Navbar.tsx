import React from "react";
import ActiveLink from "./ActiveLink";
import s from "../styles/navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={s.navbar}>
      <div className={s.navLogo}>
        {location.pathname !== "/" ? (
          <ActiveLink href="/" activeClassName="">
            <img className={s.logo} src="/logo.png" alt="logo" />
          </ActiveLink>
        ) : null}
      </div>
      <ul className={s.menu}>
        <li>
          <ActiveLink href="/about" activeClassName={s.activeLink}>
            <a className={s.primaryLink}>About</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/projects" activeClassName={s.activeLink}>
            <a className={s.primaryLink}>Projects</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/contact" activeClassName={s.activeLink}>
            <a className={s.primaryLink}>Contact</a>
          </ActiveLink>
        </li>
      </ul>
    </nav>
  );
}
