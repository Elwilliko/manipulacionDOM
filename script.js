const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const lista = document.querySelector('#lista');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result')


const eventodeSumar = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(input1.value, calculo2.value);

    sumar = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "respuesta : " + sumar;

    let num1 = input1.value
    let num2 = input2.value
};

lista.addEventListener('submit', eventodeSumar);


//form.addEventListener('submit', sumarInputValues);

/*function sumarInputValues(event){
    console.log(event);
    event.preventDefault();
    const sumaInput = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "Resultado: " + sumaInput;
};*/



