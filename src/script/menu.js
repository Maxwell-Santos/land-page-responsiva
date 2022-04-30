

const toggleMenu = document.querySelector('.menu img')

const aside = document.querySelector('header nav')
const bodyActive = document.querySelector('body')

toggleMenu.addEventListener('click', () => {

  aside.classList.toggle('active')
  bodyActive.classList.toggle('active')

  if(aside.classList == 'active'){
    toggleMenu.src = './src/images/icon-close-menu.svg'

  } else {
    toggleMenu.src = './src/images/icon-menu.svg'

  }
  
})

const subList = document.querySelectorAll('header nav ul .dropdown')
const subListTratade = Array.from(subList)

subListTratade.forEach((list) =>{
  
  list.addEventListener('click', () =>{
    list.classList.toggle('show')

  })
})