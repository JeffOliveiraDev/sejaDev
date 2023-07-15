// "use client";
import Image from "next/image";
import styles from "./styles.module.scss";

import { api } from "@/services/api";
import { BtnTeste } from "@/components/ButtonTeste";
import Link from "next/link";
import { useState } from "react";
import wavesTop from "../assets/waveTopClara.svg";

import burguer from "../assets/burguerkenzie.png";
import estudante from "../assets/dev3dSentado.svg";
import logo from "../assets/9.svg";
import HeaderHome from "./components/headerHome/headerHome";
import BtnsLanguages from "./components/btnsLanguages/btnsLanguages";
import InsideBoxInfo from "./components/insideBoxInfo/insideBoxInfo";

export default function Home() {
  // const response = await api.get("rota");
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
        <div className={styles.boxCards}>
          <h2 className={styles.boxCardsTitle}>Frameworks</h2>
          <ul className={styles.listCards}>
            <li className={styles.card}>
              <h2></h2>
              <Image src={burguer} alt="burguer" />
              <div className={styles.cardTextBtn}>
                <h3>Kenzie Burguer</h3>
                <p>
                  Projeto da Kenzie Burguer, refeito com TypeScript e
                  refatorado, esse projeto emula uma loja de hambúrgueres com
                  página de cadastro e login, utilizando API.
                </p>
              </div>
              <button>Visitar</button>
            </li>
          </ul>
        </div>

        <div className={styles.boxCards}>
          <h2 className={styles.boxCardsTitle}>Bibliotecas</h2>
          <ul className={styles.listCards}>
            <li className={styles.card}>
              <h2></h2>
              <Image src={burguer} alt="burguer" />
              <div className={styles.cardTextBtn}>
                <h3>Kenzie Burguer</h3>
                <p>
                  Projeto da Kenzie Burguer, refeito com TypeScript e
                  refatorado, esse projeto emula uma loja de hambúrgueres com
                  página de cadastro e login, utilizando API.
                </p>
              </div>
              <button>Visitar</button>
            </li>
          </ul>
        </div>

        <div className={styles.boxCards}>
          <h2 className={styles.boxCardsTitle}>Ferramentas</h2>
          <ul className={styles.listCards}>
            <li className={styles.card}>
              <h2></h2>
              <Image src={burguer} alt="burguer" />
              <div className={styles.cardTextBtn}>
                <h3>Kenzie Burguer</h3>
                <p>
                  Projeto da Kenzie Burguer, refeito com TypeScript e
                  refatorado, esse projeto emula uma loja de hambúrgueres com
                  página de cadastro e login, utilizando API.
                </p>
              </div>
              <button>Visitar</button>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
