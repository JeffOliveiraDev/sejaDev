import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import fotoPerfil from "../../../../assets/fotoDePerfil.svg";
import wavesTop from "../../../../assets/waveTopClara.svg";

const Presentation = () => {
  return (
    <>
      <div id="top" className={styles.boxPresentation}>
        <div className={styles.backGroundImage}></div>
        <div className={styles.itensPresentation}>
          <div className={styles.itensPresentationLeft}>
            <h2>Hello there! Me chamo</h2>
            <h2>
              <span>Jefferson.</span>
            </h2>
            <p>Desenvolvedor FullStack, psicólogo</p>
            <p>e entusiasta de Inteligência Artificial!</p>
            <a href="#projects" className={styles.btnProjetos}>
              Veja Meus Projetos
            </a>
          </div>
          <div className={styles.itensPresentationRight}>
            <Image className={styles.foto} src={fotoPerfil} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Presentation;
