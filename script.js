
let name = prompt('Как вас зовут?')
alert('Здраствуйте, ' + name)


let secretNumber= Math/floor(Math.random() * 15) +1
let quess;
let attemps = 0;

while(quess != secretNumber){
quess = prompt('Угадай число от 1 до 15')
quess = Number(quess);
prompt('Угадай число от 1 до 15')


attemps++;

if(quess < secretNumber){
alert('Попробуй число побольше')
}else if(quess > secretNumber){
alert('Попробуй число поменьше')
}
}
alert('Молодец, вы угадали число!' + secretNumber + 'за' + attemps + 'попыток')


document.addEventListener('DOMContentLoaded', function () {
let box = document.getElementById('colorBox')
let redButton = document.getElementById('redBtn')
let greenbutton = document.getElementById('greenBtn')


redButton.addEventListener('click', function(){
    box1.style.backgroundColor = 'red'
})


console.log(greenbutton)
})
