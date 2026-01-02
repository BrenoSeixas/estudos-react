import React from "react";

const Produtos = ({ dados }) => {
  return (
    <div>
      <h1>{dados.nome}</h1>
      <p> R$ {dados.preco}</p>
    </div>
  );
};

export default Produtos;
