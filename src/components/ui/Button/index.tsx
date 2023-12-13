import "./styles.scss";

import type { ButtonProps } from "./types";

export function Button({
    children,
    className,
    variant = "primary",
}: ButtonProps) {
    return (
        <button className={`button ${variant} ${className ?? ""}`}>
            {children}
        </button>
    );
}
