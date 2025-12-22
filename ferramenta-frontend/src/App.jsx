import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form/form";

const Teste = () => {
  const active = false;
  if (active) {
    return <p>Teste</p>;
  } else {
    return null;
  }
};

const App = () => {
  return (
    <React.Fragment>
      <Teste />
      <Header />
      <Form />
      <Footer />
    </React.Fragment>
  );

  // return <button onClick={(event) => console.log(event.target)}>Clique</button>;
};

export default App;
