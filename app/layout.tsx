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
export const metadata: Metadata = {
  title: "DZ admin dashboard",
  description: "NextJs admin dashboard"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={karla.className + 'min-h-screen oerflow-hidden'}>
        <ThemeProvider
        themes={['dark', 'custom', 'light']}
          attribute='class'
          enableSystem
          disableTransitionOnChange
        >
          <>
            <Sidebar />
            <div className='flex flex-col h-full w-full'>
              <Header />
              <PageWrapper children={children} />
            </div>
          </>
        </ThemeProvider>
      </body>
    </html>
  );
}
