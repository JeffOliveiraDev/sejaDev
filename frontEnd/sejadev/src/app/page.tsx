// "use client";
import Image from "next/image";
import styles from "./styles.module.scss";

import { api } from "@/services/api";
import { BtnTeste } from "@/components/ButtonTeste";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import wavesTop from "../assets/waveTopClara.svg";

import burguer from "../assets/burguerkenzie.png";
import estudante from "../assets/dev3dSentado.svg";
import logo from "../assets/9.svg";
import HeaderHome from "./components/headerHome/headerHome";
import BtnsLanguages from "./components/btnsLanguages/btnsLanguages";
import InsideBoxInfo from "./components/insideBoxInfo/insideBoxInfo";
import { Context } from "@/context/itemsContext";
import BoxCards from "./components/boxCards/boxCards";

export default function Home() {
  // requisição do lado do servidor(SSR)
  // requisição do lado do cliente(CSR),useEffect, "use client"
  // CSR é quando o usuário precisa interagir
  // não existe manipulação dentro do node

  // separando ssr e csr: composition pattern
  /*rota dinâmica <Link href={`pagina/${item.id}`}></Link> */
  // const [darkLight, setDarkLight] = useState(true);

  // const dark = darkLight ? styles.bodyDark : styles.bodyLight;

  return (
    <main className={styles.main}>
      <HeaderHome />
      <BtnsLanguages />
      <section className={styles.boxInfo}>
        <InsideBoxInfo />
        <BoxCards />
      </section>
    </main>
  );
}
