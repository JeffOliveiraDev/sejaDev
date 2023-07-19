"use client";
import React, { useContext } from "react";
import styles from "./styles.module.scss";
import burguer from "../../../assets/burguerkenzie.png";
import Image from "next/image";
import Loading from "@/app/loading";
import { Context } from "@/context/itemsContext";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const BoxCards = () => {
  const {
    items,
    selectedItem,
    setSelectedItem,
    loading,
    libraryToRender,
    frameworkToRender,
    toolsToRender,
  } = useContext(Context);
  console.log(libraryToRender);

  return (
    <>
      <div className={styles.boxCards}>
        <h2 className={styles.boxCardsTitle}>Frameworks</h2>
        <p className={styles.boxCardsTitleExplanation}>
          Esqueleto para contrução da aplicação, necessário seguir fluxo de
          trabalho e estruturas pré-definidas.
        </p>
        <ul className={styles.listCards}>
          {frameworkToRender
            ? frameworkToRender.map((item: any) => {
                return (
                  <li key={item.name} className={styles.card}>
                    <h2></h2>
                    <Image
                      src={item.coverImg}
                      alt={item.name}
                      width={200}
                      height={200}
                    />
                    <div className={styles.cardTextBtn}>
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                    </div>
                    <a href={item.documentation} target="_blank">
                      <button>Visitar</button>
                    </a>
                  </li>
                );
              })
            : null}
        </ul>
      </div>

      <div className={styles.boxCards}>
        <h2 className={styles.boxCardsTitle}>Bibliotecas</h2>
        <p className={styles.boxCardsTitleExplanation}>
          Conjunto de implementações(funções, classes, procedimentos) que podem
          ser reutilizadas em diferentes programas.
        </p>
        <ul className={styles.listCards}>
          {libraryToRender
            ? libraryToRender.map((item: any) => {
                return (
                  <li key={item.name} className={styles.card}>
                    <h2></h2>
                    <Image
                      src={item.coverImg}
                      alt={item.name}
                      width={200}
                      height={200}
                    />
                    <div className={styles.cardTextBtn}>
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                    </div>
                    <a href={item.documentation} target="_blank">
                      <button>Visitar</button>
                    </a>
                  </li>
                );
              })
            : null}
        </ul>
      </div>

      <div className={styles.boxCards}>
        <h2 className={styles.boxCardsTitle}>Ferramentas</h2>
        <p className={styles.boxCardsTitleExplanation}>
          Facilitam o processo de criação, implementação e manutenção de uma
          aplicação.
        </p>
        <ul className={styles.listCards}>
          {toolsToRender
            ? toolsToRender.map((item: any) => {
                return (
                  <li key={item.name} className={styles.card}>
                    <Image
                      src={item.coverImg}
                      alt={item.name}
                      width={200}
                      height={200}
                    />
                    <div className={styles.cardTextBtn}>
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                    </div>
                    <a href={item.documentation} target="_blank">
                      <button>Visitar</button>
                    </a>
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    </>
  );
};

export default BoxCards;
