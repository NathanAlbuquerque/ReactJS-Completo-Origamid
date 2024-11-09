import React from 'react'
import Input from './Input'


// Nota que estou passando uma propriedades além das que defini no Input, com isso ela entra no Spread é acrescentada ao final, com isso substtui alguma propriedade igual que ja esteja no elemento
const Form = () => {
  return (
    <div>
      <Input id="email" label="E-mail" required />
      <Input id="password" label="Senha" type="password" />
      <button>Entrar</button>
    </div>
  )
}

export default Form
