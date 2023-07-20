import { Header } from "@/components/Header";
import "../scss/main.scss";
import styles from "./styles.module.scss";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import Footer from "@/components/Footer/footer";
import { Provider } from "@/context/itemsContext";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
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
      <body className={`${roboto.className} ${styles.layoutClass}`}>
        <Header />
        <Provider>{children}</Provider>
        <Footer />
      </body>
    </html>
  );
}
