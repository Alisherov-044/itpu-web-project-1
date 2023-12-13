"use client";
import "./styles.scss";

import Link from "next/link";
import { navLinks } from "@/data";
import { useSidebar } from "@/hooks";
import { Icons, Sidebar } from "@/components";

export function Header() {
    const { isOpen, open, close } = useSidebar();

    return (
        <header className="header">
            <nav className="navbar container">
                <Link href="/" className="navbar__logo">
                    Project
                </Link>

                <ul className="navbar__links">
                    {navLinks.map(({ id, link, title }, index) => (
                        <li key={id}>
                            <Link
                                className={`navbar__link ${
                                    index + 1 === 2 ? "active" : ""
                                }`}
                                href={link}
                            >
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="navbar__burger" onClick={open}>
                    <Icons.burger />
                </div>
            </nav>

            <Sidebar isOpen={isOpen} close={close} />
        </header>
    );
}
