const item = document.querySelector('.item')
const item2 = document.querySelector('.item2')
const item3 = document.querySelector('.item3')
const item4 = document.querySelector('.item4')
const item5 = document.querySelector('.item5')
const item6 = document.querySelector('.item6')
const item7 = document.querySelector('.item7')
const item8 = document.querySelector('.item8')
const item9 = document.querySelector('.item9')
const item10 = document.querySelector('.item10')
const box1 = document.querySelector('.box1')

item.addEventListener('click', () => {
    let box = document.createElement('div')
    box.classList.add('klon')
    box1.appendChild(box)
    box.innerText = 'Клонируемый элемент 1'
    box.classList.add('p2')
})
item2.addEventListener('click', () => {
    let box = document.createElement('div')
    box.classList.add('klon')
    box1.appendChild(box)
    box.innerText = 'Клонируемый элемент 2'
    box.classList.add('p2')
})
item3.addEventListener('click', () => {
    let box = document.createElement('div')
    box.classList.add('klon')
    box1.appendChild(box)
    box.innerText = 'Клонируемый элемент 3'
    box.classList.add('p2')
})
item4.addEventListener('click', () => {
    let box = document.createElement('div')
    box.classList.add('klon')
    box1.appendChild(box)
    box.innerText = 'Клонируемый элемент 4'
    box.classList.add('p2')
})
item5.addEventListener('click', () => {
    let box = document.createElement('div')
    box.classList.add('klon')
    box1.appendChild(box)
    box.innerText = 'Клонируемый элемент 5'
    box.classList.add('p2')
})
item6.addEventListener('click', () => {
    let box = document.createElement('div')
    box.classList.add('klon')
    box1.appendChild(box)
    box.innerText = 'Клонируемый элемент 6'
    box.classList.add('p2')
})
item7.addEventListener('click', () => {
    let box = document.createElement('div')
    box.classList.add('klon')
    box1.appendChild(box)
    box.innerText = 'Клонируемый элемент 7'
    box.classList.add('p2')
})
item8.addEventListener('click', () => {
    let box = document.createElement('div')
    box.classList.add('klon')
    box1.appendChild(box)
    box.innerText = 'Клонируемый элемент 8'
    box.classList.add('p2')
})
item9.addEventListener('click', () => {
    let box = document.createElement('div')
    box.classList.add('klon')
    box1.appendChild(box)
    box.innerText = 'Клонируемый элемент 9'
    box.classList.add('p2')
})
item10.addEventListener('click', () => {
    let box = document.createElement('div')
    box.classList.add('klon')
    box1.appendChild(box)
    box.innerText = 'Клонируемый элемент 10'
    box.classList.add('p2')
})