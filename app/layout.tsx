import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";
import { aeonik, inter } from "@/lib/constants/fonts";
import { ORIGIN_URL } from "@/lib/constants/pricing";
import Navbar from "@/components/home/navbar";
import Footer from "@/components/home/footer";

export const metadata: Metadata = {
  title: "Writora AI",
  description:
    "Convert your video or audio into a Blog Post in seconds with the power of AI!",
  icons: {
    icon: "/icon.ico",
  },
  metadataBase: new URL(ORIGIN_URL),
  alternates: {
    canonical: ORIGIN_URL,
  },
  openGraph: {
    title: "Writora AI",
    description:
      "Convert your video or audio into a Blog Post in seconds with the power of AI!",
    url: "https://lovebee.me",
    images: [
      {
        url: "/writora.png",
        width: 1260,
        height: 800,
      },
    ],
    locale: "en-EN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </head>
        <body
          className={cn(
            "!font-default min-h-screen overflow-x-hidden bg-background text-foreground antialiased",
            aeonik.variable,
            inter.variable
          )}
        >
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] bg-neutral-950" />
          <Navbar />
          <main className="relative z-0 mx-auto mt-20 w-full">{children}</main>
          <Toaster richColors position="top-right" />
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
