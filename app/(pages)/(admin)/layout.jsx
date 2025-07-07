"use client"
import { SidebarProvider } from "../../context/SidebarContext";
import { ThemeProvider } from "../../context/ThemeContext";
import { Outfit } from "next/font/google";
const outfit = Outfit({
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}) {
    return (
        <html lang="en">
            <body className={` dark:bg-gray-900`}>
                <ThemeProvider>
                    <SidebarProvider>{children}</SidebarProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
