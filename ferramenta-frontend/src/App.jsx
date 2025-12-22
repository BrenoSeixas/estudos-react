import React from "react";

//const titulo = <h1>Esse é um título</h1>;

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const App = () => {
  const dados = mario;

  const total = dados.compras
    .map((item) => +item.preco.replace("R$ ", ""))
    .reduce((a, b) => a + b);

  return (
    <div>
      <p>Nome: {dados.cliente}</p>
      <p>Nome: {dados.idade}</p>
      <p>
        Situação:{" "}
        <span style={{ color: dados.ativa ? "green" : "red" }}>
          {" "}
          {dados.ativa ? "Ativa" : "Inativa"}
        </span>
      </p>
      <p>Total: R$ {total}</p>
      {total > 10000 && <p>Você está gastando muito!</p>}
    </div>
  );
};

export default App;

//   const random = Math.random();
//   const ativo = true;

//   const teste = (sobrenome) => {
//     return "Breno" + sobrenome;
//   };

//   const Carro = {
//     marca: "honda",
//     rodas: "4",
//   };

// const estiloP={
//   color: 'blue',
//   fontSize: '2rem',
// }

//   return (
//     <>
//       {titulo}
//       <p>
//         {true ? "sim" : "não"} - {10}
//       </p>
//       {teste(" Seixas")}
//       <p>{Carro.marca}</p>
//       <p>{Carro.rodas}</p>
//       <p style={estiloP}>{new Date().getFullYear()}</p>
//       <p className={ativo ? "ativo" : "inativo"}>{(random * 1000) / 50}</p>
//     </>
//   );
