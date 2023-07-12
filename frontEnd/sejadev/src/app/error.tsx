"use client";
// página de erro só funciona do lado do cliente
import React, { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.error(error); // log no servidor para debugar o problema
  }, [error]);
  return (
    <>
      <h1>Erro!</h1>
      <button type="button" onClick={reset}>
        Tentar Novamente
      </button>
    </>
  );
};

export default Error;
