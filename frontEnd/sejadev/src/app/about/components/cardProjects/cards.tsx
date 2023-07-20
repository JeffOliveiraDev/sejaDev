"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import wavesBottom from "../../../../assets/wave-haikei8.svg";
import { myProjects } from "./components/myProjects";

interface ProjectInterface {
  name: string;
  description: string;
  link: string;
  image: string;
  linguagem: string;
}

const CardsProjects = () => {
  
  const projectsRef = useRef(null);
  const [observed, setObserved] = useState(false);
  const [selectedProjects, setDelectedProjects] = useState("Todos");

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

  const filteredProjects =
    selectedProjects === "Todos"
      ? myProjects
      : myProjects.filter((project) => project.linguagem === selectedProjects);

  const uniqueLanguages = myProjects.reduce<string[]>((acc, project) => {
    if (!acc.includes(project.linguagem)) {
      acc.push(project.linguagem);
    }
    return acc;
  }, []);

  return (
    <div id="projects" className={styles.projects}>
      <div className={styles.insideProjects}>
        <h2 ref={projectsRef}>
          Meus <span>Projetos</span>
        </h2>
        <div
          className={observed === true ? styles.boxBtnsWorks : styles.boxHidden}
        >
          <button onClick={() => setDelectedProjects("Todos")}>Todos</button>
          {uniqueLanguages?.map((lang) => {
            return (
              <button onClick={() => setDelectedProjects(lang)} key={lang}>
                {lang}
              </button>
            );
          })}
        </div>
        <ul className={observed === true ? styles.listCards : styles.boxHidden}>
          {filteredProjects.map((project) => {
            return (
              <li
                key={project.name}
                className={observed === true ? styles.card : styles.boxHidden}
              >
                <Image
                  src={project.image}
                  alt="burguer"
                  width={200}
                  height={200}
                />
                <div className={styles.cardTextBtn}>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
                <a href={project.link} target="_blank">
                  <button>Visitar</button>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <Image className={styles.wave} src={wavesBottom} alt="" />
    </div>
  );
};

export default CardsProjects;
