import "@/styles/main.scss";

import { Footer, Header } from "@/components";
import { Source_Sans_3, Oswald } from "next/font/google";

import type { Metadata } from "next";
import type { RootLayoutProps } from "./types";

export const metadata: Metadata = {
    title: "Itpu Web Project",
    description: "itpu first web project",
};

const sourceSans3 = Source_Sans_3({
    subsets: ["latin"],
    variable: "--source-sans-3",
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const oswald = Oswald({
    subsets: ["latin"],
    variable: "--oswald",
    weight: ["200", "300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body className={`${sourceSans3.variable} ${oswald.variable}`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
