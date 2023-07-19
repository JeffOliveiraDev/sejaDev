"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { PersonIcon, HamburgerMenuIcon, HomeIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const Header = () => {
  const [openCloseMenu, setOpenCloseMenu] = useState(false);

  return (
    <nav
      className={
        openCloseMenu ? styles.menuLateralOpen : styles.menuLateralClosed
      }
    >
      <div className={styles.expandirMenu}>
        <HamburgerMenuIcon onClick={() => setOpenCloseMenu(!openCloseMenu)} />
      </div>
      <ul>
        <li className={styles.itemMenu}>
          <Link href="/">
            <span className={styles.iconMenu}>
              <HomeIcon />
            </span>
            <span className={styles.linkMenu}>Home</span>
          </Link>
        </li>
        <li className={styles.itemMenu}>
          <Link href="/about">
            <span className={styles.iconMenu}>
              <PersonIcon />
            </span>
            <span className={styles.linkMenu}>Sobre</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
