import React from "react";
import Produtos from "./Produtos";

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

const App = () => {
  const [produto, setProduto] = React.useState(null);

  async function handleClick(event) {
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    );
    const json = await response.json();
    setProduto(json);
  }

  return (
    <div>
      <h1>Preferência:{produto.nome} </h1>
      <button style={{ margin: "2px" }} onClick={handleClick}>
        notebook
      </button>
      <button style={{ margin: "2px" }} onClick={handleClick}>
        smartphone
      </button>
      {produto && <Produtos dados={produto} />}
    </div>
  );
};

export default App;
