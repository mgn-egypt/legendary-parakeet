import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "Mahmoud Gamal Nassar | Rapper & Songwriter",
  description: "Arabic-English rapper and songwriter blending Eastern and Western musical traditions with AI innovation.",
  keywords: ["rapper", "songwriter", "music", "AI music", "Arabic rap", "English rap"],
  authors: [{ name: "Mahmoud Gamal Nassar" }],
  openGraph: {
    title: "Mahmoud Gamal Nassar | Rapper & Songwriter",
    description: "Arabic-English rapper and songwriter blending Eastern and Western musical traditions with AI innovation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
