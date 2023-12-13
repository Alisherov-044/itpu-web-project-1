import "./styles.scss";

import { Button } from "@/components";

export function HeadlineSection() {
    return (
        <section className="headline__section">
            <div className="container">
                <h1 className="headline__section--title">
                    This is the Section Headline, Continues to Two Lines
                </h1>

                <h4 className="headline__section--subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eiusmod.
                </h4>

                <div className="headline__section--descriptions">
                    <p className="headline__section--description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum. Sed ut perspiciatis unde omnis.
                    </p>
                    <p className="headline__section--description">
                        Minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.{" "}
                    </p>
                </div>

                <Button>Read More</Button>
            </div>
        </section>
    );
}
