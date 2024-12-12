import "./globals.css";
import type {Metadata} from "next";
import localFont from "next/font/local";
import Link from "next/link";
import {homePath, ticketsPath} from "@/utilities/path";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Road To Next App",
    description: "Create a Next.js app with TypeScript, Tailwind CSS, and React query.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <nav className={`flex justify-between items-center
                         animate-header-from-top
                         supports-backdrop-blur:bg-background/60
                         fixed left-0 right-0 top-0 z-20
                         border-b bg-background/95 backdrop-blur
                         w-full py-2.5 px-5`}>
            <div className="bg-primary/80 text-white py-4 px-8">
                <Link href={homePath()} className="text-2xl font-bold">Road To Next App</Link>
            </div>
            <div className="bg-primary/60 text-white py-4 px-8">
                <Link href={ticketsPath()} className="text-lg font-bold underline">Tickets</Link>
            </div>
        </nav>
        <main
            className="
                min-h-screen flex-1
                overflow-y-auto overflow-x-hidden
                py-24 px-8
                bg-secondary/20
                flex flex-col
              "
        >
            {children}
        </main>
        </body>
        </html>
    );
}