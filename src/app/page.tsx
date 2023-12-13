import "./styles.scss";

import { AboutSection, HeadlineSection, HeroSection } from "./Home";

export default function Home() {
    return (
        <main className="home__page">
            <HeroSection />
            <HeadlineSection />
            <AboutSection />
        </main>
    );
}
