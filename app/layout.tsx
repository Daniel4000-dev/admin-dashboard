'use client';
import Header from "@/components/header";
import PageWrapper from "@/components/pagewrapper";
import Sidebar from "@/components/sidebar";
import { ThemeProvider } from "@/components/themeprovider";
import { Karla } from "next/font/google";
import "./globals.css";

const karla = Karla({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ['latin'],
  variable: "--font-karla"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={karla.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen">
            <Sidebar></Sidebar>
            <Header></Header>
            <PageWrapper children={children}></PageWrapper>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
