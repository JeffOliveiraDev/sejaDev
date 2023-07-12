import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import fotoPerfil from "../../assets/fotoDePerfil.svg";
import backGroundTop from "../../assets/backgroundPcTopo.svg";
import wavesTop from "../../assets/waveTopClara.svg";

const AboutMe = () => {
  return (
    <main className={styles.main}>
      <div className={styles.boxPresentation}>
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
          <button className={styles.btnProjetos}>Veja Meus Projetos</button>
        </div>

        <Image className={styles.foto} src={fotoPerfil} alt="" />
      </div>
      <section className={styles.boxEstudo}>
        <Image className={styles.wave} src={wavesTop} alt="" />
        <div className={styles.insideBoxEstudo}></div>
      </section>
      <div className={styles.teste}></div>
      <div className={styles.teste}></div>

      <div className={styles.teste}></div>
    </main>
  );
};

export default AboutMe;

{
  /* <body>
  <header></header>
  <main></main>
  <footer></footer>
</body> */
}
