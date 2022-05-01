

const toggleMenu = document.querySelector('.menu img') //pegando elemento img do html

const aside = document.querySelector('header nav')
const bodyActive = document.querySelector('body') //pegando a tag body
const button = document.querySelector('.learn-more') 

toggleMenu.addEventListener('click', () => { //quando clicar nesse elemento vai executar essa função

  bodyActive.classList.toggle('active') //add a classe 'active' ao body 
  check(aside.classList)

})

function check(classe) { //cada vez que clicar no menu, vai disparar essa função

  if (classe == '') {
    toggleMenu.src = './src/images/icon-close-menu.svg'
    classe.toggle('active') //adicionando a classe 'active' ao nav, no qual tem um estilo diferente do desktop    
    
    button.style.zIndex = '-1'

  } else if (classe == 'active') {

    classe.remove('active')

    toggleMenu.src = './src/images/icon-menu.svg' //img do menu padrão caso a classe 'active' não existir
    classe.toggle('noshow')

    button.style.zIndex = '1'

  } else if (classe == 'noshow') {

    classe.remove('noshow')

    toggleMenu.src = './src/images/icon-close-menu.svg' //img do menu padrão caso a classe 'active' não existir
    classe.toggle('active')
    
    button.style.zIndex = '-1'

  }
}


const subList = document.querySelectorAll('header nav ul .dropdown')
const subListTratade = Array.from(subList)

subListTratade.forEach((list) => {

  list.addEventListener('click', () => {
    list.classList.toggle('show')

  })
})