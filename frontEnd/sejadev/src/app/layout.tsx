import { Header } from "@/components/Header";
import "../scss/main.scss";
import styles from "./styles.module.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SejaDev",
  description: "Sobre nós crescendo juntos!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} ${styles.layoutClass}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
