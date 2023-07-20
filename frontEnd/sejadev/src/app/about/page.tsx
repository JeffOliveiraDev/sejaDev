import React from "react";
import styles from "./styles.module.scss";
import CardsProjects from "./components/cardProjects/cards";
import CardsSkills from "./components/skillsCards/skills";
import MoreAboutMe from "./components/aboutMe/aboutMe";
import Presentation from "./components/presentation/presentation";
import Footer from "@/components/Footer/footer";

const AboutMe = () => {
  return (
    <main className={styles.main}>
      <Presentation />
      <MoreAboutMe />
      <CardsProjects />
      <CardsSkills />
    </main>
  );
};

export default AboutMe;
