import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sia Sentinel",
  description: "Host reliability intelligence for the Sia network."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
