import React from "react";

const Propriedade = ({ propriedades }) => {
  return (
    <ul>
      {propriedades.map((propriedade) => (
      <li key={propriedade}>{propriedade}</li>
      ))}
    </ul>
  );
};

export default Propriedade;
