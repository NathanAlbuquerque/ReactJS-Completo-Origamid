import React from 'react';
import Header from './Header';
import Home from './Home';
import Produtos from './Produtos';

// O modo que o professor resolveu foi mais simples que o meu, pelo visto estou evoluindo, graças a Deus!
const App = () => {
  const { pathname } = window.location;

  let Component;
  if (pathname === '/produtos') {
    Component = Produtos;
  } else {
    Component = Home;
  }

  return (
    <section>
      <Header />
      <Component />
    </section>
  );
};

export default App;
