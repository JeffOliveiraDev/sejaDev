"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import burguer from "../../../../assets/burguerkenzie.png";
import wavesBottom from "../../../../assets/wave-haikei8.svg";

const CardsProjects = () => {
  const dataLanguages = ["HTML", "CSS", "JAVASCRIPT"];
  const projectsRef = useRef(null);
  const [observed, setObserved] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setObserved(true);
        }
      });
    }, options);

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, [observed]);

  return (
    <div id="projects" className={styles.projects}>
      <div className={styles.insideProjects}>
        <h2 ref={projectsRef}>
          Meus <span>Projetos</span>
        </h2>
        <div
          className={observed === true ? styles.boxBtnsWorks : styles.boxHidden}
        >
          <button>Todos</button>
          {dataLanguages?.map((lang) => {
            return <button key={lang}>{lang}</button>;
          })}
        </div>
        <ul className={observed === true ? styles.listCards : styles.boxHidden}>
          <li className={observed === true ? styles.card : styles.boxHidden}>
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
