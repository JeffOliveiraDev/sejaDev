"use client";
import React from "react";

export const BtnTeste = () => {
  const btnTeste = () => {
    console.log("teste");
  };

  return <button onClick={btnTeste}>testeBtn</button>;
};
