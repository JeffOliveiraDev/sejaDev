import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import estudante from "../../../assets/dev3dSentadoComprimido.svg";

const HeaderHome = () => {
  return (
    <div className={styles.headerHome}>
      <div className={styles.backgroundHome}></div>
      <div className={styles.itensTopHome}>
        <div className={styles.itensTopLeft}>
          <button className={styles.btn}>
            <h1>
              seja<span>Dev</span>
            </h1>
            <div className={styles.containerStars}>
              <div className={styles.stars}></div>
            </div>

            <div className={styles.glow}>
              <div className={styles.circle}></div>
              <div className={styles.circle}></div>
            </div>
          </button>

          <h2>Encontre tudo o que precisa</h2>
          <h2>para programar com qualidade</h2>
        </div>
        <div className={styles.itensTopRight}>
          <Image src={estudante} alt="estudante"></Image>
        </div>
      </div>
    </div>
  );
};

export default HeaderHome;
