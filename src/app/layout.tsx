import SessionWrap from "@/components/providers/session.provider";
import { ThemeProvider } from "@/components/providers/theme.provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FilterProvider from "@/components/context/filter.context";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TruyenDB",
  description: "TruyenDB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrap>
      <html lang="en">
        <body suppressHydrationWarning={true}
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <FilterProvider>{children}</FilterProvider>
          </ThemeProvider>
        </body>
      </html>
    </SessionWrap>
  );
}
