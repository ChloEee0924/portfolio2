import type { Metadata } from "next";
import { Playfair_Display, Cinzel, Lato } from "next/font/google"; // Import specific fonts
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

// Configure fonts
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"], // Include necessary weights
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zhong Xinran | AI Product Manager",
  description: "Bridging the tranquility of Landscape Architecture with the precision of AI Product Strategy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${cinzel.variable} ${lato.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
