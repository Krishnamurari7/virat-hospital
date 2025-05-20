import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Virat Life Hospital Patna",
  description:
    "Official website of Virat Life Hospital Patna - Healthcare and Medical Education",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen">
          <div className="flex w-full overflow-hidden pl-6">
            <div className="whitespace-nowrap animate-marquee">
              <a href="/" className="flex items-center justify-center gap-2">
                <img
                  src="/images/logo.png"
                  alt="VIMS Logo"
                  className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain"
                />
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-b from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Virat Life Institute of Medical Science (VIMS), Patna
                </span>
              </a>
            </div>
          </div>

          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
