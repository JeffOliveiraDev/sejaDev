import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import sass from "../../../assets/sass.svg";
import TS from "../../../assets/typescript.svg";
import JS from "../../../assets/js.svg";
import css from "../../../assets/css.svg";
import html from "../../../assets/html5.svg";
import react from "../../../assets/react.svg";

const BtnsLanguages = () => {
  return (
    <section className={styles.boxBtns}>
      <div className={styles.boxBtnsTitle}>
        <h2>Selecione a Linguagem para obter informações</h2>
      </div>
      <ul className={styles.boxCardsFront}>
        <li className={styles.card}>
          <div className={styles.cardImage}>
            <Image src={TS} alt="TypeScript" />
          </div>
          <div className={styles.cardDescription}>
            <p className={styles.textTitle}>TypeScript</p>
          </div>
        </li>
        <li className={styles.card}>
          <div className={styles.cardImage}>
            <Image src={sass} alt="Sass/Scss" />
          </div>
          <div className={styles.cardDescription}>
            <p className={styles.textTitle}>SASS/SCSS</p>
          </div>
        </li>
        <li className={styles.card}>
          <div className={styles.cardImage}>
            <Image src={JS} alt="JavaScript" />
          </div>
          <div className={styles.cardDescription}>
            <p className={styles.textTitle}>JavaScript</p>
          </div>
        </li>
        <li className={styles.card}>
          <div className={styles.cardImage}>
            <Image src={react} alt="React" />
          </div>
          <div className={styles.cardDescription}>
            <p className={styles.textTitle}>React</p>
          </div>
        </li>
        <li className={styles.card}>
          <div className={styles.cardImage}>
            <Image src={html} alt="Html" />
          </div>
          <div className={styles.cardDescription}>
            <p className={styles.textTitle}>Html</p>
          </div>
        </li>
        <li className={styles.card}>
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
