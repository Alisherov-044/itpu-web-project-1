import type { ReactNode } from "react";

interface DrawerProps {
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
    className?: string;
}

export type { DrawerProps };
