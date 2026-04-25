import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Accredian Enterprise | Next-Gen Expertise For Your Enterprise",
  description:
    "Cultivate high-performance teams through expert learning. Accredian Enterprise offers tailored corporate training programs in AI, Data Science, Leadership, and more.",
  keywords: [
    "corporate training",
    "enterprise learning",
    "data science training",
    "AI training",
    "leadership development",
    "Accredian",
  ],
  openGraph: {
    title: "Accredian Enterprise | Next-Gen Expertise For Your Enterprise",
    description:
      "Cultivate high-performance teams through expert learning. Tailored corporate training programs for enterprises.",
    type: "website",
    url: "https://enterprise.accredian.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
