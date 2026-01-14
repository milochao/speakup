import type { Metadata } from "next";
import "./globals.css";
import { SessionProvider } from "@/context/SessionContext";

export const metadata: Metadata = {
  title: "The Commitment Engine | WIAA",
  description: "A high-stakes strategic workshop that forces executives to move from dreaming to irreversible commitment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
