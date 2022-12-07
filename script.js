//catch the mass in kilograms and store it
//catch the height in meters and store it
//Divide the weight by the square of the height when entered


const heightInput = document.querySelector('#height');
const massInput = document.querySelector('#mass');
const para = document.querySelector('#result');
const btn = document.querySelector('button');

function checkbmi() {
    const heightNumber = Number(heightInput.value);
    const massNumber = Number(massInput.value);
    const bmi = Mass.round(massNumber / (heightNumber*heightNumber));
    para.textContent = bmi;
    para.style.visibility = 'visible'
    para.textContent = bmi;
}

btn.addEventListener('click', checkbmi)
console.log(34);