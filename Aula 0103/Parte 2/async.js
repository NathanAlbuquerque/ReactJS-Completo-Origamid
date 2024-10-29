// Formato mais atual de se fazer aquilo realizado pelo fetch
// Ao inves de ficar usando aqueles monte de then encadeados, usamos um await naquilo que retorna uma promisse.
// E ao inicio da função deve-se indicar que se trata de uma função assíncrona.
async function getDucks() {
  const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=30');
  const ducks = await response.json();

  const gallery = document.querySelector('.gallery');
  document.querySelector('button.more').classList.remove('hide');

  ducks.forEach(duck => {
    const imageBox = document.createElement('div');
    imageBox.classList.add('image-box');
    const image = document.createElement('img');
    image.src = duck['url'];
    image.style.width = '100%';
    imageBox.appendChild(image);
    gallery.appendChild(imageBox);
  });
  
}
