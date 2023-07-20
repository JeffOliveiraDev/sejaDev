"use client";
import React, { useContext } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import sass from "../../../assets/sass.svg";
import TS from "../../../assets/typescript.svg";
import JS from "../../../assets/js.svg";
import css from "../../../assets/css.svg";
import html from "../../../assets/html5.svg";
import react from "../../../assets/react.svg";
import nest from "../../../assets/nestjs.svg";
import nodejs from "../../../assets/nodejs.svg";
import git from "../../../assets/git.svg";
import python from "../../../assets/python.svg";
import { Context } from "@/context/itemsContext";

const BtnsLanguages = () => {
  const { items, selectedItem, setSelectedItem } = useContext(Context);

  return (
    <section className={styles.boxBtns}>
      <div className={styles.boxBtnsTitle}>
        <h2>Selecione a Linguagem para obter informações</h2>
      </div>
      <ul className={styles.boxCardsFront}>
        <li className={styles.card} onClick={() => setSelectedItem("Python")}>
          <div className={styles.cardImage}>
            <Image src={python} alt="Python" />
          </div>
          <div className={styles.cardDescription}>
            <p className={styles.textTitle}>Python</p>
          </div>
        </li>
        {/* <li
          className={styles.card}
          onClick={() => setSelectedItem("SASS/SCSS")}
        >
          <div className={styles.cardImage}>
            <Image src={sass} alt="Sass/Scss" />
          </div>
          <div className={styles.cardDescription}>
            <p className={styles.textTitle}>SASS/SCSS</p>
          </div>
        </li> */}
        <li
          className={styles.card}
          onClick={() => setSelectedItem("JavaScript")}
        >
          <div className={styles.cardImage}>
            <Image src={JS} alt="JavaScript" />
          </div>
          <div className={styles.cardDescription}>
            <p className={styles.textTitle}>JavaScript</p>
          </div>
        </li>
        {/* <li className={styles.card} onClick={() => setSelectedItem("React")}>
          <div className={styles.cardImage}>
            <Image src={react} alt="React" />
          </div>
          <div className={styles.cardDescription}>
            <p className={styles.textTitle}>React</p>
          </div>
        </li> */}
        <li className={styles.card} onClick={() => setSelectedItem("HTML")}>
          <div className={styles.cardImage}>
            <Image src={html} alt="Html" />
          </div>
          <div className={styles.cardDescription}>
            <p className={styles.textTitle}>HTML</p>
          </div>
        </li>
        <li className={styles.card} onClick={() => setSelectedItem("CSS")}>
          <div className={styles.cardImage}>
            <Image src={css} alt="Css" />
          </div>
          <div className={styles.cardDescription}>
            <p className={styles.textTitle}>CSS</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default BtnsLanguages;
