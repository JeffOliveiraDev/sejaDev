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
      </div>
      <div className={styles.itensPresentation}>
        <div>
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

        <Image className={styles.foto} src={fotoPerfil} alt="" />
      </div>
      <section className={styles.boxEstudo}>
        <Image className={styles.wave} src={wavesTop} alt="" />
        <div className={styles.insideBoxEstudo}></div>
      </section>
    </>
  );
};

export default Presentation;
