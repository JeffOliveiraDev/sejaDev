import React from "react";

import Image from "next/image";
import styles from "./styles.module.scss";
import html from "../../../assets/html5.svg";
import { FcAbout, FcInfo, FcViewDetails } from "react-icons/fc";

const InsideBoxInfo = () => {
  return (
    <div className={styles.insideBoxInfo}>
      <div className={styles.aboutTitle}>
        <Image src={html} alt="html"></Image>
        <h2>HTML</h2>
      </div>
      <div className={styles.about}>
        <FcInfo />
        <h3>Tipo:</h3>
      </div>
      <div className={styles.about}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          impedit pariatur ducimus quibusdam neque soluta porro libero explicabo
          suscipit iusto dolor corrupti, consequatur beatae odio temporibus
          rerum magni! Perspiciatis, minus!
        </p>
      </div>

      <div className={styles.about}>
        <FcViewDetails />
        <h3>Descrição:</h3>
      </div>
      <div className={styles.about}>
        {/* <FcAbout /> */}
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          impedit pariatur ducimus quibusdam neque soluta porro libero explicabo
          suscipit iusto dolor corrupti, consequatur beatae odio temporibus
          rerum magni! Perspiciatis, minus!
        </p>
      </div>
      <div className={styles.btnsAbout}>
        <a
          target="_blank"
          href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
        >
          <button>Documentação</button>
        </a>

        <button>Canal Recomendado</button>
      </div>
    </div>
  );
};

export default InsideBoxInfo;
