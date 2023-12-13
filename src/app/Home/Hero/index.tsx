import "./styles.scss";

import { Icons } from "@/components";

export function HeroSection() {
    return (
        <section className="hero__section">
            <div className="hero-bg" />
            <div className="container">
                <Icons.logo className="hero__section--logo" />
                <h1 className="hero__section--title">Your Headline Here</h1>
                <p className="hero__section--description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eiusmod.
                </p>
            </div>
        </section>
    );
}
