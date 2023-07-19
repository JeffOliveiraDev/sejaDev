import React from "react";
import styles from "./styles.module.scss";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import imgEstudo from "../../../../assets/formation.svg";
import Image from "next/image";

const MoreAboutMe = () => {
  return (
    <div className={styles.moreAboutMe}>
      <div className={styles.insideMoreAboutMe}>
        <div className={styles.imgInsideMoreAboutMe}>
          <Image src={imgEstudo} alt="" />
        </div>
        <div>
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
            <a href="https://www.instagram.com/jeff_odev/">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/jefferson-oliveira-24b075117/">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreAboutMe;
