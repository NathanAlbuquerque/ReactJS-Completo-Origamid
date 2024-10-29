const precos = [
  'Crédito',
  'R$ 200',
  'R$ 400',
  'Contas a Pagar',
  'R$ 300',
  'R$ 400',
  'Meus dados',
];

const precosFiltrados = precos.filter(preco => {
  // Esta função Filter aguarda que eu retorne um valor bool, se for false ele removerá o elemento do arrray
  // Não é possível editar
  return preco.includes('R$');
});
// console.log(precosFiltrados);

// Resumindo ela temos:
const precosFiltrados2 = precos.filter(preco => preco.includes('R$'));
console.log(precosFiltrados2);

// Agora para editar os dados ao invés de filtralos usamos o Map
const precosMapeados = precosFiltrados.map(p => Number(p.replace('R$ ', '')));
console.log(precosMapeados);


// EXPRESSOES, segundo o prfessor irei usar bastante isso no React

const grupoA = 100;
const grupoB = 300;
const vencedor = grupoA > grupoB ? 'Grupo A Venceu' : 'Grupo B Venceu';

const numeros = [2, 3, 4, 5, 6];
const total = numeros.filter((numero) => numero > 4);

const active = true;
const button = active && 'Botão está ativo';