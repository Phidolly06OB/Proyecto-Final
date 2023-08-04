import { nuevaCategoria } from "./API.js";

const form = document.querySelector('#formulario');
form.addEventListener('submit', validarCateg);

function validarCateg(e) {
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value
    const descripcion = document.querySelector('#descripcion').value

    const categ = {
        nombre,
        descripcion
    }

    if(validate(categ)){
        alert("xxxx")
        return
    }

     nuevaCategoria(categ);
     window.location.href = "categorias.html"

    

}

function validate(objeto){
    return !Object.values(objeto).every(element => element !== '');
}