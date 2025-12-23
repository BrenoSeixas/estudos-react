import React from "react";
import Input from "./Input";
import Button from "./Button";

const Form = () => {
  return (
    <div>
      <Input id="email" label="Email" required />
      <Input id="senha" type="password" label="Senha" />
      <Button />
    </div>
  );
};

export default Form;
