import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "Steep Logic - Smart Tech. Sharp Results.",
  description: "We build tools and apps that help your business grow. From AI solutions to custom software development, we turn your ideas into working products that deliver value.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
