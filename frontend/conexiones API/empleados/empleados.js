import { getEmpleados, borrar } from "./API.js";

(function(){

    const formulario = document.querySelector(".det")

    document.addEventListener("DOMContentLoaded", showEmpleados);

    formulario.addEventListener('click', confirmar)

    async function showEmpleados(){
        const categ = await getEmpleados()
        categ.forEach(emp => {
            const {_id,nombre, email, documento } = emp;
            
            const tabla = document.createElement('tr')
            tabla.innerHTML += `
            <tr>
            <td>${_id}</td>
            <td>${nombre}</td>
            <td>${documento}</td>
            <td>${email}</td>
            <td><button class="btn btn-danger delete" data-categoria="${_id}" ><svg xmlns="http://www.w3.org/2000/svg" class=" icon icon-tabler icon-tabler-trash delete" data-categoria="${_id}" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 7l16 0" />
            <path d="M10 11l0 6" />
            <path d="M14 11l0 6" />
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
          </svg></button>

          <button type="button" class="btn btn-success" data-toggle="modal" data-target="#update" id="${_id}" Nombre="${nombre} data-whatever="@mdo">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
            <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
            <path d="M16 5l3 3" />
          </svg>
          </button>

          
          </td>
          </tr>

          <tbody class="table-light">
          
          </tbody>

            `
    
            document.querySelector('.det').appendChild(tabla)
        });
    }

     function confirmar(e){
         if(e.target.classList.contains('delete')){
             const invenID = e.target.dataset.categoria;
             const conf = confirm("¿Desea Eliminarlo?")

             if(conf){
                borrar(invenID)
                window.location.href = "Inventario.html"
             }
         }
     }
}())