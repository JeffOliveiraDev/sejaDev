import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import burguer from "../../../../assets/burguerkenzie.png";
import TS from "../../../../assets/typescript.svg";
import JS from "../../../../assets/js.svg";
import react from "../../../../assets/react.svg";
import prisma from "../../../../assets/prisma.svg";
import nest from "../../../../assets/nestjs.svg";
import nodejs from "../../../../assets/nodejs.svg";
import git from "../../../../assets/git.svg";
import python from "../../../../assets/python.svg";
import postgre from "../../../../assets/postgreesql.svg";
import sass from "../../../../assets/sass.svg";
import figma from "../../../../assets/figma.svg";
import html from "../../../../assets/html5.svg";
import css from "../../../../assets/css.svg";
import canva from "../../../../assets/canva.svg";
import gpt from "../../../../assets/chatgpt.svg";
import radix from "../../../../assets/radix.svg";
import mui from "../../../../assets/mui.svg";
import github from "../../../../assets/github.svg";

const CardsSkills = () => {
  return (
    <div className={styles.boxSkills}>
      {/* <Image className={styles.waveSkills} src={wavesBottom} alt="" /> */}
      <div className={styles.insideBoxSkills}>
        <h2>
          Minhas <span>Habilidades</span>
        </h2>
        <h3>FrontEnd</h3>
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
              <p className={styles.textTitle}>HTML</p>
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
          <li className={styles.card}>
            <div className={styles.cardImage}>
              <Image src={radix} alt="RadixUI" />
            </div>
            <div className={styles.cardDescription}>
              <p className={styles.textTitle}>RadixUI</p>
            </div>
          </li>
          <li className={styles.card}>
            <div className={styles.cardImage}>
              <Image src={mui} alt="mui" />
            </div>
            <div className={styles.cardDescription}>
              <p className={styles.textTitle}>Mui</p>
            </div>
          </li>
        </ul>
        <h3>BackEnd</h3>
        <ul className={styles.boxCardsBack}>
          <li className={styles.card}>
            <div className={styles.cardImage}>
              <Image src={nest} alt="NestJS" />
            </div>
            <div className={styles.cardDescription}>
              <p className={styles.textTitle}>NestJS</p>
            </div>
          </li>
          <li className={styles.card}>
            <div className={styles.cardImage}>
              <Image src={postgre} alt="postgreSQL" />
            </div>
            <div className={styles.cardDescription}>
              <p className={styles.textTitle}>PostgreSQL</p>
            </div>
          </li>
          <li className={styles.card}>
            <div className={styles.cardImage}>
              <Image src={nodejs} alt="NodeJs" />
            </div>
            <div className={styles.cardDescription}>
              <p className={styles.textTitle}>NodeJS</p>
            </div>
          </li>
          <li className={styles.card}>
            <div className={styles.cardImage}>
              <Image src={prisma} alt="PrismaORM" />
            </div>
            <div className={styles.cardDescription}>
              <p className={styles.textTitle}>Prisma</p>
            </div>
          </li>
          <li className={styles.card}>
            <div className={styles.cardImage}>
              <Image src={python} alt="Python" />
            </div>
            <div className={styles.cardDescription}>
              <p className={styles.textTitle}>Python</p>
            </div>
          </li>
        </ul>
        <h3>Ferramentas</h3>
        <ul className={styles.boxCardsBack}>
          <li className={styles.card}>
            <div className={styles.cardImage}>
              <Image src={git} alt="Git" />
            </div>
            <div className={styles.cardDescription}>
              <p className={styles.textTitle}>Git</p>
            </div>
          </li>
          <li className={styles.card}>
            <div className={styles.cardImage}>
              <Image src={canva} alt="Canva" />
            </div>
            <div className={styles.cardDescription}>
              <p className={styles.textTitle}>Canva</p>
            </div>
          </li>
          <li className={styles.card}>
            <div className={styles.cardImage}>
              <Image src={figma} alt="Figma" />
            </div>
            <div className={styles.cardDescription}>
              <p className={styles.textTitle}>Figma</p>
            </div>
          </li>
          <li className={styles.card}>
            <div className={styles.cardImage}>
              <Image src={gpt} alt="ChatGPT" />
            </div>
            <div className={styles.cardDescription}>
              <p className={styles.textTitle}>ChatGPT</p>
            </div>
          </li>
          <li className={styles.card}>
            <div className={styles.cardImage}>
              <Image src={github} alt="GitHub" />
            </div>
            <div className={styles.cardDescription}>
              <p className={styles.textTitle}>GitHub</p>
            </div>
          </li>
        </ul>
        {/* <ul className={styles.listCards}>
          <li className={styles.card}>
            <Image src={burguer} alt="burguer" />
            <div className={styles.cardTextBtn}>
              <h3>Kenzie Burguer</h3>
              <p>
                Projeto da Kenzie Burguer, refeito com TypeScript e refatorado,
                esse projeto emula uma loja de hambúrgueres com página de
                cadastro e login, utilizando API.
              </p>
            </div>
            <button>Visitar</button>
          </li> */}
        {/* </ul> */}
      </div>
    </div>
  );
};

export default CardsSkills;
