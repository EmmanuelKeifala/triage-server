import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "server",
  description: "triage",
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
