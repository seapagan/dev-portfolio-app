import React from "react";

import Social from "/src/components/social/Social";

import styles from "./Contact.module.scss";

const Contact = ({ social }) => {
  return (
    <section id="contact-section">
      <h2 className="section__title">Contact Me</h2>
      <div className={styles.contact}>
        <p>
          If you have managed to read down this far, you may like what you see
          and want to get in touch! I am open for work at this time for both
          Full-time and Sub-contract work.
        </p>
        <p>
          Please drop me a contact either by LinkedIn or email using the buttons
          below, thanks for your interest :)
        </p>
        <div className={styles.socialButtons}>
          <Social social={social} />
        </div>
        <p>
          This portfolio webpage was originally designed from scratch over a
          weekend and is availiable for anyone to use under the MIT licence. No
          coding needed to customise, all the details are stored in one
          configuration file. See the link in the footer for the GitHub
          repository.
        </p>
      </div>
    </section>
  );
};

export default Contact;
