import { useState } from 'react'


// Se o resultado das expressões dentro das {} chaves retornado foir um valor booleanos, undefined ou null, nada na tela será exibido apartir dele
// Ja objetos retornarão erro
function App() {

  return (
    <>
      {titulo}
      <h1>Carregando</h1>
      <Textos />
      <AtributosHtml />
      {true}
      <Arcoiris/>
    </>
  )
}

// Funções Componente não podem retornar mais de um elemento por vez, sendo assim a solução e envolver o conteúdo retornado por uma div
// mas caso isso vá poluir meu DOM posso usar o ReactFragment, quepode ser escrito por extenso ou da forma resumida omo no exemplo abaixo
const Textos = () => {
  return (
    <>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo pariatur assumenda nam, dolor perferendis esse deserunt quis quos, perspiciatis, corporis quibusdam saepe eligendi ducimus beatae alias animi. Aperiam, explicabo illo.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo pariatur assumenda nam, dolor perferendis esse deserunt quis quos, perspiciatis, corporis quibusdam saepe eligendi ducimus beatae alias animi. Aperiam, explicabo illo.</p>
    </>
  )
}

// Os atributos HTML podem ser usados normalmente, com alguas simpels mudanças
// Usa-se o padrão camelCase, e por conta de palavras reservados o for torna-se htmlFor, e o class torna-se className
const AtributosHtml = () => {
  return (
    <div className='atributos'>
      <label htmlFor="nome">Nome</label>
      <input type="text" name='nome' id='nome' />
    </div>
  )
}

// Também posso atribuir JSX diretamente em uma constante ou variável, assim:
const titulo = <h1>Meu título</h1>

// Para mexer com styles, é necessário usar também o camelCase para nomeação, e os estilos devem ser guardados em objeto:
const Arcoiris = () => {
  const styles = {
    color: 'green',
    fontSize: '19px'
  }
  return (
    <>
      <p style={{color: 'red', fontSize: '19px'}}>Colorido1</p>
      <p style={styles}>Colorido2</p>
    </>
  )
}
export default App
