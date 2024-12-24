import "./globals.css";
import {LucideKanban} from "lucide-react";
import type {Metadata} from "next";
import localFont from "next/font/local";
import Link from "next/link";
import ThemeProvider from "@/components/theme/theme-provider";
import {ThemeSwitcher} from "@/components/theme/theme-switcher";
import {buttonVariants} from "@/components/ui/button";
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
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <ThemeProvider>
            <nav className={`flex justify-between items-center
                         animate-header-from-top
                         supports-backdrop-blur:bg-background/60
                         fixed left-0 right-0 top-0 z-20
                         border-b bg-background/95 backdrop-blur
                         w-full py-2.5 px-5`}>
                <div>
                    <Link href={homePath()} className={buttonVariants({variant: 'ghost'})}>
                        <LucideKanban size={48} strokeWidth={3}/>
                        <h1 className={'ml-2 text-lg font-semibold'}>TicketBounty</h1></Link>
                </div>
                <div className={'flex align-items gap-x-2'}>
                    <ThemeSwitcher/>
                    <Link href={ticketsPath()}
                          className={buttonVariants({variant: 'default', size: 'lg'})}>Tickets</Link>
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
        </ThemeProvider>
        </body>
        </html>
    );
}