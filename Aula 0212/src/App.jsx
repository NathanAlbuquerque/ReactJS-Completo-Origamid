import React from "react";
import Header from "./Header";
import Titulo from "./Titulo";
import Produto from "./Produto";

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)
const produtos = [
  { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
  { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
];

const App = () => {
  const { pathname } = window.location;
  const titulo = pathname == "/" ? "Home" : "Produtos";
  return (
    <section>
      <Header />
      <Titulo texto={titulo} />
      {titulo == "Home" && <p>Essa é a home do site</p>}
      {titulo == "Produtos" && <Produto produtos={produtos} />}
    </section>
  );
};

export default App;
