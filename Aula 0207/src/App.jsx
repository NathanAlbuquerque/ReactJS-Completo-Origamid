import React from "react";

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

// esta aqui foi a que tentei fazer por conta, deu o resultado pedido.
const AppNathan = () => {
  const dados = luana;
  const inativa = { color: "red" };
  const ativa = { color: "green" };
  function somar(valores) {
    let somatorio = 0;
    valores.forEach(valor => somatorio += Number(valor.preco.replace('R$ ', '')));
    return somatorio;
  }

  return (
    <div>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:{" "}
        <span style={dados.ativa ? ativa : inativa}>
          {dados.ativa ? "Ativa" : "Inativa"}
        </span>
      </p>
      <p>Total gasto: R$ {somar(dados.compras)}</p>
      <p style={somar(dados.compras) > 10000 ? {display: 'block'} : {display: 'none'}}>Você está gastado muito</p>
    </div>
  );
};

// Esta aqui foi a forma como o professor fez, ficou mais profissional.
const App = () => {
  const dados = mario;
  const total = dados.compras.map(compra => Number(compra.preco.replace('R$ ', ''))).reduce((a, b) => a + b)
  return (
    <>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>Situação <span style={{color: dados.ativa ? 'green' : 'red'}}>{dados.ativa ? 'ativa' : 'inativa'}</span></p>
      <p>Total gasto: R$ {total}</p>
      {total > 10000 && <p>Você está gastando muito</p>}
    </>
  )
}

export default App;
