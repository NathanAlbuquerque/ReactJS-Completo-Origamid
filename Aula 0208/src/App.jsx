import React from "react";

// Exercício:

// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
  {
    id: 1,
    nome: "Smartphone",
    preco: "R$ 2000",
    cores: ["#29d8d5", "#252a34", "#fc3766"],
  },
  {
    id: 2,
    nome: "Notebook",
    preco: "R$ 3000",
    cores: ["#ffd045", "#d4394b", "#f37c59"],
  },
  {
    id: 3,
    nome: "Tablet",
    preco: "R$ 1500",
    cores: ["#365069", "#47c1c8", "#f95786"],
  },
];

// Esta foi a maneira como eu fiz, desta vez resolvi bem melhor doque a atividade passada, se assemelhou também mais com a do professor
// Vacilei pq esqueci do atributo key, e podia na primeira camada não ter colocado o ul, e na segunda, trocar o Fragment por div
const App = () => {
  return (
    <section>
      <ul>
        {produtos.filter(({preco}) => Number(preco.replace('R$ ', '')) > 1500).map((produto) => {
          return (
            <>
              <h1>{produto.nome}</h1>
              <p>Preço: {produto.preco}</p>
              <ul>{produto.cores.map(cor => <li style={{backgroundColor: cor, color: '#fff'}}>{cor}</li>)}</ul>
            </>
          )
        })}
      </ul>
    </section>
  );
};

// Este foi o modo como o professor fez
const AppProfessor = () => {
  return (
    <section>
      {produtos
        .filter((produto) => Number(produto.preco.replace('R$ ', '')) > 1500)
        .map((produto) => (
          <div key={produto.id}>
            <h1>{produto.nome}</h1>
            <p>Preço: {produto.preco}</p>
            <ul>
              {produto.cores.map((cor) => (
                <li key={cor} style={{ backgroundColor: cor, color: 'white' }}>
                  {cor}
                </li>
              ))}
            </ul>
          </div>
        ))}
    </section>
  );
};

export default App;
