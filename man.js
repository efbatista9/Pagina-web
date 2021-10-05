//abre e fecha o menu quando clicar icone
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
console.log(toggle)

for (const element of toggle) {
element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

/*quando clecar em um item do menu esonde o menu-*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}

/*--mudar o header da pagina no scroll--*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight 

window.addEventListener('scroll', function() {
    if (window.scrollY >= navHeight) {
        //maior que a altura  do header
        header.classList.add('scroll')
    } else {
        //menor que a altura do header
        header.classList.remove('scroll')
    }
})