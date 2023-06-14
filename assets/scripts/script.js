let userName = prompt("Как вас зовут?");
    alert(`Добро пожаловать, ${userName}`);

let age = Number(prompt('Сколько тебе лет?',101));

switch(age) {
    case 18:
        alert('Вы совершеннолетний, всё можно!');
        break;
    case 10:
        alert('Вам надо учить уроки!');
        break;
    case 30:
        alert('Ложитесь спать, завтра на работу');
        break;
    default:
        alert('Мы не знаем что Вам делать');
}

let count=0;

function chanchedColor(){
    let box = document.getElementsByClassName('block');
    let element = box[0];
    if(count % 2==0){
    element.classList.add('activeBox');
    }
    else{
    element.classList.remove('activeBox');
    }
    count++;
}

let bt = document.getElementById('bt');
bt.addEventListener('click',chanchedColor);

const changeColor = e => e.style.color ? e.style.color = '' : e.style.color = 'red';
