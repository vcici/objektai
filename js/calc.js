const bodyDOM = document.querySelector('body');
const formDOM = bodyDOM.querySelector('form');
const firstNumber = formDOM.querySelector('#first_number');
const secondNumber = formDOM.querySelector('#second_number');
const action = formDOM.querySelector('select');
const button = formDOM.querySelector('button');
const result = bodyDOM.querySelector('.result');

const matematika = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
};

function skaiciuotuvas (evt){
    evt.preventDefault();
    const skaicius1 = +firstNumber.value;
    const skaicius2 = +secondNumber.value;
    const veiksmas = action.value;
    const rezultatas = matematika[veiksmas](skaicius1, skaicius2);
    const rezultatoStringas = `${skaicius1} ${veiksmas} ${skaicius2} = ${rezultatas}`;
    result.textContent = rezultatoStringas;
}

button.addEventListener('click', skaiciuotuvas);