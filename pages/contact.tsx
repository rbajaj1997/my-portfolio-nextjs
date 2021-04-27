import s from "../styles/contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <section className={s.container}>
      <div className={s.form}>
        <h2 className={s.headingSecondary}>Get in touch!</h2>
        <form
          action="https://formspree.io/xlegnepg"
          className="form"
          method="POST"
        >
          <div className={s.group}>
            <label htmlFor="name">Your Name: </label>
            <input type="text" name="name" required />
          </div>

          <div className={s.group}>
            <label htmlFor="email">Your E-mail: </label>
            <input type="email" name="_replyto" required />
          </div>

          <div className={s.group}>
            <label htmlFor="Message">Your message: </label>
            <textarea rows={4} name="message"></textarea>
          </div>
          <div className={s.group}>
            <button type="submit" className={s.submitBtn}>
              Send{"  "}
              <FontAwesomeIcon icon={faPaperPlane} color="white" />
            </button>
          </div>
        </form>
      </div>

      <div className={s.tired}>
        <h2 className={s.headingTertiary}>
          Already filled too many forms lately?{" "}
          <span role="img" aria-label="tired-emoji">
            😴
          </span>
        </h2>
        <h2 className={s.headingTertiary}>Feel free to reach me at:</h2>
      </div>
    </section>
  );
}
