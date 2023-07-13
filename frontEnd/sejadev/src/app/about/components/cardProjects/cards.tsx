import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import burguer from "../../../../assets/burguerkenzie.png";
import wavesBottom from "../../../../assets/wave-haikei8.svg";
const CardsProjects = () => {
  const dataLanguages = ["HTML", "CSS", "JAVASCRIPT"];
  return (
    <div className={styles.projects}>
      <div className={styles.insideProjects}>
        <h2>
          Meus <span>Projetos</span>
        </h2>
        <div className={styles.boxBtnsWorks}>
          <button>Todos</button>
          {dataLanguages?.map((lang) => {
            return <button key={lang}>{lang}</button>;
          })}
        </div>
        <ul className={styles.listCards}>
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
          </li>
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
          </li>
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
          </li>
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
          </li>
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
          </li>
        </ul>
      </div>
      <Image className={styles.wave} src={wavesBottom} alt="" />
    </div>
  );
};

export default CardsProjects;
