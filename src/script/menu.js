

const toggleMenu = document.querySelector('.menu img') //pegando elemento img do html

const aside = document.querySelector('header nav')
const bodyActive = document.querySelector('body') //pegando a tag body

toggleMenu.addEventListener('click', () => { //quando clicar nesse elemento vai executar essa função

  aside.classList.toggle('active') //adicionando a classe 'active' ao nav, no qual tem um estilo diferente do desktop
  bodyActive.classList.toggle('active') //add a classe 'active' ao body 

  if(aside.classList == 'active'){ //se a classe 'active' existir quando clicar no menu, vai mostrar a img de close
    toggleMenu.src = './src/images/icon-close-menu.svg'

  } else {
    toggleMenu.src = './src/images/icon-menu.svg' //img do menu padrão caso a classe 'active' não existir

  }
  
})

const subList = document.querySelectorAll('header nav ul .dropdown')
const subListTratade = Array.from(subList)

subListTratade.forEach((list) =>{
  
  list.addEventListener('click', () =>{
    list.classList.toggle('show')

  })
})