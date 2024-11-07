import React from "react";

// Diferentemente de objetos, os arrays podem ser retornados diretamente no DOM, os quais são inseridos em sequência.
const Array1 = () => {
  const produtos = ['Macbook', 'Iphone'];
  return <p>{produtos}</p>;
}

// Posso também retornar elementos HTML diretamente, porém nesse caso de lista o React me obriga a inserir um valor de key único para cada elemento.
// Esta key serve para otimização e o React conseguir identificar os elementos do array, e quando for adicionar ou remover algum não ser necessário recarregar o array inteiro.
const Array2 = () => {
  const produtos = [<li key='p1'>Macbook</li>, <li key='p2'>Iphone</li>];
  return <ul>{produtos}</ul>;
}

// Ja para objetos eu preciso transformar em array
const Obj1 = () => {
  const livros = [
    { nome: 'A Game of Thrones', ano: 1996 },
    { nome: 'A Clash of Kings', ano: 1998 },
    { nome: 'A Storm of Swords', ano: 2000 },
  ];
  // Usei  filter para pegar apenas os livros lançados após 1997.
  // Usei o map para transformar o objeto para o modelo que eu desejo exibir. Em lista.
  return <ul>{livros.filter(({ano}) => ano > 1997).map(({nome, ano}) => <li key={nome}>{nome}, {ano}</li>)}</ul>
}

const App = () => {
  return (
    <>
      <h3>Array 1:</h3>
      <Array1/>
      <hr />
      <h3>Array 2:</h3>
      <Array2/>
      <hr />
      <h3>Objeto 1:</h3>
      <Obj1/>
    </>
  )
}

export default App;
