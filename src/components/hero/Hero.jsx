import styles from "./Hero.module.scss";

import Social from "/src/components/social/Social";

const Hero = ({ hero, social }) => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.leftPanel}>
        <h2 className={styles.heading}>{hero.heading}</h2>
        <blockquote className={styles.message}>{hero.message}</blockquote>
        <div className={styles.socialMedia}>
          <Social social={social} />
        </div>
      </div>
      <div>
        <img className={styles.mainImage} src={hero.image} alt="" />
      </div>
    </section>
  );
};

export default Hero;
