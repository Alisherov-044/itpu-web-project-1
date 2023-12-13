"use client";
import "./styles.scss";

import Link from "next/link";
import { navLinks } from "@/data";
import { Drawer } from "@/components";

import type { SidebarProps } from "./types";

export function Sidebar({ isOpen, close }: SidebarProps) {
    return (
        <Drawer className="sidebar" isOpen={isOpen} onClose={close}>
            <ul className="sidebar__links">
                {navLinks.map(({ id, link, title }) => (
                    <li key={id} onClick={close}>
                        <Link className="sidebar__link" href={link}>
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
        </Drawer>
    );
}
