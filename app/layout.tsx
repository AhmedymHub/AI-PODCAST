import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import ConvexClerkProvider  from "../providers/ConvexClerkProvider";
import AudioProvider from "@/providers/AudioProvider";

// Call the font loader and assign it to a constant at the module scope
const manrope = Manrope({ subsets: ["latin"] }); // Change this to 'inter' instead of 'manrope'

export const metadata: Metadata = {
  title: "AIPod",
  description: "Generate your podcasts using AI",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
      <html lang="en">
        <AudioProvider>
          <body className={manrope.className}>
             {children}
          </body>
        </AudioProvider>
      </html>
      </ConvexClerkProvider>
  );
}
