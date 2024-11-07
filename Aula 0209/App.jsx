import React from "react";

// Podemos atribuir eventos diretamente aos elementos JSX como um atributo. Os eventos são sintáticos, ou seja, são criados pelo próprio React porém seguindo as especificações da W3C (e funcionam igualmente nos diversos browsers que o React suporta).
const App1 = () => {
  function handleClick(event) {
    alert('Comprou: ' + event.target.innerText);
  }

  return (
    <div>
      <button onClick={handleClick}>Camisa</button>
      <button onClick={handleClick}>Bermuda</button>
    </div>
  );
};

// Vide mais eventos React aqui: https://reactjs.org/docs/events.html

// É possível executar uma função anônima no evento.
const App2 = () => {
  return (
    <button onClick={({ target }) => target.classList.toggle('ativa')}>
      Ativar
    </button>
  );
};

// Eventos no window/document ou qualquer elemento fora do React, devem ser adicionados com JavaScript normalmente, usando o addEventListener.
// Posteriormente faremos esse tipo de evento com o hook useEffect.
const App3 = () => {
  function handleScroll(event) {
    console.log(event);
  }
  window.addEventListener('scroll', handleScroll);

  return <div style={{ height: '200vw' }}>Div</div>;
};

const App = () => {
  return (<><App1/><App2/><App3/></>);
};

export default App;