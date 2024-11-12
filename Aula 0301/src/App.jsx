import React from "react";

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

const App = () => {
  const [aparelho, setAparelho] = React.useState({});
  const [carregar, setCarregar] = React.useState(<p></p>)

  async function buscaAparelho({ target }) {
    setAparelho({});
    setCarregar(<p>Carregando...</p>)
    const response = await fetch(
      "https://ranekapi.origamid.dev/json/api/produto/" + target.innerText
    );
    const aparelho = await response.json();
    setCarregar(<p></p>)
    setAparelho(aparelho);
  }

  const buttonStyle = {
    margin: '0 5px'
  }

  return (
    <div>
      <button style={buttonStyle} onClick={buscaAparelho}>tablet</button>
      <button style={buttonStyle} onClick={buscaAparelho}>smartphone</button>
      <button style={buttonStyle} onClick={buscaAparelho}>notebook</button>
      {carregar}
      {JSON.stringify(aparelho) != "{}" && (
        <>
          <h1>{aparelho.nome}</h1>
          <p>R$ {aparelho.preco}</p>
          {aparelho.fotos.map(({ src }, i) => (
            <img key={i} src={src} />
          ))}
        </>
      )}
    </div>
  );
};

// A do professor saiu melhor, porém durante a explicação dele notei algumas melhorias que posso implementar nesta resolução dele.
import Produto from './Produto';

const AppProfessor = () => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick(event) {
    setCarregando(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    );
    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }

  return (
    <>
      <button onClick={handleClick}>smartphone</button>
      <button onClick={handleClick}>tablet</button>
      <button onClick={handleClick}>notebook</button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </>
  );
};

export default App;
