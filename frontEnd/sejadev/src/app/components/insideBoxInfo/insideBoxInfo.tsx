"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import html from "../../../assets/html5.svg";
import { FcAbout, FcInfo, FcViewDetails } from "react-icons/fc";
import { Context } from "@/context/itemsContext";
import Loading from "@/app/loading";

const InsideBoxInfo = () => {
  const { items, selectedItem, setSelectedItem, loading } = useContext(Context);

  const itemToRender = items.find(
    (item: { name: string }) => item.name === selectedItem
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={styles.insideBoxInfo}>
      <div className={styles.aboutTitle}>
        <h2>{itemToRender ? itemToRender.name : null}</h2>
      </div>
      <div className={styles.about}>
        <FcInfo />
        <h3>Tipo: {itemToRender ? itemToRender.type : null}</h3>
      </div>
      <div className={styles.about}>
        {/* <p>{itemToRender.description}</p> */}
      </div>

      <div className={styles.about}>
        <FcViewDetails />
        <h3>Descrição:</h3>
      </div>
      <div className={styles.about}>
        {/* <FcAbout /> */}
        <p>{itemToRender ? itemToRender.description : null}</p>
      </div>
      <div className={styles.btnsAbout}>
        <a
          target="_blank"
          href={itemToRender ? itemToRender.documentation : null}
        >
          <button>Documentação</button>
        </a>
        <a target="_blank" href={itemToRender ? itemToRender.video : null}>
          <button>Canal Recomendado</button>
        </a>
      </div>
    </div>
  );
};

export default InsideBoxInfo;
