import Heading from "@theme/Heading";

import clsx from "clsx";

import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "No coding required!",
    Svg: require("@site/static/img/undraw_code.svg").default,
    description: (
      <>
        Just edit the example settings file, build the production version, and
        deploy it to your web server.
      </>
    ),
  },
  {
    title: "Mobile Friendly",
    Svg: require("@site/static/img/undraw_rocket.svg").default,
    description: (
      <>Fully responsive design that works on any device, right out the box.</>
    ),
  },
  {
    title: "MIT Licensed",
    Svg: require("@site/static/img/undraw_note.svg").default,
    description: (
      <>
        This project is licensed under the terms of the MIT license. It is free
        to use and modify for your personal and commercial projects.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
