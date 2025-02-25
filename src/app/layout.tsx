import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Tasks App",
  description: "Generado con NextJS, TypeScript, NodejJS, MongoDB, ExpressJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100 p-6">
        {children}
      </body>
    </html>
  );
}
