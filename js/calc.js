let firstNumber = document.querySelector('#first_number');
let secondNumber = document.querySelector('#second_number');
let action = document.querySelector('select');
let button = document.querySelector('button');
let result = document.querySelector('.result');
let form = document.querySelector('form');

function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

const matematika = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
};

function skaiciuotuvas (){
    const skaicius1 = Number(firstNumber.value);
    const skaicius2 = Number(secondNumber.value);
    const veiksmas = action.value;
    const rezultatas = matematika[veiksmas](skaicius1, skaicius2);
    let rezultatoStringas = `${skaicius1} ${veiksmas} ${skaicius2} = ${rezultatas}`;
    result.textContent = rezultatoStringas;
}

button.addEventListener('click', skaiciuotuvas);