// Приветствие
let name = prompt('Как вас зовут?')
alert('Здравствуйте, ' + name)

// Игра "Угадай число"
let secretNumber = Math.floor(Math.random() * 15) + 1
let guess
let attempts = 0

while (guess !== secretNumber) {
guess = Number(prompt('Угадай число от 1 до 15'))
attempts++

if (guess < secretNumber) {
alert('Попробуй число побольше')
} else if (guess > secretNumber) {
alert('Попробуй число поменьше')
}
}

alert('Молодец! Ты угадал число ' + secretNumber + ' за ' + attempts + ' попыток')

// Переключение темы
document.addEventListener('DOMContentLoaded', function () {
let darkBtn = document.getElementById('darkBtn')
let lightBtn = document.getElementById('lightBtn')

darkBtn.addEventListener('click', function () {
document.body.classList.add('dark-theme')
})

lightBtn.addEventListener('click', function () {
document.body.classList.remove('dark-theme')
})
})
