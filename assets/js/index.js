precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

/*Declaración de Variables*/

const mas = document.querySelector('.boton_mas');
const menos = document.querySelector('.boton_menos');
const cantidad = document.querySelector('.cantidad');
let total = document.querySelector('.valor-total');

/*Iniciador de Contador*/

let valorCantidad = 0;

/*Acciones en los botones*/

mas.addEventListener('click', () => {
    valorCantidad++;
    cantidad.innerHTML = valorCantidad;
    total = valorCantidad * precio;
    const valorSeparador = total.toLocaleString();
    document.querySelector('.valor-total').innerHTML = valorSeparador;
})

menos.addEventListener('click', () => {
    if(valorCantidad > 0)
    {
        valorCantidad--;
    }
    cantidad.innerHTML = valorCantidad;
    total = valorCantidad * precio;
    const valorSeparador = total.toLocaleString('es-ES');
    document.querySelector('.valor-total').innerHTML = valorSeparador;
})



