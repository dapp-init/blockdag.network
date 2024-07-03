import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "BlockDAG | Layer 1 Presale Now LIVE!",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
