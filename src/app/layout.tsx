import type { Metadata } from "next";
import { Unkempt } from "next/font/google";
import "./globals.css";

const unkempt = Unkempt({
  variable: "--font-unkempt",
  subsets: ["latin"],
  weight: ['400', '700']
});

export const metadata: Metadata = {
  title: "naileopard",
  description: "naileopard's webiste!!",
  icons: {
    icon:"/favicon.ico"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="{unkempt.variable}">
      <body>
        {children}
      </body>
    </html>
  );
}
