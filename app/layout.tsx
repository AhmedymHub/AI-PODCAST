import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConvexClerkProvider  from "./providers/ConvexClerkProvider";

// Call the font loader and assign it to a constant at the module scope
const inter = Inter({ subsets: ["latin"] }); // Change this to 'inter' instead of 'manrope'

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
      <html lang="en">
          <body className={inter.className}>
            <ConvexClerkProvider>
             {children}
            </ConvexClerkProvider>
            </body>
      </html>
  );
}
