const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const itens = document.querySelectorAll('.item')
const dots = document.querySelectorAll('.dot')
const numberIndicators = document.querySelector('.numbers')
const list = document.querySelector('.list')

let active = 0;
const total = itens.length
let timer;


function update(direction) {

    document.querySelector('.item.active').classList.remove('active')
    document.querySelector('.dot.active').classList.remove('active')


    if (direction > 0) {
        active = active + 1

        if (active === total) {
            active = 0
        }
    }

    else if (direction < 0) {
        active = active - 1

        if (active < 0) {
            active = total - 1
        }
    }

    itens[active].classList.add('active')
    dots[active].classList.add('active')

    numberIndicators.textContent = String(active + 1).padStart(2,'0') // padstart add na frente 2, indica 2 caracteres - textcontent trocar texto
}

clearInterval(timer)  // para passar automatico
timer = setInterval(() => {
    update(1)
}, 5000); // intervalo de 5segundos


prevButton.addEventListener('click', () => {
    update(-1)
})

nextButton.addEventListener('click', () => {
    update(1)
})