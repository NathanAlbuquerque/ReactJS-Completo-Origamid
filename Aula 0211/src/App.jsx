import React from "react";
import { Children } from "react";
import Form from "./Form/Form";

// Assim como uma função pode receber argumentos, podemos também passar argumentos aos componentes. Esses são conhecidos como propriedades ou props.
const Titulo = (props) => {
  return <h1>{props.texto}</h1>;
};

// E a quantidade de propriedades pouco importa
const Subtitulo = (props) => {
  return <h3 style={{color: props.cor}}>{props.texto}</h3>
}

// É comum desestruturar as propriedades, mantém uma escrita limpa no componente
const Texto = ({texto, cor, ativo}) => {
  if (ativo)
    return <p style={{color: cor}}>{texto}</p>
  return null
}

// Se utilizarmos o componente abrindo e fechando o mesmo, o conteúdo interno deste será acessado através da propriedade children.
// Pode-se passar text, outros elementos e ser criativo.
const Tempo = (props) => {
  return <time datetime={props.children}>{props.children}</time>
}

// Usamos o rest e spread quando não sabemos todas as propriedades que um componente pode receber.
// Olhar o arquivo Form

const App = () => {
  return (
    <>
      <Titulo texto="Título om prorpiedade 1" />
      <Subtitulo texto="Subtítulo primeiro" cor="pink"/>
      <Titulo texto="Título om prorpiedade 2" />
      <Subtitulo texto="Subtítulo segundo" cor="grey"/>
      <Texto texto="Isto está ativo" cor="green" ativo={true} />
      <Texto texto="inativo" cor="red" ativo={false} />
      <Tempo>15/05/2017 09:46</Tempo>
      <Tempo><br/><strong>15/05/2017 09:46</strong></Tempo>
      <hr />
      <Form/>
    </>
  );
};

export default App;
