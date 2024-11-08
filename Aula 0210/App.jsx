import React from 'react';
import Header from './Header';
import Footer from './Footer';

// Um componente deve sempre retornar algo. O retorno pode ser qualquer tipo de dado aceitado pelo JSX (string, array, um elemento JSX, null e etc).
const Teste = () => {
  const active = true;
  if (active) {
    return <p>Ativo</p>;
  } else {
    return null;
  }
};

const App = () => {
  return (
    <div>
      <Header />
      <Teste/>
      <p>Esse é o meu aplicativo</p>
      <Footer />
    </div>
  );
};

export default App;
