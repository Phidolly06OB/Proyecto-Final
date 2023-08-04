import { getHistorial } from "./API.JS";


(function(){

    document.addEventListener("DOMContentLoaded", ShowHisStock);

    async function ShowHisStock(){
        const categ = await getHistorial()
        categ.forEach(inv => {
            const {nombre, empleado, cantidad, createdAt } = inv;

            
            
            const tabla = document.createElement('tr')
            tabla.innerHTML += `
            <tr>
                <td>${nombre}</td>
                <td>${empleado}</td>
                <td>${createdAt.slice(0, 10)}</td>
                <td>${cantidad}</td>
            </tr>

          <tbody class="table-light">
          
          </tbody>

            `
    
            document.querySelector('.his').appendChild(tabla)
        });
    }

}())