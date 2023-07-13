import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import fotoPerfil from "../../assets/fotoDePerfil.svg";
import imgEstudo from "../../assets/formation.svg";
import wavesTop from "../../assets/waveTopClara.svg";
import iconCertificate from "../../assets/iconCertificate.svg";
import VectoBlob from "../../assets/Vectorblob.svg";
import burguer from "../../assets/burguerkenzie.png";
import CardsProjects from "./components/cardProjects/cards";
import CardsSkills from "./components/skillsCards/skills";

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
      imgEstudo
      <div className={styles.moreAboutMe}>
        <div className={styles.imgInsideMoreAboutMe}>
          <Image src={imgEstudo} alt="" />
        </div>

        <div className={styles.insideMoreAboutMe}>
          <h2>
            <span>Sobre</span> mim
          </h2>
          <p>
            Olá, me chamo Jefferson, sou Psicólogo, trabalhei como Auxiliar de
            administração por dez anos em uma{" "}
            <span>Unidade de Saúde da Família</span>, estou em{" "}
            <span>transição de carreira</span>, me voltando para a área que
            sempre gostei que é a TI! Veja minhas HardSkills!
          </p>

          <p>
            Acabei de me formar como <span>Desenvolvedor Full Stack</span> pela{" "}
            <span>Kenzie Academy</span>, estou trabalhando em projetos próprios
            e <span>buscando uma oportunidade</span> no mercado.{" "}
          </p>

          <p>
            Possuo uma boa{" "}
            <span>experiência lidando com diversos públicos</span> e considero
            que trabalho muito bem em equipe, nesse trabalho eu era responsável
            pelo atendimento ao público na recepção e na farmácia, organizava e
            realizava os pedidos de medicamentos e materiais de escritório, além
            de enviar dados e incluir guias de pacientes nos sistemas municipal
            e estadual de saúde, mas o principal <span>legado</span> foi a
            <span> família de amigos</span> que fiz, essa sem dúvida foi minha
            maior conquista nesses anos.
          </p>

          <div className={styles.iconsContact}>
            <a href="https://api.whatsapp.com/send/?phone=5515996641604&text&type=phone_number&app_absent=0">
              <FaWhatsapp />
            </a>
            <a href="https://github.com/JeffOliveiraDev">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/jeff4851/">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/jefferson-oliveira-24b075117/">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <CardsProjects />
      <CardsSkills />
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
