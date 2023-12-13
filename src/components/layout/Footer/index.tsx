import "./styles.scss";

import Link from "next/link";
import { Icons } from "@/components";

export function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <Link href="/" className="footer__logo">
                    <Icons.logo /> Project
                </Link>

                <div className="footer__contact">
                    <h4 className="address">123 Street, Anytown, USA 12345</h4>
                    <Link href="mailto:hello@website.com">
                        hello@website.com
                    </Link>
                </div>

                <h4 className="footer__copyright">
                    © 2021 Project. All rights reserved
                </h4>
            </div>
        </footer>
    );
}
