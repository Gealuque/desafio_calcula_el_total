precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

const mas = document.querySelector('.boton_mas');
const menos = document.querySelector('.boton_menos');
const cantidad = document.querySelector('.cantidad');
const total = document.querySelector('.valor-total')

let valorCantidad = 0;


mas.addEventListener('click', () => {
    valorCantidad++;
    total.textContent = valorCantidad * precio;
    cantidad.textContent = valorCantidad;
})

menos.addEventListener('click', () => {
    if(valorCantidad > 0)
    {
        valorCantidad--;
    }
    total.textContent = valorCantidad * precio;
    cantidad.textContent = valorCantidad;
})



