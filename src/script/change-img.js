

let targetWindow = window.screen.width; //nessa variável, ta sendo armazenado o valor da largura da tela que retorna um número

const img = document.querySelector('.hero-content img') //selecionei a img dentro de .hero-content, porque é ela que vou manipular

if (targetWindow <= 950) { //se a largura da tela for menor ou igual a 950 (como essa variável retorna um number, a operação relacional tem que ser feita com number), o que eu peguei aqui é o 950 pixels da tela

  img.src = './src/images/image-hero-mobile.png' //troca o src da img 

} else {
  //precisei fazer um else, porque quando trocava uma vez, e aumentasse de novo a tela no devtools do chrome, a img mantinha, porém eu quero algo 'dinâmico'
  img.src = './src/images/image-hero-desktop.png' //troca o src da img

}
