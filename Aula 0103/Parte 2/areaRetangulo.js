function areaRetangulo(l1, l2) {
  return l1 * l2;
}

function perimetroRetangulo(l1, l2) {
  return 2 * (l1 + l2);
}

const retangulo = {
  areaRetangulo,
  perimetroRetangulo
}

// Neste modelo eu crio um objeto com as funções e/ou atributos deste arquivo e exporto apenas este objeto criado.
// Como contém apenas um item a ser exportado, usa-se o "export default", neste modelo não realiza-se a desestruturação na importação.
// O mesmo valeria para caso houvesse apenas um função, eu aplicaria o expor default diretamente nela.
export default retangulo;