// Somente o fetch não exibe os resultads, mas realiza sim a consulta, é possível verificar na aba network da página.
// Necessário usar o then, um negócio de callback que ainda tenho que aprender melhor, mas fiz esse aqui meio que na raça e deu certo.
// Dentro de cada then tem uma Arrow function que recupera um valor da execução anterior, com isso eu recupero o valor do fetch e transformo em json, então eu recupero este json e envio para minha função de exibição.
fetch('https://api.thecatapi.com/v1/images/search?limit=30')
  .then(response => response.json())
  .then(cats => chargeImages(cats));

const gallery = document.querySelector('.gallery');

function chargeImages(cats) {
  cats.forEach(cat => {
    const image = document.createElement('img');
    image.src = cat['url'];
    gallery.appendChild(image);
  });
}