"use client";
import Image from "next/image";
import styles from "./styles.module.scss";
import { api } from "@/services/api";
import { BtnTeste } from "@/components/ButtonTeste";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  // const response = await api.get("rota");
  // requisição do lado do servidor(SSR)
  // requisição do lado do cliente(CSR),useEffect, "use client"
  // CSR é quando o usuário precisa interagir
  // não existe manipulação dentro do node

  // separando ssr e csr: composition pattern
  /*rota dinâmica <Link href={`pagina/${item.id}`}></Link> */
  const [darkLight, setDarkLight] = useState(true);

  const dark = darkLight ? styles.bodyDark : styles.bodyLight;

  return (
    <main>
      <div className={dark}>
        <h1>teste</h1>
        <BtnTeste />
        <button onClick={() => setDarkLight(!darkLight)}>
          trocando estilo
        </button>
      </div>
    </main>
  );
}
