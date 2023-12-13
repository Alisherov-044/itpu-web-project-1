"use client";
import "./styles.scss";

import { Icons } from "@/components";

import type { DrawerProps } from "./types";

export function Drawer({ children, isOpen, onClose, className }: DrawerProps) {
    return (
        <div className={`backdrop ${isOpen ? "open" : ""}`} onClick={onClose}>
            <div
                onClick={(e) => e.stopPropagation()}
                className={`drawer ${className ?? ""}`}
            >
                {children}
                <div className="close" onClick={onClose}>
                    <Icons.close />
                </div>
            </div>
        </div>
    );
}
