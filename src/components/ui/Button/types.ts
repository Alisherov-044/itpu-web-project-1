import type { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {
    children: ReactNode;
    className?: string;
    variant?: "primary" | "secondary" | "none";
}

export type { ButtonProps };
