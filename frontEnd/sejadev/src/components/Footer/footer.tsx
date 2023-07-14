import React from "react";
import styles from "./styles.module.scss";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.boxFooter}>
      <div className={styles.insideFooterDivision}></div>
      <div className={styles.insideFooter}>
        <div className={styles.insideFooterLeft}>
          <h2>
            seja<span>Dev</span>
          </h2>
          <h4>@ 2023 JeffDev</h4>
        </div>
        <div className={styles.insideFooterCenter}>
          <h4>Entre em contato:</h4>
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
        <div className={styles.insideFooterRight}>
          <a href="#top">^</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
