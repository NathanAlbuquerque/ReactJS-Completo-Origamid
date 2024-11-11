import React from "react";
import Propriedade from "./Propriedade";

const Produto = ({ produtos }) => {
  const estilos = {
    border: "solid 1px #000",
    padding: "15px",
    margin: "15px 0",
  };
  return produtos.map(({ nome, propriedades }) => (
    <div key={nome} style={estilos}>
      <p>{nome}</p>
      <Propriedade propriedades={propriedades} />
    </div>
  ));
};

export default Produto;
