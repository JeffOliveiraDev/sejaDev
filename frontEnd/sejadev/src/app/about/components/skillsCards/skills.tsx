import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import burguer from "../../../../assets/burguerkenzie.png";
import wavesBottom from "../../../../assets/layered-waves-haikei 6.svg";

const CardsSkills = () => {
  return (
    <div className={styles.boxSkills}>
      {/* <Image className={styles.waveSkills} src={wavesBottom} alt="" /> */}
      <div className={styles.insideBoxSkills}>
        {/* <h2>
          Minhas <span>Habilidades</span>
        </h2> */}
      </div>
    </div>
  );
};

export default CardsSkills;
