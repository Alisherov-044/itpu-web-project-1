import "./styles.scss";

import { Icons } from "@/components";

export function AboutSection() {
    return (
        <section className="about__section">
            <div className="container">
                <h1 className="about__section--title">
                    Learn more <br /> about our culture...
                </h1>

                <Icons.play className="about__section--play" />

                <p className="about__section--description">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>

            <div className="about__section--backdrop" />
        </section>
    );
}
