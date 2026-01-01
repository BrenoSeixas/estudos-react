import React from "react";

const Produtos = ({ dados }) => {
  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco},00</p>
      <img src={dados.fotos[0].src} alt={dados.fotos[0].src} />
    </div>
  );
};

export default Produtos;
