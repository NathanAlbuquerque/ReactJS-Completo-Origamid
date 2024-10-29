// Importante ao iniciar este curso ja ter completado o curso de JS completo da Origamid (Estou fazendo ele em conjunto a este)



/* *** TUDO É OBJETO *** */
// Primeiramente, tudo em JS é objeto. Os objetos possuem propriedades e métodos que podem ser diretos ou herdados (protótipos)

// Exemplo 1:
const menu = { // Aqui temos nosso objeto literal, que é uma maneira de criar um objeto de forma direta e simples usando uma notação com chaves ({}) e pares de chave-valor. Ele é chamado de "literal" porque o objeto é definido explicitamente no código, em vez de ser instanciado através de uma função construtora.
  selector: '.principal',
  active() {
    const menuElement = document.querySelector(this.selector);
    menuElement.classList.add('active');
  },
};
console.log(menu, typeof menu); // Meu objeto
console.log(menu.selector, typeof menu.selector); // Propriedade
menu.active(); // Método
menu.hasOwnProperty('class'); // Método herdado

// Exemplo 2:
['10', '20', '30'].map(Number); // ['10', '20', '30']
'JavaScript'.toUpperCase // JAVASCRIPT

// Todo objeto possui um protótipo, menos o null e o undefined (este não é um objeto).



/* *** ARROW FUNCTION *** */
// A principal diferença da Arraw Function para uma função convencional é que ela não cria o próprio this, usa o do pai.
// Além também de ter uma escrita mais compacta.

const upperName1 = function  (name) {
  return name.toUpperCase();
}; // Convencional

const upperName2 = (name) => {
  return name.toUpperCase();
} // Arrow function

const upperName3 = name => name.toUpperCase(); // Resumida quando contém apenas uma linha de execução



/* *** DESESTRUTURAÇÃO *** */
// É possível desestruturar objetos e arrays, objetos usa-se as chaves "{}", os arrays usa-se os colchetes "[]".

function handleMouse1(event) {
  const clientX = event.clientX;
  const clientY = event.clientY;
  console.log('Método1:', clientX, clientY);
}

// Irá definir uma constante para cada propriedade
// dentro de event, que tiver o mesmo nome que a constante.
function handleMouse2(event) {
  const {clientX, clientY} = event;
  console.log('Método2:', clientX, clientY);
}

// Aqui irá desestruturar diretamente ns parametros
function handleMouse3({clientX, clientY}) {
  console.log('Método3:', clientX, clientY);
}

document.addEventListener('click', handleMouse1);
document.addEventListener('click', handleMouse2);
document.addEventListener('click', handleMouse3);



/* *** REST E SPREAD *** */

// Rest:
function showList(empresa, ...clients) {
  clients.forEach((client) => {
    console.log(client, empresa);
  });
}
showList('Google', 'André', 'Pedro', 'João');

// Spread Arrays:
const numeros = [1, 4, 9, 2, 3, 6, 20];
Math.max(...numeros); // retorna 20

// Spread, transformar ArrayLike and Array
const items = document.querySelectorAll('li');
[...items].map((item) => (item.innerText = 'Teste'));

// Spread em objetos
const carro = {
  cor: 'azul',
  portas: 4,
  ano: 2020,
};
const cloneCarro = { ...carro };
const carroEsportivo = { turbo: true, ...carro };
