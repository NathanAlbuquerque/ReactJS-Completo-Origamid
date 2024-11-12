import React from "react";

// O estado de uma aplicação representa as caracteristicas dela naquele momento. Exemplo: Os dados do pedido foram carregados, o botão está ativo, o usuário está na página de contato.
const ExemploEstado = () => {
  const ativo = true;
  return (
    <button disabled={!ativo}>
      {ativo ? "Botão ativo" : "Botão desativo"}
    </button>
  );
};

// Os Hooks são funções especiais que permitem controlarmos o estado e o ciclo de vida de componentes funcionais. Isso antes só era possível com classes
const ExemploHook = () => {
  const [ativo, setAtivo] = React.useState(true);
  return (
    <button onClick={() => setAtivo(!ativo)}>
      {ativo ? "Botão ativo" : "Botão desativo"}
    </button>
  );
};

// O useState é uma função que retorna umaa Array com 2 valores. O primeiro valor guarda o dado do estado atual, pode ser qualquer tipo de dado como strings, arrays, números, boolean, null, undefined e objetos. O segundo valor é uma função que pode ser utilizada para modificarmos o estado do primeiro valor.
// Quando a função de modificação do estado é ativada, todos os compoenntes que dependerem do estado, serão renderizados novamente e seus filhos também. É isso que garante a reatividade de componentes funcionais no React.

// Não existe limites para o uso do useState, podemos definir diversos no mesmo componente.
// Posso passar o estado e a funçaõ de modificação com propriedades para outros elementos.

// Não modifique o estado diretamente. Utilize sempre a função de atualização do estado, pois ela que garante a reatividade dos componentes.
const ExemploReatividade = () => {
  const [items, setItems] = React.useState(["Item 1", "Item 2"]);
  function handleClick() {
    items.push("Novo item (não reativo)");
  }
  function handleClickReativo() {
    setItems([...items, "Novo item (reativo)"]);
  }
  return (
    <>
      <u>
        {items.map((item, i) => (
          <li key={item + i}>{item}</li>
        ))}
      </u>
      <br />
      <button onClick={handleClick}>Modificação direta</button>
      <br />
      <br />
      <button onClick={handleClickReativo}>Modificação via função</button>
    </>
  );
};

// Posso passar uma função de callback para atualizar o estado. A função de callback recebe um parâmetro que representa o valor anterior e irá modificar o estado para o valor que for retornado pela função.
const ExemploCallback1 = () => {
  const [ativo, setAtivo] = React.useState(true);
  function handleClick() {
    setAtivo((anterior) => !anterior);
  }
  return <button onClick={handleClick}>{ativo ? "Ativo" : "Desativo"}</button>;
};

// Também posso usar um callback para definir o valor inicial do estado
const ExemploCallback2 = () => {
  const [ativo, setAtivo] = React.useState(() => true);
  function handleClick() {
    setAtivo(!ativo);
  }
  return <button onClick={handleClick}>{ativo ? "Ativo" : "Desativo"}</button>;
};

// O modo estrito invoca duas vezes a renderização do componente, quando o estado é atualizado, isso apenas durante o modo de desenvolvimento. Assim é possível identificar com maior facilidade funções com efeitos colaterais (side edfects) para eliminar.
// Funções com efeitos colaterais são aquelas que modificam estados que estão fora delas mesmas, exemplo, um useAtivo editando um items.
const ExemploEfeitoColateral = () => {
  const [contador, setContador] = React.useState(2);
  const [items, setItems] = React.useState(["Item 1", "Item 2"]);
  function handleClick() {
    setContador((contador) => {
      setItems((items) => [...items, "Item " + (contador + 1)]);
      return contador + 1;
    });
    // Tirar dentro do setContador irá consertar o errp
    // setItems((items) => [...items, "Item " + (contador + 1)]);
  }
  return (
    <>
      <ul>
        {items.map((item, i) => (
          <li key={item + i}>{item}</li>
        ))}
      </ul>
      <button onClick={handleClick}>{contador}</button>
    </>
  );
};

const App = () => {
  return (
    <section>
      <h4>Exemplo Estado:</h4>
      <p>
        O estado de uma aplicação representa as caracteristicas dela naquele
        momento. Exemplo: Os dados do pedido foram carregados, o botão está
        ativo, o usuário está na página de contato.
      </p>
      <ExemploEstado />
      <hr />
      <h4>Exemplo Hook:</h4>
      <p>
        Os Hooks são funções especiais que permitem controlarmos o estado e o
        ciclo de vida de componentes funcionais. Isso antes só era possível com
        classes
      </p>
      <ExemploHook />
      <hr />
      <h4>Exemplo Reatividade:</h4>
      <ExemploReatividade />
      <hr />
      <h4>Exemplo Callback 1:</h4>
      <ExemploCallback1 />
      <hr />
      <h4>Exemplo Callback 2:</h4>
      <ExemploCallback2 />
      <hr />
      <h4>Exemplo Efeito Colateral:</h4>
      <ExemploEfeitoColateral />
    </section>
  );
};

export default App;
